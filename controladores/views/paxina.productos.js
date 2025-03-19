const path = require("path");

const paxinaProductos = (req,res)=>{
    res.sendFile(path.join(__dirname,"../../dist/views/new_product.html"))
}

module.exports = paxinaProductos