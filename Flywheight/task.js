var Task = function(data) {
    this.name = data.name;
    this.flyweight = FlyweightFactory.get(data.project, data.priority, data.user, data.completed);
    /*this.priority = data.priority;
    this.project = data.project;
    this.user = data.user
    this.completed = data.completed;*/
};

function Flyweight(project, priority, user, completed){
    this.priority = priority;
    this.project = project;
    this.user = user;
    this.completed = completed;
};

var FlyweightFactory = function(){
    var flyweights = {};
    var get = function(project, priority, user, completed){
        if(!flyweights[project + priority + user + completed]){
            flyweights[project + priority + user + completed] = new Flyweight(project, priority, user, completed);
        }
        return flyweights[project + priority + user + completed];
    };
    var getCount = function() {
        var count = 0;
        for (var f in flyweights) {
            count++;
        };
        return count;
    }
    return {
        get: get,
        getCount: getCount
    }
}();

function TasksCollection() {
    var tasks = {};
    var count = 0;
    var add = function (data) {
        tasks[data.name] = new Task(data);
        count++;
    };
    var get = function(name){
        return tasks[name];
    };
    var getCount = function() {
        return count;
    };
    return {
        add: add,
        get: get,
        getCount: getCount
    };
}

var tasks = new TasksCollection();

var projects = ["None", "Courses", "Training", "Project"];
var priorities = [1, 2, 3, 4, 5];
var users = ["Luis", "Guilherme", "Seidel"];
var completed = [true, false];

var initialMemory = process.memoryUsage().heapUsed;
console.log("Initial Memory: " + initialMemory);

//cria tasks aleatóriamente
for(var i = 0; i < 10000; i++){
    tasks.add({
        name: "Task" + i,
        priority: priorities[Math.floor(Math.random() * 5)],
        project: projects[Math.floor(Math.random() * 4)],
        user: users[Math.floor(Math.random() * 3)],
        completed: completed[Math.floor(Math.random() * 2)]
        
    });
};

var afterMemory = process.memoryUsage().heapUsed;
console.log("Used memory " + (afterMemory - initialMemory / 1000000));
console.log("Tasks " + tasks.getCount());
console.log("Flyweights " + FlyweightFactory.getCount());