const express = require("express");
const path = require("path");
const app = express();
const port = 80;

//Express specific stuff
app.use('/static', express.static('static'));
app.use(express.urlencoded({ extended: true }))

//pug specific stuff
app.set('view engine', 'pug')//set the template engine as pug
app.set('views', path.join(__dirname, 'views')) //set the views directory 


// End Point 
app.get('/',(req,res)=>{
    const params = {}
    res.status(200).render('index.pug',params);
})

app.listen(port, ()=>{
    console.log(`The app has runned succesfully on port ${port}`);
});



