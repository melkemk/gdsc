const link = process.argv[2];
const http = require('http');
http.get(link, (res) => {
    res.on('data', function (data) {
        console.log(data.toString())
    })
})

// server.listen(8000);