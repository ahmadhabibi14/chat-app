package web

import (
	"vftalk/handlers/page"

	"github.com/gofiber/fiber/v2"
)

func WebViews(app *fiber.App, page *page.PageHandler) {
	app.Get("/", page.Index)

	// 	app.Get("/direct", middlewares.AuthJWT, func(c *fiber.Ctx) error {
	// 		userData, err := handlers.GetUserDataByUsername(c)
	// 		if err != nil {
	// 			return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
	// 				"error": err,
	// 			})
	// 		}
	// 		c.Set(fiber.HeaderContentType, "text/html; charset=utf-8")
	// 		return c.Render("direct", fiber.Map{
	// 			"Title":    "VFtalk | Direct Messages",
	// 			"Username": userData.Username,
	// 			"UserData": userData,
	// 			"JoinAt":   utils.FormatTime(userData.JoinAt),
	// 		}, "layouts/main")
	// 	})

	// 	app.Get("/profile", middlewares.AuthJWT, func(c *fiber.Ctx) error {
	// 		userData, err := handlers.GetUserDataByUsername(c)
	// 		if err != nil {
	// 			return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
	// 				"error": err,
	// 			})
	// 		}
	// 		c.Set(fiber.HeaderContentType, "text/html; charset=utf-8")
	// 		return c.Render("profile", fiber.Map{
	// 			"Title":    "VFtalk | Profile",
	// 			"UserData": userData,
	// 			"JoinAt":   utils.FormatTime(userData.JoinAt),
	// 		}, "layouts/main")
	// 	})

	// 	app.Get("/explore", middlewares.AuthJWT, func(c *fiber.Ctx) error {
	// 		userData, err := handlers.GetUserDataByUsername(c)
	// 		if err != nil {
	// 			return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
	// 				"error": err,
	// 			})
	// 		}
	// 		c.Set(fiber.HeaderContentType, "text/html; charset=utf-8")
	// 		return c.Render("explore", fiber.Map{
	// 			"Title":    "VFtalk | Explore",
	// 			"UserData": userData,
	// 			"JoinAt":   utils.FormatTime(userData.JoinAt),
	// 		}, "layouts/main")
	// 	})

	// 	app.Get("/term-of-service", func(c *fiber.Ctx) error {
	// 		c.Set(fiber.HeaderContentType, "text/html; charset=utf-8")
	// 		return c.Render("termOfService", fiber.Map{
	// 			"Title": "VFtalk | Term of Service",
	// 		})
	// 	})

	// 	app.Get("/privacy-policy", func(c *fiber.Ctx) error {
	// 		c.Set(fiber.HeaderContentType, "text/html; charset=utf-8")
	// 		return c.Render("privacyPolicy", fiber.Map{
	// 			"Title": "VFtalk | Privacy Policy",
	// 		})
	// 	})

	// 	app.Get("/login", middlewares.IsLoggedIn, func(c *fiber.Ctx) error {
	// 		c.Set(fiber.HeaderContentType, "text/html; charset=utf-8")
	// 		return c.Render("login", fiber.Map{
	// 			"Title": "Login",
	// 			"Desc":  "Hi, Welcome back 👋",
	// 		})
	// 	})

	// 	app.Get("/register", middlewares.IsLoggedIn, func(c *fiber.Ctx) error {
	// 		c.Set(fiber.HeaderContentType, "text/html; charset=utf-8")
	// 		return c.Render("register", fiber.Map{
	// 			"Title": "Register",
	// 			"Desc":  "Welcome, please create your account",
	// 		})
	// 	})

	//	app.Get("/oauth/google", middlewares.IsLoggedIn, func(c *fiber.Ctx) error {
	//		stateString := utils.GenerateRandomID(40)
	//		url := handlers.GoogleOauthConfig.AuthCodeURL(stateString)
	//		return c.Redirect(url, fiber.StatusTemporaryRedirect)
	//	})
}