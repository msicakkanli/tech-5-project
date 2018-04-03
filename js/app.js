
$(document).ready(function () {
    $.getJSON('https://randomuser.me/api/?results=12', function (response) {
        let bodyHTML = ""
   for (i=0; i<12; i++) {
       if (i === 0 || i === 3 || i === 6 || i === 9 ) {
           bodyHTML += '<container class="list">'
       } 
       bodyHTML += '<div class="employee" id="'+i+'">'
       bodyHTML += '<img class="image" src="'+ response.results[i].picture.medium + '" alt="Smiley face">'
       bodyHTML += '<ul class="empList">'
       bodyHTML += '<li>' + response.results[i].name.first +' '+ response.results[i].name.last + '</li>'
       bodyHTML += '<li>' + response.results[i].email + '</li>'
       bodyHTML += '<li>' + response.results[i].location.city + '</li>'
       bodyHTML += '</ul>'
       bodyHTML += '</div>'
       if (i === 2 || i === 5 || i === 8 || i === 11 ) {
        bodyHTML += '</container>'
    } 
   }
   $('#master').html(bodyHTML);
    })
})


