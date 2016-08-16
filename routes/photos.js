const join = require('path').join
const photos = [];
// returns Promise
const Photo = require('../models/Photo');
const fs = require('fs');

exports.lists = (req, res) => {
    //Photo.find({}, function (err, photos) {
        //if(err) return next();
        //res.render('photos', {
            //title: 'Photos',
            //photos
        //})
    //
    //})
    //Photo().then(files => {
        //res.render('photos', {
           //title: 'Ptotos',
            //photos: files
        //})
    //})
    console.log('test');
    res.end('1111')
}

exports.form = (req, res) => res.render('photos/upload', { title : 'Photo upload' })

exports.submit = dir => (req, res, next) => {
    const file = req.files.image.file;
    const name = req.files.image.filename;
    const path = `images/stock/${name}`
    fs.rename(file, dir + name,  err => {
        if (err) return next(err);
        res.redirect('/');
    })
}
exports.download = (dir) => (req, res, next) => {
    const id = req.params.id;

    Photo.findById(id, (err, photo) => {
        if(err) return next();
        const path = join(dir, photo.path);
        res.sendFile(path);
    })
}
