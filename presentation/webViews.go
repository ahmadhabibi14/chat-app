package presentation

import (
	"fmt"
	"time"
	"vftalk/conf"
	"vftalk/handlers"
	"vftalk/middlewares"

	"github.com/gofiber/fiber/v2"
)

func WebViews(app *fiber.App) {
	app.Get("/", middlewares.AuthJWT, func(c *fiber.Ctx) error {
		u, _ := conf.GetUsernameFromJWT(c)
		username := fmt.Sprintf("%v", u)
		c.Set("Content-Type", "text/html; charset=utf-8")
		return c.Render("index", fiber.Map{
			"Title":    "VFtalk",
			"Username": username,
		}, "layouts/main")
	})

	app.Get("/direct", middlewares.AuthJWT, func(c *fiber.Ctx) error {
		u, _ := conf.GetUsernameFromJWT(c)
		username := fmt.Sprintf("%v", u)
		c.Set("Content-Type", "text/html; charset=utf-8")
		return c.Render("direct", fiber.Map{
			"Title":    "Direct Messages",
			"Username": username,
		}, "layouts/main")
	})

	app.Get("/profile", middlewares.AuthJWT, func(c *fiber.Ctx) error {
		userData, err := handlers.GetUserDataByUsername(c)
		if err != nil {
			return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
				"error": err,
			})
		}
		parsedTime, _ := time.Parse("2006-01-02 15:04:05 -0700 MST", fmt.Sprintf("%v", userData.JoinAt))
		c.Set("Content-Type", "text/html; charset=utf-8")
		return c.Render("profile", fiber.Map{
			"Title":    "Profile",
			"UserData": userData,
			"JoinAt":   fmt.Sprintf("%v %v %v", parsedTime.Day(), parsedTime.Month(), parsedTime.Year()),
		}, "layouts/main")
	})

	app.Get("/login", middlewares.IsLoggedIn, func(c *fiber.Ctx) error {
		c.Set("Content-Type", "text/html; charset=utf-8")
		return c.Render("login", fiber.Map{
			"Title": "Login",
			"Desc":  "Hi, Welcome back 👋",
		})
	})

	app.Get("/register", middlewares.IsLoggedIn, func(c *fiber.Ctx) error {
		c.Set("Content-Type", "text/html; charset=utf-8")
		return c.Render("register", fiber.Map{
			"Title": "Register",
			"Desc":  "Welcome, please create your account",
		})
	})
}
