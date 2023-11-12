/*
    Author      : Aamir Pare
    Description : The router that exposes the routes 
                  that can be accessed by a general user
    Location    : G-11/4 Home, Islamabad
    Date        : 12th November, 2023 
    Contact     : 92-300-5345391
    Email       : aamirpare@gmail.com
*/

const express = require("express");
const publicRouter = express.Router();

publicRouter.get("/", (req, res)=>{
    const locals = {
        title : "Page Title",
        description : "Page Description",
        header : "Page Header"
    }
    res.render("../views/index", locals);
});

publicRouter.get("/services", (req, res)=>{
    res.render("../views/services");
});

publicRouter.get("/about", (req, res)=>{
    res.render("../views/about");
});

module.exports = publicRouter;

