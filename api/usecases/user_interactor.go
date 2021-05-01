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
