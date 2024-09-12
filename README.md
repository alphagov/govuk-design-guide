# GOV.UK Design Library
## About
- There is no single source of truth when it comes to design-centric documentation within GOV.UK
- GOV.UK Design System is intended for transactional services used across government departments
- Design library can help mitigate duplicating existing designs, provide insights on past design decisions, and demonstrate the interconnected relationship between our publishing tools and what the end-user interacts with on a GOV.UK page

## How to run the design library on your machine
1. Before running a local version of the Design Library on your computer ensure that you have the following installed:
    - [Node LTS](https://nodejs.org/en)
    - [Visual Studio Code](https://code.visualstudio.com/)
    - GitHub set up on your computer
2. Once you have those installed, clone this repo.
3. Once it's cloned, in the terminal run:
```
npm install
```
4. Once all the packages been installed you should be able to run a local version of the Design Library by running:
```
npm start
```
5. When the server is active enter `http://localhost:8080/` in your browser's address bar. In doing so, a local version of the design library will run on your computer.
```
http://localhost:8080/
```

## How to contribute
1. Before contributing be sure to pull the latest version of the main on your local machine.
2. Create a brand new branch from main.
3. Depending on your scenario:
    - If a new documention is being aded there are template files with detailed instructions available.
    - If a documentation being amended, locate the appropriate document within the `/docs` folder and begin making any necessary changes.