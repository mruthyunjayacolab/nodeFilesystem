const fs = require("fs");


// writeFile is ussed to the override the existing the data in the file
fs.writeFile('index.txt', "Write the from wtiteFile", () => {
    console.log("File Writing");
})

// appnd File Writing

fs.appendFile('./index.txt', ' THe  adding the valuesis appended', () => {
    console.log("File Writing is Appended");


    fs.readFile('./index.txt', (err, data) => {
        if (err) {
            console.log("Error reading");

        }
        else {
            console.log(data.toString());
        }

    })
})



