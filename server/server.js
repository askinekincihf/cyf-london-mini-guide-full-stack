const express = require("express");
const path = require("path");
// const bodyParser = require("body-parser");
const routesHandler = require("./routes/handler");

const app = express();
app.use("/", routesHandler);

// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));


if(process.env.NODE_ENV === "production"){
    // set static folder
    app.use("/", express.static("client/build"));
    app.get("*",(req,res) => {
        res.sendFile(path.resolve(__dirname, "client","build","index.html"))
    })
}