const express = require('express');
const {getFunction,aboutFunction,patchFunction,putFunction,deleteFunction,postFunction, promiseResolve} = require('../controllers/controller');
// const { auth } = require('../midleware/midleware');

// example for ES6 Comman module
// import { auth } from '../midleware/midleware'


// MVC, routing, middleware, and controllers
// Create RESTful APIs
const route = express.Router()



// How do you define a route for a specific HTTP method (GET, POST, etc.) in Express.js?
route.get('/cc/v1/test', getFunction)
route.get('/cc/v1/about', aboutFunction)
route.post('/cc/v1/post', postFunction)
route.put('/cc/v1/put/:id', putFunction)
route.patch('/cc/v1/patch/:id', patchFunction)
route.delete('/cc/v1/delete/:id', deleteFunction)

route.get('/cc/v1/promise-resolve', promiseResolve)

module.exports = route;