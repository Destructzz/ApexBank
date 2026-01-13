package main

import (
	"log"

	"github.com/gin-gonic/gin"

	"apexbank/internal/routes"
)

func main() {
	router := gin.Default()
	routes.RegisterHomeRoutes(router)

	if err := router.Run(":8080"); err != nil {
		log.Fatal(err)
	}
}
