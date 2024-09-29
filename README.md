# User and Address Registration Backend

This is a Node.js backend project that allows users to register and store their addresses in a relational database. The project uses Express.js for the server, Sequelize (or an alternative ORM) for database management, and can be deployed on platforms like Render, Heroku, or Vercel.

## Project Overview

- **Technology Stack**: Node.js, Express, Sequelize ORM (with MySQL/PostgreSQL/SQLite).
- **Database**: Relational database (e.g., MySQL, PostgreSQL) or MongoDB.
- **Objective**: Create a backend with a one-to-many relationship between users and addresses.

### Table Structure

- **User Table**: Stores the user's name.
- **Address Table**: Stores the user's address and references the `User` table through a foreign key relationship.

## Features

- Store user details and multiple addresses for each user.
- Establish one-to-many relationships between `User` and `Address`.
- Basic form submission endpoint to create users and addresses.

