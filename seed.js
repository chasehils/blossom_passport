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
    {name: 'Rosa Double Delight', emoji: '🍔', category: categories[0], price: 16.95},
    {name: 'Bourbon Rose', emoji: '🥪', category: categories[0], price: 16.95},
    {name: 'Dog Rose', emoji: '🌭', category: categories[0], price: 13.95},
    {name: 'Petticoat Daffodils', emoji: '🦀', category: categories[1], price: 14.95},
    {name: 'Poets Narcissus', emoji: '🍤', category: categories[1], price: 13.95},
    {name: 'Angels Tears', emoji: '🦞', category: categories[1], price: 14.95},
    {name: 'Parrot Tulips', emoji: '🌮', category: categories[2], price: 17.95},
    {name: 'Candia Tulips', emoji: '🌯', category: categories[2], price: 14.95},
    {name: 'Tulipa Greigii', emoji: '🌯', category: categories[2], price: 14.95},
    {name: 'European Michaelmas Daisy', emoji: '🍕', category: categories[3], price: 16.95},
    {name: 'African Daisy', emoji: '🍝', category: categories[3], price: 14.95},
    {name: 'Mexican Daisy', emoji: '🍞', category: categories[3], price: 12.95},
    {name: 'Henry\'s Lily', emoji: '🍟', category: categories[4], price: 12.95},
    {name: 'Stargazer Lily', emoji: '🥗', category: categories[4], price: 15.95},
    {name: 'Martagon Lily', emoji: '🥗', category: categories[4], price: 13.95},
    {name: 'French Hydrangeas', emoji: '🍨', category: categories[5], price: 13.95},
    {name: 'Tea of Heaven', emoji: '🧁', category: categories[5], price: 14.95},
    {name: 'Hydrangea Aspera', emoji: '🍮', category: categories[5], price: 12.95},
    {name: 'Leontopodium Alpinum', emoji: '🥛', category: categories[6], price: 20.95},
    {name: 'Balkan Anemone', emoji: '☕', category: categories[7], price: 14.95},
    {name: 'Poppy Anemone', emoji: '🍹', category: categories[7], price: 13.95},
    {name: 'Anemone Tomentosa', emoji: '🍺', category: categories[7], price: 13.95},
    {name: 'Cape Jasmine', emoji: '🍷', category: categories[8], price: 14.95},
    {name: 'Gardenia Thunbergia', emoji: '🍷', category: categories[8], price: 14.95},
    {name: 'Gardenia Magnifica', emoji: '🍷', category: categories[8], price: 13.95},
    {name: 'La Bella Snapdragon', emoji: '🍷', category: categories[9], price: 14.95},
    {name: 'Lucky Lips Snapdragon', emoji: '🍷', category: categories[9], price: 16.95},
    {name: 'Night and Day Snapdragon', emoji: '🍷', category: categories[9], price: 16.95},
  ]);

  console.log(items)

  process.exit();

})();
