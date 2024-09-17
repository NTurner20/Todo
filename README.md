# PERN Stack Login with JWT

This is a simple authentication system built using the PERN stack (PostgreSQL, Express, React, Node.js) with JSON Web Tokens (JWT) for user authentication. The app provides a basic user registration and login system where users can securely log in and manage sessions using JWT.

Special Thanks to QuackLearner, check out their channel: https://www.youtube.com/@TheQuackLearner

## Features

- User registration
- User login
- JWT-based authentication
- Protected routes
- Secure password handling with bcrypt

## Technologies Used

- **PostgreSQL** - Relational database for storing user information.
- **Express.js** - Backend framework for handling API requests.
- **React.js** - Frontend framework for creating the user interface.
- **Node.js** - Server-side JavaScript runtime.
- **JWT (JSON Web Token)** - For secure authentication and session management.
- **Bcrypt** - For password hashing.

## Prerequisites

Before running this project, ensure that you have the following installed:

- **Node.js** (v14 or later)
- **PostgreSQL** (v12 or later)

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/NTurner20/pern-login-JWT.git
cd pern-login-JWT
```

### 2. Install Dependencies

Run the following command to install both backend and frontend dependencies:

```bash
npm install
cd client
npm install
```

### 3. Set Up the Database

Make sure PostgreSQL is running on your system, then create a database and configure the environment variables.

1. Open `server/db.sql` and run the provided SQL script to set up your database schema.
2. Create a `.env` file in the root of the `server` directory with the following variables:

```
PGUSER=<your_postgresql_username>
PGHOST=<your_database_host>
PGDATABASE=<your_database_name>
PGPASSWORD=<your_postgresql_password>
PGPORT=5432
jwtSecret=<your_jwt_secret>
```

### 4. Run the Backend Server

After setting up the database and environment variables, you can start the backend server.

```bash
npm run dev
```

### 5. Run the Frontend Client

Navigate to the `client` directory and start the React app.

```bash
cd client
npm start
```

The app should now be running on `http://localhost:3000` (React frontend) and `http://localhost:5001` (Node.js backend).

## API Endpoints

### 1. **User Registration** - `/auth/register`
- Method: `POST`
- Payload: `{ email, password, name }`
- Description: Registers a new user and returns a JWT.

### 2. **User Login** - `/auth/login`
- Method: `POST`
- Payload: `{ email, password }`
- Description: Logs in a user and returns a JWT.

### 3. **Protected Route** - `/dashboard`
- Method: `GET`
- Description: Fetches protected user information. Requires a valid JWT in the Authorization header.

## Usage

### Register a User

1. Navigate to the `/register` page.
2. Enter your email, password, and name to create an account.

### Login a User

1. Navigate to the `/login` page.
2. Enter your email and password to log in. On success, a JWT will be stored in the browser's localStorage for authentication purposes.

### Protected Routes

Once logged in, the app uses the JWT to access protected routes. Without a valid JWT, the user cannot access these routes.

## Security Considerations

- **Password Hashing**: Passwords are hashed using bcrypt before being stored in the database.
- **JWT Expiration**: Tokens are set to expire after a certain period (configurable in the backend).
- **HTTPS**: When deploying, ensure that your app uses HTTPS to encrypt communications between the client and the server.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
