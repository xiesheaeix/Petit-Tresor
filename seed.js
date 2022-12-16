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
    {name: 'Heirloom Ring', images: ['https://i.imgur.com/BQDeYSS.jpg', 'https://i.imgur.com/g02f5ZP.jpg', 'https://i.imgur.com/Q0Vnbv5.jpg', 'https://i.imgur.com/h9pzqqD.jpg','https://i.imgur.com/07S6yus.jpg' ], category: categories[1], price: 85, description: 'Made in 14k solid gold, set with genuine garnet stone Stone size: 10 mm x 8 mm.'},
    {name: 'Diamond Baguette Ring', images: ['https://i.imgur.com/SrFI4K5.jpg', 'https://i.imgur.com/AZffoBt.jpg', 'https://i.imgur.com/eRGIhSV.jpg', 'https://i.imgur.com/clkQdkc.jpg', 'https://i.imgur.com/P9LTlpL.jpg', 'https://i.imgur.com/z5Mj462.jpg' ], category: categories[1], price: 350, description: 'The second best thing after an actual baguette? Eight baguette diamonds set in a timeless band. Handcrafted in 14k solid gold featuring eight Kimberley Process compliant diamonds.'},
    {name: 'Chunky Diamond Ring', images: ['https://i.imgur.com/WsdybUj.jpg', 'https://i.imgur.com/vbb4xCO.jpg', 'https://i.imgur.com/ZMqdh9H.jpg', 'https://i.imgur.com/AONTV7Q.jpg', 'https://i.imgur.com/yvw1QmN.jpg'], category: categories[1], price: 105, description: 'You remember the Dôme? Meet its pearly counterpart. Equal parts statement and staple in 18k gold vermeil.'},
    {name: 'Diamond Bezel Necklace', images: ['https://i.imgur.com/LmXHUWb.jpg', 'https://i.imgur.com/ddV1Ibl.jpg', 'https://i.imgur.com/OWelynv.jpg', 'https://i.imgur.com/QhoQ2IG.jpg', 'https://i.imgur.com/VoWKP0h.jpg'], category: categories[0], price: 320, description: "This is a classic, through and through and we wouldn't want it any other way. The necklace is 14k solid gold with a round cut responsibly sourced diamond in a bezel setting. A piece you can hold on to forever (to pass on or keep all to yourself)."},
    {name: 'Diamond Bezel Earrings', images: ['https://i.imgur.com/3pKzLse.jpg', 'https://i.imgur.com/jyjDpc5.jpg', 'https://i.imgur.com/lLCAvOI.jpg', 'https://i.imgur.com/Ps2rXLk.jpg', 'https://i.imgur.com/BCAHS8Y.jpg'], category: categories[3], price: 90, description: 'Dot your ears with diamonds. Handcrafted in 14k solid gold and set with ethically sourced diamonds. Sold individually.'},
    {name: 'Gold Hoop Earrings', images: ['https://i.imgur.com/b2Mmpa5.jpg', 'https://i.imgur.com/rcxglRP.jpg', 'https://i.imgur.com/aIonXfe.jpg', 'https://i.imgur.com/HKD81AI.jpg', 'https://i.imgur.com/AFNMZMv.jpg'], category: categories[3], price: 125, description: 'As basic as your white tee (seriously)! Handcrafted in hollowed 14k solid gold. These are our lightest hoops ever. Wear them all day, every day, just remember to take them off before sleeping'},
    {name: 'Gold Layered Necklace', images: ['https://i.imgur.com/8HgupqI.jpg', 'https://i.imgur.com/nEm0KFj.jpg', 'https://i.imgur.com/E1I93Cg.jpg', 'https://i.imgur.com/TmAnpAX.jpg', 'https://i.imgur.com/0TXAY6z.jpg'], category: categories[0], price: 120, description: 'Three chains bound seamlessly to shoo away your stacking woes. Handcrafted 18k gold vermeil.'},
    {name: 'Pearl Bracelet', images: ['https://i.imgur.com/2tZbOqK.jpg', 'https://i.imgur.com/zBtFgZA.jpg', 'https://i.imgur.com/dO6RKdi.jpg', 'https://i.imgur.com/r50cqRh.jpg', 'https://i.imgur.com/lRNXGuA.jpg'], category: categories[2], price: 85, description: 'Because one is never enough. Take these freshwater pearls out for a spin on a gold vermeil chain that goes with everything. Pearl Size: 4.5 mm 5 mm round'},
    {name: 'Pearl Hoop Earrings', images: ['https://i.imgur.com/UFAyoMR.jpg', 'https://i.imgur.com/THdN6QN.jpg', 'https://i.imgur.com/rpKqyHp.jpg', 'https://i.imgur.com/zeNA5Tg.jpg'], category: categories[3], price: 98, description: 'First thing’s first, these are not your grandmother’s pearls. Wear them solo or stack them up, either way, they were made to be seen. Handcrafted in gold vermeil, a thick layer of 18k gold over sterling silver, and set with freshwater pearls.'},
    {name: 'Diamond Tennis Bracelet', images: ['https://i.imgur.com/hnUZMj8.jpg', 'https://i.imgur.com/txfFyZn.jpg', 'https://i.imgur.com/X7u0pYz.jpg', 'https://i.imgur.com/j5dtbrj.jpg', 'https://i.imgur.com/orrh0rr.jpg'], category: categories[2], price: 325, description: "Made in 14k solid gold set with high-quality responsibly-sourced diamonds (GH color, SI 1-2 clarity). There's nothing like capturing that ping of sparkle from diamond. Here's that ping multiplied for an investment piece that'll induce gasps for decades to come. Each piece is made-to-order and handcrafted with a unique diamond setting, so please allow for a longer ship time."},
    {name: 'Tiny Pearl Necklace', images: ['https://i.imgur.com/J8B3n4S.jpg', 'https://i.imgur.com/vqs6BVq.jpg', 'https://i.imgur.com/Xhx0BiA.jpg', 'https://i.imgur.com/eiWlI1C.jpg'], category: categories[0], price: 70, description: 'Set with freshwater cultured pearls. Made in gold vermeil: a thick 18k gold layer on sterling silver.'},
    {name: 'Bold Pearl Hoops', images: ['https://i.imgur.com/jqgWIh1.jpg', 'https://i.imgur.com/ssxiazS.jpg', 'https://i.imgur.com/s5VH1UR.jpg', 'https://i.imgur.com/Ij4Af3J.jpg', 'https://i.imgur.com/NNzxeee.jpg'], category: categories[3], price: 100, description: "Pearl aficionados, this one's for you. Bold stacked hoops handcrafted in 18k gold vermeil with freshwater pearls. Go big and go bold."},
    {name: 'Gold Bubble Ring', images: ['https://i.imgur.com/GXyEpVa.jpg', 'https://i.imgur.com/xapeaai.jpg', 'https://i.imgur.com/SRV5NMp.jpg', 'https://i.imgur.com/Yscd5D7.jpg'], category: categories[1], price: 400, description: 'Made in 14k solid gold, the alloy that gives our pieces its beautiful, subtle hue. Width: 9.35 mm.'},
    {name: 'Diamond Pave Ring', images: ['https://i.imgur.com/eDiPtV1.jpg', 'https://i.imgur.com/XMJEyMn.jpg', 'https://i.imgur.com/VyUiZEv.jpg', 'https://i.imgur.com/MaP1ElL.jpg'], category: categories[1], price: 425, description: 'Inspired by the endearing signoff, the XO edition celebrates affection between friends, lovers, mothers and daughters, or, best of all, yourself. One of four pieces, the Pavé Diamond X Ring is handcrafted in 14k solid gold and set with responsibly sourced single cut pavé diamonds featuring a gentle overlap of the X'},
  ]);

  console.log(items)

  process.exit();

})();
