
let getElement = (element) => {
    switch(element) {
        case 'addBtn': return document.getElementById('add-btn');
        case 'saveBtn': return document.getElementById('save');
        case 'addForm': return document.getElementById('form');
        case 'closeBtn': return document.getElementById('close');
        case 'deleteBtn': return document.getElementById('delete');
        case 'toDoSelect': return document.getElementById('todo-example-select');
        case 'toDoSelectDoes': return document.getElementById('todo-example-select-does');
        case 'statusSelect': return document.getElementById('status');
        case 'prioritySelect': return document.getElementById('priority');
    }
};

getFormValues = () => {
    let arrayTask=[
        getElement('toDoSelect').selectedOptions[0].value,
        getElement('toDoSelectDoes').value,
        getElement('statusSelect').selectedOptions[0].value,
        getElement('prioritySelect').selectedOptions[0].value,
];
return arrayTask;
}

clearForm = () => {
  
    getElement('toDoSelect').innerHTML = "";
    getElement('statusSelect').innerHTML = "";
    getElement('prioritySelect').innerHTML = "";
    getElement('toDoSelectDoes').value = "";
}


clearTasks =() => document.getElementById('tasks').innerHTML = "";

showTasks = () => {
    tasks.forEach(function(item,i){
    showTask(i);
    })
};

showTask = (i) => {
    $('<div/>', {
    class: "alert alert-primary d-flex justify-content-between",
    "role": "alert",
    "data-item": i,
    html: (i+1) + ' ' + tasks[i].descryption 
    //  + tasks[i].status + ' '      
    }).appendTo($('#tasks'))
    .append($('<button/>',{
        class: "btn-warning btn",
        type: "button",
        html: 'Edit'
    }));

}
renewTasks = () => {
    clearForm();
    clearTasks();
    showTasks(); 
}