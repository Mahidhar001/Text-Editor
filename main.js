function saveFile() {
    var text = document.getElementById('textbox').value;
    var blob = new Blob([text], {type: 'text/plain'});
    var link = document.createElement('a');
    
    link.href = URL.createObjectURL(blob);
    link.download = 'text.txt'; 
    link.click();
    
    URL.revokeObjectURL(link.href);
  }