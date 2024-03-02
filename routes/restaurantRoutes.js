import express from "express";
import { handleGetAllRestaurants, handleAddRestaurant,handleGetByTag,  handleGetByCity} from "../controllers/restaurantController.js"

const router = express.Router();


router.get("/restaurant/all", handleGetAllRestaurants);
router.post("/restaurant/add", handleAddRestaurant);
router.get("/restaurant/getByCity", handleGetByCity)
router.get("/restaurant/getByTag", handleGetByTag)
export default router;