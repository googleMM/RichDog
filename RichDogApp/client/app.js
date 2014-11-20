var express = require('express');
var path = require('path');
var app = express();

app.configure(function(){
	app.use(express.static(__dirname));
	app.set('port',3000);
	app.get('/index',function(req,res){
		res.sendfile('/index.html');
	});
});

app.listen(3000);