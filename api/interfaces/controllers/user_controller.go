package controllers

import (
	"net/http"

	"github.com/w8f/portfolio/domain"

	"github.com/labstack/echo"
	"github.com/labstack/gommon/log"
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
	id := c.Param("id")
	user, err := controller.Interactor.UserByID(id)
	if err != nil {
		return c.JSON(http.StatusBadRequest, user.Exception(append(msgs, "failed"), err))
	}
	return c.JSON(http.StatusOK, user.Success(append(msgs, "get user infomation."), user))
}

// Regist ユーザ登録
func (controller *UserController) Regist(c echo.Context) error {

	param := new(domain.User)
	if err := c.Bind(param); err != nil {
		return c.JSON(http.StatusBadRequest, err)
	}

	UserID := param.UserID
	UserNm := param.UserNm
	Mail := param.Mail
	PassWord := param.Password

	err := controller.Interactor.Regist(
		UserID,
		UserNm,
		Mail,
		PassWord,
	)
	if err != nil {
		log.Error(err)
		return c.JSON(http.StatusBadRequest, err)
	}
	return c.JSON(http.StatusOK, map[string]string{"res": "success"})
}

// Login ログイン
func (controller *UserController) Login(c echo.Context) error {

	param := new(domain.User)
	if err := c.Bind(param); err != nil {
		return err
	}

	UserID := param.UserID
	PassWord := param.Password

	isSuccess, err := controller.Interactor.Login(UserID, PassWord)
	log.Print(isSuccess)
	if err != nil {
		log.Error(err)
		return c.JSON(http.StatusBadRequest, err)
	}
	if !isSuccess {
		return c.JSON(http.StatusOK, map[string]string{"res": "failed"})
	}

	return c.JSON(http.StatusOK, map[string]string{"res": "success"})
}
