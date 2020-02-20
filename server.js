var express = require("express");

var app = express();

var PORT = process.env.PORT || 3000;
var exphbs = require("express-handlebars");
var multer = require('multer');
var upload = multer({dest: __dirname + '/uploads/images'});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


app.get("/", (req, res)=> {
res.render('upload')
});
app.post('/upload', upload.single('photo'), (req, res) => {
  if(req.file) {
      // res.json(req.file);
      res.redirect('/')
  }
  else throw 'error';
});


app.listen(PORT, function() {
    console.log(`==> 🌎  Listening on port ${PORT}. Visit http://localhost:${PORT}/ in your browser.`);
  });