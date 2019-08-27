const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require("mongoose")
const routes = require("./routes/apiroutes.js")
// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes)
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
mongoose.connect("mongodb://heroku_gk521vrp:jp0417a0tmsmvpdvcs84n20g9c@ds353457.mlab.com:53457/heroku_gk521vrp" || "mongodb://localhost/googlebooks", { useNewUrlParser: true });


// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
