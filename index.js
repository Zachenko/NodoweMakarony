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
        title: "chefs | Makaron",
        names: [
            {
                name: "Thomas McNaughton",
                fp: "Thomas McNaughton (born October 9, 1983) is an American chef, restaurateur, and cookbook writer.",
                sp: "He is the chef and owner of Flour + Water, Penny Roma and Flour + Water Pasta Shop in San Francisco, California."
            },
            {
                name: "Fabio Viviani",
                fp: "Fabio Viviani (born October 10, 1978, in Florence, Italy) is a chef, restaurateur, and cook book writer who has appeared on reality television.",
                sp: "In 2008 he appeared on the reality television competition series Top Chef, where he was voted the \"fan favorite\"; since then he has had a second career as a television host, on-air personality and product pitchman."
            },
            {
                name: "Giorgio Locatelli",
                fp: "Giorgio Locatelli is a famous Italian chef, author of the bestselling culinary book “Made in Italy”, owner of Locanda Locatelli - the most famous Italian restaurant outside Italy.",
                sp: "Locanda Locatelli is not the only restaurant by Giorgio Locatelli. The other, Locatelli’s Pizza, is located near the American city of Houston.",
                tp: "Another one - Ronda Locatelli - operates at the Atlantis The Palm resort, located on The Palm Jumeirah - a fantastic artificial island in the city of Dubai.."
            },
            {
                name: "Massimo Bottura",
                fp: "Massimo Bottura (Italian pronunciation: [ˈmassimo botˈtuːra]; born 30 September 1962) is an Italian restaurateur and the chef patron of Osteria Francescana, a three-Michelin-star restaurant based in Modena, Italy.",
                sp: "It has been ranked No.1 on The World's 50 Best Restaurants list twice and is currently part of the Best of the Best list."
            },
        ]
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