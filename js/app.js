var dataFromServer;
requestData();

var tasks;
tasks = localStorageGet();

clearTasks();
showTasks(); 
