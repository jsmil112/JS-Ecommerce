const Product = require("../models/Product");

Product.bulkCreate([
  {
    name: "black shirt",
    price: 15,
    description:
      "T-shirt in soft cotton jersey with a printed motif at front. Rounded, ribbed neckline and gently dropped shoulders.",
    image: "./images/blackshirt.jpeg"
  },
  {
    name: "blue shirt",
    price: 15,
    description: "Jersey T-shirt with a printed motif.",
    image: "./images/blueshirt.jpeg"
  },
  {
    name: "white shirt",
    price: 15,
    description: "A nice white cotton shirt",
    image: "./images/whiteshirt.jpeg"
  },
  {
    name: "blue chinos",
    price: 40,
    description:
      "Chinos in washed, stretch cotton twill. Zip fly with button, side pockets, and welt back pockets with button. Slim Fit - relaxed over thighs and tapered from knees down for a relaxed, well-tailored look.",
    image: "./images/bluepants.jpeg"
  },
  {
    name: "red pants",
    price: 25,
    description:
      "Slacks in stretch twill. Regular waist, elasticized waistband, mock fly, diagonal side pockets, and mock welt back pockets. Ankle-length legs with creases.",
    image: "./images/redpants.jpeg"
  },
  {
    name: "plaid pants",
    price: 35,
    description:
      "Pants in woven fabric. High waist with pleats, removable tie belt, and zip fly with concealed hook-and-eye fastener. Side pockets and tapered legs with creases.",
    image: "./images/tweedpants.jpeg"
  },
  {
    name: "black dress",
    price: 40,
    description:
      "A little black dress for any occasion. Short, sleeveless dress in sequined mesh with a low-cut V-neck front and back. Jersey lining made from recycled polyester.",
    image: "./images/blackdress.jpeg"
  },
  {
    name: "long dress",
    price: 65,
    description:
      "Long dress in airy, lightly crinkled chiffon with a printed pattern. Narrow stand-up collar, buttons at top, and long sleeves with covered, elasticized cuffs. Gathered seam at waist and skirt with flounce at hem. Jersey liner dress with a V-neck and narrow, adjustable shoulder straps.",
    image: "./images/longdress.jpeg"
  },
  {
    name: "red dress",
    price: 40,
    description:
      "Sleeveless, calf-length dress in airy woven fabric made from a Tencel® lyocell blend with linen content. Decorative gathers on shoulders, gathered yoke at back, and seam at hips. Seam at lower skirt with a flounce. V-neck liner dress in woven Tencel® lyocell fabric with narrow shoulder straps with concealed snap fastener for detaching liner dress..",
    image: "./images/reddress.jpeg"
  }
])
  .then(() => {
    // Notice: There are no arguments here, as of right now you'll have to...
    return Product.findAll();
  })
  .then(products => {
     console.log(products); // ... in order to get the array of user objects
  });
