const express = require("express");
const exHb = require("express-handlebars");
const app = express();
const port = process.env.PORT || 3000;

app.engine("handlebars", exHb.engine({defaultLayout: "main"}))
app.set("view engine", "handlebars");
app.use(express.static("public"));

app.get("/home", (req, res) => {
    res.render("home", {
        title: "home | Makaron",
        makaron: [
            {
                title: "bolognese"
            },
            {
                title: "zupa pomidorowa z makaronem"
            },
            {
                title: "szpiniak z makaronem"
            },
            {
                title: "makaron z suszonymi pomidorami"
            },
            {
                title: "carbonara"
            },
            {
                title: "lazania"
            },
            {
                title: "makaron z serem"
            },
            {
                title: "salatka z makaronem"
            }
        ]
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