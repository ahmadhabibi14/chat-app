package presentation

import (
	"context"
	"database/sql"
	"fmt"
	"vftalk/conf"
	"vftalk/database/sqlc"
	"vftalk/middlewares"

	"github.com/goccy/go-json"
	"github.com/gofiber/fiber/v2"
	"github.com/rs/zerolog"
	"github.com/rs/zerolog/log"
)

func WebViews(app *fiber.App) {
	app.Get("/", middlewares.AuthJWT, func(c *fiber.Ctx) error {
		u, _ := conf.GetUsernameFromJWT(c)
		username := fmt.Sprintf("%v", u)

		var db *sql.DB = conf.ConnectMariaDB()
		queries := sqlc.New(db)
		ctx := context.Background()

		userData, err := queries.GetUserDataByUsername(ctx, username)
		if err != nil {
			return c.Status(fiber.StatusUnauthorized).JSON(fiber.Map{
				"error": "User not found",
			})
		}

		ud, _ := json.Marshal(userData)

		zerolog.TimeFieldFormat = zerolog.TimeFormatUnix
		log.Print("Home Page")
		return c.Render("index", fiber.Map{
			"Title":    "VFtalk",
			"Username": username,
			"UserData": string(ud),
		})
	})
	app.Get("/login", middlewares.IsLoggedIn, func(c *fiber.Ctx) error {
		return c.Render("login/index", fiber.Map{
			"Title": "Login",
			"Desc":  "Hi, Welcome back 👋",
		})
	})
	app.Get("/register", middlewares.IsLoggedIn, func(c *fiber.Ctx) error {
		return c.Render("register/index", fiber.Map{
			"Title": "Register",
			"Desc":  "Welcome, please create your account",
		})
	})
}
