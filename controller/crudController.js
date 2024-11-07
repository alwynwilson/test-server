const product = require('../model/productModel')

exports.addAPI = async (req,res)=>{
    console.log('Inside add api')
    const {id,name,quantity,price,image} = req.body
    console.log(id,name,quantity,price,image)
    try{
        const existingProduct = await product.findOne({id})
        if(existingProduct){
            res.status(406).json("Key exsists, update with new one")
        }else{
            const newProduct = new product({id,name,quantity,price,image})
            await newProduct.save()
            res.status(200).json(newProduct)
        }
    }catch(err){
        res.status(500).json({message: err.message})
    }
}

exports.getAllAPI = async (req,res)=>{
    console.log("inside get All API");
    try{
        const products = await product.find({})
        res.status(200).json(products)
    }catch(err){
        res.status(500).json({message: err.message})
    }
}

exports.getAPI = async (req,res)=>{
    console.log("inside get API");
    const {id} = req.params
    try{
        const products = await product.find({id})
        res.status(200).json(products)
    }catch(err){
        res.status(500).json({message: err.message})
    }
}

exports.updateAPI = async (req,res)=>{
    console.log("Inside update api")
    try{
        const {id} =req.params
        const products = await product.findByIdAndUpdate(id,req.body)
        if(!products){
            return res.status(404).json({message: "Product not found"})
        }
        const updatedProduct = await product.findById(id)
        res.status(200).json(updatedProduct)
    }catch(err){
        res.status(500).json({message : err.message})
    }
}

exports.deleteAPI = async (req,res)=>{
    console.log('inside delete API')
    try{
        const {id} = req.params
        const deletedProduct = await product.findByIdAndDelete(id)
        res.status(200).json({message: "product deleted successfully"})
    }catch(err){
        res.status(500).json({message: err.message})
    }
}