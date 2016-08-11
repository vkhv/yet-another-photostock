const join = require('path').join
const photos = [];
const Photo = require('../models/Photo');
const fs = require('fs');

exports.lists = (req, res) => {
    Photo.find({}, function (err, photos) {
        if(err) return next();
        res.render('photos', {
            title: 'Photos',
            photos
        })
    })
}

exports.form = (req, res) => res.render('photos/upload', { title : 'Photo upload' })

exports.submit = dir => (req, res, next) => {
    const file = req.files.image.file;
    const name = req.files.image.filename;
    const path = `images/${name}`
    fs.rename(file, dir + name,  err => {
        if (err) return next(err);
        Photo.create({
            name, path
        }, err => {
            if(err) return next(err);
            res.redirect('/');
        })
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
