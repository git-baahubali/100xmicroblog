// This would be an API route in Next.js (e.g., pages/api/auth/storeTokens.js)

export default async function handler(req, res) {
    // Check that we're dealing with a POST request
    if (req.method !== 'POST') {
      return res.status(405).end(); // Method Not Allowed
    }
  
    try {
      const { access_token, refresh_token } = req.body;
  
      // Set HttpOnly cookies
      res.setHeader('Set-Cookie', [
        `access_token=${access_token}; HttpOnly; Path=/; Secure; SameSite=Strict`,
        `refresh_token=${refresh_token}; HttpOnly; Path=/; Secure; SameSite=Strict`,
      ]);
  
      // Send a response to indicate success
      res.status(200).json({ message: 'Tokens stored securely' });
    } catch (error) {
      // Handle any errors
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
  