const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const app = express();

app.set("view engine", "ejs");
app.use(expressLayouts);
//setting custom layout folder
app.set("layout", "layouts/layout");

app.use(express.static("views"));

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