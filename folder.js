const fs = require("fs");


path = "manu"
if (fs.existsSync(path)) {

    fs.rmdir(path, () => {
        console.log("Removing")

    })
}
else {
    fs.mkdir(path, () => {
        console.log(" Directory created successfully");
    })
}
