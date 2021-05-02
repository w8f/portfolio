package database

import (
	"log"

	"github.com/w8f/portfolio/domain"
)

const (
	// FindByID ユーザ情報取得
	FindByID = `SELECT id, user_id, user_nm, mail FROM mst_user WHERE user_id = $1;`
	// Regist ユーザ登録
	Regist = `INSERT INTO mst_user VALUES (nextval('mst_user_id_seq'),$1,$2,$3,$4,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP);`
	// Login ログイン処理
	Login = `SELECT Count(*) FROM mst_user WHERE user_id = $1 AND password = $2;`
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

// Regist ユーザ情報取得
func (repo *UserRepository) Regist(
	UserID string,
	UserNm string,
	Mail string,
	PassWord string) (err error) {

	_, err = repo.Exec(Regist, UserID, UserNm, Mail, PassWord)
	if err != nil {
		log.Fatal(err.Error())
		return
	}
	if err != nil {
		return
	}
	return
}

// Login ユーザ情報取得
func (repo *UserRepository) Login(UserID string, PassWord string) (isSuccess bool, err error) {

	var cnt Cnt

	row, err := repo.Query(Login, UserID, PassWord)
	defer row.Close()
	if err != nil {
		log.Fatal(err.Error())
		return false, err
	}
	row.Next()
	if err = row.Scan(&cnt.count); err != nil {
		log.Fatal(err.Error())
		return false, err
	}
	log.Println(cnt.count)
	if cnt.count == 1 {
		return true, nil
	}
	return false, nil

}

// Cnt 件数カウント
type Cnt struct {
	count int
}
