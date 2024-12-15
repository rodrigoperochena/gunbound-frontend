# Frontend Implementation 🎉

---

### Functionalities:
1. **Registration Form**:
   - Interacts with `/api/users/register`.
   - Validates user inputs on the frontend.
   - Displays success or error messages.

2. **Login Form**:
   - Interacts with `/api/auth/login`.
   - Stores user session and displays a login success/error message.

3. **Logout Button**:
   - Interacts with `/api/auth/logout`.
   - Clears the user session and redirects to the login page.

4. **Online Users Display**:
   - Fetches data from `/api/auth/online` and lists online users in the game.

5. **Dashboard**:
   - Allows logged-in users to:
     - Modify their `Nickname`.
     - Change their password.
   - Interacts with backend endpoints for updates.

---

### Frontend Components:
1. **AuthContext**:
   - Provides global state for user authentication.
2. **Components**:
   - `RegisterForm.jsx`
   - `LoginForm.jsx`
   - `Dashboard.jsx`
   - `OnlineUsers.jsx`