import express from "express";
import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
  
  user_id: { type: String, required: true },
  text: { type: String, required: true },
  rating: { type: Number, required: true },
});

const locationSchema = new mongoose.Schema({
  address: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  zip_code: { type: String, required: true },
});

const restaurantSchema = new mongoose.Schema({
  
  name: { type: String, required: true },
  image_URL: { type: String, required: true },
  location: { type: locationSchema, required: true },
  tags: [{ type: String }],
  rating: { type: Number, required: true },
  reviews: [reviewSchema],
});

const Restaurant = mongoose.model("Restaurant", restaurantSchema);

export default Restaurant