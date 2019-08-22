const express = require("express");
const app = express();
const routes = require('./routes')

const port = 3000

// Load all routes
routes.forEach(route => {
    route(app);
});

// Start the app
app.listen(port, () => {
 console.log("Server running on port " + port);
});
