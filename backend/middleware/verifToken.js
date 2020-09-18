const jwt = require('jsonwebtoken');

module.exports=  function(req,res,next){
    const token = req.header('token');

    if (!token) return res.status(401).send("pas de token pas de chocolat");

    try{
        const verified = jwt.verify(token, "srtfyhgxfdfyjhcgxdyfhgsdhfcgxfsgdhfcgxsdhf" )
        req.user = verified
        next()
    }catch (e){
        res.status(400).send('token pas bon')
    }
}

