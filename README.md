# stlis

## 環境構築
クローン
```
$ git clone https://github.com/yukinoao/stlis.git
```

.envファイルの作成
```
$ cd backend
$ touch .env.local
```

master.keyファイルをbackend/直下に配置

ビルドして起動
```
$ docker compose build
$ docker compose run --rm front yarn install
$ docker compose up
```

疎通確認
backend: localhost:3000[localhost:3000]
frontend: localhost:8000[localhost:8000]
