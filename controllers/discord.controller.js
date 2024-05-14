const DiscordTestUrl = "https://discord.com/api/webhooks/1231485629137817612/jg4368nhfc7_4VD0B4ygsrSjjtvDOAiy70Bh1M2QefMjuJp6oD8fuS0sLIxkTrA-0vOH"
import request from "request";

export const DiscordController =  async (req, res) => {
    // Extract all form fields as an object
    console.log(req.body)
    const { formData } = req.body;
  
    // Construct Discord message payload dynamically
    const payload = {
      "embeds": [
        {
          "title": "Zyok Form Submission",
          "description": "Testing the things", // Replace with your actual URL
          "fields": [] // Empty list for dynamic fields
        }
      ]
    };
  
    // Loop through form data and add fields to embed
    for (const key in formData) {
      payload.embeds[0].fields.push({
        "name": key.charAt(0).toUpperCase() + key.slice(1), // Capitalize first letter
        "value": formData[key]
      });
    }
    request({
      url: DiscordTestUrl,
      method: 'POST',
      json: true, // Set content type as JSON
      headers: { 'Content-Type': 'application/json' },
      body: payload
    }, (error, response, body) => {
      if (error) {
        console.error('Error sending Discord message:', error);
        res.status(500).send('Error sending message'); // Send error to user (optional)
      } else {
        console.log('Discord message sent successfully!');
        res.status(200).send('Form submitted and message sent!'); // Send success to user (optional)
      }
    });
  }