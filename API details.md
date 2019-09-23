# API仕様

## 役割
- ユーザー登録
- ログイン処理 (Account_IDを返す)
- レビュー登録
- レビュー表示
- レビュー一覧表示

## ルーティング
- ユーザー登録 ... /api/v1/account/Register (POST)
- ログイン処理 ... /api/v1/account/Login (POST)
- レビュー登録 ... /api/v1/review/Register (POST)
- レビュー表示 ... /api/v1/review/Get/:id (GET)
- レビュー一覧表示 ... /api/v1/review/GetList/:page & :category

## DB設計

- Accounts

| カラム名 | 型 | その他 | 
| ---- | ---- | ---- |
| account_id | string | uuidv1 |
| username | string | ユーザー名 |
| password | string | hash(方法未定) |

- Reviews  

| カラム名 | 型 | その他 | 
| ---- | ---- | ---- |
| review_id | int | 主キー |
| account_id | string | 外部キー レビューを書いたユーザーのID |
| title | string | タイトル |
| content | string | レビュー内容 | 

- Tags  

| カラム名 | 型 | その他 | 
| ---- | ---- | ---- |
| tag_id | int | 主キー |
| review_id | string | 所有しているレビューのID | 
| title | string | タグ名 | 
