# PERN Todo App with Authentication

This is a full-stack PERN (Postgres, Express, React, Node.js) application that combines a user authentication system with a todo list feature. Users can register, log in, and create personalized todo lists. The app uses JWT (JSON Web Tokens) for secure authentication and allows each user to manage their own todos.

## Features

- **User Authentication**: Secure registration and login system using JWT tokens.
- **Todo List Management**: Create, read, update, and delete todos.
- **Private Todos**: Each user has access to their own todos after logging in.
- **Persistent Storage**: Data is stored in a PostgreSQL database.

## Tech Stack

- **Frontend**: React
- **Backend**: Node.js with Express
- **Database**: PostgreSQL
- **Authentication**: JWT (JSON Web Tokens)

## Installation and Setup

### Prerequisites

- Node.js and npm installed
- PostgreSQL installed and running
- A `.env` file with the following variables:
  - `PGUSER`
  - `PGHOST`
  - `PGDATABASE`
  - `PGPASSWORD`
  - `PGPORT`
  - `JWT_SECRET`

### Backend Setup

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-directory>/server
   ```

2. Install backend dependencies:
   ```bash
   npm install
   ```

3. Start the backend server:
   ```bash
   npm start
   ```

### Frontend Setup

1. Navigate to the `client` folder:
   ```bash
   cd ../client
   ```

2. Install frontend dependencies:
   ```bash
   npm install
   ```

3. Start the frontend development server:
   ```bash
   npm start
   ```

### Database Setup

1. Create a PostgreSQL database:
   ```sql
   CREATE DATABASE perntodo;
   ```

2. Run migrations to set up the tables (e.g., users and todos).

## Usage

1. **Register**: Create a new account.
2. **Login**: Sign in with your credentials.
3. **Manage Todos**: Add, edit, and delete your todos.
4. **Logout**: Securely log out when you're done.

## Future Enhancements

- Add password reset functionality.
- Implement filtering and search features for todos.
- Improve UI with more customization options for todos.

## License

This project is licensed under the MIT License.
