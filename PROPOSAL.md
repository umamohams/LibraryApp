## Web Application Concept

Web applications have two levels of program and work in a combination, the first level is the server-side program (PHP, express.js and Java) which is used to handle the storage and retrieval of the information and the second level is the client-side program (JavaScript and HTML) which is used to present the information to users.

## REST API Concept

A REST API is an application programming interface that sticks to the constraints and architectural style of Representational State Transfer (REST). RESTful APIs aim to expose data models and functionality in a standardized way by following REST rules and guidelines.

## REST API Endpoints

A web application with REST API endpoint design does the CRUD (Create, Read, Update, Delete) operations.

We can use the HTTP method to perform actions on the resources:- 

#### GET :- used to retrieve the information.

#### POST :- used to add the information.

#### UPDATE :- used to update the information (completely).

#### PATCH :- used to update the information (partially).

#### DELETE :- used to remove the information.

---
## HTTP Response Codes

HTTP response codes are an important part of REST API design. They provide valuable information to clients about the status of a request.

#### 200 OK - the request was successful and the response contains the requested data.

#### 201 Created - the request was successful and a new resource was created.

#### 400 Bad Request - the request was invalid or missing required parameters.

#### 401 Unauthorized - the client needs to authenticate to access the resource.

#### 404 Not Found - the requested resource was not found.

#### 500 Internal Server Error - an unexpected error occurred on the server.

-----

## Project Plan


|                                        |                                        |                                       |
| -------------------------------------- | -------------------------------------- | --------------------------------------|
| **Task**                               | **Description**                        | **Deadline**                          |
| Planning                               | Read and understand the project requirements. Plan a solution, that fulfills the requirements |   15th April 2024 |
| Designing | Make a design outline that compromises the API components and how those are connected | 19th April 2024|
| Setting up the environment | Identify the technologies that are needed for this project and install those in the environment | 22nd April 2024 |
| Backend development | defining the endpoints and establishing a connection with the database | 1st May 2024 |
| Add Authentication | Add the jwt authentication with login and classify the endpoints with the level of access | 6th May 2024 |
| Backend testing | Test the backend and the CRUD operation | 9th May 2024 |
| Frontend Development | creating a frontend interface using HTML and fetch API which connects the backend server| 15th May 2024 |
| Frontend Test | Test the frontend mainly the layout and the graphic components | 18th May 2024 |
| Integration Test | Do an integration test that tests the frontend, the backend and the connection between them | 21st May 2024 |
| Documentation | Document the endpoints of the API and the response status codes | 24th May 2024 |

-------