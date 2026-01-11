
const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the React build folder
app.use(express.static(path.join(__dirname, 'build')));

// ✅ Catch-all route to handle React Router paths
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});

