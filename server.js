var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articleOne = {
    title: 'Article One : Lakshmi Aravind',
    heading: 'Article One',
    date:   'Aug 10, 2017',
    content: ` <p>
                    This is the content for article one.This is the content for article one.This is the content for article one.This is the content for article one.This is the content for article one.
                </p>
                <p>
                    This is the content for article one.This is the content for article one.This is the content for article one.This is the content for article one.This is the content for article one.
                </p>
                <p>
                    This is the content for article one.This is the content for article one.This is the content for article one.This is the content for article one.This is the content for article one.
                </p>`,
    
};

var articles = {
    'article-one' : {
        title: 'Article One : Lakshmi Aravind',
        heading: 'Article One',
        date:   'Aug 11, 2017',
        content: ` <p>
                    This is the content for article one.This is the content for article one.This is the content for article one.This is the content for article one.This is the content for article one.
                </p>
                <p>
                    This is the content for article one.This is the content for article one.This is the content for article one.This is the content for article one.This is the content for article one.
                </p>
                <p>
                    This is the content for article one.This is the content for article one.This is the content for article one.This is the content for article one.This is the content for article one.
                </p>`},
    'article-two' : {
        title: 'Article Two : Lakshmi Aravind',
        heading: 'Article Two',
        date:   'Aug 11, 2017',
        content: ` <p>
                    This is the content for article two.
                </p>`},
    'article-three' : {
        title: 'Article Three : Lakshmi Aravind',
        heading: 'Article Three',
        date:   'Aug 11, 2017',
        content: ` <p>
                    This is the content for article Three.
                </p>`
    }
};

function createTemplate (data){

var title = data.title;
var heading = data.heading;
var date = data.date;
var content = data.content;

var htmlcontent = `
<html>
    <head>
        <title>
            ${title}
        </title>
        <meta name="viewport" content="width = device-width, initial-scale=1" />
        <link href="/ui/style.css" rel="stylesheet" />
    </head>    
    
    <body>
        <div class="container">
            <div>
                <a href="/">Home</a>
            </div>
            <hr/>
            <h3>
                ${heading}
            </h3>
            <div>
                ${date}
            </div>
            <div>
                ${content}
            </div>
        </div>
    </body>
</html>
`;
return htmlcontent;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

//app.get('/article-one', function (req,res){
app.get('/:articleName', function (req,res){
    //articleName == article-one
   //res.sendFile(path.join(__dirname, 'ui', 'article-one.html')); 
  // res.send(createTemplate (articleOne));
  //articles[article-one]== {} content object for article one
  var articleName = req.params.articleName;
  res.send(createTemplate(articles[articleName]));
  
});

app.get('/article-two', function (req,res){
   res.sendFile(path.join(__dirname, 'ui', 'article-two.html')); 
});

app.get('/article-three', function (req,res){
   res.sendFile(path.join(__dirname, 'ui', 'article-three.html')); 
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

var counter = 0;
app.get('/counter', function (req,res){
    counter = counter + 1;
   res.send("Counter:"+counter); 
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
