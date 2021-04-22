package main

import (
	"net/http"

	"github.com/labstack/echo"
	"github.com/labstack/echo/middleware"
)

// sampleHandler 疎通確認
func sampleHandler(c echo.Context) error {
	return c.JSON(http.StatusOK, "John Doe")
}

func main() {
	e := echo.New()
	e.Use(middleware.CORS())
	e.GET("/", sampleHandler)
	e.Logger.Fatal(e.Start(":8080"))
}
