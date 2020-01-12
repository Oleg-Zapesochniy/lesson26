
//        Jquery
// function requestData(){
//     $.ajax({
//         type: "GET",
//         url: "data.json",
//         }).done(function (msg){
//                 dataFromServer= msg;
//         }).fail(function(msg){
//                 alert("error" + msg)
//             })
//      }

//         XML
// function requestData(){
//     let myReq = new XMLHttpRequest();
//     myReq.open('GET', 'data.json', true);
//     myReq.onreadystatechange = function(){
//         dataFromServer = JSON.parse(myReq.responseText);
//     }
//     myReq.send();
// }

//         Fetch

function requestData(){
    fetch('data.json')
    .then( function (res){
        res.json().then(function(data){
            dataFromServer = data;
        });
    });
}