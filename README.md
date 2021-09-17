# todo-react
This is a learning example of a fullstack application using String Boot and React

# Main technologies used:
Backend :
Spring, Spring Boot, Spring data Jpa, Spring Data Rest, PostgreSQL, Maven 

FrontEnd :
React, Axios, Javascript, HTML, Css, Bootstrap

# PostgreSQL configuration
Install PostgreSQL service on the computer
The default port for a PostgreSQL service is localhost:5432
Create a database, a user and set a password
File application.properties, configure datasource.url, datasource.username, datasource.password 

# Download the projet

# Make a directory 
    mkdir todo-react 
    cd todo-react

Download the projet
    git clone git@github.com:mike507/todo-react.git

# Backend and frontend setup
    mkdir todoapp
    cd todoapp
    mvn spring-boot:run
The back-end application will start on the port localhost:8080

In the Front-end directory
    mkdir todo-react
    cd todo-react

install node modules
    npm install

launch Ui application
    npm start
This will launch a React application in localhost:3000