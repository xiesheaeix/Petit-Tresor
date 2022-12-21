const Item = require('../../models/item');
const Category = require('../../models/category');


module.exports = {
  index,
  show, 
  create,
  deleteItem
};

async function index(req, res) {
  const items = await Item.find({}).sort('name').populate('category').exec();
  items.sort((a, b) => a.category.sortOrder - b.category.sortOrder);
  res.json(items);
}

async function show(req, res) {
  const item = await Item.findById(req.params.id);
  res.json(item);
}

function create(req, res) {
  try {
    // const category = Category.find({name: req.body.category});
    // req.body.category = category;
    const item = new Item(req.body);
    item.save();
    res.json(item);
  } catch (err) {
    res.status(400).json(err);
  }
}

async function deleteItem(req, res) {
  const item = await Item.findByIdAndDelete(req.params.id);
  res.json(item);
}
