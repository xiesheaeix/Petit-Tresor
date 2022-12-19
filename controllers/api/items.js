const Item = require('../../models/item');

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

async function create(req, res) {
  try {
    const item = await Item.create(req.body);
    res.json(item);
  } catch (err) {
    res.status(400).json(err);
  }
}

async function deleteItem(req, res) {
  const item = await Item.findByIdAndDelete(req.params.id);
  res.json(item);
}
