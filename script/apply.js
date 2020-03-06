/*==========================================
    Form Submit
.   ======================================== */

//data validation

var notNull = function(data){
  if(data == ""){
    return false;
  }
  else{
    return true;
  }
}

var vldemail = function(data){
  if(/^[!#$%&'*+-\/=?^_`{|}~0-9a-zA-Z]+[@][0-9a-zA-Z]+[.][0-9a-zA-Z.]+$/.test(data)){
      return true;
  }
  else{
      return false;
  }
};

var vldContactNo = function(data){
  if(/^[0-9]{10}$/.test(data)){
      return true;
  }
  else{
      return false;
  }
};

var vldTeamName = function(){
  if(notNull($("#teamName").val()) == false){
    $("#teamNameHelp").text("Team Name cannot be empty");
    return false;
  }
  else{
    $("#teamNameHelp").text("");
    $("#submitHelp").text("");
    return true;
  }
};

var vldCollegeName = function(){
  if(notNull($("#clg").val()) == false){
    $("#clgHelp").text("College Name cannot be empty");
    return false;
  }
  else{
    $("#clgHelp").text("");
    $("#submitHelp").text("");
    return true;
  }
}

var vldn1 = function(){
  if(notNull($("#n1").val()) == false){
    $("#n1Help").text("Name cannot be empty");
    return false;
  }
  else{
    $("#n1Help").text("");
    $("#submitHelp").text("");
    return true;
  }
}

var vldmno1 = function(){
  if(vldContactNo($("#mno1").val()) == false){
    $("#mno1Help").text("Invalid contect number");
    return false;
  }
  else{
    $("#mno1Help").text("");
    $("#submitHelp").text("");
    return true;
  }
}

var vldm1 = function(){
  if(vldemail($("#m1").val()) == false){
    $("#m1Help").text("Invalid Email Id");
    return false;
  }
  else{
    $("#m1Help").text("");
    $("#submitHelp").text("");
    return true;
  }
}

var vldn2 = function(){
  if(notNull($("#n2").val()) == false){
    $("#n2Help").text("Name cannot be empty");
    return false;
  }
  else{
    $("#n2Help").text("");
    $("#submitHelp").text("");
    return true;
  }
}

var vldmno2 = function(){
  if(vldContactNo($("#mno2").val()) == false){
    $("#mno2Help").text("Invalid contect number");
    return false;
  }
  else{
    $("#mno2Help").text("");
    $("#submitHelp").text("");
    return true;
  }
}

var vldm2 = function(){
  if(vldemail($("#m2").val()) == false){
    $("#m2Help").text("Invalid Email Id");
    return false;
  }
  else{
    $("#m2Help").text("");
    $("#submitHelp").text("");
    return true;
  }
}

var vldn3 = function(){
  if(notNull($("#n3").val()) == false){
    $("#mno3").off('focusout');
    $("#m3").off('focusout'); 
    $("#mno3Help").text("");   
    $("#m3Help").text("");
  }
  else{
    $("#mno3").focusout(vldmno3);
    $("#m3").focusout(vldm3);
    $("#submitHelp").text("");
  }
}

var vldmno3 = function(){
  if(vldContactNo($("#mno3").val()) == false){
    $("#mno3Help").text("Invalid contect number");
    return false;
  }
  else{
    $("#mno3Help").text("");
    $("#submitHelp").text("");
    return true;
  }
}

var vldm3 = function(){
  if(vldemail($("#m3").val()) == false){
    $("#m3Help").text("Invalid Email Id");
    return false;
  }
  else{
    $("#m3Help").text("");
    $("#submitHelp").text("");
    return true;
  }
}

var vldn4 = function(){
  if(notNull($("#n4").val()) == false){
    $("#mno4").off('focusout');
    $("#m4").off('focusout');
    $("#mno4Help").text("");
    $("#m4Help").text("");
  }
  else{
    $("#mno4").focusout(vldmno4);
    $("#m4").focusout(vldm4);
    $("#submitHelp").text("");
  }
}

var vldmno4 = function(){
  if(vldContactNo($("#mno4").val()) == false){
    $("#mno4Help").text("Invalid contect number");
    return false;
  }
  else{
    $("#mno4Help").text("");
    $("#submitHelp").text("");
    return true;
  }
}

var vldm4 = function(){
  if(vldemail($("#m4").val()) == false){
    $("#m4Help").text("Invalid Email Id");
    return false;
  }
  else{
    $("#m4Help").text("");
    $("#submitHelp").text("");
    return true;
  }
}

// var vldexp = function(){
//   if($("#exp").val().length < 150){
//     $("#expHelp").text("Minimum 150 words required");
//     return false;
//   }
//   else{
//     $("#expHelp").text("");
//     $("#submitHelp").text("");
//     return true;
//   }
// }

var vlddomain = function(){
  if(notNull($("#domain").val()) == false){
    $("#domainHelp").text("Please Select Domain");
    return false;
  }
  else{
    $("#domainHelp").text("");
    $("#submitHelp").text("");
    return true;
  }
}

var vldpro = function(){
  if(notNull($("#pro").val()) == false){
    $("#proHelp").text("Problem Statement cannot be empty");
    return false;
  }
  else{
    $("#proHelp").text("");
    $("#submitHelp").text("");
    return true;
  }
}

var vldsol = function(){
  if($("#sol").val().length < 200){
    $("#solHelp").text("Minimum 200 words required");
    return false;
  }
  else{
    $("#solHelp").text("");
    $("#submitHelp").text("");
    return true;
  }
}

$("#teamName").focusout(vldTeamName);
$("#clg").focusout(vldCollegeName);

$("#n1").focusout(vldn1);
$("#mno1").focusout(vldmno1);
$("#m1").focusout(vldm1);

$("#n2").focusout(vldn2);
$("#mno2").focusout(vldmno2);
$("#m2").focusout(vldm2);

$("#n3").on('focusout',vldn3);
// $("#mno3").focusout(vldmno3);
// $("#m3").focusout(vldm3);

$("#n4").on('focusout',vldn4);
// $("#mno4").focusout(vldmno4);
// $("#m4").focusout(vldm4);

// $("#exp").focusout(vldexp);

$("#domain").focusout(vlddomain);
$("#pro").focusout(vldpro);
$("#sol").focusout(vldsol);

function formvalid(){
  var vldform = true;
  //team Name
  vldform = vldTeamName();

  //College Name
  vldform = vldCollegeName();

  //////////member 1
  //Name
  vldform = vldn1();

  //Contect Number
  vldform = vldmno1();

  //Email
  vldform = vldm1();

  //////////member 12
  //Name
  vldform = vldn2();

  //Contect Number
  vldform = vldmno2();

  //Email
  vldform = vldm2();

  //////////member 3
  if($("#n3").val() != ""){
    //Name
    // vldform = vldn3();

    //Contect Number
    vldform = vldmno3();

    //Email
    vldform = vldm3();
  }
  
  //////////member 4
  if($("#n4").val() != ""){
    //Name
    // vldform = vldn4();
  
    //Contect Number
    vldform = vldmno4();
  
    //Email
    vldform = vldm4();
  }

  //Experience
  // vldform = vldexp();

  //Domain
  vldform = vlddomain();

  //Problem Statement
  vldform = vldpro();

  //Proposed Solution
  vldform = vldsol();

  if(vldform == true){
    return true;
  }
  else{
    return false;
  }
}

var url = 'https://script.google.com/macros/s/AKfycbyDImZKZqsqKvgxwFJHHcCG4rtA03zl5dTI2t1g8qsYUbR3OG4H/exec';

$('#submit-form').on('click', function(e) {
  e.preventDefault();

  if(formvalid() == false){
    $("#submitHelp").text("There is some error in form first resolve it.");
    return;
  }

  var formdata = {
    'TeamName': $("input[name='TeamName']").val(),
    'CollageName': $("input[name='CollageName']").val(),

    'Name1' : $("input[name='Name1']").val(),
    'MNo1' : $("input[name='MNo1']").val(),
    'Email1' : $("input[name='Email1']").val(),
    'Git1' : $("input[name='Git1']").val(),
    'LinkedIn1' : $("input[name='LinkedIn1']").val(),
    
    'Name2' : $("input[name='Name2']").val(),
    'MNo2' : $("input[name='MNo2']").val(),
    'Email2' : $("input[name='Email2']").val(),
    'Git2' : $("input[name='Git2']").val(),
    'LinkedIn2' : $("input[name='LinkedIn2']").val(),

    'Name3' : $("input[name='Name3']").val(),
    'MNo3' : $("input[name='MNo3']").val(),
    'Email3' : $("input[name='Email3']").val(),
    'Git3' : $("input[name='Git3']").val(),
    'LinkedIn3' : $("input[name='LinkedIn3']").val(),

    'Name4' : $("input[name='Name4']").val(),
    'MNo4' : $("input[name='MNo4']").val(),
    'Email4' : $("input[name='Email4']").val(),
    'Git4' : $("input[name='Git4']").val(),
    'LinkedIn4' : $("input[name='LinkedIn4']").val(),
    
    'exp' : $("textarea[name='exp']").val(),
    'domain' : $("input[name='domain']").val(),
    'problem' : $("input[name='problem']").val(),
    'solution' : $("textarea[name='solution']").val(),
    
  }

  console.log(formdata);

  var jqxhr = $.ajax({
    url: url,
    method: "POST",
    dataType: "json",
    data: formdata,
    success: function(response){
      successResponse(response);
    },
  });
})

var successResponse = function(data){
  if(data["result"] == 1 || data["result"] == 201){
    $("#regNo").text(data["data"]["regNo"]);
    $("#successEmail").text(data["data"]["email"]);

    // if(data["result"] == 201){
    //   $("#SuccessMsg").append("Contect us, in case you don't receive conformation email from us.");
    // }

    $("#title-head h1").text("Successfully Registered");

    $("#SuccessMsg").css("display", "block");
  
    $("form").hide();
  }
  else{
    $("#submitHelp").html("Unable to submit form. Please try after sometime. If problem occurs multiple times then contect us with given error code." + "<br> Error code : " + data["result"]);
  }
  
  
}

/*===========================================
    Form format
.   =================================== */


