const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const {authRouter, getAuthenticationState} = require("./routes/authenticationRouter.js");
const publicRouter = require("./routes/publicUserRouter.js");
const app = express();
const PORT = 3000;

//this method is called in navigation.ejs to check authentication state.
app.locals.getAuthState = getAuthenticationState;

//Configuring view enging ejs
app.set("view engine", "ejs");

//using expressLayouts middleware
app.use(expressLayouts);

//Configuring custom layout folder
app.set("layout", "layouts/layout");

//Using static resources like style.css
app.use(express.static("views"));

//to read req.body, add the following middleware because node doesn't read it bydefault.
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(publicRouter);

//Authentication middleware
//The middleware order is very important, placing authRouter middleware 
//down the routes in app.js will bybass all the routes above it, means 
//no authtication will be applied for the routes above the authRouter.

app.use(authRouter);

//To apply a specific layout to the view/page
app.get("/admin", (req, res)=>{
    //evaluate view uses the adminLayout. 
    //layout:false can be used in case layout is not required. 
    res.render("evaluate", {layout: 'layouts/adminLayout'});
    //res.render("evaluate");
});

app.listen(PORT, ()=>{
    console.log("Server is listening on port: 3000");
});
