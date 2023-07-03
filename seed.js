require('dotenv').config();
require('./config/database');

const Category = require('./models/category');
const Item = require('./models/item');

// IIFE
// Immediately Invoked Function Expression
(async function() {
  await Category.deleteMany({});
  const categories = await Category.create([
    {name: 'Roses', sortOrder: 10},
    {name: 'Daffodils', sortOrder: 20},
    {name: 'Tulips', sortOrder: 30},
    {name: 'Daisies', sortOrder: 40},
    {name: 'Lilies', sortOrder: 50},
    {name: 'Hydrangeas', sortOrder: 60},
    {name: 'Edelweiss', sortOrder: 70},
    {name: 'Anemone', sortOrder: 80},
    {name: 'Gardenias', sortOrder: 90},
    {name: 'Snapdragon', sortOrder: 100},
  ]);

  await Item.deleteMany({});
  const items = await Item.create([
    {name: 'Rosa Double Delight', category: categories[0], price: 16.95, image: '/Flower_Pictures/Rosa_Double_Delight.png'},
    {name: 'Bourbon Rose', category: categories[0], price: 16.95, image: '/Flower_Pictures/Bourbon_Rose.png'},
    {name: 'Dog Rose', category: categories[0], price: 13.95, image: '/Flower_Pictures/Dog_Rose.png'},
    {name: 'Petticoat Daffodils', category: categories[1], price: 14.95, image: '/Flower_Pictures/Petticoat_Daffodils.png'},
    {name: 'Poets Narcissus', category: categories[1], price: 13.95,image: '/Flower_Pictures/Poets_Narcissus_Daffodil.png'},
    {name: 'Angels Tears', category: categories[1], price: 14.95, image: '/Flower_Pictures/Angel_Tears.png'},
    {name: 'Parrot Tulips', category: categories[2], price: 17.95, image: '/Flower_Pictures/Parrot_Tulip.png'},
    {name: 'Candia Tulips', category: categories[2], price: 14.95, image: '/Flower_Pictures/Candia_Tulip.png'},
    {name: 'Tulipa Greigii', category: categories[2], price: 14.95, image: '/Flower_Pictures/Tulipa_Greigii.png'},
    {name: 'European Michaelmas Daisy', category: categories[3], price: 16.95, image: '/Flower_Pictures/European_Michaelmas_Daisy.png'},
    {name: 'African Daisy', category: categories[3], price: 14.95, image: '/Flower_Pictures/African_Daisy_Blue_Eyed_Beauty.png'},
    {name: 'Mexican Daisy', category: categories[3], price: 12.95, image: '/Flower_Pictures/Mexican_Daisy.png'},
    {name: 'Henry\'s Lily', category: categories[4], price: 12.95, image: '/Flower_Pictures/Henry\'s_Lily.png'},
    {name: 'Stargazer Lily', category: categories[4], price: 15.95, image: '/Flower_Pictures/Stargazer_Lily.png'},
    {name: 'Martagon Lily', category: categories[4], price: 13.95, image: '/Flower_Pictures/Martagon_Lily.png'},
    {name: 'French Hydrangeas', category: categories[5], price: 13.95, image: '/Flower_Pictures/French_Hydrangeas.png'},
    {name: 'Tea of Heaven', category: categories[5], price: 14.95, image: '/Flower_Pictures/Tea_of_Heaven.png'},
    {name: 'Hydrangea Aspera', category: categories[5], price: 12.95, image: '/Flower_Pictures/Hydrangea_Aspera.png'},
    {name: 'Edelweiss', category: categories[6], price: 20.95, image: '/Flower_Pictures/Edelweiss_Leontopodium_Alpinum.png'},
    {name: 'Balkan Anemone', category: categories[7], price: 14.95, image: '/Flower_Pictures/Balkan_Anemone.png'},
    {name: 'Poppy Anemone', category: categories[7], price: 13.95, image: '/Flower_Pictures/Poppy_Anemone.png'},
    {name: 'Anemone Tomentosa', category: categories[7], price: 13.95, image: '/Flower_Pictures/Anemone_Tomentosa.png'},
    {name: 'Cape Jasmine', category: categories[8], price: 14.95, image: '/Flower_Pictures/Cape_Jasmine.png'},
    {name: 'Gardenia Thunbergia', category: categories[8], price: 14.95, image: '/Flower_Pictures/Gardenia_Thunbergia.png'},
    {name: 'Gardenia Magnifica', category: categories[8], price: 13.95, image: '/Flower_Pictures/Gardenia_Magnifica.png'},
    {name: 'La Bella Snapdragon', category: categories[9], price: 14.95, image: '/Flower_Pictures/La_Bella_Snapdragon.png'},
    {name: 'Lucky Lips Snapdragon', category: categories[9], price: 16.95, image: '/Flower_Pictures/Lucky_Lips_Snapdragon.png'},
    {name: 'Night and Day Snapdragon', category: categories[9], price: 16.95, image: '/Flower_Pictures/Night_and_Day_Snapdragon.png'},
  ]);

  console.log(items)

  process.exit();

})();
