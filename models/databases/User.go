package databases

import (
	"context"
	"database/sql"
	"errors"
	"fmt"
	"time"

	"github.com/rs/zerolog"
)

type userImpl struct {
	DB  *sql.DB
	Log *zerolog.Logger
}

type User struct {
	UserID     string    `db:"user_id" json:"user_id"`
	Username   string    `db:"username" json:"username"`
	FullName   string    `db:"full_name" json:"full_name"`
	Email      string    `db:"email" json:"email"`
	Password   string    `db:"password" json:"password"`
	Avatar     string    `db:"avatar" json:"avatar"`
	JoinAt     time.Time `db:"join_at" json:"join_at"`
	LastActive time.Time `db:"last_active" json:"last_active"`
	Website    string    `db:"website" json:"website"`
	Location   string    `db:"location" json:"location"`
}

func NewUser(db *sql.DB, l *zerolog.Logger) *userImpl {
	return &userImpl{
		DB:  db,
		Log: l,
	}
}

type CreateUserIn struct {
	UserID   string `db:"user_id"`
	Username string `db:"username"`
	FullName string `db:"full_name"`
	Email    string `db:"email"`
	Password string `db:"password"`
}

func (u *userImpl) CreateUser(ctx context.Context, user CreateUserIn) error {
	query := `INSERT INTO Users (user_id, username, full_name, email, password) VALUES (?, ?, ?, ?, ?)`
	_, err := u.DB.ExecContext(ctx, query,
		user.UserID,
		user.Username,
		user.FullName,
		user.Email,
		user.Password,
	)
	return err
}

func (u *userImpl) FindById(ctx context.Context, id string) (User, error) {
	query := `SELECT user_id, username, full_name, email, password, avatar, join_at, last_active, website, location FROM Users WHERE user_id = ? LIMIT 1`
	rows, err := u.DB.QueryContext(ctx, query, id)
	defer rows.Close()
	user := User{}
	if err != nil {
		u.Log.Error().Str("Error", err.Error()).Msg("Error: User FindById")
		return user, err
	}
	if rows.Next() {
		rows.Scan(
			&user.UserID,
			&user.Username,
			&user.FullName,
			&user.Email,
			&user.Password,
			&user.Avatar,
			&user.JoinAt,
			&user.LastActive,
			&user.Website,
			&user.Location,
		)
	} else {
		return user, errors.New("User not found")
	}
	return user, nil
}

func (u *userImpl) FindByUsername(ctx context.Context, username string) (User, error) {

	query := `SELECT user_id, username, full_name, email, password, avatar, join_at, last_active, website, location FROM Users WHERE username = ? LIMIT 1`
	rows, err := u.DB.QueryContext(ctx, query, username)
	defer rows.Close()
	user := User{}
	if err != nil {
		u.Log.Error().Str("Error", err.Error()).Msg("Error: User FindByUsername")
		return user, err
	}
	if rows.Next() {
		rows.Scan(
			&user.UserID,
			&user.Username,
			&user.FullName,
			&user.Email,
			&user.Password,
			&user.Avatar,
			&user.JoinAt,
			&user.LastActive,
			&user.Website,
			&user.Location,
		)
	} else {
		return user, errors.New("User not found")
	}
	return user, nil
}

type OAuthCreateUserIn struct {
	UserID   string `db:"user_id"`
	Username string `db:"username"`
	FullName string `db:"full_name"`
	Email    string `db:"email"`
	Password string `db:"password"`
	Avatar   string `db:"avatar"`
}

func (u *userImpl) OAuthCreateUser(ctx context.Context, user OAuthCreateUserIn) error {
	query := `INSERT INTO Users (user_id, username, full_name, email, password, avatar) VALUES (?, ?, ?, ?, ?, ?)`
	_, err := u.DB.ExecContext(ctx, query,
		user.UserID,
		user.Username,
		user.FullName,
		user.Email,
		user.Password,
		user.Avatar,
	)
	fmt.Println(err)
	return err
}

func (u *userImpl) FindId(ctx context.Context, id string) bool {
	query := `SELECT user_id FROM Users WHERE user_id = ? LIMIT 1`
	rows := u.DB.QueryRowContext(ctx, query, id)
	if rows.Scan() == sql.ErrNoRows {
		return false
	}
	return true
}

func (u *userImpl) FindUsername(ctx context.Context, username string) bool {
	query := `SELECT username FROM Users WHERE username = ? LIMIT 1`
	rows := u.DB.QueryRowContext(ctx, query, username)
	if rows.Scan() == sql.ErrNoRows {
		return false
	}
	return true
}
