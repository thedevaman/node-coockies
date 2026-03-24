import express from 'express'

const app = express();

app.set("view engine",'ejs')

//app.set('views', './templates') //custome folder

app.get('/login',(req,res)=>{
res.render('login')
})


app.post('/profile',(req,res)=>{
res.render('profile')
})

app.get('/',(req,res)=>{
res.render('home')
})
app.listen(3200)
