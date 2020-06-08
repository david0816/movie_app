import React from "react";
import PropTypes from "prop-types";

function Food({ name, picture, rating }) {
  return (
    <div>
      <h1>I love {name}</h1>
      <img src={picture} alt={name} />
      <h4>{rating}/5.0</h4>
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number,
};

const foodIlike = [
  {
    id: 1,
    name: "Kimchi",
    image:
      "https://www.thespruceeats.com/thmb/gqJ0irQmKyBlRujeZh_DtUg79o0=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/kimchi-dish-served-on-a-white-plate-173021127-588b8a945f9b5874ee55f535.jpg",
    rating: 4.8,
  },
  {
    id: 2,
    name: "Samgyeopsal",
    image:
      "https://mp-seoul-image-production-s3.mangoplate.com/added_restaurants/575388_1467602071629255.jpg?fit=around|512:512&crop=512:512;*,*&output-format=jpg&output-quality=80",
    rating: 5,
  },
  {
    id: 3,
    name: "Curry",
    image:
      "https://data.thefeedfeed.com/static/2019/10/29/15723754635db88ba74b7c6.jpg",
    rating: 4.6,
  },
  {
    id: 4,
    name: "Ramen",
    image:
      "https://www.theflavorbender.com/wp-content/uploads/2019/01/Easy-Chicken-Ramen-The-Flavor-Bender-6084.jpg",
    rating: 4.3,
  },
];

function App() {
  return (
    <div>
      {foodIlike.map((dish) => (
        <Food
          key={dish.id}
          name={dish.name}
          picture={dish.image}
          rating={dish.rating}
        />
      ))}
    </div>
  );
}

export default App;
