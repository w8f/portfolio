package infrastructure

import (
	"database/sql"
	"fmt"
	"log"
	"os"

	"github.com/joho/godotenv"
	"github.com/w8f/portfolio/interfaces/database"
)

// SQLHandler コネクション貸し出し
type SQLHandler struct {
	Conn *sql.DB
}

// NewSQLHandler DB接続
func NewSQLHandler() database.SQLHandler {

	// .env 読み込み
	err := godotenv.Load(".env")
	if err != nil {
		log.Fatal(err)
	}

	PORT := os.Getenv("POSTGRES_PORT")
	HOST := os.Getenv("HOST")
	USER := os.Getenv("POSTGRES_USER")
	DBUser := os.Getenv("POSTGRES_DATABASE")
	PASSWORD := os.Getenv("POSTGRES_PASSWORD")

	dsn := fmt.Sprintf("host=%s port=%s user=%s password=%s dbname=%s sslmode=disable",
		HOST, PORT, USER, PASSWORD, DBUser)

	// DB接続
	db, err := sql.Open("postgres", dsn)
	if err != nil {
		log.Fatal(err)
		panic(err.Error)
	}
	SQLHandler := new(SQLHandler)
	SQLHandler.Conn = db
	return SQLHandler
}

// Query 実装メソッド
func (handler *SQLHandler) Query(statement string, args ...interface{}) (database.Row, error) {
	rows, err := handler.Conn.Query(statement, args...)
	if err != nil {
		return new(SQLRow), err
	}
	row := new(SQLRow)
	row.Rows = rows
	return row, nil
}

// Exec 実装メソッド
func (handler *SQLHandler) Exec(statement string, args ...interface{}) (database.Result, error) {
	result, err := handler.Conn.Exec(statement, args...)
	if err != nil {
		return new(Result), err
	}
	res := new(Result)
	res.Result = result
	return res, nil
}

// SQLRow 構造体
type SQLRow struct {
	Rows *sql.Rows
}

// Result 構造体
type Result struct {
	Result sql.Result
}

// LastInsertId 実装
// func (r Result) LastInsertId() (int64, error) {
// 	return r.Result.LastInsertId()
// }

// RowsAffected 実装
func (r Result) RowsAffected() (int64, error) {
	return r.Result.RowsAffected()
}

// Scan 実装
func (r SQLRow) Scan(dest ...interface{}) error {
	return r.Rows.Scan(dest...)
}

// Next 実装
func (r SQLRow) Next() bool {
	return r.Rows.Next()
}

// Close 実装
func (r SQLRow) Close() error {
	return r.Rows.Close()
}
