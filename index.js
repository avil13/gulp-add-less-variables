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
        var variable = [];
        var value;
        for (var v in options) {
            value = options[v];
            if (Array.isArray(value)) {
                value = value.map(function(val){
                    return "'" + val + "'";
                }).join(', ');
            }
            variable.push("@" + v + ": " + value + ";");
        }
        variable = variable.join("\n");
        // Return file
        var str = file.contents.toString('utf8');
        file.contents = new Buffer(variable + str);
        cb(null, file);
    });
};
