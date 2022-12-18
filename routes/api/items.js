const express = require('express');
const router = express.Router();
const itemsCtrl = require('../../controllers/api/items');

// GET /api/items
router.get('/', itemsCtrl.index);
// GET /api/items/:id
router.get('/:id', itemsCtrl.show);
// POST /api/items
router.post('/new', itemsCtrl.create);
// DELETE /api/items/:id
router.delete('/:id', itemsCtrl.deleteItem);

module.exports = router;
