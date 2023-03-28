document.getElementById("dt").innerHTML= Date().slice(0,16);
const tasks=document.getElementsByClassName("tasks")[0];
const inpt=document.getElementById("inpt");
inpt.addEventListener("keydown",function(event){
  if(event.key==="Enter")
  add();
})
function add(){
  if(inpt.value=="")
  {
    return;
  }
  var divp=document.createElement("div");
  var divc=document.createElement("div");
  divc.setAttribute("class","jj");
  var tex=document.createElement("p");
  var check=document.createElement("i");
  var trash=document.createElement("i");

  tex.innerText=inpt.value;
  divp.className="item";

  check.className="fa-solid fa-square-check";
  check.style.color="lightgray";
  check.style.resize="59px";
  check.addEventListener("click",function(){
    check.style.color="black";
  })

  trash.className="fa-solid fa-trash-can";
  trash.style.color="black";
  trash.addEventListener("click",function(){
    divp.remove();
  })

  tasks.appendChild(divp);
  divp.appendChild(divc);
  divp.appendChild(trash);
  divc.appendChild(check);
  divc.appendChild(tex);
  inpt.value='';
}
