//  Required Models
const express = require('express');
const app = express();
// Setup DB connection
require ('./models')

// Middleware

// Controllers

// Routes


// Start the server
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log('📡 Server is now listening on: ', PORT, '📡 ')
})
