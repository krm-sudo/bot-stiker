const axios = require('axios');

module.exports = async (req, res) => {
    // Tanggapi langsung agar tidak timeout
    if (req.method !== 'POST') {
        return res.status(405).send('Method Not Allowed');
    }

    const { sender, url, file } = req.body;
    const mediaUrl = url || file;
    const FONNTE_TOKEN = 'H9RkfaEm7eLXPXB7r7fk';

    // Kirim respons 200 OK ke Fonnte
    res.status(200).send('OK');

    // Jika pesan berisi media/gambar, kirim sebagai stiker
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
