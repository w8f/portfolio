package database

// SQLHandler interface
type SQLHandler interface {
	Query(string, ...interface{}) (Row, error)
}

// Row interface
type Row interface {
	Scan(...interface{}) error
	Next() bool
	Close() error
}
