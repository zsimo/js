"use strict";

var fs = require('fs');
var humps = require('humps');
var Mustache = require('mustache');

var index = "public/index.html";
var indexTemplate = "src/index.mustache";
var pagesFolder = "public/pages/";

var dataForMustache = [];

fs.readdir(pagesFolder, function (err, files) {
    if (err) {
        console.log(err);
    } else {

        files.filter(function (file) {
            return file.indexOf(".html") !== -1;
        }).forEach(function (file) {
            var data = {};
            data.url = file;
            data.name = humps.pascalize(file.split(".")[0]);
            dataForMustache.push(data);
        });

        fs.readFile(indexTemplate, 'utf8', function (err, template) {
            if (err) {
                console.log(err);
            }
            var indexFile = Mustache.render(template, {data: dataForMustache});
            fs.writeFile(index, indexFile, function(err) {
                if(err) {
                    return console.log(err);
                }
                console.log("Index created!");
            });
        });


    }
});


