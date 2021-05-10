var express = require('express');
var router = express.Router();
const registerController=require('../controller/registerController')
/* GET home page. */
router.get('/',registerController.homePage)
 router.get('/contact',registerController.contact)
 router.get('/about',registerController.about)
 router.get('/work',registerController.work)
 router.get('/Lab',registerController.Lab)
 router.get('/careers',registerController.careers)
 router.get('/services',registerController.service)
 router.get('/team',registerController.team)
// router.get('/whyus',registerController.why_us)
// router.get('/privacy',registerController.privacy)
// router.post('/subscribe',registerController.subscribe)

// router.get('/success',registerController.paymentSuccess)




module.exports=router