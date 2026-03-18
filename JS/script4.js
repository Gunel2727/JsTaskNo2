let box=document.querySelector(".box");
let area=document.querySelector(".area");

box.ondragstart=function(ev){
    ev.dataTransfer.setData("id",box);
}
box.ondragend=function(){

}
box.ondrag=function(){

}
area.ondragenter=function(){
   
}
area.ondragover=function(ev){
    ev.preventDeault();
}
area.ondragleave=function(){

}
area.ondrop=function(ev){
    let id=ev.dataTransfer.getData("box");
    this.append(id);
}