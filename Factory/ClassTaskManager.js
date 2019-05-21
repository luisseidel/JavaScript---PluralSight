"use strict"

class Task { 
    constructor (name) {
        this.name = name;
        this.completed = false;
    };
    complete () {
        console.log("completing task: " + this.name);
        this.completed = true;
    };
    save () {
        console.log('saving task: ' + this.name);
    };
}

var task1 = new Task("Constructors");
var task2 = new Task("Modules");
var task3 = new Task("Singletons");
var task4 = new Task("Prototypes");

task1.complete();
task2.save();
task3.save();
task4.save();