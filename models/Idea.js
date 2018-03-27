var mongoose = require('mongoose');

var IdeaSchema = new mongoose.Schema({
  id: String,
  target: String,
  owner: String,
  description: String,
  updated_date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Idea', IdeaSchema);