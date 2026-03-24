import express from 'express'

const app = express();

app.set("view engine",'ejs')
app.use(express.urlencoded({extended:true})) //used to make requested body in readable form

//app.set('views', './templates') //custome folder

app.get('/login',(req,res)=>{
res.render('login')
})


app.post('/profile',(req,res)=>{
    res.setHeader('Set-Cookie',"login=true")
    res.setHeader('Set-Cookie',"name="+req.body.name)
res.render('profile')
})

app.get('/',(req,res)=>{
    let cookies_data = req.get("cookie");
    let cookiesData = cookies_data.split(";");
    let data = cookiesData[1].split("=")
res.render('home',{name:data[1]})
})
app.listen(3200)
