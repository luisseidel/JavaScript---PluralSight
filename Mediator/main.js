var Task = require("./task");

var notificationService = function () {
    var message = "Notifying ";
    this.update = function(task){
        console.log(message + task.user + " for task " + task.name);
    }
};
var logginService = function () {
    var message = "Logging ";
    this.update = function(task){
        console.log(message + task.user + " for task " + task.name);
    }
};
var auditingService = function () {
    var message = "Auditing ";
    this.update = function(task){
        console.log(message + task.user + " for task " + task.name);
    }
};

var mediator = (function () {
    var channels = {};
    
    var subscribe = function (channel, context, func) {
        if(!mediator.channels[channel]) {
            mediator.channels[channel] = []
        }
        mediator.channels[channel].push({
            context: context,
            func: func
        }); //<-- isso é um objeto
    };
    
    var publish = function(channel) {
        if(!this.channels[channel]){
            return false
        }
        
        var args = Array.prototype.slice.call(arguments, 1); //<-- pega o primeiro argumento
        for(var i = 0; i < mediator.channels[channel].length; i++){
            var sub = mediator.channels[channel][i];
            sub.func.apply(sub.context, args)
        }
    };
    return {
        channels: {},
        subscribe: subscribe,
        publish: publish
    };
}());

var task1 = new Task({
    name: "Mediators",
    user: "Luis"
});

var not = new notificationService();
var ls = new logginService();
var audit = new auditingService();

mediator.subscribe("Complete", not, not.update);
mediator.subscribe("Complete", ls, ls.update);
mediator.subscribe("Complete", audit, audit.update);

task1.complete = function() {
    mediator.publish("Complete", this);
    Task.prototype.complete.call(this);
}

task1.complete();