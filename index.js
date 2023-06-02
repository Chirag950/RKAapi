const express = require('express');
const app = express();

let ledStatus = 'OFF'; // Initial LED status

// Endpoint to turn on the LED
app.get('/on', (req, res) => {
  if (ledStatus === 'OFF') {
    // Code to turn on the LED
    // Add your own implementation here
    ledStatus = 'ON';
    res.send('LED turned on');
  } else {
    res.send('LED is already on');
  }
});

// Endpoint to turn off the LED
app.get('/off', (req, res) => {
  if (ledStatus === 'ON') {
    // Code to turn off the LED
    // Add your own implementation here
    ledStatus = 'OFF';
    res.send('LED turned off');
  } else {
    res.send('LED is already off');
  }
});

// Endpoint to get the LED status
app.get('/status', (req, res) => {
  res.send(ledStatus);
});

// Route handler for the root URL
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Handle invalid routes
app.use((req, res) => {
  res.status(404).send('Not found');
});

// Start the server
app.listen(process.env.PORT || 5000, () => {
  console.log('Server is running');
});
