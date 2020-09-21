
function writeWindow(picturename) {
  var newWindow;
  newWindow = open('','wolfWindow',
    'toolbar=1,location=1,status=no,width=300,' + 
    'height=200,resizable=0');
  newWindow.document.open();
  newWindow.document.write(
    '<p><strong>This is your wolf.</strong></p>');
  newWindow.document.write('<hr/>');
  if (picturename=='wolf'){
  newWindow.document.write('<p><img src="images/wolf_cuddly.jpg" width="300" height="200" alt="wolf" id="wolf"></p>');   
} else if(picturename=='wolf_h'){
  newWindow.document.write('<p><img src="images/wolf_howl.jpg" width="300" height="200" alt="wolf" id="wolf_h"></p>');  
} else if(picturename=='wolf_m'){
  newWindow.document.write('<p><img src="images/wolf_moon.jpg" width="300" height="200" alt="wolf" id="wolf_m"></p>');
} else if(picturename=='wolf_p'){
  newWindow.document.write('<p><img src="images/wolf_pup.jpg" width="300" height="200" alt="wolf" id="wolf_p"></p>');
} else if(picturename=='wolf_s'){
  newWindow.document.write('<p><img src="images/wolf_snow.jpg" width="300" height="200" alt="wolf" id="wolf_s"></p>');
} else {
    document.write(sorry);
}

  newWindow.document.write('<input type="button" ' + 
    'value="Close Window" onclick="window.close();"/>');
  newWindow.document.close();
};


  