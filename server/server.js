const http = require("http");
const host = 'localhost';
const port = 8000;
const fs = require('fs').promises;
let articlesFile;

const requestListener = function (req, res) {
    res.setHeader("Content-Type", "application/json");
    switch (req.url) {
        case "/articles":
        	res.writeHead(200, {
			    'Access-Control-Allow-Origin' : '*',
			    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
			    "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
			});
            res.end(articlesFile);
            break
        default:
            res.writeHead(404);
            res.end(JSON.stringify({error:"Resource not found"}));
    }
};

const server = http.createServer(requestListener);
fs.readFile("./data/articles.json")
	.then(data => {
		articlesFile = data
		server.listen(port, host, () => {
		    console.log(`Server is running on http://${host}:${port}`);
		});
	})
	.catch(err => {
        console.error(`Could not read json file: ${err}`);
        process.exit(1);
    });

