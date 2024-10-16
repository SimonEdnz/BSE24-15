[![Netlify Status](https://api.netlify.com/api/v1/badges/6bcac520-5571-4aad-b121-9656df4462fc/deploy-status)](https://app.netlify.com/sites/letschat-frontend/deploys)

# Chat application written in react js, redux, nodejs, sass, mysql and prisma .

### LetsChat is an online messaging platform that allows you to connect and communicate with a diverse group of users who are available on the platform at any given time.

To get started, you need to have Node.js installed on your machine. If it's not, you can download and install it from [nodejs.org](https://nodejs.org).

## Get started with frontend (client)

- To run the frontend first install dependencies by running `npm install` in the **client** directory.
- To start the frontend run `npm run dev`.

## Get started with backend (server)

- To run the backend first install dependencies by running `npm install` in the **server** directory.
- To start the backend run `npm run server`.

## Environment variables setup

In order to fully setup backend, you need to add following environment variables to your .env file

### General env vars

- `JWT_SECRETE_TOKEN` is the jsonwebtoken secret.
- `DATABASE_URL` is the url to your database. For this project the database is mysql.
- `PRODUCTION_URL` is obtained deploying the frontend
- afterwards connect frontend

### Firebase config env vars

- `API_KEY `
- `AUTH_DOMAIN`
- `PROJECT_ID`
- `STORAGE_BUCKET`
- `MESSAGING_SENDER_ID`
- `APP_ID`
- `MEASUREMENT_ID`

To generate your own Firebase Cloud storage config variables follow this [article](https://javascript.plainenglish.io/uploading-an-image-to-firebase-cloud-storage-and-returning-url-with-express-nodejs-713daac7a5d4).

### Known issues (work in progress)

This project is still on going. Some features have not been implemented yet

exercise 3 
deploying and autobuild 


// IMPORTANT COMMNANDS 

// INITIALIZE PRISMA
// npx prisma init --datasource-provider postgresql
// npx prisma init --datasource-provider mysql

// APPLY CHANGES TO ACTUAL DATABASE 
// npx prisma migrate dev --name test1

// GENERATE THE CLIENT TO INTERACT WITH THE DATABASE
// npx prisma generate

// TO EXPLORE AND MANUPLATE DATA USE PRISMA STUDIO
// npx prisma studio
