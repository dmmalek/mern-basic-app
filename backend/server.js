import express from "express";
import { connectDB } from "./config/db.js"
import dotenv from "dotenv"
import productRoute from "./routes/product.route.js"

dotenv.config();

const app = express();
app.use(express.json());

app.use("/api/products", productRoute);

app.listen(5001, function (err) {
    connectDB();
    if (err) console.log("Error in server setup")
    console.log("Server listening on Port 5001");
})
