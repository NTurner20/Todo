# PERN Stack Login with JWT

This is a simple authentication system built using the PERN stack (PostgreSQL, Express, React, Node.js) with JSON Web Tokens (JWT) for user authentication. The app provides user registration and login functionality with JWT-based session management. Notifications for key actions such as login, logout, registration, and errors are provided using `react-toastify`.

Special Thanks to QuackLearner, check out their channel: https://www.youtube.com/@TheQuackLearner

## Features

- User registration and login
- JWT-based authentication for protected routes
- Secure password storage with bcrypt
- Notifications for user actions with `react-toastify`

## Technologies Used

- **PostgreSQL** - Relational database for storing user information
- **Express.js** - Backend framework for handling API requests
- **React.js** - Frontend framework for building the UI
- **Node.js** - Server-side JavaScript runtime
- **JWT (JSON Web Token)** - For secure authentication
- **Bcrypt** - For password hashing
- **React-Toastify** - For displaying toast notifications

## Prerequisites

Make sure you have the following installed:

- **Node.js** (v14 or later)
- **PostgreSQL** (v12 or later)

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/NTurner20/pern-login-JWT.git
cd pern-login-JWT
```

### 2. Install Dependencies

```bash
npm install
cd client
npm install
```

### 3. Set Up the Database

Ensure PostgreSQL is running, and create a database:

1. Create the database and table if needed
2. Set up environment variables in a `.env` file:

```
jwtSecret=<your_jwt_secret>
```

### 4. Run the Backend

```bash
npm run dev
```

### 5. Run the Frontend

```bash
cd client
npm start
```

## API Endpoints

### **User Registration** - `/auth/register`
- Method: `POST`
- Payload: `{ email, password, name }`
- Description: Registers a new user and returns a JWT.

### **User Login** - `/auth/login`
- Method: `POST`
- Payload: `{ email, password }`
- Description: Logs in a user and returns a JWT.

### **Protected Route** - `/dashboard`
- Method: `GET`
- Description: Requires a valid JWT to access user data.

## Notifications

`react-toastify` is used for toast notifications during user actions, such as logging in, registering, logging out, and error handling. Toasts provide feedback to users for both successful and failed operations.

## Security Considerations

- **Password Hashing**: Passwords are securely hashed using bcrypt.
- **JWT Expiration**: Tokens are set to expire after a certain time.
- **HTTPS**: Ensure your app uses HTTPS in production for secure data transmission.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
