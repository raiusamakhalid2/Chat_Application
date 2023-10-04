const express = require('express');

const router = express.Router();
const adminController = require('../controller/admin.controller');
/* GET users listing. */

router.post('/creatadmin',adminController.create_admin);
router.get('/',adminController.read_admins);
router.get('/getadmin/:id',adminController.get_adminbyid);
router.put('/updateadmin/:id',adminController.update_admin);
router.delete('/deleteadmin/:id',adminController.delete_admin)


module.exports = router;