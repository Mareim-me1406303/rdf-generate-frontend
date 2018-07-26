// to build a web-server
let express = require ('express');
let app= express();
const handlebars   =  require('express-handlebars')
const bodyParser   =  require('body-parser')



let controller = require('/Users/mariamelsayem/Downloads/rdf-generate-master/controllers/controller.js')

// serving ststic file in express
app.use(express.static(__dirname + "/views"));
app.use(express.static(__dirname));
app.use( bodyParser.urlencoded( {extended: true}) )
app.engine( 'hbs', handlebars( {defaultLayout: 'main', extname: '.hbs'} ) )

// Register handlebars as the view engine to be used to render the templates
app.set('view engine', 'hbs')

app.get("/app",(request,response)=> controller.index(request,response));
app.post("/app",............)=> controller.getDescriptorNoPredicates(request,respnose)

app.listen(8000,()=> {
    console.log("Listining on port 8000 ")
});

