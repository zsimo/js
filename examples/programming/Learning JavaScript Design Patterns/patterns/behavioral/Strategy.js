/**
 * Created by Simone.Sacchi on 6/1/2018.
 */


// Haiaty workshop exercise.

var Retriever = {
    get: function() {
        throw new Error("must be implemented");
    }
};

var File = Object.create( Retriever );
File.get = function (options) {
    console.log("file", options);
};
var Cache = Object.create( Retriever );
Cache.get = function (options) {
    console.log("cach", options);
};
var Http = Object.create( Retriever );
Http.get = function (options) {
    console.log("http", options);
};

var configs = {
    type: "file",
    options: {
        url: "..."
    }
};

var client;

switch (configs.type) {

    case "cache":
        client = Object.create( Cache );
        break;
    case "file":
        client = Object.create( File );
        break;
    case "ajax":
        client = Object.create( Http );
        break;

    default:
        throw new Error("invalid type");

}

client.get(configs.options);

