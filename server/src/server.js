const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const PORT = process.env.PORT || 8000
app.use(bodyParser.json());

app.get("/hello", (req,res) => res.send("Hello"));
app.get("/hello/:name", (req,res) => res.send(`Hello ${req.params.name}`));


app.get("/api/articles/:name",(req,res) => {
    const articleName = req.params.name;
})


app.post("/api/article/:name/add-comments", (req,res) => {
    const {username, text} = req.body;
    const articleName = req.params.name;

    articlesInfo[articleName].comments.push({username,text});
res.status(200).send(articlesInfo[articleName]);
})

app.listen(PORT,() => console.log(`Listinening on PORT ${PORT}`));