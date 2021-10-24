const multer = require('multer');

const fileStorageEngine = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, "images");
    },
    filename: (req, file, callback) => {
        callback(null, Date.now() + "___" + file.originalname);
    }
});

const upload = multer({
    storage: fileStorageEngine
});

module.exports = upload;