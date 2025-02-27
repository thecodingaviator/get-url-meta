"use strict";

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const urlMetadata = require("url-metadata");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get("/api/getMeta", (req, res) => {
  urlMetadata("https://google.com").then(
    function(metadata) {
      res.json(JSON.stringify(metadata));
    },
    function(error) {
      res.status(404).json({ message: error });
    }
  );
});

app.get("/api/getMeta/:url", (req, res) => {
  var url = req.params.url;
  const regex = /&\;/gi;
  url = url.replace(regex , '/')
  urlMetadata("https://" + url).then(
    function(metadata) {
      res.json(metadata);
    },
    function(error) {
      res.status(404).json({ message: error });
    }
  );
});

const hostname = "localhost";
const port = process.env.PORT || 9000;

app.listen(port, () => {
  console.log("Running on", port);
});
