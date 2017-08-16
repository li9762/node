var mymodule = require("./mymodule");
var ext = process.argv[3];
mymodule("test", ext, function (err, data) {
    if (err)
        return console.error('There was an error:', err)

    data.forEach(function (file) {
        console.log(file)
    })
})