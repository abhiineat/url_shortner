const express=require('express')
const router=express.Router();
const {generateNewUrl, getUrl}=require('../controllers/url')
router.post('/',generateNewUrl)
router.get('/:shortId',getUrl)
module.exports=router