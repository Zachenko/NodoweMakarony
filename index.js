const exporess = require("express");
const exHb = require("express-handlebars");
const app = exporess();
const port = process.env.PORT || 8080;

app.engine("handlebars", exHb.engine({defaultLayout: "main"}))
app.set("view engine", "handlebars");
app.use(exporess.static("public/css"));

app.get("/", (req, res) => {
    res.render("home", {
        title: "Documentik",
        content: "BODY"
    })
})

app.listen(port, () => {
    console.log(`Serwer wystartował na porcie ${port}`)
});