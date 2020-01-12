function localStorageSave(tasks){
    let data = JSON.stringify(tasks);
    localStorage.setItem('tasks', data)
}

function localStorageGet(){
    let data = localStorage.getItem('tasks');
    if(data) {
        tasks = JSON.parse(data)
    }else{
        tasks = [];
    }
    return tasks
}