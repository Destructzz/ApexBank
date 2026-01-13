package routes

import (
	"apexbank/internal/handlers"

	"github.com/gin-gonic/gin"
)

func RegisterHomeRoutes(r gin.IRouter) {
	r.GET("/", handlers.Home)
}
