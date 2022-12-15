require('dotenv').config();
require('./config/database');

const Category = require('./models/category');
const Item = require('./models/item');

// IIFE
// Immediately Invoked Function Expression
(async function() {
  await Category.deleteMany({});
  const categories = await Category.create([
    {name: 'Necklaces', sortOrder: 10},
    {name: 'Rings', sortOrder: 20},
    {name: 'Bracelets', sortOrder: 30},
    {name: 'Earrings', sortOrder: 40},
  ]);

  await Item.deleteMany({});
  const items = await Item.create([
    {name: 'Heirloom Ring', images: ['https://i.imgur.com/BQDeYSS.jpg', 'https://i.imgur.com/g02f5ZP.jpg', 'https://i.imgur.com/Q0Vnbv5.jpg', 'https://i.imgur.com/h9pzqqD.jpg','https://i.imgur.com/07S6yus.jpg' ], category: categories[1], price: 85,},
    {name: 'Diamond Baguette Ring', images: ['https://i.imgur.com/SrFI4K5.jpg', 'https://i.imgur.com/AZffoBt.jpg', 'https://i.imgur.com/eRGIhSV.jpg', 'https://i.imgur.com/clkQdkc.jpg', 'https://i.imgur.com/P9LTlpL.jpg', 'https://i.imgur.com/z5Mj462.jpg' ], category: categories[1], price: 150},
    {name: 'Chunky Diamond Ring', images: ['https://i.imgur.com/WsdybUj.jpg', 'https://i.imgur.com/vbb4xCO.jpg', 'https://i.imgur.com/ZMqdh9H.jpg', 'https://i.imgur.com/AONTV7Q.jpg', 'https://i.imgur.com/yvw1QmN.jpg'], category: categories[1], price: 105},
    {name: 'Diamond Bezel Necklace', images: ['https://i.imgur.com/LmXHUWb.jpg', 'https://i.imgur.com/ddV1Ibl.jpg', 'https://i.imgur.com/OWelynv.jpg', 'https://i.imgur.com/QhoQ2IG.jpg', 'https://i.imgur.com/VoWKP0h.jpg'], category: categories[0], price: 100},
    {name: 'Diamond Bezel Earrings', images: ['https://i.imgur.com/3pKzLse.jpg', 'https://i.imgur.com/jyjDpc5.jpg', 'https://i.imgur.com/lLCAvOI.jpg', 'https://i.imgur.com/Ps2rXLk.jpg', 'https://i.imgur.com/BCAHS8Y.jpg'], category: categories[3], price: 90},
    {name: 'Gold Hoop Earrings', images: ['https://i.imgur.com/b2Mmpa5.jpg', 'https://i.imgur.com/rcxglRP.jpg', 'https://i.imgur.com/aIonXfe.jpg', 'https://i.imgur.com/HKD81AI.jpg', 'https://i.imgur.com/AFNMZMv.jpg'], category: categories[3], price: 125},
    {name: 'Gold Layered Necklace', images: ['https://i.imgur.com/8HgupqI.jpg', 'https://i.imgur.com/nEm0KFj.jpg', 'https://i.imgur.com/E1I93Cg.jpg', 'https://i.imgur.com/TmAnpAX.jpg', 'https://i.imgur.com/0TXAY6z.jpg'], category: categories[0], price: 120},
    {name: 'Pearl Bracelet Necklace', images: ['https://i.imgur.com/2tZbOqK.jpg', 'https://i.imgur.com/zBtFgZA.jpg', 'https://i.imgur.com/dO6RKdi.jpg', 'https://i.imgur.com/r50cqRh.jpg', 'https://i.imgur.com/lRNXGuA.jpg'], category: categories[2], price: 60},
    {name: 'Pearl Hoop Earrings', images: ['https://i.imgur.com/UFAyoMR.jpg', 'https://i.imgur.com/THdN6QN.jpg', 'https://i.imgur.com/rpKqyHp.jpg', 'https://i.imgur.com/zeNA5Tg.jpg'], category: categories[3], price: 85},
    {name: 'Diamond Tennis Bracelet', images: ['https://i.imgur.com/hnUZMj8.jpg', 'https://i.imgur.com/txfFyZn.jpg', 'https://i.imgur.com/X7u0pYz.jpg', 'https://i.imgur.com/j5dtbrj.jpg', 'https://i.imgur.com/orrh0rr.jpg'], category: categories[2], price: 125},
  ]);

  console.log(items)

  process.exit();

})();
