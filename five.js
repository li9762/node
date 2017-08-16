var fs = require("fs");
var path = require("path");
var content = process.argv[2];
fs.readdir(content, function(err, list){
    for(var i=0; i<list.length; i++) {
        var file = list[i];
        if (path.extname(file) == '.txt') {
            console.log(file);
        }
    }
});
