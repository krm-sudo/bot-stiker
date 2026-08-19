const axios = require('axios');

module.exports = async (req, res) => {
    if (req.method !== 'POST') {
        return res.status(405).send('Method Not Allowed');
    }

    const { sender, url, file, image } = req.body;
    const mediaUrl = url || file || image;
    const FONNTE_TOKEN = 'H9RkfaEm7eLXPXB7r7fk';

    res.status(200).send('OK');

    if (mediaUrl) {
        try {
            await axios.post('https://api.fonnte.com/send', {
                target: sender,
                type: 'sticker',
                url: mediaUrl
            }, {
                headers: { 
                    'Authorization': FONNTE_TOKEN,
                    'Content-Type': 'application/json'
                }
            });
        } catch (error) {
            console.error('Error:', error.message);
        }
    }
};
