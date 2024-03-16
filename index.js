const express = require("express");
const app = express();
const cors = require("cors");

//import routes
const authRoute = require("./routes/auth");
app.use(express.json());
app.use(cors());

//Router Middleware

app.use("/api/", authRoute);

app.listen(4000, () => console.log("Server up and running"));
