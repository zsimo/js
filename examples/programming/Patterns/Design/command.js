/**
 * Command pattern implementation:
 * see https://addyosmani.com/resources/essentialjsdesignpatterns/book/#commandpatternjavascript
 * and
 * see video Practical Design Patterns in JavaScript/38Demo Command Pattern.mp4
 *
 * how to use:
 * var commands = require('client/commands');
 *
 * commands.execute("test", 1, 2, 3);
 * commands.execute("test", 1, 2);
 * commands.replay();
 */

var tasks = {
    test: function (p1, p2, p3) {
        console.log(p1, p2, p3);
    },

    save: function (payload) {
        console.log(payload);
    }
};
var commands = [];

function executeNoLog (name) {

    var args = [].slice.call(arguments, 1);
    return tasks[name] && tasks[name].apply(tasks, args);

}
function execute (name) {

    var args = [].slice.call(arguments, 1);

    commands.push({
        name: name,
        args: args
    });

    return tasks[name] && tasks[name].apply(tasks, args);
}

function replay () {
    for (var i = 0; i < commands.length; i ++) {
        var command = commands[i];
        executeNoLog.apply(tasks, [command.name].concat(command.args));
    }
}


module.exports = {
    execute: execute,
    replay: replay
};