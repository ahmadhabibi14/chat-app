// Code generated by sqlc. DO NOT EDIT.
// versions:
//   sqlc v1.24.0
// source: usersDML_1.sql

package sqlc

import (
	"context"
)

const createNewUser = `-- name: CreateNewUser :exec
INSERT INTO Users (
  user_id, username, full_name, email, password
) VALUES (
  ?, ?, ?, ?, ?
)
`

type CreateNewUserParams struct {
	UserID   string `db:"user_id" json:"user_id"`
	Username string `db:"username" json:"username"`
	FullName string `db:"full_name" json:"full_name"`
	Email    string `db:"email" json:"email"`
	Password string `db:"password" json:"password"`
}

func (q *Queries) CreateNewUser(ctx context.Context, arg CreateNewUserParams) error {
	_, err := q.db.ExecContext(ctx, createNewUser,
		arg.UserID,
		arg.Username,
		arg.FullName,
		arg.Email,
		arg.Password,
	)
	return err
}

const updateUserAvatar = `-- name: UpdateUserAvatar :exec
UPDATE Users
SET avatar = ?
WHERE user_id = ?
`

type UpdateUserAvatarParams struct {
	Avatar string `db:"avatar" json:"avatar"`
	UserID string `db:"user_id" json:"user_id"`
}

func (q *Queries) UpdateUserAvatar(ctx context.Context, arg UpdateUserAvatarParams) error {
	_, err := q.db.ExecContext(ctx, updateUserAvatar, arg.Avatar, arg.UserID)
	return err
}