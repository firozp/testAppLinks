import express from 'express'

const app = express();

app.use(express.static('public'))

app.get("/redirect", (req,res)=>{
    let r = (Math.random() + 1).toString(36).substring(7);
    if(req.query && req.query.articleId) {
        r = `${req.query.articleId}[${r}]`
    }
    return res.redirect(`https://testapplinks.onrender.com/test?articleId=${r}`)
})

app.get("/test",(req,res)=>{
    return res.send(`<h1> Loading article ${req.query.articleId}`)
})

app.listen(3000,()=>{
    console.log("Started")
})