package domain

const (
	success   = "00"
	exception = "80"
	error     = "90"
)

// Response レスポンス返却の基底構造体
type Response struct {
	Cd  string      `json:"cd"`
	Msg []string    `json:"msg"`
	Res interface{} `json:"res"`
}

// Success 処理成功を知らせるレシーバ
func (r *Response) Success(msg []string, res interface{}) *Response {
	return &Response{
		Cd:  success,
		Msg: msg,
		Res: res,
	}
}

// Exception 処理失敗を知らせるレシーバ（ユーザ操作に起因の場合）
func (r *Response) Exception(msg []string, res interface{}) *Response {
	return &Response{
		Cd:  exception,
		Msg: msg,
		Res: res,
	}
}

// Error 処理成功を知らせるレシーバ（サーバなど、システム起因の場合）
func (r *Response) Error(msg []string, res interface{}) *Response {
	return &Response{
		Cd:  error,
		Msg: msg,
		Res: res,
	}
}
