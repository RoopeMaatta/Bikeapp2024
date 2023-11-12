# Bikeapp2024

This is a pre-assignment for Solita Dev Academy Finland January 2024:
https://github.com/solita/dev-academy-spring-2024-exercise

Here I create a UI and a backend service for displaying data from journeys made with city bikes in the Helsinki Capital area.

about 95% of this project was completed on my iPad pro using githubCodespaces and VS Code online.

_______________________________________________________________________

# Instructions for running the project on your local coputer
1. You need to have a functional docker environment running on your computer, including docker compose.
1.1 If you do not have a working docker environment you can use for example rancher desktop
2. Clone this repository
3. In a terminal with this repository as the working directory run:

```
docker compose up --build --renew-anon-volumes
```
(This may take a few minutes)
4. Check in your terminal that the compose has finished for each container:
- bikeapp2024-backend-1   | Server is running on port 3000
- bikeapp2024-db-1        | <timestamp> LOG: database system is ready to accept connections
- bikeapp2024-frontend-1  | VITE v4.5.0  ready in <time> 
5. Open your browser to http://localhost: 5173

_______________________________________________________________________

# Instructions for running the project on GithubCodespaces using VS Code online
1. Install Docker from the extensions tab on the left side of VS Code
2. Clone this repository
3. Inside this root folders docker-compose.yml file change the frontends:
    VITE_API_URL: http://localhost:3000
    to your codespaceses base url, with port 3000. It could look like this for example:
    VITE_API_URL: https://super-duper-garbanzo-rj7p946q94xf57r-3000.app.github.dev
4. On command line under this folder run:

```
docker compose up --build --renew-anon-volumes
```
(This may take a few minutes)
5. Check in your terminal that the compose has finished for each container:
- bikeapp2024-backend-1   | Server is running on port 3000
- bikeapp2024-db-1        | <timestamp> LOG: database system is ready to accept connections
- bikeapp2024-frontend-1  | VITE v4.5.0  ready in <time>
6. Open the application running on port 5173

_______________________________________________________________________

# Tests

Backend tests are run when the docker images are built. When building and running the project with docker compose any failing tests will halt the process and display the error. They can also be executed manually through a terminal with the command:
```
docker exec -w /app/tests bikeapp2024-backend-1 npm test
```

Due to time restraints frontend testing was left out of this project.

_______________________________________________________________________

# Used technologies
Frontend
- React
- Vite
- MUI
- Jest

Backend
- Node.js
- Express

Database
- A provided docker containing a postgreSQL database

General
- JavaScript
- Docker
- EsLint
- GithubCodespaces
- VS Code online
- ChatGPT


_______________________________________________________________________

# Todo
- StationDetails back button styling and loading view.
- Frontend style results as a "pop-up" like card over StationsList
- Grid for screen size scaling
- Pagination to get stations api.
- Frontend testing.
- Loading message styling.
- Error message styling.
- Re-write better comments for files and functions

- Extra features outside of the assignment scope:
    - Journey query filters
    - Map view of stations and journeys
    - endpoint to add more journeys
