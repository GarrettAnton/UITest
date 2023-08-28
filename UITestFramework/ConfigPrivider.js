const fs = require('fs');
const path = require('path');

let Config;
// const readConfig = async () => {
//     return new Promise((resolve, reject) => {
//         fs.readFile(
//             path.join(__dirname, '..', 'config.json'),
//             'utf8',
//             (err, data) => {
//                 if (err) {
//                     return reject(err);
//                 }
//                 return resolve(data);
//             }
//         );
//     });
// };

// readConfig()
//     .then((data) => {
//         //console.log(data);
//         Config = JSON.parse(data);
//         module.exports.Config = Config;
//     })
//     .catch((err) => {
//         console.log(err.message);
//     });

// fs.readFile(path.join(__dirname, '..', 'config.json'), 'utf8', (err, data) => {
//     if (err) {
//         return reject(err);
//     }
//     Config = JSON.parse(data);
// });

Config = JSON.parse(
    fs.readFileSync(path.join(__dirname, '..', 'config.json'), 'utf8')
);

module.exports = Config;
