function leapCheck (year) {
  if ((year%4 === 0) && (year%100 !== 0) || (year%400 === 0)){
    return true;
  } else {
    return false;
  }
};


$(document).ready(function(){
  $("form#leapForm").submit(function(event){
    event.preventDefault();
    var year = parseInt($("#leapYear").val());
    var result = leapCheck(year);

    $("#yearText").text(year);
    if (!result) {
      $("#not").text("not");
    } else {
      $("#not").text("");
    }

    $(".answer").show();
  });
});
