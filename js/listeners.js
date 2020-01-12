getElement('toDoSelect').addEventListener('change', function(){
    // console.log(getElement('toDoSelect').selectedIndex);
    getElement('toDoSelectDoes').value = dataFromServer.defaultsDoes[getElement('toDoSelect').selectedIndex]
});

getElement('closeBtn').addEventListener('click', function(){
    getElement('addForm').removeAttribute('data-edit');
    getElement('addForm').classList.add('hidden');
    renewTasks();
});

getElement('deleteBtn').addEventListener('click', function (){
    let editId = getElement('addForm').getAttribute('data-edit');
    // console.log(editId);
    if(!editId){
        return
    }
    tasks.splice(editId,1);
    getElement('addForm').removeAttribute('data-edit');
    getElement('addForm').classList.add('hidden'); 
    renewTasks();
    localStorageSave(tasks);
});

getElement('saveBtn').addEventListener('click', function(){
    let editId = getElement('addForm').getAttribute('data-edit');
    getElement('addForm').classList.add('hidden');
   if(editId){
    //    console.log('edit');
       tasks[editId] = new Tasks(getFormValues());
   }else{
       let task = new Tasks(getFormValues());
       tasks.push(task);
    //    console.log('add');
   }
   getElement('addForm').removeAttribute('data-edit');
    renewTasks();
    localStorageSave(tasks);
});

getElement('addBtn').addEventListener('click', function(){
    getElement('addForm').classList.remove('hidden');
    // console.log(dataFromServer.status);
 
 
    dataFromServer.defaults.forEach(function(item, i) {
     $('<option/>', {
         html: item,
         "data-id": i
     }).appendTo(getElement('toDoSelect'))
    });
 
    dataFromServer.status.forEach(function(item, i) {
     $('<option/>', {
         html: item,
         "data-id": i
     }).appendTo(getElement('statusSelect'))
    });
 
    dataFromServer.priority.forEach(function(item, i) {
     $('<option/>', {
         html: item,
         "data-id": i
     }).appendTo(getElement('prioritySelect'))
    })
    
 
 });

 $('#tasks').click(function(event){
    let target = event.target;
    let id = target.parentElement.dataset.item;
    // console.log(target);
    if( target.type === 'button'){
        getElement('addForm').classList.remove('hidden');
        getElement('addForm').setAttribute('data-edit', id);
        $('<option/>', {
            html: tasks[id].task,
        }).appendTo(getElement('toDoSelect'));

        $('<option/>', {
            html: tasks[id].status,
            class: 'choosen'
        }).appendTo(getElement('statusSelect'));
        dataFromServer.status.forEach(function(item, i) {
            $('<option/>', {
                html: item
            }).appendTo(getElement('statusSelect'))
           });

        $('<option/>', {
            html: tasks[id].priority,
            class: 'choosen'
        }).appendTo(getElement('prioritySelect'));
        dataFromServer.priority.forEach(function(item, i) {
            $('<option/>', {
                html: item
            }).appendTo(getElement('prioritySelect'))
           });
           getElement('toDoSelectDoes').value = tasks[id].descryption
    }
});