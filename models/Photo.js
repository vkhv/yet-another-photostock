const fs = require('fs');
const co = require('co');

const images = co(function* () {
    const files = yield new Promise((resolve, reject) => {
        fs.readdir('/home/pi/lab/yet-another-photostock/public/images', (err, files) => {
            if(err) throw new Error(err);
            resolve(files);
        });
    });
    return files;
})
// returned promise.
module.exports = images;
