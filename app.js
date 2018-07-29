// to build a web-server
let express = require ('express');
let app= express();
const handlebars   =  require('express-handlebars')
const bodyParser   =  require('body-parser')


let controller = require('/Users/mariamelsayem/Documents/GitHub/rdf-generate-frontend/controllers/controller.js')

// serving ststic file in express
app.use(express.static(__dirname + "/views"));
app.use(express.static(__dirname));
app.use( bodyParser.urlencoded( {extended: true}) )
app.engine( 'hbs', handlebars( {defaultLayout: 'main', extname: '.hbs'} ) )

// Register handlebars as the view engine to be used to render the templates
app.set('view engine', 'hbs')

app.route("/app")
    .get( (request,response)=> controller.index(request,response))
    .put( (request,response)=> controller.update(request,response))

app.route("/entities")
    .post( (req, res) => controller.postEntity(req, res))

app.route("/attribute")
    .post( (req, res) => controller.postAttribute(req, res))


app.route('/api/entities/:json_path')
    .get( (req, res) => controller.getEntity(req, res) )



let port=8000
app.listen(port,()=> {
    console.log(` APP IS AVAILABLE AT http://localhost:${port}/app`)
});

