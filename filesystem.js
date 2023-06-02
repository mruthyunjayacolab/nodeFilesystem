const fs = require('fs')

//console.log(fs)

fs.readFile('./index.txt', (err, data) => {
    if (err) {
        console.error(err);

    }
    else {
        console.log(data.toString());
    }
})