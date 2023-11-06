// Code generated by sqlc. DO NOT EDIT.
// versions:
//   sqlc v1.20.0

package sqlc

import (
	"time"
)

type User struct {
	UserID   string    `db:"user_id" json:"user_id"`
	Username string    `db:"username" json:"username"`
	FullName string    `db:"full_name" json:"full_name"`
	Email    string    `db:"email" json:"email"`
	Password string    `db:"password" json:"password"`
	Avatar   string    `db:"avatar" json:"avatar"`
	JoinAt   time.Time `db:"join_at" json:"join_at"`
}
