const axios = require('axios');

module.exports = async (req, res) => {
    if (req.method !== 'POST') {
        return res.status(405).send('Method Not Allowed');
    }

    const { sender, url } = req.body;
    
    // Token Fonnte kamu sudah terpasang di sini
    const FONNTE_TOKEN = 'H9RkfaEm7eLXPXB7r7fk'; 

    if (url) {
        try {
            await axios.post('https://api.fonnte.com/send', {
                target: sender,
                type: 'sticker',
                url: url
            }, {
                headers: { 'Authorization': FONNTE_TOKEN }
            });
        } catch (error) {
            console.error('Error:', error.message);
        }
    }

    return res.status(200).send('OK');
};
