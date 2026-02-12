const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  role: { type: String, default: 'citizen' },
  ecoPoints: { type: Number, default: 0 },
  carbonSaved: { type: Number, default: 0 },
  achievements: [String],
});
module.exports = mongoose.model('User', userSchema);