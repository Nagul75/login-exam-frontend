# login-exam-frontend

The frontend for a website mainly designed for a login authentication. 
1. Designed using ReactJS (typescript).
2. HTTP requests made to the backend using Axios.
3. UI library used: shadcn (Card, Button, Input, Avatar).

## Paths

The various paths available:
1. / - home page (protected route) [^1]
2. /login - login page
3. /signup - signup page
4. /profile - profile page (protected route) [^1]
5. /settings - settings page
6. /pokemon/:id - displays specific pokemon clicked
7. 404 error page for all other urls

[^1]: Protected route requires a user to be logged before entering.
