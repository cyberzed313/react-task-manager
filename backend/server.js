const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 5000;

//Middleware 
app.use(cors());
app.use(express.json()); //To parse json requests


//Test route
app.get('/', (req, res) => {
    res.send("Hello from the backend");
});


//Start Sever

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});