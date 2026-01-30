const express = require('express');
const cors = require('cors'); // Import cors
const app = express();
const port = 3001;

app.use(cors()); // Enable all CORS requests

app.get('/api/data', (req, res) => {
  res.json({ message: 'Data fetched from backend API!' });
});

app.listen(port, () => {
  console.log(`Backend server listening at http://localhost:${port}`);
});
