const { filter } = require('./mymodule.js')
const location = process.argv[2];
const type = process.argv[3];
filter(location, type, function (err, list) {
    if (err) {
        throw err;
    }
})

