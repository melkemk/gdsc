const http = require('http')
const links = [process.argv[2], process.argv[3], process.argv[4]]
links.forEach((link) => {
    let x = '';
    http.get(link, (res) => {
        res.on('data', function (data) {
            if (data) {
                x += data;
            }

        }
        )
        res.on('end', () => {
            console.log(x);
        });
        res.on('error', (err) => {
            console.error(`Error: ${err.message}`);
        });

    })

})