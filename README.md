# Service Sharing Web Application

## Project Overview
The Service Sharing Web Application allows users to seamlessly manage and book services while ensuring a user-friendly interface. The platform is designed with essential features for service providers and users, focusing on functionality, usability, and responsiveness.

---

## Live Website
[Live Demo](https://consulthive-0.web.app/)  

---

## Key Features

1. **Authentication System:**
   - Email/Password-based login and registration.
   - Google social login.
   - User-specific navigation menus based on authentication status.

2. **Dynamic Routes and Pages:**
   - **Home Page** with a visually appealing banner, popular services section, and two extra unique sections.
   - **All Services Page** displaying all services with search functionality.
   - **Single Service Details Page** for specific service information and booking.
   - **Private Routes** for:
     - Adding, managing, and deleting user-specific services.
     - Viewing and managing booked services.
     - Updating service status (pending, working, completed).

3. **CRUD Functionality:**
   - Users can add, update, and delete their services.
   - Users can book services and update the status of bookings.

4. **Search System:**
   - Users can search for services by name on the All Services page.

5. **Theme Toggling:**
   - Light and dark theme modes available, providing flexibility in user experience.

6. **Responsiveness:**
   - Fully responsive for mobile, tablet, and desktop views.

7. **Error Handling:**
   - Custom 404 error page with a redirect button to the homepage.

8. **JWT Authentication:**
   - Secure access to private routes with JSON Web Tokens (JWT).

9. **Dynamic Titling:**
   - Website title dynamically updates based on the current route.

10. **Loading States:**
   - Integrated spinner or loader to indicate data-loading states.

---

## Technology Stack

### Client-Side
- **React**: For building the user interface.
- **React Router**: For routing and navigation.
- **Axios**: For HTTP requests.
- **Tailwind CSS**: For responsive and aesthetic styling.
- **DaisyUI**: For pre-styled UI components.
- **Framer Motion / AOS**: For animations.
- **Firebase**: For authentication and hosting.

### Server-Side
- **Node.js**: For backend logic.
- **Express.js**: For building the server and API routes.
- **MongoDB**: For database management.
- **JWT**: For authentication and authorization.

---

## Pages and Routes

### Public Routes
- **Home**: Main landing page with dynamic sections.
- **All Services**: Displays all services added by users.
- **Login and Registration**: Simple authentication forms with social login support.

### Private Routes
- **Add-A-Service**: Add new services with service provider details.
- **Manage-Services**: View, update, or delete user-specific services.
- **Booked Services**: List of services booked by the user.
- **Service-To-Do**: Services booked by others from the user, with status management.

---

## Deployment

- **Client**: Deployed on [Netlify/Vercel] (ensure domain is authorized in Firebase).
- **Server**: Deployed on [Render/Heroku] (ensure no CORS or 404 errors).

---

## Setup Instructions

### Prerequisites
- Node.js
- MongoDB Atlas Account
- Firebase Project

### Installation
1. Clone the repositories:
   - [Client-Side Repo](#)
   - [Server-Side Repo](#)

2. **Client-Side:**
   ```bash
   cd client
   npm install
   npm start
   ```

3. **Server-Side:**
   ```bash
   cd server
   npm install
   node server.js
   ```

4. Add environment variables:
   - **Client**: Add Firebase configuration in `.env`.
   - **Server**: Add MongoDB credentials and JWT secret in `.env`.

---

## Requirements Checklist

- [x] Minimum 18 GitHub commits on the client-side.
- [x] Minimum 8 GitHub commits on the server-side.
- [x] Responsive design for mobile, tablet, and desktop.
- [x] Dynamic page titles.
- [x] JWT authentication and authorization.
- [x] Hidden Firebase and MongoDB credentials using environment variables.
- [x] Properly deployed client and server.

---

## Selected Service Category
**Educational Services** (example).

---

## Optional Features Implemented
1. Spinner during data loading states.
2. Theme toggling between light and dark modes.

---

## Contact
For any queries or support, feel free to contact:
- Email: [YourEmail@example.com](mailto:YourEmail@example.com)
- GitHub: [YourGitHubUsername](#)