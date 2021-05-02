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
	e.Use(middleware.Logger())

	userController := controllers.NewUserController(NewSQLHandler())
	e.POST("/user/login", func(c echo.Context) error { return userController.Login(c) })
	e.POST("/user/new", func(c echo.Context) error { return userController.Regist(c) })
	e.GET("/user/:id", func(c echo.Context) error { return userController.GetUserInfo(c) })

	e.Logger.Fatal(e.Start(":8080"))

}
