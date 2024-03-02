import Restaurant from "../models/restaurantModel.js";

export const handleGetAllRestaurants = async (req, res) => {
  try {
    console.log("this is all Restaurants");

    const allRestaurants = await Restaurant.find();
    console.log("restaurants", allRestaurants);

    res.send({ success: true, allRestaurants });
  } catch (error) {
    console.log("error in get all restaurants", error.message);

    res.status(500).send({ success: false, error: error.message });
  }
};

export const handleAddRestaurant = async (req, res) => {
  try {
    console.log("this is add restaurant", req.body);

    const restaurant = await Restaurant.create({
        name: req.body.name,
        image_URL: req.body.image_URL,
        location: {
          address: req.body.location.address,
          city: req.body.location.city,
          state: req.body.location.state,
          zip_code: req.body.location.zip_code,
        },
        tags: req.body.tags,
        rating: req.body.rating,
        reviews: req.body.reviews.map(review => ({
          id: review.id,
          user_id: review.user_id,
          text: review.text,
          rating: review.rating,
        })),
      });

    res.send({ success: true });
  } catch (error) {
    res.status(500).send({ success: false, error: error.message });
  }
};


export const handleGetByCity = async (req, res) => {
    try {
        console.log("get one restaurant", req.query);

        const restaurant = await Restaurant.find({"location.city": new RegExp(req.query.city, 'i')});
        console.log("restaurant", restaurant);
        res.send(restaurant);
    } catch (error) {
        console.log("error in get one post: ", error.message);

        res.status(500).send({success: false, error: error.message});
    }
}
export const handleGetByTag = async (req, res) => {
    try {
        console.log("get one restaurant", req.query);

        const restaurant = await Restaurant.find({"tags": new RegExp(req.query.tag, 'i')});
        console.log("restaurant", restaurant);
        res.send(restaurant);
    } catch (error) {
        console.log("error in get one post: ", error.message);

        res.status(500).send({success: false, error: error.message});
    }
}
