# stlis

## 環境構築

クローン

```
$ git clone https://github.com/yukinoao/stlis.git
```

.env ファイルの作成

```
$ cd backend
$ touch .env.local
$ cd ../frontend
$ echo "PORT=8000" > .env.local # フロント開発環境でlocalhost:8000で動かすための設定
```

master.key ファイルを backend/直下に配置

ビルドして起動

```
$ cd ../
$ docker compose build
$ docker compose run --rm front yarn install
$ docker compose up
```

疎通確認

- backend: localhost:3000[localhost:3000]
- frontend: localhost:8000[localhost:8000]

## gem の追加

```
gemfile編集後
$ docker compose exec back bash
# bundle install
```

## front 側の環境変更

```
$ docker compose exec front sh
# npm install # インストールしたいパッケージ
```

## Dockerfile, docker-compose.yml など変更時

```
$ docker compose up --build
```
