const express =require('express');
const app = express();
const bodyParser = require('body-parser');
const router = require('./router/index')(express);
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({
//     extended:true
// }))
app.use('/api',router);
const PORT = process.env.PORT || 5000;

app.listen(PORT,()=> {
    console.log(`server is serve on ${PORT}`);
})