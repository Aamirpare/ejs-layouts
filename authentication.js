/*
    Author      : Aamir Pare
    Description : The trivial authentication based on a flag isAuthenticated.
                  The authRouter short circuits the middleware middleware pipeline
                  if the isAuthentication is false, otherwise calls the next middleware
                  function in the pipleline.
    Location    : G-11/4 Home, Islamabad
    Date        : 5th November, 2023 
    Contact     : 92-300-5345391
    Email       : aamirpare@gmail.com
*/
const express = require("express");
const authRouter = express.Router();

const isAuthenticated = false;


authRouter.get("/signin", (req, res)=>{
    if(isAuthenticated){
        res.redirect("/");
    }
    else{
        res.render("authentication/signin", {username: "anonymous"});
    }
});

//authentication middleware
authRouter.use((req, res, next)=>{
    if(!isAuthenticated){
        //res.render("authentication/signin", {username: "anonymous"});
        res.redirect("/signin");
    }
    else{
        next();
    }
});

module.exports = authRouter;