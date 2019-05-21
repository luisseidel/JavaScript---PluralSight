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

var UrgentTask = function(name, priority) {
    Task.call(this, name); //chamamos o construtor da Task. igual ao super();
    this.priority = priority;
};

UrgentTask.prototype = Object.create(Task.prototype);
UrgentTask.prototype.notify = function(){
    console.log("Notifying");
};
UrgentTask.prototype.save = function(){
    this.notify();
    console.log*("Sabing");
    Task.prototype.save.call(this);
}

var ut = new UrgentTask("This is urgent", 1);
ut.complete();
ut.save();
console.log(ut);