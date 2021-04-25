package main

import (
	"log"
	"net/http"
	"time"

	"github.com/labstack/echo"
	"github.com/labstack/echo/middleware"
	"github.com/w8f/portfolio/domain"
	"github.com/w8f/portfolio/infrastructure"

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

func getSample() *domain.Response {
	r := new(domain.Response)
	var msgs []string

	db, err := infrastructure.ConnectPG()
	if err != nil {
		msgs = append(msgs, "DB接続エラー")
		r.Error(msgs, nil)
	}

	query := "SELECT * FROM sample;"
	rows, err := db.Query(query)
	if err != nil {
		log.Fatal("db query err: ", err)
		panic("error!")
	}

	var smplList Samples
	for rows.Next() {
		var e Sample

		rows.Scan(
			&e.ID,
			&e.Name,
			&e.Age,
			&e.CreateDate,
			&e.UpdateDate,
		)
		smplList = append(smplList, e)
	}
	log.Printf("%v", smplList)

	msgs = append(msgs, "DB接続OK")
	defer db.Close()
	return r.Success(msgs, smplList)
}

// sampleHandler 疎通確認
func sampleHandler(c echo.Context) error {
	r := getSample()
	return c.JSON(http.StatusOK, r)
}

func main() {
	e := echo.New()
	e.Use(middleware.CORS())
	e.GET("/sample", sampleHandler)
	e.Logger.Fatal(e.Start(":8080"))
}
