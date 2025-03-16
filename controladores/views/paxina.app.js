const path = require("path");

const paxinaApp = (req,res)=>{
    res.status(200).sendFile(path.join(__dirname,"../../dist/views/app.html"))
}

module.exports = paxinaApp