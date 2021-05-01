package database

import (
	"log"

	"github.com/w8f/portfolio/domain"
)

const (
	// FindByID ユーザ情報取得
	FindByID = `SELECT id, user_id, user_nm, mail FROM mst_user WHERE id = $1;`
)

// UserRepository 構造体
// interfaceを埋め込むことで、具象クラスと疎結合になる
type UserRepository struct {
	SQLHandler
}

// FindByID ユーザ情報取得
func (repo *UserRepository) FindByID(identifier int) (user domain.User, err error) {
	row, err := repo.Query(FindByID, identifier)
	defer row.Close()
	if err != nil {
		log.Fatal(err.Error())
		return
	}
	row.Next()
	if err = row.Scan(&user.ID, &user.UserID, &user.UserNm, &user.Mail); err != nil {
		log.Fatal(err.Error())
		return
	}
	return
}
