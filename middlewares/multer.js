import multer from'multer'

//aba yesma storage banauxam 
const storage = multer.diskStorage({
    filename:function(req,file,callback){
        callback(null, file.originalname)
    }
})
//aba yesma diskstorage ko instance create garnu paryo

const upload = multer({storage})

export default upload
//next aba route create garnu parxa yo  upload middleware ko use garera....