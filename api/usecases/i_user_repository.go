package usecases

import "github.com/w8f/portfolio/domain"

// UserRepository インターフェース
type UserRepository interface {
	FindByID(string) (domain.User, error)
	Regist(string, string, string, string) error
	Login(string, string) (bool, error)
}
