package main

import (
	"database/sql"
	"fmt"
	"log"
	"net/http"
	"os"
	"time"

	"github.com/joho/godotenv"
	"github.com/labstack/echo"
	"github.com/labstack/echo/middleware"

	_ "github.com/lib/pq"
)

// Sample 構造体
type Sample struct {
	ID         int       `json:"id"`
	Name       string    `json:"name"`
	Age        int       `json:"age"`
	CreateDate time.Time `json:"createDate"`
	UpdateDate time.Time `json:"updateDate"`
}

// Samples 構造体
type Samples []Sample

func connectPG() *sql.DB {

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
	}
	return db
}

// sampleHandler 疎通確認
func sampleHandler(c echo.Context) error {
	db := connectPG()
	query := "SELECT * FROM sample;"

	rows, err := db.Query(query)
	if err != nil {
		log.Fatal("db query err: ", err)
		panic("error!")
	}
	var smplList Samples
	for rows.Next() {
		var e Sample
		rows.Scan(&e.ID, &e.Name, &e.Age, &e.CreateDate, &e.UpdateDate)
		smplList = append(smplList, e)
	}
	log.Printf("%v", smplList)
	defer db.Close()
	return c.JSON(http.StatusOK, smplList)
}

func main() {
	e := echo.New()
	e.Use(middleware.CORS())
	e.GET("/", sampleHandler)
	e.Logger.Fatal(e.Start(":8080"))
}
