const shortid = require('shortid');
const URL=require('../models/url');
async function generateNewUrl(req,res){
    const body=req.body;
    if(!body.url) return res.status(400).json({error:"url is required"})
    const shortChar=shortid();
    await URL.create({
        shortId:shortChar,
        redirectUrl:body.url,
        visitedHistory:[]
    })
    return res.json({
        id:shortChar
    })
    }
async function getUrl(req,res){
    const shortId=req.params.shortId
    const entry=await URL.findOneAndUpdate(
        {shortId},{$push:{
            visitHistory:{timestamp:Date.now()},
        }}
    )
    res.redirect(entry.redirectUrl)
}

    module.exports={generateNewUrl,getUrl}