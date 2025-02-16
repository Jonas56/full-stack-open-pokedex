const express = require("express");
const app = express();

// Heroku dynamically sets a port
// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 5000;

app.use(express.static("dist"));

app.get("/version", (req, res) => {
  res.send("1.1.0"); // change this string to ensure a new version deployed
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`server started on port ${PORT}`);
});
