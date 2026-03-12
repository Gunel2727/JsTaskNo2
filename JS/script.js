let boxes=document.querySelectorAll(".box");
let areas=document.querySelectorAll(".area")

boxes.forEach(box => {
    box.ondragstart=function(ev){
        ev.dataTransfer.setData("id",ev.target.id)
    }
});

areas.forEach(area => {
    area.ondragover=function(ev){
        ev.preventDefault();
    }
    area.ondrop=function(ev){
        let id=Number(ev.dataTransfer.getData("id"));
        let boxelement=document.getElementById(id);
        if(area.id == "area1" && id <= 4){
            this.append(boxelement);
        }
        else if(area.id == "area2" && id > 4  && id<=8){
            this.append(boxelement);
        }
        else if(area.id == "area3" && id > 8  && id<=12){
            this.append(boxelement);
        }else{
            alert("yanlis yer")
        }

    }
    
});