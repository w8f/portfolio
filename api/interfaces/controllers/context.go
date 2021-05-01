package controllers

// Context echo.Context interface
type Context interface {
	JSON() func(code int, i interface{}) error
	Param() func(name string) string
}
