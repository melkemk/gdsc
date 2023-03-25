const fs = require('fs/promises');

const location = process.argv[2];
const type = process.argv[3];

fs.readdir(location).then((texts) => {
    texts.forEach(txt => {
        if (txt.endsWith('.' + type)) console.log(txt)
    })
})

