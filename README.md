# Todo Rest API

Todo Rest API using Express and [Prisma](https://prosma.io). This App is not deployed yet.

The database used in this project is the same as that used in the [React Native Todo App](https://github.com/panjiggm/todo-app-rn)

## Feature

- View Todo
- Create Todo
- Update Todo
- Delete Todo

## Database

- Postgresql
- [Supabase](https://supabase.com) (Data is stored here)

## Setup

1. Clone this repo

2. Install local dependencies:
   ```sh
   npm install
   # or
   yarn
   ```

## Starting App

1. Open Terminal in project folder
   ```sh
    npm run dev
    # or
    yarn dev
   ```
2. Test with REST API Client tool such as postman or Insomnia

## API Endpoints

| Endpoint            | HTTP   | Description           | Body                 |
| ------------------- | ------ | --------------------- | -------------------- |
| `/api/todos`        | GET    | Get all Todos         |                      |
| `/api/todos`        | POST   | Create a Todo         | `title`, `completed` |
| `/api/todos/:id`    | PUT    | Update Todo Content   | `title`, `completed` |
| `/api/todos/:id`    | DELETE | Delete a Todo         |                      |
| `/api/todos/toggle` | PUT    | Update completed Todo |                      |
