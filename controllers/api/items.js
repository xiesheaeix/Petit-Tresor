const Item = require('../../models/item');

module.exports = {
  index,
  show, 
  create
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
    item.save();
    res.json(item);
  } catch (err) {
    res.status(404).json(err);
  }
}
