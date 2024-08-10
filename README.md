This is a [Nest.js](https://nestjs.com/) project.
You can grab the client for this project: [`client`](https://github.com/underwhot/money-manager-client).

## Getting Started with Docker

Place all files into the /server directory and install all dependencies:

```bash
npm install
```

In the root directory, adjacent to the /server folder, create docker-compose.yml and .env files according to the instructions provided below, and then execute the command:

```bash
docker-compose up -d --build
```

## You can do:

`categories:`<br>
Create (POST) /categories/ <br>
FindAll (GET) /categories/ <br> 
FinOne (GET) /categories/category/3 <br>
Remove (DELETE) /categories/category/13 <br>
Update (PATCH) /categories/category/16 <br>
<br>
`transactios:`<br>
Create (POST) /transactions <br>
FindAll (GET) /transactions <br>
FindAllWithPagination (GET) /transactions/pagination?page=1&limit=2 <br>
FindOne (GET) /transactions/51 <br>
FindOneByType (GET) /transactions/expense/find <br>
Update (PATCH) /transactions/transaction/9 <br>
Delete (DELETE) /transactions/transaction/4 <br>
<br>
`user:`<br>
GetProfile (GET) /auth/profile <br>
Login (POST) /auth/login <br>
Registration (POST) /user <br>

## .env:

```bash
API_PORT=3000
API_HOST=http://localhost:

TYPEORM_CONNECTION=postgres
TYPEORM_HOST=localhost
TYPEORM_USERNAME=admin
TYPEORM_PASSWORD=******
TYPEORM_DATABASE=mydatabase
TYPEORM_PORT=5432

JWT_SECRET='******'
```

## docker-compose.yml

```
services:
  db:
    container_name: money-manager
    image: postgres:16.3-alpine
    restart: always
    environment:
      - POSTGRES_USER=${TYPEORM_USERNAME}
      - POSTGRES_PASSWORD=${TYPEORM_PASSWORD}
      - POSTGRES_DB=${TYPEORM_DATABASE}
    volumes:
      - pgdata:/var/lib/postgresql/data
    ports:
      - ${TYPEORM_PORT}:${TYPEORM_PORT}

  backend:
    container_name: money-manager-server
    build:
      context: ./server
    depends_on:
      - db
    restart: unless-stopped
    ports:
      - "${API_PORT}:3000"
    environment:
      - API_PORT=${API_PORT}
      - API_HOST=${API_HOST}
      - TYPEORM_CONNECTION=${TYPEORM_CONNECTION}
      - TYPEORM_USERNAME=${TYPEORM_USERNAME}
      - TYPEORM_PASSWORD=${TYPEORM_PASSWORD}
      - TYPEORM_DATABASE=${TYPEORM_DATABASE}
      - TYPEORM_PORT=${TYPEORM_PORT}
      - TYPEORM_HOST=db
      - JWT_SECRET=${JWT_SECRET}

volumes:
  pgdata:
```