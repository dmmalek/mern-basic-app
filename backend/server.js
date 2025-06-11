import express from "express";


const app = express();

app.get("/", (req, res) => {
    res.send('Now built a crud app')
})

app.listen(5001, function (err) {
    if (err) console.log("Error in server setup")
    console.log("Server listening on Port 5001");
})
