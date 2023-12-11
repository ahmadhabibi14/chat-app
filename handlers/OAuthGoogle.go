package handlers

import (
	"context"
	"database/sql"
	"encoding/json"
	"net/http"
	"strings"
	"time"
	"vftalk/conf"
	"vftalk/models/database/sqlc"

	"github.com/gofiber/fiber/v2"
	"golang.org/x/oauth2"
	"golang.org/x/oauth2/google"
)

type (
	oAuthGoogleOut struct {
		Ok      bool   `json:"ok"`
		Message string `json:"message"`
	}
	oAuthGoogleError struct {
		Ok       bool   `json:"ok"`
		ErrorMsg string `json:"error"`
	}
)

const (
	OutOAuthGoogle_Msg = "Login with Google successful !"

	ErrOAuthGoogle_InvalidState         = "Invalid OAuth state"
	ErrOAuthGoogle_ExchangeFailed       = "Code exchange failed"
	ErrOAuthGoogle_FailedGetUserInfo    = "Failed to get user info"
	ErrOAuthGoogle_FailedDecodeUserInfo = "Failed to decode user info"
)

var (
	GoogleOauthConfig *oauth2.Config
)

func init() {

}

func OAuthGoogle(c *fiber.Ctx) error {
	zlog := conf.GetLogger()
	GoogleOauthConfig = &oauth2.Config{
		RedirectURL:  "https://vftalk.my.id/api/oauth/google",
		ClientID:     "287998054290-bpoi1b1a7j0olkpre3k1vc28m3ppfgu1.apps.googleusercontent.com",
		ClientSecret: "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",
		Scopes: []string{
			"openid",
			"profile",
			"email",
			"https://www.googleapis.com/auth/userinfo.email",
			"https://www.googleapis.com/auth/userinfo.profile",
		},
		Endpoint: google.Endpoint,
	}
	var db *sql.DB = conf.ConnectMariaDB()
	defer db.Close()
	queries := sqlc.New(db)
	ctx := context.Background()
	var (
		RESP_ERR oAuthGoogleError
	)
	// state := c.FormValue("state")
	code := c.FormValue("code")
	oAuthToken, err := GoogleOauthConfig.Exchange(context.Background(), code)
	if err != nil {
		RESP_ERR.Ok = false
		RESP_ERR.ErrorMsg = ErrOAuthGoogle_ExchangeFailed
		errResp, _ := json.Marshal(RESP_ERR)
		return c.Status(fiber.StatusBadRequest).JSON(string(errResp))
	}
	response, err := http.Get("https://www.googleapis.com/oauth2/v2/userinfo?access_token=" + oAuthToken.AccessToken)
	if err != nil {
		RESP_ERR.Ok = false
		RESP_ERR.ErrorMsg = ErrOAuthGoogle_FailedGetUserInfo
		errResp, _ := json.Marshal(RESP_ERR)
		return c.Status(fiber.StatusBadRequest).JSON(string(errResp))
	}
	defer response.Body.Close()
	var userInfo map[string]interface{}
	if err := json.NewDecoder(response.Body).Decode(&userInfo); err != nil {
		RESP_ERR.Ok = false
		RESP_ERR.ErrorMsg = ErrOAuthGoogle_FailedDecodeUserInfo
		errResp, _ := json.Marshal(RESP_ERR)
		return c.Status(fiber.StatusBadRequest).JSON(string(errResp))
	}

	GOOGLE_id := userInfo["id"].(string)
	GOOGLE_email := userInfo["email"].(string)
	GOOGLE_username := strings.Split(GOOGLE_email, "@")[0]
	GOOGLE_fullname := userInfo["name"].(string)
	GOOGLE_avatar := userInfo["picture"].(string)

	_, isUsernameExist := queries.GetUserByUsername(ctx, GOOGLE_username)
	if isUsernameExist == nil {
		token, _ := conf.GenerateJWT(GOOGLE_username, GOOGLE_id, time.Now().AddDate(0, 2, 0))
		conf.SetJWTasCookie(c, token, time.Now().AddDate(0, 2, 0))
		return c.Redirect("/", fiber.StatusPermanentRedirect)
	}

	_, isEmailExist := queries.GetUserByEmail(ctx, GOOGLE_email)
	if isEmailExist == nil {
		token, _ := conf.GenerateJWT(GOOGLE_username, GOOGLE_id, time.Now().AddDate(0, 2, 0))
		conf.SetJWTasCookie(c, token, time.Now().AddDate(0, 2, 0))
		return c.Redirect("/", fiber.StatusPermanentRedirect)
	}

	userData := sqlc.CreateNewUserParams{
		UserID:   GOOGLE_id,
		Username: GOOGLE_username,
		FullName: GOOGLE_fullname,
		Email:    GOOGLE_email,
		Avatar:   GOOGLE_avatar,
		Password: `--`,
	}

	cn := queries.CreateNewUser(ctx, userData)
	if cn != nil {
		zlog.Error().Str("ERROR", err.Error()).Msg("Error queries.CreateNewUser")
		RESP_ERR.Ok = false
		RESP_ERR.ErrorMsg = err.Error()
		errResp, _ := json.Marshal(RESP_ERR)
		return c.Status(fiber.StatusInternalServerError).JSON(string(errResp))
	}
	token, _ := conf.GenerateJWT(GOOGLE_username, GOOGLE_id, time.Now().AddDate(0, 2, 0))
	conf.SetJWTasCookie(c, token, time.Now().AddDate(0, 2, 0))
	return c.Redirect("/", fiber.StatusPermanentRedirect)
}
