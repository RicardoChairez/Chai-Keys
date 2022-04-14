//initializes key objects for each piano key
for(var i = 0; i < instrumentsLength; i++){
  keyObject = document.querySelectorAll(".key")[i];
  keyArray[i] = new key(keyObject.className.split(" ")[0], keyObject.innerHTML, keyObject);
}

//checks for keyup
document.addEventListener("keydown", function(){
  if(lastKey != event.key){
    lastKey = event.key;
    key = getKey(lastKey);
    if(key){
      key.keyObject.style.backgroundColor = "#FFCBCB";
      key.play = true;
      playSound(key);
      displayChord();
    }
  }
});

//checks for keyup
document.addEventListener("keyup", function(){
  //keyObject = document.querySelector("." + event.key);
  key = getKey(event.key);
  if(key){
    key.play = false;
    displayChord();
    if(isBlack(key.keyObject)){
      key.keyObject.style.backgroundColor = "black";
    }
    else{
      key.keyObject.style.backgroundColor = "white";
    }
    if(event.key == lastKey){
      lastKey = null;
    }
  }
});

//listens for mouse click
for(var i=0; i < instrumentsLength; i++){
  document.querySelectorAll(".key")[i].addEventListener("mousedown", function(){

      lastNote = this;
      var key = getKey(this.innerHTML);
      if(key){
        playSound(key);
        key.keyObject.style.backgroundColor = "#FFCBCB";
        key.play = true;
        displayChord();
      }


  });
}

//listens for mouse held and over
for(var i=0; i < instrumentsLength; i++){
  document.querySelectorAll(".key")[i].addEventListener("mouseover", function(){

    if(clickDown){
      lastNote = this;
      var key = getKey(this.innerHTML);
      if(key){
        playSound(key);
        key.keyObject.style.backgroundColor = "#FFCBCB";
        key.play = true;
        displayChord();
      }

    }
  });
}

for(var i=0; i < instrumentsLength; i++){
  document.querySelectorAll(".key")[i].addEventListener("mouseout", function(){
    if(lastNote){
      lastNote.play = false;
      displayChord();
      if(isBlack(lastNote)){
        lastNote.style.backgroundColor = "black";
      }
      else{
        lastNote.style.backgroundColor = "white";
      }
    }


  });
}


document.querySelector("body").addEventListener("mousedown", function(){

  clickDown = true;

});

document.querySelector("body").addEventListener("mouseup", function(){

  clickDown = false;
  for(var i = 0; i < instrumentsLength; i++){
    keyArray[i].play = false;
  }
  displayChord();
  if(isBlack(lastNote)){
    lastNote.style.backgroundColor = "black";
  }
  else{
    lastNote.style.backgroundColor = "white";
  }


});
