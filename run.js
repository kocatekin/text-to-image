const textToImage = require("text-to-image");
const readLine = require("readline");


require('fs').readFileSync('sorular.txt', 'utf-8').split(/\r?\n/).forEach(function(line){
    textToImage.generate(line, {
        debug: true,
        maxWidth: 720,
        fontSize:30,
        fontFamily: "Arial",
        lineHeight: 50,
        margin: 5,
        bgColor: "white",
        textColor: "black"
    }).then(function(dataUri){
        const buffer = Buffer.from(dataUri,"base64");
        //fs.writeFileSync("myimage.png",buffer);
    });
  })
