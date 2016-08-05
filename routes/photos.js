const photos = [];
photos.push({
    name: 'Node.js Logo',
    path: 'http://nodejs.org/images/logos/nodejs-green.png'
});

photos.push({
    name: 'Rayan Speaking',
    path: 'http://nodejs.org/images/ryan-speaker.jpg'
});

exports.lists = (req, res) => {
    console.log('route photos exected');
    res.render('photos', {
        title: 'Photos',
        photos
    })
}
