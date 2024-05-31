require('dotenv').config();
const express = require('express');
const app = express();
const routes = require('./routes');
const authRoutes = require('./auth_routes');
const authorize = require('./authorize.js');
const login = require('./login.js')
app.use(express.json());
app.use(express.urlencoded({extended:true}));
global.id = 0;
app.use('/auth',login);
app.use('/auth/api', authorize, authRoutes);
app.use('/api', routes);
app.use(express.static('app'));
app.listen(process.env.PORT, () => {
    console.log(`server on port ${process.env.PORT}`)
   });