const router = require("express").Router();
const multer = require('multer')
const path = require('path')

const storage = multer.diskStorage({
    destination:'./img',
    filename:function(req,file,cb){
        cb(null,file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({
    storage:storage,
    limits:{fileSize: 1000000},
    fileFilter:function(req,file,cb){
        checkFileType(file,cb);
    }
}).single('filee');

//checkfile
function checkFileType(file,cb){

    const filetypes = /jpeg|jpg|png|gif/
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase())
    const mimetype = filetypes.test(file.mimetype)

    if(mimetype && extname){
        return cb(null,true);
    }else{
        cb('Error: que des images')
    }
}


router.put('/uploadPicture', async (req, res) => {
    upload(req,res,(err) =>{
        if(err){
            res.json(err)
        }else{
            res.send({"msg":'image sauvegardé',"info":req.file.path})
        }
    })
});

module.exports = router;