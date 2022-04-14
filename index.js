var instrumentsLength = document.querySelectorAll(".key").length;
var clickDown = false;
var lastKey;
var lastNote;
var keyArray = [];
var noteDisplay = document.querySelector("#note");

//non html key object
function key(note, keyboardKey, keyObject){
  this.note = note;
  this.keyboardKey = keyboardKey;
  this.keyObject = keyObject;
  this.play = false;
  this.audio = new Audio("https://github.com/RicardoChairez/Chai-Keys/piano-sounds/" + this.note + ".mp3");

  //make functions for switching key on or off
}

//gets key in keyArray with keyboardKey as index
function getKey(key){
  for(var i = 0; i < instrumentsLength; i++){
    if(key == keyArray[i].keyboardKey){
      return keyArray[i];
    }
  }
}

//gets current note being played
function displayChord(){
  var noteString = "";
  for(var i = 0; i < instrumentsLength; i++){
    if(keyArray[i].play){
      noteString = noteString + keyArray[i].note + " ";
    }
  }
  noteString = noteString.replace(/[0-9]/g, '');
  noteDisplay.innerHTML = noteString;
}

//takes in keyobject and determines if it is a black or white key
function isBlack(keyObject){
  if(keyObject.className.split(" ")[2] == "black"){
    return true;
  }
  return false;
}

//plays a sound given the key
function playSound(key){
  var key_audio = new Audio("https://github.com/RicardoChairez/Chai-Keys/piano-sounds/" + key.note + ".mp3");
  key_audio.play();
}

//stops sound given the key
function stopSound(key){
  //var key_audio = new Audio("piano_sounds/" + key + ".mp3");
  key.audio.pause();
  key.audio.currentTime = 0;
}

/*
function playSoundKey(key){
  switch(key){
    case "a":
      playSound("c1");
      break;
    case "w":
      playSound("db1");
      break;
    case "s":
      playSound("d1");
      break;
    case "e":
      playSound("eb1");
      break;
    case "d":
      playSound("e1");
      break;
    case "f":
      playSound("f1");
      break;
    case "t":
      playSound("gb1");
      break;
    case "g":
      playSound("g1");
      break;
    case "y":
      playSound("ab1");
      break;
    case "h":
      playSound("a1");
      break;
    case "u":
      playSound("bb1");
      break;
    case "j":
      playSound("b1");
      break;
    case "k":
      playSound("c2");
      break;
    case "o":
      playSound("db2");
      break;
    case "l":
      playSound("d2");
      break;
    case "p":
      playSound("eb2");
      break;
    case ";":
      playSound("e2");
      break;
    case "'":
      playSound("f2");
      break;
    default:
      console.log(key);
  }
}
*/
