var taskHandler = require("./taskHandler");
var myRepo = require("./Repo");

myRepo.save("fromMain");
myRepo.save("fromMain");
myRepo.save("fromMain");
taskHandler.save();
taskHandler.save();
taskHandler.save();
