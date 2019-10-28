/**
 * Created by kanamars on 20/10/19.
 */
var http = require('http');
var fs = require('fs');
var url = require('url');

var fileData;

// Create a server
http.createServer( function (request, response) {
    // Parse the request containing file name req.url
    var parsedUrl = url.parse(request.url, true);
    var pathname = parsedUrl.pathname;
    var query = parsedUrl.query;
    console.log("req.url", request.url);
    console.log("pathname query", query);
    // Read the requested file content from file system
    if(!fileData) {
        fs.readFile('./data.json', function (err, data) {
            if (err) {
                console.log(err);
                // HTTP Status: 404 : NOT FOUND
                // Content Type: text/plain
                response.writeHead(404, {'Content-Type': 'text/html'});
            } else {
                fileData = data.toString();
                fileData = JSON.parse(fileData);
                returnData(pathname, query, response)
            }
            // Send the response body
            response.end();
        });
    }else{
        // console.log("having the data:", fileData);
        returnData(pathname, query, response);
        response.end();
    }

}).listen(9082);

function returnData(pathname, query, response) {
    //Page found
    // HTTP Status: 200 : OK
    // Content Type: text/plain
    response.writeHead(200, {'Content-Type': 'text/html', 'Access-Control-Allow-Origin': '*'});

    // Write the content of the file to response body
    if(query.account){
       var data = getRespectiveTransaction(query.account);
        response.write(JSON.stringify(data));
    }else{
        response.write(JSON.stringify(fileData.transactions.slice(0, 100)));
    }

}

function getRespectiveTransaction(account) {
    var data = fileData.transactions.filter(function (trans) {
       return  trans.account === account;
    });
    return data[0];
}

// Console will print the message
console.log('Server running at http://127.0.0.1:9082/');
