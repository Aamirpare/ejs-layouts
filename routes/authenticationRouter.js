/*
    Author      : Aamir Pare
    Description : The trivial authentication based on a flag isAuthenticated.
                  The authRouter short circuits the middleware pipeline
                  if isAuthentication is false, otherwise calls the next middleware
                  function to proceed in the pipleline.
    Location    : G-11/4 Home, Islamabad
    Date        : 5th November, 2023 
    Contact     : 92-300-5345391
    Email       : aamirpare@gmail.com
*/
const express = require("express");
const authRouter = express.Router();

let isAuthenticated = false;

//Redirect to the index view if user is authenticated 
//otherwise show the signin view

authRouter.get("/signin", (req, res)=>{
    if(!isAuthenticated){
        res.render("authentication/signin", {username: "anonymous"});
    }
    else{
        res.redirect("/");
    }
});

authRouter.post("/signin", (req, res)=>{
    const username = req.body.username;
    const password = req.body.password;
    if(username == 'vehicle@park' && password == 'lb294'){
        isAuthenticated = true;
        res.redirect("/");
    }
});

authRouter.get("/signout", (req, res)=>{
    isAuthenticated = false;
    res.redirect("/");
});

//This middleware authenticates each request except the above signin get request. 
//It redirects to the signin view if the
//user is not signed in, in this case isAuthenticated is false. Otherwise it 
//call the next() middleware function.
authRouter.use((req, res, next)=>{

    if(!isAuthenticated){
        //res.render("authentication/signin", {username: "anonymous"});
        res.redirect("/signin");
    }
    else{
        next();
    }
});

getAuthenticationState = () => isAuthenticated;
module.exports = {authRouter, getAuthenticationState};