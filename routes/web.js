const express = require('express')
const BlogController = require('../controllers/BlogController')
const UserController = require('../controllers/UserController')
const router = express.Router()

//blog controller
router.post('/create',BlogController.create)
router.get('/display',BlogController.display)
router.get('/view/:id',BlogController.view)
router.post('/update/:id',BlogController.update)
router.get('/delete/:id',BlogController.delete)
router.get('/view/:id',UserController.View)



// ============================================user controller+++++++++++++++++++++++++++++++++++++++++++
router.post('/register',UserController.userregister)
router.post('/login',UserController.verifylogin)
router.get('/displayuser',UserController.displayuser)

module.exports = router

