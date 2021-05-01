package domain

// User モデル
type User struct {
	Response
	ID       int    `json:"id"`
	UserID   string `json:"userId"`
	UserNm   string `json:"userNm"`
	Mail     string `json:"mail"`
	Password string `json:"password"`
}

// Users モデル
type Users []User
