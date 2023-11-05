const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const authRouter = require("./authentication.js");
const app = express();

//Configuring view enging ejs
app.set("view engine", "ejs");

//using expressLayouts middleware
app.use(expressLayouts);

//Configuring custom layout folder
app.set("layout", "layouts/layout");

//Using static resources like style.css
app.use(express.static("views"));

//Authentication middleware
app.use(authRouter);

app.get("/", (req, res)=>{
    const locals = {
        title : "Page Title",
        description : "Page Description",
        header : "Page Header"
    }
    res.render("index", locals);
});

app.get("/services", (req, res)=>{
    res.render("services");
});

app.get("/about", (req, res)=>{
    res.render("about");
});

app.listen(3000, ()=>{
    console.log("Server is listening on port: 3000");
});
