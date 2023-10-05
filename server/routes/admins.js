const express = require('express');
const multer = require('multer');
const router = express.Router();
const adminController = require('../controller/admin.controller');

const GridFsStorage = require('multer-gridfs-storage').GridFsStorage;
const crypto = require('crypto');

const storage = new GridFsStorage({
  url: process.env.DB_URI,
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      crypto.randomBytes(16, (err, buf) => {
        if (err) {
          return reject(err);
        }
        const filename = buf.toString('hex') + file.originalname;
        const fileInfo = {
          filename: filename,
          bucketName: 'uploads',
        };
        resolve(fileInfo);
      });
    });
  },
});


const upload = multer({storage});
/* GET users listing. */

router.post('/creatadmin',upload.single('img'),adminController.create_admin);
router.get('/',adminController.read_admins);
router.get('/getadmin/:id',adminController.get_adminbyid);
router.put('/updateadmin/:id',adminController.update_admin);
router.delete('/deleteadmin/:id',adminController.delete_admin)


module.exports = router;