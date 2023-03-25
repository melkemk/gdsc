const fs = require('fs');

// function filter(location, type, fun) {
//     fs.readdir(location).then((texts) => {
//         texts.forEach(txt => {
//             if (txt.endsWith('.' + type)) console.log(txt)
//         })
//         // const filtered=texts.map

//     }).catch((err) => { return fun(err) })
// }


function filter(location, type, fun) {
    fs.readdir(location, ((dir) => {
        console.log(filter)
    }))
}






module.exports = { filter: filter }