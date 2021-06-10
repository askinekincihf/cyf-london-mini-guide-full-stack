const express = require("express");
const app = express();
const cors = require("cors");
const db = require("./data/index.js");
const routerHandler = require("./routes");

app.use(cors());
app.use("/", routerHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
