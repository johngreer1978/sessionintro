/**
 * Created by dev on 15/02/17.
 */
var express = require('express');
var express = require('express-session');
var bodyparser = require('bodu-parser');
var app = express();

app.set('views',_dirname + '/views');
app.engine('html', require('ejs').renderfile);

app.use(session({secret: 'ssshhhhh'}));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));

var sess;

app.get('/',function (req,res){
sess = req.session;
//session set when user request our app from via url
    if (sess.email) {
        /*
        *this line check session existence.
        * if it existed will do same action.
         */
        res.redirect('/admin');
    }
    else {
        res.render('index.html');
    }
});

app.post('/login',function (req,res) {
    sess = req.session;
    //in this we are assigning email to sess.email variable.
    //email comes from html page.
    sess.email=req.body.email;
    res.end('done');

})

app.get('/admin',function (req,res) {
    sess = req.session;
    if (sess.email){
        res.write('<h1>Hello '+ sess.email+' </h1>);
        res.end('<a href="+">Logout</a>);}
            else
    }
})