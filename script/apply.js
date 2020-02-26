// change style of navbar after hero section is scrolled

// const navBar = document.getElementById('navigationbar');

// $(window).scroll(function(){
//     $('#navigationbar').toggleClass('nav-after-scroll', $(this).scrollTop() > 2);
// });


// success msg after submit google form

// function redirect(){
//     window.location.href = "";
//     // alert('hiiii');
// }




var url = 'https://script.google.com/macros/s/AKfycbyDImZKZqsqKvgxwFJHHcCG4rtA03zl5dTI2t1g8qsYUbR3OG4H/exec';

$('#submit-form').on('click', function(e) {
  e.preventDefault();
  
  var formdata = {
    'TeamName': $("input[name='TeamName']").val(),
    'CollageName': $("input[name='CollageName']").val(),

    'Name1' : $("input[name='Name1']").val(),
    'MNo1' : $("input[name='MNo1']").val(),
    'Email1' : $("input[name='Email1']").val(),
    'Git1' : $("input[name='Git1']").val(),
    'LinkedIn1' : $("input[name='LinkedIn1']").val(),
    'exp1' : $("textarea[name='exp1']").val(),
    
    'Name2' : $("input[name='Name2']").val(),
    'MNo2' : $("input[name='MNo2']").val(),
    'Email2' : $("input[name='Email2']").val(),
    'Git2' : $("input[name='Git2']").val(),
    'LinkedIn2' : $("input[name='LinkedIn2']").val(),
    'exp2' : $("textarea[name='exp2']").val(),

    'Name3' : $("input[name='Name3']").val(),
    'MNo3' : $("input[name='MNo3']").val(),
    'Email3' : $("input[name='Email3']").val(),
    'Git3' : $("input[name='Git3']").val(),
    'LinkedIn3' : $("input[name='LinkedIn3']").val(),
    'exp3' : $("textarea[name='exp3']").val(),

    'Name4' : $("input[name='Name4']").val(),
    'MNo4' : $("input[name='MNo4']").val(),
    'Email4' : $("input[name='Email4']").val(),
    'Git4' : $("input[name='Git4']").val(),
    'LinkedIn4' : $("input[name='LinkedIn4']").val(),
    'exp4' : $("textarea[name='exp4']").val(),

    'domain' : $("input[name='domain']").val(),
    'problem' : $("input[name='problem']").val(),
    'solution' : $("textarea[name='solution']").val(),
    
  }

  console.log(formdata);
  var jqxhr = $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    data: formdata,
    success: function(response){
      console.log(response);
      alert("Data saved.");
    },
  });
})