# Sezzle Calculator


_A Calculator App developed for Sezzle_

[Launch Heroku App Here](https://aqueous-meadow-04511.herokuapp.com/)


**Tools Used**

JavaScript

Node.js

NPM Modules: _body-parser, dotenv, ejs, express, mongoose_

MongoDB

HTML + CSS

Heroku


**Project**

A basic calculator application that stores all calculations in a MongoDB database via Mongoose.js. The user is able to see the last 10 calculations made on the calculator as well as clear the entire database to start from scratch. 

_Made for Sezzle (using their color scheme)_

_Sezzle Calculator Screen Shot_
![calculator screenshot](https://github.com/mmeadx/sezCalc/blob/main/screenshots/calcScreenShot.png)


------------------

Using MongoDB and Mongoose.js - the app is able to pull from and update the CalcDB collection.


_MongoDB Database to store calculations_
![MongoDB Database](https://github.com/mmeadx/sezCalc/blob/main/screenshots/MongoDB.png)

------------------------------

_The Mongoose code used to grab the most recent 10 calculations_
![Last 10 Code](https://github.com/mmeadx/sezCalc/blob/main/screenshots/tenPrevious.png)


Any user that logs on to the app will be able to see the most recent calculations made in order of most recent. 


_How it appears in the app_
![Last 10 Calculations](https://github.com/mmeadx/sezCalc/blob/main/screenshots/LastTen.png)

--------------------------

**Launching the App Locally**

_Pre-requisites : Must have Node.js and npm installed as well as a MongoDB Atlas account with a database named 'CalcDB' and a collection named 'calculations'_

1. Clone Git Repo

2. From project folder terminal - _npm install_

3. Create .env file and include 'API_PASS= {Your MongoDB Password}'

4. On line 18 of the app.js file you must change the admin name to your own

5. From project folder terminal - _nodemon app.js_

6. Go to browser - _localhost:3000_