const exporess = require("express");
const exHb = require("express-handlebars");
const app = exporess();
const port = process.env.PORT || 8080;

app.engine("handlebars", exHb.engine({defaultLayout: "main"}))
app.set("view engine", "handlebars");
app.use(exporess.static("public/css"));

app.get("/home", (req, res) => {
    res.render("home", {
        title: "home | Makaron",
        content: "BODY",
        port: port,
        nums: ["one", "two", 3, "4otyry"]
    })
});

app.get("/menu", (req, res) => {
    res.render("menu", {
        title: "menu | Makaron"
    })
});

app.get("/shop", (req, res) => {
    res.render("shop", {
        title: "shop | Makaron"
    })
});

app.get("/recipes", (req, res) => {
    res.render("recipes", {
        title: "recipes | Makaron"
    })
});

app.get("/chefs", (req, res) => {
    res.render("chefs", {
        title: "chefs | Makaron"
    })
});

app.get("/contact", (req, res) => {
    res.render("contact", {
        title: "contact | Makaron"
    })
}); 

app.listen(port, () => {
    console.log(`Serwer wystartował na porcie ${port}`)
});