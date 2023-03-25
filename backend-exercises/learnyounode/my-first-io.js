const fs = require('fs/promises');

const location = process.argv[2];

fs.readFile(location, 'utf-8').then(
    (text) => {
        const lines = text.split('\n');
        console.log(lines.length - 1);
    }

)


// const numLines = 

