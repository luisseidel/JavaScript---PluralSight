var Task = function(name){
    this.name = name;
    this.completed = false;
}

Task.prototype.complete = function () {
    console.log("Completing task: " + this.name);
    this.completed = true;
}

Task.prototype.save = function() {
    console.log("Saving task " + this.name);
}

var myTask = new Task("Legacy Task");
myTask.complete();
myTask.save();

var urgentTask = new Task("Urgent Task");
urgentTask.priority = 2;
urgentTask.notify = function() {
    console.log("Notifying important people")
};
urgentTask.complete();
urgentTask.save = function() {
    this.notify();
        Task.prototype.save.call(this);
};
urgentTask.save();