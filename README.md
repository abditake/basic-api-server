LAB - Express
========

Express Api Server
---------------

### Author: Abdinasir Yussuf

-   [tests report](https://github.com/codefellows/code-401-javascript-example-lab/actions)
-   [front-end](https://code-401-js-lab-example.herokuapp.com/status)

# Helpful Info

- ### Routes
    - /clothes
    - /food
- ###
    - This Express server utilizes sqlite memory to create an in memory database. The server automatically seeds data for you with each restart but if you wanted to change seeded data Head over to the Root index file and Alter the data while following the Schema used in the corresponding Models folder. 
### Setup

#### `.env` requirements

-   `PORT` - Port Number

#### Running the app

-   `npm start`
-   Endpoint: `/person`
    -   Returns Object

        ```
        {
          'name': '<search Query>'
          'name': '<search Query>'
          'name': '<search Query>'
        }

        ```

#### Tests

-   Unit Tests: `npm test`


#### UML

example for sequelize design 
![sequelize](https://www.robinwieruch.de/static/b7e1ecfc9fb527a687939a0da39fa834/5e3e0/uml.webp)