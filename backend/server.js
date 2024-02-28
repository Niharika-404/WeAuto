require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import the cors middleware
const { createClient } = require('@supabase/supabase-js');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors()); // Enable CORS

// Initialize Supabase client
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

// API endpoint for form submission
app.post('/submit', async (req, res) => {
  // Extract form data from request body
  const { name, email, subject, message } = req.body;

  try {
    // Insert form data into the database
    console.log(req.body);
    const { data, error } = await supabase
      .from('UserMessages')
      .insert([{ name, email, subject, message }]);

    if (error) {
      console.error('Error storing data:', error.message);
      res.status(500).json({ success: false, message: 'Error storing data' });
    } else {
      console.log('Data stored successfully:', data);
      res.status(200).json({ success: true, message: 'Form submitted successfully' });
    }
  } catch (error) {
    console.error('Error storing data:', error.message);
    res.status(500).json({ success: false, message: 'Error storing data' });
  }
});

// Start server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
