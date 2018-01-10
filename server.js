var http = require('http');
var connect = require('connect');

var app = connect();
app.use('/profile', profile);

function profile(request,response){
  console.log('User requested profile')
}

http.createServer(app).listen(4200);
console.log("Server is running...");
