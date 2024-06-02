# LibraryApp

## Library API Development 

- At first, the backend service was developed in the express js, the database that is used for this project is Postgres.

- The endpoints are defined and by using these endpoints the users of this API can perform actions on the resources.

- Then I created the data access layer, which is used for the interactions with the database.

- The API has jwt authentication, and there is an endpoint for registering  the users, after you register, you can log in with the help of that username and password, and then you will
get the token as the response, then you need this token (add token as header) for accessing the protected endpoints. 

- The frontend of this API is developed in HTML and it uses the fetch API for making the requests to the backend service.

## Application Architecture

### Files :-


1. **server.js** :- This is the entry point for the application. It initializes the Express.js server, sets up middleware, and starts listening for requests on the mentioned port.

2. **routes.js** :- Defines API endpoints for this application, the endpoints defined in this file do not need any authentication.

3. **auth_routes.js** :- Defines API endpoints for this application, the endpoints defined in this file need authentication.

4. **login.js** :- Defines API endpoints for this application, the endpoints defined in this file are used to register and login to this API.

5. **postgres.js** :- Establishes and exports a connection pool to the PostgreSQL database using configuration from the .env file.

6. **model.js** :- Contains the data access layer of the application, abstracting database interactions into model functions.

7. **authorize.js** :- Used for jwt verification of the token.

8. **register.html** :- frontend page for the registration to this API.

9. **main_page.html** :- main frontend page of this API.

-------

### Endpoints :- 

----

**Endpoints that do not require authentication** :-

**GET /api/books** :- for retrieving all the books.

**GET /api/title/:title** :- for retrieving the book with the specified title.

**GET /api/author/:author** :- for retrieving the book with the specified author. 

**GET /api/genre/:genre** :- for retrieving the book with the specified genre.

**GET /api/defined-genre** :- for retrieving the pre-defined genres.

**GET /api/register/page** :- for displaying the register page.

**GET /api/main/page** :- for displaying the main page.

**POST /auth/register** :- for registering a user to use this API, the body of the request must be in JSON, with username and password as a key and value pair.

**POST /auth/login** :- for login to this API, the request body must be in JSON, with username and password as a key and value pair. The response of the endpoint will have a toke, which can be used in accessing protected endpoints.

-----


**Endpoints that require authentication** :-

**POST /auth/api/** :- for adding a book,the body of the request should be in JSON, with title, author, and genre as a key and value pair.

**PATCH /auth/api/id/:id** :- for updating an existing book with the mentioned id.

**DELETE /auth/api/id/:id** :- for deleting a book with the mentioned id.

----

## Critical Evaluation


- Defining the endpoints and the connection to the database was done quickly. Creation of the data access layer was also done swiftly as I already knew the basics of SQL,
but the jwt authentication and providing different access to different endpoints was a bit challenging for me, 
then I researched and understood how the jwt authentication works and then added it to this API.

- I did not have any prior experience with frontend development but had a basic knowledge of HTML. I used the fetch API to access the backend endpoints and this was done in the estimated time, but I had a tough time working with the Alpine js framework,
this took me a lot of time and then I decided to just work with HTML and javascript without any framework and then developed the frontend.


- Now with just the HTML, javascript, and the fetch API, I built the webpage but my webpage lacks exciting graphics and looks outdated, maybe in the future I will use other frameworks with HTML and JavaScript to enhance my web page.

- The interesting parts that I learned in this project are the jwt authentication and the fetch API.

----

**Important Notes** :- 

- Url to the active github repository of this project :- https://github.com/umamohams/LibraryApp

- To login as a librarian the credentials are :- 
username = "umar" and
password = "india" .




