FROM golang:1.16.3-alpine3.12

WORKDIR /go/src

ENV GOPATH=$HOME/go
ENV PATH=$PATH:$GOPATH/bin

RUN apk update \
    && apk add --no-cache git \
    && go mod init github.com/w8f/portfolio \
    && go mod edit -go=1.16 \
    && go get -u github.com/labstack/echo/v4 \
    && go get -u github.com/joho/godotenv \
    && go get -u github.com/sirupsen/logrus \
    && go get -u github.com/valyala/fasthttp \
    && go get -u github.com/golang/mock/gomock \
    && go get -u github.com/golang/mock/mockgen \
    && go get -u github.com/google/wire/cmd/wire \
    && go get -u gorm.io/gorm \
    && go get -u gorm.io/driver/mysql \
    && go get -u github.com/cosmtrek/air
