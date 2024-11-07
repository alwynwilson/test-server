const express = require('express')
const crudController = require('../controller/crudController')

const router = new express.Router()

//add
router.post('/add/product',crudController.addAPI)

//get all
router.get('/get/allproducts',crudController.getAllAPI)

//get
router.get('/get/product/:id',crudController.getAPI)

//put
router.put('/put/product/:id',crudController.updateAPI)

//delete
router.delete('/delete/:id',crudController.deleteAPI)

module.exports = router