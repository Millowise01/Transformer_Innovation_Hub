const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const session = require('express-session');
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(session({
  secret: 'transformer_hub_secret',
  resave: false,
  saveUninitialized: false
}));

// Database connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'your_username',
  password: 'your_password',
  database: 'transformer_hub'
});

// Routes
app.get('/api/products', (req, res) => {
  connection.query('SELECT * FROM products', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

app.post('/api/workshops/register', (req, res) => {
  const { userId, workshopId } = req.body;
  connection.query(
    'INSERT INTO workshop_registrations (user_id, workshop_id) VALUES (?, ?)',
    [userId, workshopId],
    (err, result) => {
      if (err) throw err;
      res.json({ message: 'Registration successful' });
    }
  );
});

app.post('/api/orders', (req, res) => {
  const { userId, products, totalAmount } = req.body;
  connection.query(
    'INSERT INTO orders (user_id, total_amount) VALUES (?, ?)',
    [userId, totalAmount],
    (err, result) => {
      if (err) throw err;
      res.json({ message: 'Order placed successfully' });
    }
  );
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});