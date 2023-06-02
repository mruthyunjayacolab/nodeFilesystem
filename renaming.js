const fs = require('fs');

//rename a files


// if (fs.existsSync('./index.txt')) {
//     fs.rename('./index.txt', 'index1.txt', () => {
//         console.log('rename')
//     });
// }
// else {
//     console.log('File no found')
// }


// if (fs.existsSync('./index.txt')) {
//     fs.rename('./index.txt', 'index1.txt', () => {
//         console.log('rename')
//     });
// }
// else {
//     console.log('File no found')
// }

//! file is exist or note and rename file ,
// if (fs.existsSync('./index1.txt') && !fs.existsSync('./index.txt')) {
//     fs.rename('./index1.txt', 'index.txt', () => {
//         console.log('rename')
//     });
// }
// else {
//     console.log('File no found')
// }


//! Deleting the file the is present in the directory

if (fs.existsSync('./index.txt')) {

    fs.unlink('./index.txt', () => {
        console.log('File Deleted')
    });
}
else {
    console.log(' File is not present in the directory');
}