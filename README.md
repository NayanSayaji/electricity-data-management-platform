# MeterMaster

## Description

**MeterMaster** is a Node.js-based application designed to streamline the process of electricity billing and data management. Leveraging PostgreSQL as the database and Sequelize as the ORM, this system acts as an intermediary between consumers and electricity boards, enabling efficient data collection, bill generation, and performance monitoring. The application supports various types of electricity meters, including household and industrial, both with and without solar components.

### Key Features

- **User Roles**: Supports multiple user roles, including admin, supervisor, field worker, board admin, board member, and consumers.
- **Meter Management**: Handles multiple meter types with different requirements for data collection and billing discounts.
- **Field Data Collection**: Field workers can upload photos as proof of meter readings and revisit meters if data is not readable.
- **Bill Generation**: Automatically generates bills based on the collected data, applying board-specific base rates and discounts.
- **Ticketing System**: Allows consumers to raise tickets for any billing issues, which can be managed and resolved by staff.
- **Email Notifications**: Sends generated bills directly to consumers via email.
- **User Management**: Board admins can restore deleted users, ensuring data integrity and continuity.

### Meter Types and Discounts

- **Household + Solar**: X% discount, requires 10 photos of meter readings for data collection.
- **Household + Regular**: No discount, requires 5 photos of meter readings for data collection.
- **Industrial + Solar**: X% discount, requires 20 photos of meter readings for data collection.
- **Industrial + Regular**: No discount, requires 10 photos of meter readings for data collection.

### Bill Calculation Formula

\[ \text{Total Amount} = (\text{Base Rate} \times \text{Units Consumed}) - (\text{Base Rate} \times \text{Units Consumed} \times \text{Discount}) \]

### Technology Stack

- **Backend**: Node.js, Express.js, TypeScript
- **Database**: PostgreSQL
- **ORM**: Sequelize
- **Authentication**: JWT (JSON Web Tokens)
- **Email Service**:

## API Endpoints (High-Level)

- **Auth**:
  - `POST api/v1/auth/register`
  - `POST api/v1/auth/login`
- **User**:
  - `GET api/v1/users/:id`
  - `GET api/v1/users/:id/bills`
  - `GET api/v1/users/:id/tickets`
  - `POST api/v1/users/:id/tickets`
- **Admin**:
  - `GET api/v1/admin/users`
  - `GET api/v1/admin/boards`
  - `POST api/v1/admin/boards`
  - `PUT api/v1/admin/boards/:id`
  - `DELETE api/v1/admin/boards/:id`
  - `GET api/v1/admin/roles`
  - `POST api/v1/admin/roles`
  - `PUT api/v1/admin/roles/:id`
  - `DELETE api/v1/admin/roles/:id`
- **Field Worker**:
  - `POST api/v1/readings`
  - `PUT api/v1/readings/:id`
- **Bill**:
  - `GET api/v1/bills/:id`
  - `POST api/v1/generate`
- **Ticket**:
  - `GET api/v1/tickets`
  - `PUT api/v1/tickets/:id`

