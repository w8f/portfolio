package main

import (
	_ "github.com/lib/pq"
	"github.com/w8f/portfolio/infrastructure"
)

func main() {
	infrastructure.Run()
}
