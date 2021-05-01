package controllers

import (
	"net/http"
	"strconv"

	"github.com/labstack/echo"
	"github.com/w8f/portfolio/interfaces/database"
	"github.com/w8f/portfolio/usecases"
)

// UserController ユーザ情報コントローラ
type UserController struct {
	Interactor usecases.UserInteractor
}

// NewUserController SQLHandlerをembedして返却
func NewUserController(SQLHandler database.SQLHandler) *UserController {
	return &UserController{
		Interactor: usecases.UserInteractor{
			UserRepository: &database.UserRepository{
				SQLHandler: SQLHandler,
			},
		},
	}
}

// GetUserInfo ユーザ情報取得
func (controller *UserController) GetUserInfo(c echo.Context) error {
	var msgs []string
	id, err := strconv.Atoi(c.Param("id"))
	if err != nil {
		return c.JSON(http.StatusOK, map[string]string{"res": "cast err"})
	}
	user, err := controller.Interactor.UserByID(id)
	if err != nil {
		return c.JSON(http.StatusOK, user.Exception(append(msgs, "failed"), err))
	}
	return c.JSON(http.StatusOK, user.Success(append(msgs, "get user infomation."), user))
}
