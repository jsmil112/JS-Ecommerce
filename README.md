# JS-Ecommerce

## Technologies:

* React
* Redux
* Node.js
* Express
* PostgreSQL
* Sequelize
* Passport

## Database and Seed
 
* Requires a Postgres database named: ecommerce. (to use other name change dbconfig.json in config folder)
* Run all 3 files inside Seed folder using "node " and each filename.

## Running server

* move inside back folder and run:

    npm start
    
## Creating App Bundle

* move inside front folder and run:

    npm run build

## Using App

* With the server running and bundle created in a browser go to:
    
    http://localhost:8080
    
## Notes

This was the second large project of the Plataforma 5 coding bootcamp curriculum. In two weeks our group of 5 was tasked with creating a e-commerce website, which included temporary guest accounts, user accounts, secure user logins, a product cart, product checkout, admin, and a product database. This was a fun yet difficult because it was my first foray in real group work. Previous to this project most of my work had been done alone or in pair programming, but I found I really enjoyed the team atmosphere sharing in our successes and failures together and being able to learn from the groups' collective knowledge. Also this was my first time using the complete SCRUM method with a qualified SCRUM master, which was a rewarding experience to see the methodology put fully into practice.  

## My role and contributions

* Making the RESTful API
* Creation of database models and relationship (except those related to product cart)
* Front-end design
* Search functionality
* Various React components
* Debugging

### Future improvements

As we were very time constrained there is a lot that could be improved on:

* Database restructuring: The current models and relationships of our database proved to be inefficient using too many pivot tables. Especially in regards to the product cart. 
* Mobile and responsive design
* Product stock
* Recovery of forgotten passwords
* Debugging: there are many edge case and tiny bugs that need to be ironed out.
