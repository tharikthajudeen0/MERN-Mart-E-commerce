const ProductModel = require('../models/productModel')


//Get Products API
exports.getProducts =  async (req,res,next) => {
    const query = req.query.keyword? { name : {
        $regex: req.query.keyword,
        $options: 'i'
    }}:{}
    const products = await ProductModel.find(query);

    res.json(
        {
            sucess: true,
            products
        }
    )
}

//Get Single Product API
exports.getSingleProduct = async (req,res,next) => {
    try {
        const product = await ProductModel.findById(req.params.id);

        res.json(
            {
                sucess: true,
                product
            }
        )
        
    } catch (error) {
        res.status(404).json(
            {
                sucess: false,
                message : 'unable to get product with that ID'
            }
        )
        
    }
}