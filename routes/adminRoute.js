import express from 'express'
import {addDoctor} from '../controllers/adminController.js'
import upload from '../middlewares/multer.js'
//creating routes now first we create router instance
const adminRouter = express.Router()
//using this router we can create multiple instance

adminRouter.post('/add-doctor',upload.single('image'),addDoctor);
 
export default adminRouter