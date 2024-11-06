

# Hospital Management System

## Project Overview

This hospital management system was developed to streamline access to medical services and improve hospital operations. It provides a user-friendly interface for patients, doctors, and administrators, with tailored features for each role. 

### Key Features
- **Patients**: View services, browse doctor profiles, schedule appointments, and subscribe to newsletters.
- **Doctors**: Manage schedules and view patient appointments.
- **Admin**: Full dashboard for managing users, services, appointments, and data configurations.

## Tech Stack

- **Frontend**: HTML, CSS, React.js, CSS Modules, Bootstrap
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Authentication**: JWT for secure session management
- **Other Tools**: Git, npm

## Project Structure

```
Hospital-Management-System/
├── client/              # Frontend code (React.js)
├── server/              # Backend code (Node.js and Express)
├── models/              # Database models (MongoDB schemas)
├── routes/              # API endpoints
└── README.md
```

## Key Pages and Components

- **Home Page**: Introduction to the hospital and call-to-action for appointments
- **Departments Page**: Details of available departments and services
- **Doctors Page**: Profiles of doctors, with specialization and experience
- **Admin Dashboard**: Full data management for appointments, doctors, and services

## Features & Functionality

1. **Security**:
   - **JWT Authentication**: Secure user sessions
   - **Data Validation**: Using Joi for input validation
   - **Error Handling**: Centralized error responses

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/Hospital-Management-System.git
   cd Hospital-Management-System
   ```

2. Install dependencies for both client and server:
   ```bash
   cd client
   npm install
   cd ../server
   npm install
   ```

3. Start the development servers:
   ```bash
   cd client
   npm start  # Start React App
   cd ../server 
   npm run start #Start Node server
   
   ```

4. Access the app at `http://localhost:3000`.


## Database Schema (MongoDB)

- **Patients**: Stores patient information
- **Doctors**: Stores doctor profiles
- **Appointments**: Manages appointment data
- **Services**: Stores available hospital services

## Future Enhancements

- Add a chat feature for direct communication with doctors
- Implement an analytics dashboard for hospital data insights

## Contributing

1. Fork the repository.
2. Create a new branch for your feature.
3. Submit a pull request once changes are tested.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

