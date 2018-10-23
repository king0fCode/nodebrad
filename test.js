const fs = require('fs');
const https = require('https');

fs.writeFile(__dirname + "/index.html", "<h1>HTML Create using node</h1>", (error) => {
    if (error) {
        return console.log(error);

    } else {
        return console.log("congrates");

    }
});

const myPhoto = 'https://tovarioptom.com/en/image/cache/data/%D0%9A%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B8%20%20%D1%82%D0%BE%D0%B2%D0%B0%D1%80%D0%BE%D0%B2/%D0%B0%D0%BC%D0%B0/71xsSiDDGxL._SL1318_-500x500.jpg';


https.get(myPhoto, (response) => {
    response.pipe(fs.createWriteStream(__dirname + "/img.jpg"));
})