## Setup and Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/
   ```
2. Install dependencies:
   ```bash
   cd MeterMaster
   npm install
   ```
3. Configure environment variables:
   - Create a `.env` file based on the `.env.sample`.
   - Add your PostgreSQL connection string and other necessary configurations.
4. Run database migrations:
   ```bash
   npx sequelize-cli db:migrate
   ```
5. Run the development server:
   ```bash
   npm run dev
   ```

## Database Design

### Tables

### Users

| Column Name | Data Type | Constraints           |
|-------------|------------|-----------------------|
| id          | INTEGER    | Primary Key           |
| name        | STRING     | Not Null              |
| email       | STRING     | Not Null, Unique      |
| password    | STRING     | Not Null              |
| role_id     | INTEGER    | Foreign Key, Not Null |
| board_id    | INTEGER    | Foreign Key, Nullable |
| created_at  | DATE       | Not Null              |
| updated_at  | DATE       | Not Null              |

### Roles

| Column Name | Data Type | Constraints |
|-------------|------------|-------------|
| id          | INTEGER    | Primary Key |
| name        | STRING     | Not Null    |
| created_at  | DATE       | Not Null    |
| updated_at  | DATE       | Not Null    |

### Boards

| Column Name | Data Type | Constraints |
|-------------|------------|-------------|
| id          | INTEGER    | Primary Key |
| name        | STRING     | Not Null    |
| base_rate   | DECIMAL    | Not Null    |
| created_at  | DATE       | Not Null    |
| updated_at  | DATE       | Not Null    |

### Meters

| Column Name | Data Type | Constraints           |
|-------------|------------|-----------------------|
| id          | INTEGER    | Primary Key           |
| user_id     | INTEGER    | Foreign Key, Not Null |
| board_id    | INTEGER    | Foreign Key, Not Null |
| type        | STRING     | Not Null              |
| status      | STRING     | Not Null              |
| created_at  | DATE       | Not Null              |
| updated_at  | DATE       | Not Null              |

### MeterReadings

| Column Name      | Data Type | Constraints           |
|------------------|------------|-----------------------|
| id               | INTEGER    | Primary Key           |
| meter_id         | INTEGER    | Foreign Key, Not Null |
| field_worker_id  | INTEGER    | Foreign Key, Not Null |
| units_consumed   | DECIMAL    | Not Null              |
| reading_date     | DATE       | Not Null              |
| photos           | JSON       | Not Null              |
| revisit          | BOOLEAN    | Not Null              |
| created_at       | DATE       | Not Null              |
| updated_at       | DATE       | Not Null              |

### Bills

| Column Name     | Data Type | Constraints           |
|-----------------|------------|-----------------------|
| id              | INTEGER    | Primary Key           |
| meter_id        | INTEGER    | Foreign Key, Not Null |
| amount          | DECIMAL    | Not Null              |
| units_consumed  | DECIMAL    | Not Null              |
| base_rate       | DECIMAL    | Not Null              |
| discount        | DECIMAL    | Not Null              |
| total_amount    | DECIMAL    | Not Null              |
| generated_at    | DATE       | Not Null              |
| due_date        | DATE       | Not Null              |
| status          | STRING     | Not Null              |
| created_at      | DATE       | Not Null              |
| updated_at      | DATE       | Not Null              |

### Tickets

| Column Name  | Data Type | Constraints           |
|--------------|------------|-----------------------|
| id           | INTEGER    | Primary Key           |
| user_id      | INTEGER    | Foreign Key, Not Null |
| meter_id     | INTEGER    | Foreign Key, Not Null |
| description  | TEXT       | Not Null              |
| status       | STRING     | Not Null              |
| created_at   | DATE       | Not Null              |
| updated_at   | DATE       | Not Null              |

### Associations in Sequelize

```js
// User Model
User.belongsTo(Role, { foreignKey: 'role_id' });
User.belongsTo(Board, { foreignKey: 'board_id', allowNull: true });
User.hasMany(Meter, { foreignKey: 'user_id' });
User.hasMany(MeterReading, { foreignKey: 'field_worker_id' });
User.hasMany(Ticket, { foreignKey: 'user_id' });

// Role Model
Role.hasMany(User, { foreignKey: 'role_id' });

// Board Model
Board.hasMany(User, { foreignKey: 'board_id' });
Board.hasMany(Meter, { foreignKey: 'board_id' });

// Meter Model
Meter.belongsTo(User, { foreignKey: 'user_id' });
Meter.belongsTo(Board, { foreignKey: 'board_id' });
Meter.hasMany(MeterReading, { foreignKey: 'meter_id' });
Meter.hasMany(Bill, { foreignKey: 'meter_id' });

// MeterReading Model
MeterReading.belongsTo(Meter, { foreignKey: 'meter_id' });
MeterReading.belongsTo(User, { foreignKey: 'field_worker_id' });

// Bill Model
Bill.belongsTo(Meter, { foreignKey: 'meter_id' });

// Ticket Model
Ticket.belongsTo(User, { foreignKey: 'user_id' });
Ticket.belongsTo(Meter, { foreignKey: 'meter_id' });
```


### Updated API Endpoints (High-Level)

- **Auth**:

  - `POST api/v1/register`
  - `POST api/v1/login`

- **User**:
  - `GET api/v1/users/:id`
  - `GET api/v1/users/:id/bills`
  - `GET api/v1/users/:id/tickets`
  - `POST api/v1/users/:id/tickets`
- **Admin**:

  - `GET api/v1/admin/users`
  - `GET api/v1/admin/boards`
  - `POST api/v1/admin/boards`
  - `PUT api/v1/admin/boards/:id`
  - `DELETE api/v1/admin/boards/:id`
  - `GET api/v1/admin/roles`
  - `POST api/v1/admin/roles`
  - `PUT api/v1/admin/roles/:id`
  - `DELETE api/v1/admin/roles/:id`

- **Field Worker**:

  - `POST api/v1/readings`
  - `PUT api/v1/readings/:id`

- **Bill**:

  - `GET api/v1/bills/:id`
  - `POST api/v1/generate`

- **Ticket**:
  - `GET api/v1/tickets`
  - `PUT api/v1/tickets/:id`

### Implementation Plan

1. **Setup**:

   - Initialize a Node.js project.
   - Setup TypeScript.
   - Configure Sequelize with PostgreSQL.

2. **Models**:

   - Define Sequelize models for Users, Roles, Boards, Meters, MeterReadings, Bills, and Tickets.
   - Set up associations between models.

3. **Authentication**:

   - Implement JWT-based authentication.
   - Role-based access control.

4. **API Development**:

   - Create RESTful API routes for all the endpoints.
   - Implement business logic in controllers.

5. **Email Service**:
   - Use a service like Nodemailer to send bills via email.

---

### License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---