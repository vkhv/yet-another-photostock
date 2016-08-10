const join = require('path').join
const photos = [];
const Photo = require('../models/Photo');
const fs = require('fs');

exports.lists = (req, res) => {
    res.render('photos', {
        title: 'Photos',
        photos
    })
}

exports.form = (req, res) => res.render('photos/upload', { title : 'Photo upload' })

exports.submit = dir => (req, res, next) => {
    fs.rename(req.files.image.file, dir +  req.files.image.filename, err => {
        console.log(dir + req.files.image.filename);
        if (err) {
            return next(err);
        }
        Photo.create({
            name: req.files.image.name, path: dir + req.files.image
        }, err => {
            if(err) return next(err);
            res.redirect('/');
        })
    })
}
