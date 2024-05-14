const SlackWebhookURl = "https://hooks.slack.com/services/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"

import request from "request";

export const SlackController =  async (req, res) => {
    console.log(req.body);
    const { formData } = req.body;
  
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
    for (const key in formData) {
      payload.attachments[0].fields.push({
        "title": key,
        "value": formData[key],
        "short": true
      });
    }
  
    try {
      console.log(payload)
      const response = await fetch(SlackWebhookURl, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (!response.ok) {
        throw new Error(`Error sending Slack message: ${await response.text()}`);
      }
  
      console.log('Slack message sent successfully!');
      res.status(200).send('Form submitted and message sent!');
    } catch (error) {
      console.error('Error sending Slack message:', error);
      res.status(500).send('Error sending message');
    }
  }