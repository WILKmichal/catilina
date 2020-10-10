const jwt = require('jsonwebtoken');

module.exports=  function(req,res,next){
    const token = req.header('token');

    if (!token) return res.status(200).send("pas de token");

    try{
        const verified = jwt.verify(token, "srtfyhgxfdfyjhcgxdyfhgsdhfcgxfsgdhfcgxsdhf" )
        req.user = verified
        next()
    }catch (e){
        res.status(200).send('token pas bon')
    }
}

