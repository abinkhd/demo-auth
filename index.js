const express = require("express");
const app = express();
const cors = require("cors");

//import routes
const authRoute = require("./routes/auth");
app.use(express.json());
app.use(cors());

//Router Middleware

app.use("/api/", authRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
