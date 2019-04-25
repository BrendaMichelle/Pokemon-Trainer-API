var express = require("express");
var app = express();
var trainerRoutes = require("./routes/trainerRoutes");
var port = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/trainers", trainerRoutes);

app.listen(port, () => console.log(`Listening on port ${port}`));
