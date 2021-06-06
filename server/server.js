const express = require("express");
const app = express();
import cors from "cors"

const corsOption = () => {
    origin: "http://localhost:3000/"
}

app.use(cors(corsOption));

app.get("/", (req, res) => {
    res.send("Hello World")
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`))