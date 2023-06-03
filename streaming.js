const fs = require('fs');


//! read the file fromthe directory in  the form of straimg
let readStream = fs.createReadStream('./newName.txt');

readStream.on('data', (bocks) => {
    //! data in the form of buffer 

    console.log(bocks);
})