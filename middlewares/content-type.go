package middlewares

import (
	"vftalk/handlers/apis"

	"github.com/gofiber/fiber/v2"
)

func ContentJSON(c *fiber.Ctx) error {
	ctype := c.Get(fiber.HeaderContentType)
	if ctype != fiber.MIMEApplicationJSON {
		resp := apis.HTTPResponse{
			Code:   fiber.StatusBadRequest,
			Status: apis.STATUS_BADREQUEST,
			Errors: "Invalid Content-Type",
			Data:   "Try to use application/json for valid Content-Type",
		}
		return c.Status(fiber.StatusBadRequest).JSON(resp)
	}

	return c.Next()
}