package web

import (
	"vftalk/handlers/page"
	"vftalk/middlewares"

	"github.com/gofiber/fiber/v2"
)

func WebViews(app *fiber.App, page *page.PageHandler) {
	app.Get("/", page.Index)
	app.Get("/register", middlewares.IsLoggedIn, page.Register)
	app.Get("/login", middlewares.IsLoggedIn, page.Login)
	app.Get("/oauth/google", middlewares.IsLoggedIn, page.OAuthGoogle)
	app.Get("/explore", middlewares.AuthJWT, page.Explore)
	app.Get("/profile", middlewares.AuthJWT, page.Profile)
	app.Get("/direct", middlewares.AuthJWT, page.DirectChat)

	app.Get("/term-of-service", func(c *fiber.Ctx) error {
		c.Set(fiber.HeaderContentType, "text/html; charset=utf-8")
		return c.Render("termOfService", fiber.Map{
			"Title": "VFtalk | Term of Service",
		})
	})

	app.Get("/privacy-policy", func(c *fiber.Ctx) error {
		c.Set(fiber.HeaderContentType, "text/html; charset=utf-8")
		return c.Render("privacyPolicy", fiber.Map{
			"Title": "VFtalk | Privacy Policy",
		})
	})

	app.Get("/apidocs", func(c *fiber.Ctx) error {
		c.Set(fiber.HeaderContentType, "text/html; charset=utf-8")
		return c.Render("apidocs", fiber.Map{
			"Title": "VFtalk | API Documentation",
		})
	})

	app.Get("/.env", page.RickRoll)
}
