const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

app.set("port", process.env.PORT || 3001);

app.locals.title = "ArtistsCocktails";

app.locals.artists = [
  {
    id: 1,
    artist_name: "Jackson Pollock",
    born: "1/28/1912",
    died: "8/11/1956",
    painting_title: "One: Number 31, 1950",
    painting_image:
      "https://www.moma.org/media/W1siZiIsIjQ3ODMxNyJdLFsicCIsImNvbnZlcnQiLCItcXVhbGl0eSA5MCAtcmVzaXplIDIwMDB4MTQ0MFx1MDAzZSJdXQ.jpg?sha=a14bf0bde92badff",
    artist_fact:
      "In 1947, Pollock applied for a fellowship from the Guggenheim Foundation, but was rejected.",
    style: "Abstract Expressionism",
    painting_year: 1950,
    favorite_liquor: "All",
    main_cocktail_liqour: "Gin",
    cocktail_name: "The Jackson Pollock Cocktail",
    artist_liquor_fact:
      "Pollock had a trouble with alcohol, rather than drinking like Pollock, perhaps have a drink inspired by his work.",
    ingredients:
      "1.75 oz gin, 0.75 oz fresh grapefruit juice, 0.75 oz simple syrup, 1 tbsn sparkling wine, 3 drops of chilled basil oil to garnish",
    instructions:
      "Pre-chill a cocktail glass by placing it into the freezer for 5 minutes. Add 3 drops of the basil oil into the prepared glass and then set aside. Place the gin, grapefruit juice and simple syrup into a cocktail shaker filled with ice. Vigorously shake the mixture for 35 seconds and then add the sparkling wine. Strain the mixture into the prepared cocktail glass and then serve immediately.",
    cocktail_image:
      "https://summitsips.com/wp-content/uploads/2010/09/jackson-pollock.jpg",
  },
  {
    id: 2,
    artist_name: "",
    born: "",
    died: "",
    painting_title: "",
    painting_image: "",
    artist_fact: "",
    style: "",
    painting_year: ,
    favorite_liquor: "",
    main_cocktail_liqour: "",
    cocktail_name: "",
    artist_liquor_fact: "",
    ingredients: "",
    instructions:"",
    cocktail_image: "",
  },
];
