# National Clubs League API

This API provides functionalities for managing teams, stadiums, players, games, and injuries. It uses **Sequelize** for PostgreSQL ORM and **Zod** for data validation, built with **Express** and **Node.js**.

---

## Technologies Used

- **PostgreSQL** with **Sequelize** ORM for database interaction.
- **Zod** for input validation and schema enforcement.
- **Express** for building the web server.
- **Node.js** as the runtime environment.

---

## API Endpoints

- **Team Routes**: Manage teams, players, and captains, including creating, updating, and retrieving teams and player information.
- **Stadium Routes**: Manage stadiums, including creating and retrieving stadium data.
- **Player Routes**: Handle player information, including creation, update, deletion, and injury history.
- **Injury Routes**: Manage injuries associated with players.
- **Game Routes**: Manage game data, including creation, updating, and retrieving game details.
- **Team-Game Routes**: Retrieve games related to teams and specific game details.

---

## 📊 Entity Relationship Diagram (ERD)

The following diagram illustrates the structure of our football management database.  
It shows how the main entities like **Team**, **Player**, **Game**, and **Stadium** are related.  
This ERD helps in understanding the database schema and the foreign key connections between tables.

<p align="center">
  <img src="/image.png" alt="Entity Relationship Diagram" />
</p>


## Installation & Setup

To run the API locally:

```bash
git clone https://github.com/Eyad-AbdElMohsen/NCL_API.git
cd NCL_API
npm install
```

---

## Available Scripts

```bash
npm run build // Compile TypeScript to JavaScript and clean up previous builds.
npm run start // Run the compiled production app.
npm run serve // Start the development server using Nodemon (auto-restart on changes).
```
