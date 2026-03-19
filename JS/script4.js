// let boxes=document.querySelectorAll(".box");
// let area=document.querySelector(".area");

// boxes.forEach(box => {
//     box.ondragstart=function(ev){
//     ev.dataTransfer.setData("id",ev.target.id);
// }

// box.ondragend=function(){

// }
// box.ondrag=function(){

// }
// });

// area.ondragenter=function(){
  
// }
// area.ondragover=function(ev){
//     ev.preventDefault();
// }
// area.ondragleave=function(){

// }
// area.ondrop=function(ev){
//     this.style.position="relative";
//     let id=ev.dataTransfer.getData("id");
//     let box=document.getElementById(id);
//     box.style.position="absolute";
//     box.style.top=`${ev.offsetY}px`;
//     box.style.left=`${ev.offsetX}px`;
//     this.append(box);
// }

let icon=document.querySelector(".fa-arrow-up-from-bracket");
let input=document.getElementById("input");

icon.onclick=function(){
    input.click();
}

input.onchange=function(ev){
    let files=ev.target.files;
    newFunction(files);
}

let area=document.querySelector(".area");

area.ondragover=function(ev){
    ev.preventDefault();
}

area.ondrop=function(ev){
    ev.preventDefault();
    let files=ev.dataTransfer.files;
    newFunction(files);

}

function newFunction(files) {
    for (let i = 0; i < files.length; i++) {
        let file = files[i];
        let fileReader = new FileReader();
        fileReader.onload = function (ev) {
            let tr = `
             <tr>
                <th scope="row">
                    <img width=300px height=200px src="${ev.target.result}" alt="">
                </th>
                <td>Mark</td>
                <td>Otto</td>
            </tr>
           `;
            let table = document.querySelector(".table");
            table.innerHTML += tr;
        };
        fileReader.readAsDataURL(file);

    }
}
