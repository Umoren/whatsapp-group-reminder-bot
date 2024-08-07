const path = require('path');

const DB_PATH = process.env.FLY_APP_NAME
    ? '/app/.wwebjs_auth'
    : path.join(__dirname, '..', '..', '.wwebjs_auth');

module.exports = {
    PORT: process.env.PORT || 3000,
    TIMEZONE: 'Europe/London',
    WELCOME_IMAGE_URL: "https://i.imgur.com/5UFYCmC.jpeg",
    DB_PATH: DB_PATH,
    ZOOM_CODE: process.env.ZOOM_CODE || '92642189858',
    ZOOM_PASSWORD: process.env.ZOOM_PASSWORD || 'Recovery',
    ZOOM_LINK: process.env.ZOOM_LINK || 'https://zoom.us/j/92642189858?pwd=TUpkVElab1JTVTMzV1FGelRXYU9VZz09#success'
};