# Padre Gino's Pizza Project

## Overview

This project is a web application for Padre Gino's Pizza, featuring a frontend built with React and Vite, and a backend server using Fastify and SQLite.

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository:

   ```sh
   git clone <repository-url>
   cd padre-ginos-fe-masters
   ```

2. Install dependencies for the frontend:

   ```sh
   npm install
   ```

3. Install dependencies for the backend:
   ```sh
   cd backend
   npm install
   cd ..
   ```

### Running the Application

#### Backend

To start the backend server, run the following command from the [backend](http://_vscodecontentref_/20) directory:

```sh
npm run dev
```

The backend server will be running on http://localhost:3000.

#### Frontend

To start the frontend development server, run the following command from the root directory:

```sh
npm run dev
```

The frontend will be running on http://localhost:5173.

#### Running Tests

To run the tests, use the following command:

```sh
npm run test
```

To run the tests with a UI, use the following command:

```sh
npm run test:ui
```

To generate a coverage report, use the following command:

```sh
npm run coverage
```

#### License

This project is licensed under the MIT License.
