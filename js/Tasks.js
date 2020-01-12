// function Tasks(arr)  {
//     this.task = arr[0];
//     this.descryption =  arr[1];
//     this.status = arr[2];
//     this.priority = arr[3];
// }

function Tasks(arr){
    
        [this.task,
        this.descryption,
        this.status,
        this.priority] = [...arr]; 
}