const express = require("express");
const app = express();
const cors = require("cors");
// const { request, response } = require("express");

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
      "Pollock had trouble with alcohol, rather than drinking like Pollock, perhaps have a drink inspired by his work.",
    ingredients:
      "1.75 oz Gin, 0.75 oz Fresh Grapefruit Juice, 0.75 oz Simple Syrup, 1 tbsn Sparkling Wine, To garnish 3 drops of chilled Basil Oil",
    instructions:
      "Pre-chill a cocktail glass by placing it into the freezer for 5 minutes. Add 3 drops of the basil oil into the prepared glass and then set aside. Place the gin, grapefruit juice and simple syrup into a cocktail shaker filled with ice. Vigorously shake the mixture for 35 seconds and then add the sparkling wine. Strain the mixture into the prepared cocktail glass and then serve immediately.",
    cocktail_image:
      "https://summitsips.com/wp-content/uploads/2010/09/jackson-pollock.jpg",
  },
  {
    id: 2,
    artist_name: "Frida Kahlo",
    born: "7/6/1907",
    died: "7/13/1954",
    painting_title: "The Broken Column",
    painting_image:
      "https://www.fridakahlo.org/images/paintings/the-broken-column.jpg",
    artist_fact:
      "During her life, Frida created 143 paintings including 55 self-portraits. Kahlo said, “I paint myself because I am so often alone and because I am the subject I know best.”",
    style: "Surrealism",
    painting_year: 1944,
    favorite_liquor: "Tequila",
    main_cocktail_liqour: "Tequila",
    cocktail_name: "Frida's Flowers",
    artist_liquor_fact:
      "Tequila was her favorite drink and she drank a lot of it,” said Mara Romeo Pinedo Kahlo, a grandniece who was an infant when Kahlo died in 1954.",
    ingredients:
      "2 oz Mijenta Blanco Tequila, .75 oz Strawberry or Hibiscus Syrup, 1 oz Fresh Lime Juice, .25 oz Creme De Cacao",
    instructions:
      "Shake all ingredients vigorously with plenty of ice. Strain into a coupe or martini glass. Garnish with edible flowers",
    cocktail_image:
      "https://i1.wp.com/hombre1.com/wp-content/uploads/2020/09/Mijenta-Fridas-Flowers-2-for-HOMBRE-Magazine.jpg?w=396&ssl=1",
  },
  {
    id: 3,
    artist_name: "Henri de Toulouse-Lautrec",
    born: "11/24/1864",
    died: "9/9/1901",
    painting_title: "La Toilette",
    painting_image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/%28Albi%29_Rousse_%28La_Toilette%29_-_1889_-_Henri_de_Toulouse-Lautrec_-_Mus%C3%A9e_d%27Orsay%2C_Paris.jpg/1200px-%28Albi%29_Rousse_%28La_Toilette%29_-_1889_-_Henri_de_Toulouse-Lautrec_-_Mus%C3%A9e_d%27Orsay%2C_Paris.jpg",
    artist_fact:
      "His professional life lasted only 19 years. Yet in this time he made 737 canvas paintings, 275 watercolours, 363 prints and posters, and 5,084 drawings as well as some ceramics and stained glasses, as well as, countless other pieces since lost to history.",
    style: "Post-Impressionism",
    painting_year: 1889,
    favorite_liquor: "Absinthe",
    main_cocktail_liqour: "Absinthe",
    cocktail_name: "Earthquake",
    artist_liquor_fact:
      "Toulouse-Lautrec was an alcoholic, eventually graduating from beer and wine to hard liquors such as the incredibly strong liquor absinthe. In fact, the invention of the “Earthquake” cocktail is attributed to him (don’t try this one at home).",
    ingredients:
      "1 oz Gin, 1 oz Bourbon/Whiskey, 1 oz Absinthe, Garnish with a Lemon Twist",
    instructions:
      "Pour the ingredients into a cocktail shaker. Add ice. Now, shake it. Pour it into a wine goblet. Take a swig and feel the earth shake beneath you.",
    cocktail_image:
      "https://assets-prd.punchdrink.com/wp-content/uploads/2019/06/06105327/Article-Recipe-D-List-Chantal-Tseng-Reading-Room-DC-Earthquake-Cocktail-Cognac-Absinthe-Recipe-500x688.jpg",
  },
  {
    id: 4,
    artist_name: "Joan Miró",
    born: "4/20/1893",
    died: "12/25/1983",
    painting_title: "The Tilled Field",
    painting_image:
      "https://www.guggenheim.org/wp-content/uploads/1923/01/72.2020_ph_web_2.jpg",
    artist_fact:
      "When Joan Miró was only seven years old, his career as an artist was already taking off. He generally did quite poorly in primary school, although not during the drawing classes he attended, where he already showed the signs of his ability. His earliest surviving drawings date from 1901!",
    style: "Surrealism",
    painting_year: 1924,
    favorite_liquor: "N/A",
    main_cocktail_liqour: "Scotch",
    cocktail_name: "The Joan Miro",
    artist_liquor_fact:
      "He didn’t booze or womanize; he didn’t experiment with mind-altering substances for fear of damaging his mind.",
    ingredients:
      "1 oz Dubonnet Rouge, 1 oz Grand Marnier, 1 oz Scotch, Garnish with a Cherry",
    instructions:
      "Pour all ingredients into a mixing glass filled with ice. Stir. Strain into a cocktail glass. Garnish with a red cherry.",
    cocktail_image:
      "http://epicurevietnam.com/Data/Sites/1/media/bar_club/othercities/tippling-club/poker-game-840x600.jpg",
  },
  {
    id: 5,
    artist_name: "Irina Kopelevich",
    born: "12/18/1950",
    died: "N/A",
    painting_title: "Pianist",
    painting_image:
      "https://cdn.shopify.com/s/files/1/0456/7341/4678/products/pianoplayer1_1.jpg?v=1667969516",
    artist_fact:
      "Kopelevich is quoted as saying, 'I paint because I need to paint. My tools are paper, pencils, children's finger paints, and India ink.  There is always a distance between how I want my painting to look and how it actually does. I am trying to paint music in my pictures. I am trying to freeze a moment.'",
    style: "Modern Surrealism",
    painting_year: 1999,
    favorite_liquor: "Kahlua",
    main_cocktail_liqour: "Vodka",
    cocktail_name: "White Russian",
    artist_liquor_fact:
      "Not a huge boozer, Irina Kopelevich enjoys the occasional cocktail.",
    ingredients: "2 oz Vodka, 1 oz Kahlúa, 1 splash Heavy Cream",
    instructions:
      "Add the vodka and Kahlúa to a rocks glass filled with ice. Top with the heavy cream and stir.",
    cocktail_image:
      "https://www.liquor.com/thmb/w5waIS86GoQYfr-IbLAf7o4mG1E=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__liquor__2017__12__20073201__white-russian-720x720-article-cbe4b9a832c64f8da0bb09407caefa7f.jpg",
  },
  {
    id: 6,
    artist_name: "Tom of Finland",
    born: "5/8/1920",
    died: "11/7/1991",
    painting_title: "Untitled",
    painting_image:
      "https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2013/6/18/1371553526782/Tom-of-Finland-1963-005.jpg?width=1010&quality=85&auto=format&fit=max&s=06e1e5fe8815e83fbbe04196f429732e",
    artist_fact:
      "Touko Laaksonen was raised by two schoolteachers in the small town of Kaarina, outside of Turku. He started to draw at an early age and his drawings were based on images of masculine laborers he had seen early in life. He ultimately destroyed the majority of his early work before anyone could see it.",
    style: "Homoerotic Art",
    painting_year: 1963,
    favorite_liquor: "Vodka",
    main_cocktail_liqour: "Vodka",
    cocktail_name: "Not the Purist's Vodka Martini",
    artist_liquor_fact:
      "Not much exists about Touko Laaksonen's, better known by the pseudonym Tom of Finland, drinking habits.",
    ingredients:
      "2 1/2 oz Tom of Finland Vodka, 1/2 oz Dry Vermouth, 1 dash Orange Bitters, Garnish Lemon Twist",
    instructions:
      "Add the vodka, dry vermouth and orange bitters into a mixing glass with ice and stir until very well-chilled, about 20 to 30 seconds. Strain into a chilled cocktail glass. Garnish with a lemon twist.",
    cocktail_image:
      "https://www.liquor.com/thmb/SxSP0WYHOsUN6jaHQLBsFpNMaOM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/vodka-martini-720x720-primary-7bf9f33f067c4f81b53d8f1f73bdd4a2.jpg",
  },
  {
    id: 7,
    artist_name: "Hilma af Klint",
    born: "10/26/1862",
    died: "10/21/1944",
    painting_title: "Group IV, The Ten Largest, No 2, ‘Childhood’",
    painting_image:
      "https://hilmaafklint.se/wp-content/uploads/Hak103-scaled.jpg",
    artist_fact:
      "Hilma af Klint is still often called the painter of the future. In her own will, the painter arranged that her works of art should not be exhibited to a large audience until twenty years after her death. The artist was convinced that her contemporaries would not be able to grasp the full meaning of her paintings.",
    style: "Abstract",
    painting_year: 1907,
    favorite_liquor: "N/A",
    main_cocktail_liqour: "Gin",
    cocktail_name: "Silver Bullet",
    artist_liquor_fact:
      "Although, a believer in the occult, not much informations exists about Klint's drink preferences. This drink is inspired by the occult.",
    ingredients:
      "For the colloidal silver:, 3 1/3 oz Filtered Water, 2 pieces of solid silver wire, For the Silver Bullet:, 1 1/4 oz Gin, 1/2 oz Kummel Wolfschmidt liqueur, 1/2 oz Colloidal Silver",
    instructions:
      "For the colloidal silver, place the water in a glass and cover with cling film. At opposite ends of the glass, push the silver rods through the cling film so that they are half exposed and half submerged. Attach a 6-volt battery to the exposed ends of the rods and set a timer for 30 minutes. Remove the battery and rods once time is completed and store water in a vacuum-sealed bag. Make sure silver used is solid and not plated silver. Then, combine the gin, Kummel Wolfschmidt, and colloidal silver in a bottle and store in the fridge to chill before service. Serve the mix directly from the bottle in a chilled large liqueur glass with stem.",
    cocktail_image:
      "https://munchies-images.vice.com/wp_upload/silver-bullet.jpg?crop=0.7485380116959064xw:1xh;center,center&resize=500:*",
  },
  {
    id: 8,
    artist_name: "Cindy Sherman",
    born: "1/19/1956",
    died: "N/A",
    painting_title: "Untitled #153",
    painting_image:
      "https://live.staticflickr.com/5043/5267721663_fb44143dcf_z.jpg",
    artist_fact:
      "For four decades, Cindy Sherman has probed the construction of identity, playing with the visual and cultural codes of art, celebrity, gender, and photography. She is among the most significant artists of the Pictures Generation.",
    style: "Photography",
    painting_year: 1983,
    favorite_liquor: "N/A",
    main_cocktail_liqour: "Vodka",
    cocktail_name: "Death by Chocolate Martini",
    artist_liquor_fact:
      "Known more for her art than her drinking habits, Sherman's cocktail is inspired by her work.",
    ingredients:
      "Cocoa powder for rimming, 2 oz Chocolate Liqueur, plus more for rimming, 1 oz Vodka, 1 oz Half-and-Half",
    instructions:
      "Add a few tablespoons chocolate liqueur to a small rimmed plate. Add a few tablespoons cocoa powder to another small plate and whisk briefly to break up the lumps. Dip the rim of a martini glass into the liqueur then into the cocoa. Set aside. Add the chocolate liqueur, vodka, and half-and-half to a cocktail shaker filled with ice and shake for a good 20 seconds. Pour into rimmed martini glass",
    cocktail_image:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-174913943-1509633664.jpg?crop=0.8888888888888888xw:1xh;center,top&resize=980:*",
  },
  {
    id: 9,
    artist_name: "Mickalene Thomas",
    born: "1/28/1971",
    died: "N/A",
    painting_title: "Portrait of Mnonja",
    painting_image:
      "https://live.staticflickr.com/8042/7985734078_dae61ba06d_b.jpg",
    artist_fact:
      "She painted First Lady Michelle Obama’s first individual portrait in 2008; the painting, titled Michelle O, subsequently went on view at the National Portrait Gallery.",
    style: "Mixed Media",
    painting_year: 2010,
    favorite_liquor: "N/A",
    main_cocktail_liqour: "Gin",
    cocktail_name: "Tom Collins",
    artist_liquor_fact:
      "Inspired by Thomas' mother, Sandra Bush, this cocktail will carry you back to the 70's",
    ingredients:
      "1 1/2 oz Fords Gin, 3/4 oz Fresh Lemon Juice, 1 oz Simple Syrup, 4 oz Club Soda, Garnish Orange Slice, Garnish Cherry",
    instructions:
      "Shake the first three ingredients with ice and strain into a Collins glass. Add the soda and stir. Garnish with the orange slice and cherry.",
    cocktail_image:
      "https://www.liquor.com/thmb/IXbotMUOs_v8hC-zQr_gL4UTMjg=/735x0/__opt__aboutcom__coeus__resources__content_migration__liquor__2019__04__03080950__Tom-Collins-720x720-recipe-e87bf7954cdb4438b5e8d21f568cdd6f.jpg",
  },
  {
    id: 10,
    artist_name: "Helen Frankenthaler",
    born: "12/12/1928",
    died: "12/27/2011",
    painting_title: "Round Trip",
    painting_image:
      "https://uploads6.wikiart.org/images/helen-frankenthaler/round-trip-1957.jpg",
    artist_fact:
      "Though one of the most famous Abstract Expressionist female artists, Frankenthaler disliked the idea that she would be set apart from other artists simply because she was a woman, a sentiment also echoed by Georgia O'Keeffe. In a 1962 interview, she said, 'looking at my paintings as if they were painted by a woman is superficial, a side issue.... The making of serious paintings is difficult and complicated for all serious painters.' ",
    style: "Abstract",
    painting_year: 1957,
    favorite_liquor: "N/A",
    main_cocktail_liqour: "Champagne",
    cocktail_name: "Champagne Cocktail",
    artist_liquor_fact:
      "Frankenthaler's work was effervescent, shouldn't your drink be to?",
    ingredients:
      "1 Sugar Cube, 2-3 dashes Angostura Bitters, Brut Champagne, Garnish Lemon Twist",
    instructions:
      "Place a sugar cube in a chilled champagne flute, lash it with 2 or 3 dashes of bitters, fill the glass with brut champagne, and squeeze a lemon twist on top.",
    cocktail_image:
      "https://www.acouplecooks.com/wp-content/uploads/2019/12/Champagne-Cocktail-006.jpg",
  },
  {
    id: 11,
    artist_name: "Edward Hopper",
    born: "7/22/1882",
    died: "5/15/1967",
    painting_title: "New York Movie",
    painting_image:
      "https://www.edwardhopper.net/images/paintings/newyork-movie.jpg",
    artist_fact:
      "The themes of the tensions between individuals and the conflict between tradition and progress in both rural and urban settings, are motifs that Edward Hopper always returns to. His choices of subject matter seem to have been somewhat unpredictable, since they were part of his constant battle with the chronic boredom that often stifled his urge to paint.",
    style: "Ashcan School",
    painting_year: 1939,
    favorite_liquor: "American Whiskey",
    main_cocktail_liqour: "Bourbon",
    cocktail_name: "Manhattan Nighthawk",
    artist_liquor_fact:
      "As seen in many of his paintings, Hopper did not give much thought to food or drink. Even in his Paris days he liked to keep things simple.",
    ingredients:
      "4–5 Ice Cubes, 2 oz Rye Whiskey or Bourbon, 1 oz Extra Dry Vermouth, 4 dashes Angostura Bitters, Garnish 1 Maraschino Cherry",
    instructions:
      "Put the ice cubes into a mixing glass, then add the whiskey (or bourbon), vermouth and bitters and stir. Strain into a chilled martini glass, garnish with the maraschino cherry and serve.",
    cocktail_image:
      "https://www.acouplecooks.com/wp-content/uploads/2020/03/Manhattan-Cocktail-059s2.jpg",
  },
  {
    id: 12,
    artist_name: "Gustav Klimt",
    born: "7/14/1862",
    died: "2/6/1918",
    painting_title: "The Kiss",
    painting_image:
      "https://www.gustav-klimt.com/images/paintings/The-Kiss.jpg",
    artist_fact:
      "Klimt was born in 1862 in Baumgarten, just outside Vienna, and was the second of seven children. The family lived by humble means, but Klimt’s artistic talent earned him a full scholarship to the Vienna School of Arts and Crafts aged only 14, his younger brother Ernst following suit soon after.",
    style: "Art Nouveau",
    painting_year: 1908,
    favorite_liquor: "N/A",
    main_cocktail_liqour: "Champagne",
    cocktail_name: "A Sweet Embrace",
    artist_liquor_fact:
      "Inpired by Klimt's The Kiss, A Sweet Embrace is a cocktail for those who love the idea of love.",
    ingredients:
      "1 oz Limoncello, 3 oz Champagne, 2 oz Sparkling Water, Slice of Lemon Rind, Garnish Rose Petals and Lavender Sprigs, Sugar for rim",
    instructions:
      "Rub a lemon wedge on the rim of the glass and roll in sugar. Combine Limoncello, champagne, and sparkling water. Add rose petals and a sprig of lavender for garnish.",
    cocktail_image:
      "https://www.insidetherustickitchen.com/wp-content/uploads/2018/03/limoncello-cocktail-final-2-740x1110-inside-the-rustic-kitchen.jpg",
  },
  {
    id: 13,
    artist_name: "Tamara Łempicka",
    born: "5/16/1898",
    died: "3/18/1980",
    painting_title: "Portrait of Mrs. Boucard",
    painting_image:
      "https://uploads0.wikiart.org/images/tamara-de-lempicka/portrait-of-mrs-boucard-1931.jpg!Large.jpg",
    artist_fact:
      "Tamara de Lempicka’s very first painting was a portrait of her younger sister, Adrienne. That was exactly the time where she discovered her passion for the arts as well as her skills. She produced most of her notorious paintings between the 1920s and the 1930s. It was also the period where she gained many praises and awards which were given mostly for the portraits she did of her daughter.",
    style: "Art Deco",
    painting_year: 1931,
    favorite_liquor: "Champagne",
    main_cocktail_liqour: "Champagne",
    cocktail_name: "Champagne Cosmopolitan",
    artist_liquor_fact:
      "She was a workaholic, permitting interruptions in her nine-hour painting sessions only for such necessities as champagne, a massage and a bath.",
    ingredients:
      "1 1/2 oz Vodka, 1/2 oz Triple Sec or Grand Marnier, 1/2 oz Cranberry Juice, 1/2 oz Fresh Squeezed Lime Juice, Dash Simple Syrup or Agave, Ice, 2 ounces chilled dry Champagne or Sparkling Wine",
    instructions:
      "Combine vodka, triple sec, cranberry juice, lime juice, and ice in a cocktail shaker. Shake until very cold. Taste and if the mixture seems to tart, add a dash of simple syrup or agave. Pour into a chilled martini glass then top with champagne or sparkling wine.",
    cocktail_image:
      "https://www.inspiredtaste.net/wp-content/uploads/2016/06/Best-Cosmopolitan-Cocktail-Recipe-1-1200.jpg",
  },
  {
    id: 14,
    artist_name: "René Magritte",
    born: "11/21/1898",
    died: "8/15/1967",
    painting_title: "The Son of Man",
    painting_image: "https://images.masterworksfineart.com/magritte3112-1.jpg",
    artist_fact:
      "In a scandalous subtext, alongside his professional line of work, Magritte is believed to have created forgeries of pieces by the likes of Picasso, Titian, Ernst and Chirico, as well as reproducing his own works, in what some critics consider a “subversive strategy against his official oeuvre”.",
    style: "Surrealism",
    painting_year: 1964,
    favorite_liquor: "N/A",
    main_cocktail_liqour: "Whiskey",
    cocktail_name: "One Bad Apple",
    artist_liquor_fact:
      "Magritte loved a good time and One Bad Apple is as playful as he was.",
    ingredients:
      "1 oz whiskey, 3 oz Apple Juice, 1/2 oz Honey Simple Syrup, Garnish Granny Smith Apple Slice",
    instructions:
      "Combine all ingredients, shake over ice, and add an apple slice for garnish.",
    cocktail_image:
      "https://www.texanerin.com/content/uploads/2021/10/apple-juice-cocktails-1200.jpg",
  },
  {
    id: 15,
    artist_name: "Eugene Delacroix",
    born: "4/26/1798",
    died: "8/13/1863",
    painting_title: "The Death of Sardanapalus",
    painting_image:
      "https://upload.wikimedia.org/wikipedia/commons/2/2f/Delacroix_-_La_Mort_de_Sardanapale_%281827%29.jpg",
    artist_fact:
      "Unlike many artists who seem to have tumultuous careers of poverty and struggle, Delacroix found buyers for his work as a young man and was able to continue his streak of success throughout his 40-year career.",
    style: "Romanticism",
    painting_year: 1827,
    favorite_liquor: "Whiskey",
    main_cocktail_liqour: "Scotch",
    cocktail_name: "Rob Roy",
    artist_liquor_fact:
      "Delacroix loved the drink, you can never go wrong with a classic.",
    ingredients:
      "2 oz Scotch Whiskey, .75 oz Sweet Vermouth, 3-4 dashes Angostura Bitters, Garnish Cherry",
    instructions:
      "Add all ingredients to a mixing glass with ice. Stir. Strain into a chilled cocktail glass. Garnish with a cocktail cherry.",
    cocktail_image:
      "https://vintageamericancocktails.com/wp-content/uploads/2021/07/rob_roy.jpeg",
  },
  {
    id: 16,
    artist_name: "Diego Rivera",
    born: "12/8/1886",
    died: "11/24/1957",
    painting_title: "Man at the Crossroads",
    painting_image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Libro_Los_Viejos_Abuelos_Foto_68.png/1200px-Libro_Los_Viejos_Abuelos_Foto_68.png",
    artist_fact:
      "From the age of ten, Rivera studied art at the Academy of San Carlos in Mexico City. In 1907, at 21, he travelled to Europe, continuing his studies in Madrid and Paris, where he took up the new Cubist style of painting with great enthusiasm.",
    style: "Mexican Muralism",
    painting_year: 1933,
    favorite_liquor: "Tequila",
    main_cocktail_liqour: "Mezcal",
    cocktail_name: "Diego’s Affair Mezcal Cocktail",
    artist_liquor_fact:
      "Rivera loved both food and drink and tried to lived life to the fullest.",
    ingredients:
      "2 oz Mezcal, 1 oz Fresh Lime Juice, 2/3 oz Hibiscus Syrup, 2 drops of Hellfire Habanero Shrub",
    instructions:
      "Add all ingredients in a cocktail shaker with ice. Shake and double strain in a chilled coupette with a guajillo chilli salt rim. Garnish with a caramelised hibiscus flower in the drink.",
    cocktail_image:
      "http://www.cocktailsandbars.com/wp-content/uploads/2018/07/diegos-affair-cocktail-cocktailsandbars-O20180717_112.jpg",
  },
  {
    id: 17,
    artist_name: "Alfred Kubin",
    born: "4/10/1877",
    died: "8/20/1959",
    painting_title: "Colored Nightmares",
    painting_image:
      "https://wahooart.com/Art.nsf/O/A29S22/$File/Alfred_Kubin-Colored_nightmares.JPG",
    artist_fact:
      "Kubin is considered an important representative of Symbolism and Expressionism and is noted for dark, spectral, symbolic fantasies, often assembled into thematic series of drawings",
    style: "Expressionism",
    painting_year: 1901,
    favorite_liquor: "N/A",
    main_cocktail_liqour: "Rum",
    cocktail_name: "Jagertee",
    artist_liquor_fact:
      "Nothing is written about Kubin's drinking habits, however Austria is known for Jagertee. Enjoy it with friends!",
    ingredients:
      "4 Servings, 8 1/2 oz Tea, 8 1/2 oz Spiced Rum, 8 1/2 oz Red Wine, 8 1/2 oz Plum Brandy, Schnaps or any other liqueur to hand, 8 1/2 oz Orange Juice, 2 to 3 whole Cloves, 1/4 Cinnamon Stick, 2 Lemon Slices, Sugar to taste",
    instructions:
      "Add all the ingredients to a stainless steel pot except sugar. Heat until simmering, then simmer for 5 minutes. Take the pot off the heat, then add sugar to taste and stir to dissolve.",
    cocktail_image:
      "https://cdn.tasteatlas.com/images/ingredients/07b46b7f0ac64002be7b618c724a7464.jpg?mw=1300",
  },
  {
    id: 18,
    artist_name: "Edouard Manet",
    born: "1/23/1832",
    died: "4/30/1883",
    painting_title: "The Dead Toreador",
    painting_image:
      "https://uploads1.wikiart.org/images/edouard-manet/the-dead-toreador-1865(1).jpg!Large.jpg",
    artist_fact:
      "Manet’s father planned for his son a career in the navy; Manet sailed in 1848 on a training vessel to Rio de Janeiro. However, after failing the navy training school entrance exam, he moved to Paris to become an artist.",
    style: "Modernist",
    painting_year: 1864,
    favorite_liquor: "Absinthe",
    main_cocktail_liqour: "Gin, Lillet Blanc, Absinthe",
    cocktail_name: "Corpse Reviver #2",
    artist_liquor_fact:
      "Like many of his contemporaries, Manet enjoyed the company of Absinthe. Imbibe carefully!",
    ingredients:
      "3/4 oz Gin, 3/4 oz Triple Sec, 3/4 oz Lemon, 3/4 oz Lillet Blanc, Absinthe as needed",
    instructions:
      "Combine all ingredients in shaker tin, excluding absinthe. Ice small shaker tin. Shake vigorously, until tin is frosted over. Strain into chilled cocktail glass rinsed with absinthe. Garnish with lemon twist and enjoy",
    cocktail_image:
      "https://vinepair.com/wp-content/uploads/2022/01/50mostpopularcocktails2022_internal_corpsereviver.jpg",
  },
  {
    id: 19,
    artist_name: "Hiroshi Sugimoto",
    born: "2/23/1948",
    died: "N/A",
    painting_title: "U.A. Play House",
    painting_image:
      "https://images.squarespace-cdn.com/content/v1/581cb131be6594d1fe22a557/1492634756166-BL6ZT6T07JW7YN7YLMQN/image-asset.jpeg?format=1000w",
    artist_fact:
      "Sugimoto left Tokyo for California in 1970. Having studied Marxist economics in Japan, he was steeped in western philosophy, but not prepared for the questions that Americans asked. “I’d read Hegel and Feuerbach, but I had to catch up on oriental philosophy and mysticism,” he laughs. He studied photography in Los Angeles, but it was only when he moved to New York in 1974 that he decided to become a conceptual artist, and adopted large-format, black-and-white photography as his signature style.",
    style: "Photography",
    painting_year: 1978,
    favorite_liquor: "N/A",
    main_cocktail_liqour: "Sake",
    cocktail_name: "Re:Birth",
    artist_liquor_fact:
      "Being a man of the world inspired this artist's cocktail. A delicate mix of saki and brandi to inspire the world traveler.",
    ingredients:
      "1 oz Kurosawa Nigori Sake, 1/2 oz St. George Pear Brandy, 1/4 oz Singani 63 brandy, 1/4 oz Distilleria Gualco Camomila liqueur, 1/2 oz Blackberry Sage Tea Syrup, 4 dashes Tartaric Acid Aolution, Garnish Edible Flowers",
    instructions:
      "Add the sake, pear brandy, Singani 63, chamomile liqueur, blackberry sage tea syrup and tartaric acid solution into a rocks glass. Fill with crushed ice and swizzle until chilled. Garnish with edible flowers.",
    cocktail_image:
      "https://www.liquor.com/thmb/3mk5rJsolye76mw940AJV6UbQ-s=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Re_Birth-credit-Reilly-Drew_main_720x720-4872985210f04e61ab6e4326fa77576d.jpg",
  },
  {
    id: 20,
    artist_name: "Hieronymus Bosch",
    born: "1450",
    died: "8/9/1516",
    painting_title: "The Garden of Earthly Delights",
    painting_image:
      "https://media.newyorker.com/photos/590979e88b51cf59fc423912/master/w_2560%2Cc_limit/Thomas-Bosch-Shouts.jpg",
    artist_fact:
      "His father, grandfather and great-grandfather were all painters, as were several of his uncles. They all lived and worked in and around the Dutch province of Hertogenbosch. His father was an artistic adviser to the Illustrious Brotherhood of Our Blessed Lady, a religious order that Bosch himself joined in the late 1480s.",
    style: "Renaissance",
    painting_year: 1515,
    favorite_liquor: "N/A",
    main_cocktail_liqour: "Rum",
    cocktail_name: "Daiquiri",
    artist_liquor_fact:
      "Did Bosch drink? Who knows! The man lived during the Renaissance, try something inspired by the chaos of his work. You won't know what hit you, when you try this classic daiquiri.",
    ingredients:
      "1 1/2 oz Light or White Rum, 1 oz Lime Juice, 1/2 oz Simple Syrup or Maple Syrup, Garnish Lime Slice",
    instructions:
      "Add the rum, lime juice, and syrup to a cocktail shaker. Fill it with ice and shake until cold. Strain into a cocktail glass. Serve garnished with a lime slice.",
    cocktail_image:
      "https://www.acouplecooks.com/wp-content/uploads/2019/05/Daiquiri-Cocktail-013.jpg",
  },
];

app.get("/api/v1/artists", (request, response) => {
  const artists = app.locals.artists;

  response.json({ artists });
});

app.listen(app.get("port"), () => {
  console.log(
    `${app.locals.title} is running on http://localhost:${app.get("port")}`
  );
});
