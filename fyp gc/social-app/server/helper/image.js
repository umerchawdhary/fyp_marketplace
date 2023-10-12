const fs = require('fs')
const json = require("../utils/jsonresponse");

const saveImages = (req, type) => {

    let date = Date.now();
    let file = req.files.image;
    let fileName = `${date}${req.user._id}${file.name.slice(file.name.indexOf("."))}`;
    const newpath = `public/upload/${type}/${fileName}`;

    file.mv(newpath, (err) => {
        if (err) {
            console.log(err)
            return json(res, 500, err.message)
        }
    })
    return (`${req.protocol}://${req.get("host")}/upload/${type}/${fileName}`);
}

const saveVideos = (req, type) => {

    let date = Date.now();
    let file = req.files.video;
    let fileName = `${date}${req.user._id}${file.name.slice(file.name.indexOf("."))}`;
    const newpath = `public/upload/${type}/${fileName}`;

    file.mv(newpath, (err) => {
        if (err) {
            console.log(err)
            return json(res, 500, err.message)
        }
    })
    return (`${req.protocol}://${req.get("host")}/upload/${type}/${fileName}`);
}

const delImages = (fileName, type) => {
    fileName = fileName.slice(fileName.lastIndexOf("/") + 1);
    if (fileName === "default_profile.jpg" || fileName === "default_cover.jpg") return;

    let path = `public/upload/${type}/${fileName}`;
    fs.unlink(path, function (err) {
        if (err) {
            // throw err;
        }
    })
}

module.exports.saveImages = saveImages;
module.exports.saveVideos = saveVideos;
module.exports.delImages = delImages;
