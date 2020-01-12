let dataFromServer;
requestData();

let tasks;
tasks = localStorageGet();

clearTasks();
showTasks(); 
