import http from 'http'

//create a server object:
http.createServer(
    function (req, res) {
        res.write('Hello'); //write a response to the client
        res.end(); //end the response
    }
).listen(80, '::'); 