This is a [Nest.js](https://nestjs.com/) project.
You can grab the client for this project: [`client`](https://github.com/underwhot/money-manager-client).

## Getting Started

First, install all dependencies:

```bash
npm install
```

Second, run the development server:

```bash
npm run start:dev
```

Open [http://localhost:3000/api](http://localhost:3000/api) with your browser to see the result.

You can do:

[`categories:`]
Create (POST) localhost:3000/api/categories/
FindAll (GET) localhost:3000/api/categories/
FinOne (GET) localhost:3000/api/categories/category/3
Remove (DELETE) localhost:3000/api/categories/category/13
Update (PATCH) localhost:3000/api/categories/category/16

[`transactios:`]
Create (POST) localhost:3000/api/transactions
FindAll (GET) localhost:3000/api/transactions
FindAllWithPagination (GET) localhost:3000/api/transactions/pagination?page=1&limit=2
FindOne (GET) localhost:3000/api/transactions/51
FindOneByType (GET) localhost:3000/api/transactions/expense/find
Update (PATCH) localhost:3000/api/transactions/transaction/9
Delete (DELETE) localhost:3000/api/transactions/transaction/4

[`user:`]
GetProfile (GET) localhost:3000/api/auth/profile
Login (POST) localhost:3000/api/auth/login
Registration (POST) localhost:3000/api/user

Database settings .env:

```bash
DB_HOST='localhost'
DB_PORT=5432
DB_USERNAME='postgres'
DB_PASSWORD='******'
DB_DATABASE='budget'

JWT_SECRET='******'
```
