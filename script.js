
function createGrid(size){
  for(var row=0; row<size; row++){
    for(var col=0; col<size; col++){
      var div = document.createElement("div");
      div.className = 'theDiv';
      div.style.height=Math.floor(900/size)+"px";
      div.style.width=Math.floor(900/size)+"px";
      document.getElementById("main").appendChild(div);
      div.addEventListener("mouseenter", paint);
      console.log(div.style.height);
    }
  }

}
function paint(){
  this.style.backgroundColor = "black";
}
function clear(){
  var main = document.getElementById("main");
  for (var i=0; i < main.children.length; i++) {
    var div = main.children[i];
    div.style.backgroundColor ="gray";
  }
}
function resize(){
  document.getElementById("main").innerHTML = '';

  var sizeInput = document.getElementById("sizeInput").value;
  if(sizeInput<=100){
    createGrid(sizeInput);
    var sizeDisplay = document.getElementById("sizeDisplay");
    sizeDisplay.textContent = sizeInput +" x " + sizeInput;
  }else{
    createGrid(16);
  }
  clear();
}
var clearBtn = document.getElementById("clear");
clearBtn.addEventListener("click", clear);

var resizeBtn = document.getElementById("resize");
resizeBtn.addEventListener("click", resize);

createGrid(16);


