import dotenv from "dotenv";
import morgan from "morgan";
import express from "express";
import cors from "cors";
import connectDB from "./utils/connectDB.js";
import restaurantRoutes from "./routes/restaurantRoutes.js"

dotenv.config();
const app = express();
app.use(cors({origin: "*"}));
app.use(morgan("dev"));
app.use(express.json());


app.use("/miniYelp", restaurantRoutes)

connectDB();

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT}`);
});
