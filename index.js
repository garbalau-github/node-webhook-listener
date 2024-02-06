const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// Route to receive webhook POST requests
app.post('/webhook', (req, res) => {
  console.log('Received webhook:', req.body);

  // Here you can process the webhook data
  // For example, update a database, send an email, etc.

  // Respond to the request indicating success
  res.status(200).send('Webhook received');
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
