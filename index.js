let count = 0;

function add (){
  count += 1;
  document.getElementById("count-num").innerText = count;
}

function decrease(){
  count -= 1;
  if(count < 0)
  {
    count = 0;
  }
  document.getElementById("count-num").innerText = count;
}

function reset(){
  count = 0;
  document.getElementById("count-num").innerText = count;
}

function save(){
  document.getElementById("save-result").innerText += " " + count + " , ";
}

function del(){
  let containSave = document.getElementById("save-result");
  containSave.innerText = "HISTORY : "
}