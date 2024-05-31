
import request from "request";

export const SlackController =  async (req, res) => {
    const { formdata , slack_wh } = req.body;
  
    const payload = {
      "username": "Form Submission",  // Optional: Set a username for the message
      "text": "New form submission received!",  // Main message
      "attachments": [  // Array of attachments for form details
        {
          "fallback": "New form submission details:", // Fallback text for non-supporting clients
          "fields": [] // Empty list for dynamic fields
        }
      ]
    };
  
    // Loop through form data and add fields to attachment
    for (const key in formdata) {
      payload.attachments[0].fields.push({
        "title": key,
        "value": formdata[key],
        "short": true
      });
    }
  
    try {
      const response = await fetch(slack_wh, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (!response.ok) {
        throw new Error(`Error sending Slack message: ${await response.text()}`);
      }
      res.status(200).json({message:'Form submitted and message sent!'});
    } catch (error) {
      console.error('Error sending Slack message:', error);
      res.status(500).send('Error sending message');
    }
  }