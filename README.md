# Bikeapp2024

This is a pre-assignment for Solita Dev Academy Finland January 2024:
https://github.com/solita/dev-academy-spring-2024-exercise

Here I create a UI and a backend service for displaying data from journeys made with city bikes in the Helsinki Capital area.

about 95% of this project was completed on my iPad pro using githubCodespaces and VS Code online.

_______________________________________________________________________

# Instructions for running the project on your local coputer
1. Install Docker Desktop on your computer (https://docs.docker.com/desktop/), or inside vsCode
2. Clone this repository
3. On command line under this folder run:

```
docker compose up --build --renew-anon-volumes
```
(This may take a few minutes)
4. Open the aplication running on port 5173

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
5. Open the aplication running on port 5173

_______________________________________________________________________

# Tests

Backend tests are run when you run the project with docker. They can also be executed manually trough a running docker with the command:
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
- Grid for screen size scaling
- Pagination to get stations api.
- Frontend testing.
- Loading message styling.
- Error message styling.

- Extra features outside of the assignment scope:
    - Journey query filters
    - Map view of stations and journeys
    - endpoint to add more journeys
