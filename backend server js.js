const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');
const socketIo = require('socket.io');
require('dotenv').config();

const app = express();
const server = http.createServer(app);
const io = socketIo(server, { cors: { origin: '*' } });

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/ecosmart', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Models (simplified)
const User = mongoose.model('User', {
  name: String,
  email: String,
  password: String,
  role: { type: String, enum: ['citizen', 'manager', 'admin'], default: 'citizen' },
  ecoPoints: { type: Number, default: 0 },
  carbonSaved: { type: Number, default: 0 },
});

const Bin = mongoose.model('Bin', {
  location: { lat: Number, lng: Number },
  status: { type: String, enum: ['good', 'warning', 'critical'], default: 'good' },
  alerts: [String],
});

// Routes (simplified auth and bins)
app.post('/api/auth/register', async (req, res) => {
  const { name, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new User({ name, email, password: hashedPassword });
  await user.save();
  res.status(201).json({ message: 'User registered' });
});

app.post('/api/auth/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }
  const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET || 'secret');
  res.json({ token, user });
});

app.get('/api/bins', async (req, res) => {
  const bins = await Bin.find();
  res.json(bins);
});

// Socket for real-time updates
io.on('connection', (socket) => {
  console.log('User connected');
  socket.on('updateBin', (data) => {
    io.emit('binUpdated', data); // Broadcast updates
  });
});

server.listen(5000, () => console.log('Server running on port 5000'));