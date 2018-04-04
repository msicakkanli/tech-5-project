let queryResult =[];

$(document).ready(function () {
    $.getJSON('https://randomuser.me/api/?results=12', function (response) {
        let bodyHTML = ""
   for (i=0; i<12; i++) {
       if (i === 0 || i === 3 || i === 6 || i === 9 ) {
           bodyHTML += '<container class="list">'
       } 
       bodyHTML += '<a href="#openModal">'
       bodyHTML += '<div  class="employee" id="'+i+'">'
       bodyHTML += '<img class="image" id="'+i+'" src="'+ response.results[i].picture.medium + '" alt="Smiley face">'
       bodyHTML += '<ul class="empList" id="'+i+'" >'
       bodyHTML += '<li id="'+i+'" >' + response.results[i].name.first +' '+ response.results[i].name.last + '</li>'
       bodyHTML += '<li id="'+i+'" >' + response.results[i].email + '</li>'
       bodyHTML += '<li id="'+i+'" >' + response.results[i].location.city + '</li>'
       bodyHTML += '</ul>'
       bodyHTML += '</div>'
       bodyHTML += '</a>'
       if (i === 2 || i === 5 || i === 8 || i === 11 ) {
        bodyHTML += '</container>'
    
    } 
   }
   $('#master').html(bodyHTML);
   queryResult.push(response);
   console.log(queryResult);
   
    })
})

$(document).on('click','#master', function (event) {
    let clickId = event.target.id;
    let clickNum = parseInt(clickId);
    
    let modalHTML = ""; 
    modalHTML += '<a href="#close" title="Close" class="close">X</a>'
    modalHTML += '<img class="image" id="'+i+'" src="'+ queryResult[0].results[clickNum].picture.medium + '" alt="Smiley face">'
    modalHTML += '<p>'+ queryResult[0].results[clickNum].name.first +' '+queryResult[0].results[clickNum].name.last +'</p>'
    modalHTML += '<p>'+ queryResult[0].results[clickNum].location.city +'</p>'
    $('#detail').html(modalHTML);
})

