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

`categories:`
Create (POST) /categories/ <br>
FindAll (GET) /categories/ <br> 
FinOne (GET) /categories/category/3 <br>
Remove (DELETE) /categories/category/13 <br>
Update (PATCH) /categories/category/16 <br>
<br>
`transactios:`
Create (POST) /transactions <br>
FindAll (GET) /transactions <br>
FindAllWithPagination (GET) /transactions/pagination?page=1&limit=2 <br>
FindOne (GET) /transactions/51 <br>
FindOneByType (GET) /transactions/expense/find <br>
Update (PATCH) /transactions/transaction/9 <br>
Delete (DELETE) /transactions/transaction/4 <br>
<br>
`user:`
GetProfile (GET) /auth/profile <br>
Login (POST) /auth/login <br>
Registration (POST) /user <br>

Database settings .env:

```bash
DB_HOST='localhost'
DB_PORT=5432
DB_USERNAME='postgres'
DB_PASSWORD='******'
DB_DATABASE='budget'

JWT_SECRET='******'
```
