var Task = require('./TaskManager');
var Repo = require("./taskRepository");



var task1 = new Task(Repo.get(1));
var task2 = new Task({name: "Modules"});
var task3 = new Task({name: "Singletons"});
var task4 = new Task({name: "Prototypes"});

task1.complete();
task2.save();
task3.save();
task4.save();