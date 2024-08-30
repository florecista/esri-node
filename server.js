const express = require('express');
const cors = require('cors');  // Import the cors module
const path = require('path');
const app = express();
const port = 3000;

// Use CORS middleware
app.use(cors());

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// REST API endpoint
app.get('/locationService', (req, res) => {
    const vehicleId = req.query.vehicleId;

    // Example geolocation data
    const locationData = {
        id: vehicleId || '985CC5EC1D3FC176E053DD4D1FAC4E39',
        timestamp: Math.floor(Date.now() / 1000),
        location: {
            lon: 151.2074 + (Math.random() * 0.01), // Simulate slight changes in location
            lat: -33.8678 + (Math.random() * 0.01)
        }
    };

    res.json(locationData);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
