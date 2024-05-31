import request from "request";

export const DiscordController =  async (req, res) => {
    // Extract all form fields as an object
    console.log(req.body, "discord_wh")
    const  {formdata , discord_wh}  = req.body;
  
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
    for (const key in formdata) {
       console.log(key)
      payload.embeds[0].fields.push({
        "name": key.charAt(0).toUpperCase() + key.slice(1), // Capitalize first letter
        "value": formdata[key]
      });
    }
   request({
      url: discord_wh ,
      method: 'POST',
      json: true, // Set content type as JSON
      headers: { 'Content-Type': 'application/json' },
      body: payload
    }, (error, response, body) => {
      if (error) {
        res.status(500).send('Error sending message'); // Send error to user (optional)
      } else {
        res.status(200).send('Form submitted and message sent!'); // Send success to user (optional)
      }
    });
  }