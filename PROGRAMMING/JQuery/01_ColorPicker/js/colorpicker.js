//Function to convert hex format to a rgb color
function rgb2hex(rgb) {
  var hexDigits = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"];
  rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
  function hex(x) {
    return isNaN(x) ? "00" : hexDigits[(x - x % 16) / 16] + hexDigits[x % 16];
  }
  return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
}
// Color Picker Default Value (Background Color)
$("#colorInputColor").val(rgb2hex($('#Div').css('background-color')));
// Color Picker on Change
$('.color').css({'background':$("#Div").css("background-color")});
$('#colorInputColor').change(function(){
  var color = $(this).val();
  $('.color').css({'background':color});
  var colorPicker = $("#colorInputColor").val();
  $("#colorInputText").val(colorPicker);
  $("#Div").css("background-color",colorPicker);
});

// Change Background Color Button
$('#DivChangeBGColor').click(function(){
  var colorTextBox = $("#colorInputText").val();
if (colorTextBox == ""){
  alert("Please write or choose a color")
}else{
  $("#Div").css("background-color",colorTextBox);
  $("#colorInputColor").val(rgb2hex($('#Div').css('background-color')));
  $('.color').css({'background':colorTextBox});
}
});
// Reset Background Color 
$('#DivResetBGColor').click(function(){
  $("#Div").css("background-color", "");
  $("#colorInputText").val("");
  $("#colorInputColor").val(rgb2hex($('#Div').css('background-color')));
  $('.color').css({'background':$("#Div").css("background-color")});
});