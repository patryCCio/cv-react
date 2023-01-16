//jshint esversion:6
import express from "express";
import bodyParser from "body-parser";
import data from "./data.js";
import _ from "lodash";
import compression from "compression";

const app = express();

var formCorrect = { isAuthor: true, isTitle: true, isContent: true };

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));
app.use(compression());

app.get("/", function (req, res) {
  const dataBlog = data.getBlogData();
  res.render("index", { data: dataBlog });
});

app.get("/about", function (req, res) {
  res.render("about");
});

app.get("/compose", function (req, res) {
  res.render("compose", {
    isAuthor: formCorrect.isAuthor,
    isTitle: formCorrect.isTitle,
    isContent: formCorrect.isContent,
  });
});

app.get("/posts/:title", function (req, res) {
  const dataBlog = data.getBlogData();
  const requestedTitle = _.lowerCase(req.params.title);

  dataBlog.forEach((blog) => {
    const storedTitle = _.lowerCase(blog.title);

    if (storedTitle === requestedTitle) {
      res.render("post", {
        author: blog.author,
        title: blog.title,
        content: blog.content,
        date: blog.date,
      });
    }
  });
});

app.post("/compose", function (req, res) {
  formCorrect = data.checkErrors(req.body);

  let allCorrect = true;

  if (!formCorrect.isAuthor || !formCorrect.isTitle || !formCorrect.isContent) {
    allCorrect = false;
  }

  if (allCorrect) {
    let urlBad = req.body.title.toLowerCase();
    let urlGood = "";
    for (let x = 0; x < urlBad.length; x++) {
      if (urlBad[x] === " ") {
        urlGood = urlGood + "-";
      } else {
        urlGood = urlGood + urlBad[x];
      }
    }

    const title = "/posts/" + urlGood;

    data.setBlogData(req.body, title);
    res.redirect("/");
  } else {
    res.redirect("/compose");
  }
});

app.get("/contact", function (req, res) {
  res.render("contact");
});

app.get("*", function (req, res) {
  res.render("error");
});

app.listen(3000, function () {
  console.log("The server is listening at 3000");
});
