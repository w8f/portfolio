package usecases

import (
	"github.com/w8f/portfolio/domain"
)

// UserInteractor ユースケース
type UserInteractor struct {
	UserRepository
}

// UserByID interactor
func (interactor *UserInteractor) UserByID(identifer int) (u domain.User, err error) {
	user, err := interactor.UserRepository.FindByID(identifer)
	return user, err
}

// Regist interactor
func (interactor *UserInteractor) Regist(
	UserID string,
	UserNm string,
	Mail string,
	PassWord string) (err error) {
	err = interactor.UserRepository.Regist(UserID, UserNm, Mail, PassWord)
	return err
}

// Login interactor
func (interactor *UserInteractor) Login(UserID string, PassWord string) (isSuccess bool, err error) {
	isSuccess, err = interactor.UserRepository.Login(UserID, PassWord)
	if err != nil {
		return false, err
	}
	return isSuccess, nil
}
