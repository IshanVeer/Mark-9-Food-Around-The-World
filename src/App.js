import { useState } from "react";
import "./styles.css";

var foodDB = {
  Mughlai: [
    { name: "Biryani", rating: "5/5" },
    { name: "Korma", rating: "4.5/5" },
    { name: "Kebab", rating: "4.5/5" }
  ],

  Indian: [
    { name: "Butter Chicken", rating: "4.5/5" },
    { name: "Palak Paneer", rating: "4.5/5" },
    { name: "Dosa", rating: "4.3/5" }
  ],

  continental: [
    { name: "Pizaa", rating: "5/5" },
    { name: "pasta", rating: "4/5" },
    { name: "custard", rating: "4.6/5" }
  ],

  japanese: [
    { name: "Ramen", rating: "4/5" },
    { name: "Sushi", rating: "4.5/5" },
    { name: "Pickle", rating: "3/5" }
  ]
};

var allPlace = Object.keys(foodDB);

export default function App() {
  var [cuisine, setCuisine] = useState([]);

  function clickHandler(state) {
    var userInput = foodDB[state];
    setCuisine(userInput);
  }

  return (
    <div className="App">
      <h1 className="heading">🍕 Food Around The World</h1>
      <p className="description">
        Checkout the kind of food different countries offer.
      </p>
      <div>
        {allPlace.map((state) => {
          return (
            <button
              className="btn"
              key={state}
              onClick={() => clickHandler(state)}
            >
              {state}
            </button>
          );
        })}
      </div>
      <div>
        {cuisine.map((item) => {
          return (
            <div className="text-area">
              <p className="name">{item.name}</p>
              <p className="rating">{item.rating}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
