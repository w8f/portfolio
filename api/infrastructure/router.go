package infrastructure

import (
	"github.com/labstack/echo"
	"github.com/labstack/echo/middleware"
	"github.com/w8f/portfolio/interfaces/controllers"
)

// Run echo server start
func Run() {
	e := echo.New()
	e.Use(middleware.CORS())

	userController := controllers.NewUserController(NewSQLHandler())
	e.GET("/user/:id", func(c echo.Context) error { return userController.GetUserInfo(c) })

	e.Logger.Fatal(e.Start(":8080"))

}
