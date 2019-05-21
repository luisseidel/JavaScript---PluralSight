var Task = function(data) {
    this.name = data.name;
    this.priority = data.priority;
    this.project = data.project;
    this.user = data.user
    this.completed = data.completed;
}

var TaskService = function() {
    return {
        complete: function (task) {
            task.completed = true;
            console.log("Completing Task " + task.name);
        },
        setCompleteData: function (task) {
            task.completeDate = new Date();
            console.log(task.name + " complete on " + task.completeDate);
        },
        notifyCompletion: function(task, user) {
            console.log("Notifying " + user + " of the completion of " + task.name)
        },
        save: function(task) {
            console.log("Saving Task: " + task.name);
        }
        
    }
}();

var TaskServiceWrapper = function() {
    var completeAndNotify = function(task){
        TaskService.complete(myTask);
        if(myTask.completed == true ){
            TaskService.setCompleteData(myTask);
            TaskService.notifyCompletion(myTask, myTask.user);
            TaskService.save(myTask);
        }
    }
    return {
        completeAndNotify: completeAndNotify
    }
}();


//main
var myTask = new Task({
    name: "MyTask",
    priority: 1,
    project: "Courses",
    user: "Luis",
    completed: false
});

TaskServiceWrapper.completeAndNotify(myTask);
console.log(myTask);