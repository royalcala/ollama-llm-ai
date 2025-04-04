const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 3000;

app.get('/test-n8n', async (req, res) => {
  try {
    const response = await axios.get('http://n8n:5678');
    res.json({ message: 'n8n is reachable', data: response.data });
  } catch (error) {
    res.status(500).json({ message: 'Failed to reach n8n', error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Backend service running on http://localhost:${PORT}`);
});
