# LAB - Class 04

## Project: api-server

### Author: Jeremy Penning

### Links and Resources

- [CI/CD](https://github.com/jeremyp-401-advanced-javascript/api-server/actions) (GitHub Actions)
- [Back-end Application](https://jeremyp-api-server.herokuapp.com/)
- API Endpoints - Relative to Back-end Application URL above.

---

### API Endpoints - Drinks

#### **POST /drinks** - (Make a taco)

**Required Parameters:**

>Request Body:
>- name - _String_
>- type - _String_  
>- size - _String_  

#### **GET /drinks** - (Get all drinks)

>_No additional data needed_

#### **GET /drinks/:id** - (Gets one drink)

**Required Parameters:**

>Query:  
>- :id - _Number_  

#### **PUT /drinks/:id** - (Update a drink)

**Required Parameters:**

>Query:  
>- :id - _Number_

>Request Body:  
>- name - _String_  
>- type - _String_  
>- size - _String_  

#### **DELETE /drinks/:id** - (Deletes one drink)

**Required Parameters:**

>Query:  
>- :id - _Number_  

---

### API Endpoints - Tacos

#### **POST /tacos** - (Make a taco)

**Required Parameters:**

>Request Body:
>- name - _String_  
>- type - _String_  
>- size - _String_  

#### **GET /tacos** - (Get all tacos)

>_No additional data needed_

#### **GET /tacos/:id** - (Gets one taco)

**Required Parameters:**

>Query:  
>- :id - _Number_  

#### **PUT /tacos/:id** - (Update a taco)

**Required Parameters:**

>Query:  
>- :id - _Number_

>Request Body:  
>- name - _String_  
>- type - _String_  
>- size - _String_  

#### **DELETE /tacos/:id** - (Deletes one taco)

**Required Parameters:**

>Query:  
>- :id - _Number_  

---

### Setup

#### `.env` requirements

- `PORT` - Port Number
- `MONGODB_URI` - Mongo DB Connection String

#### How to initialize/run the application

To run application:

`npm start`

#### Tests

To run tests:

`npm test`
