const path = require("path");

const paxinaApp = (req,res)=>{
    res.sendFile(path.join(__dirname,"../../dist/views/paxina.home.html"))
}

module.exports = paxinaApp