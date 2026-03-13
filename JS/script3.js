let buttons=document.querySelectorAll(".btn-primary");

for (let i = 0; i < buttons.length; i++) {
    const button = buttons [i];
    button.addEventListener("click",function(ev){
        ev.preventDefault();
        let id=this.parentNode.getAttribute("data-id");
        let str=this.previousElementSibling.previousElementSibling.innerText;
        let basketStr=localStorage.getItem("basket");
        let products={};
        if(basketStr){
            products=JSON.parse(basketStr);
        }
        
        let existingProduct=products.find(p=>p.id==id);
        if(existingProduct){
            existingProduct.count++;
        }else{
            let product={
                id,
                price:+str.substring(str.indexOf(":")+1,str.indexOf("$")),
                url:this.parentNode.previousElementSibling.getAttribute("src"),
                desc:this.previousElementSibling.innerText,
                name:this.parentNode.firstElementChild.innerText,
                count:1 
            }
            products.push(product);
        }
    })
}

function BasketCount(){
    
}