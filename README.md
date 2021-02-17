# Sezzle Calculator


_A Calculator App developed for Sezzle_

[Launch Heroku App Here](https://aqueous-meadow-04511.herokuapp.com/)



**Description of Project**

A basic calculator application that stores all calculations in a MongoDB database via Mongoose.js - created for Sezzle. 

![calculator screenshot](https://github.com/mmeadx/sezCalc/blob/main/screenshots/calcScreenShot.png)


------------------

_MongoDB Database to store calculations_
![MongoDB Database](https://github.com/mmeadx/sezCalc/blob/main/screenshots/MongoDB.png)


_The code used to grab the most recent 10 calculations_
![Last 10 Code](https://github.com/mmeadx/sezCalc/blob/main/screenshots/tenPrevious.png)


_How it appears in the app_
![Last 10 Calculations](https://github.com/mmeadx/sezCalc/blob/main/screenshots/LastTen.png)


**Launching the App Locally**

_Pre-requisites : Must have Node.js and npm installed_

1. Clone Git Repo

2. From project folder terminal - _npm install_

3. Create .env file and include API_PASS= {Your MongoDB Password}

4. From project folder terminal - _nodemon app.js_

5. Go to browser - _localhost:3000_