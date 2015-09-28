var gutil = require("gulp-util"),
    through = require("through2"),
    fs = require("fs"),
    path = require("path");
module.exports = function(options) {
    options = options || {};
    return through.obj(function(file, enc, cb) {
        if (file.isNull()) {
            return cb(null, file);
        }
        if (file.isStream()) {
            return cb(new gutil.PluginError("gulp-less-variables", "Streaming not supported"));
        }
        var varible = [];
        for (var v in options) {
            varible.push("@" + v + ": '" + options[v] + "';\n");
        }
        varible = varible.join("\n\n\n");
        // Return file
        var str = file.contents.toString('utf8');
        file.contents = new Buffer(varible + str);
        cb(null, file);
    });
};