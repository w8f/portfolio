package infrastructure

import (
	"database/sql"
	"fmt"
	"log"
	"os"

	"github.com/joho/godotenv"
)

// ConnectPG DB接続
func ConnectPG() (*sql.DB, error) {

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
		return nil, err
	}
	return db, err
}
