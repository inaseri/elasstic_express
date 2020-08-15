const bodyParser = require("body-parser");
const express = require("express");

const app = express();

// parse requests of content-type: application/json
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

const sourceTypeRoute = require('./app/routes/source_type/source_type.route');

app.use('/api/source_type', sourceTypeRoute);

app.listen(3000, () => {
    console.log("Server is running on port 3000.");
});
