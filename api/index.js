const app = require('express')();

const accomodations = require("./data/accomodations.js");

const populars = require("./data/populars.js");

const activities = require("./data/activities.js");

const port = 3001;

const cors = require('cors');

app .use(cors({
  origin: 'http://localhost:3000',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true
}))

app.use(require('express').json())

app.get("/api/accommodations", (req, res) => {
    res.status(200).json({ accomodations });
});

app.get("/api/populars", (req, res) => {
  res.status(200).json({ populars });
});

app.get("/api/activities", (req, res) => {
  res.status(200).json({ activities });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
});

module.exports = app;