let buttons = document.querySelectorAll(".btn-primary");

for (let i = 0; i < buttons.length; i++) {
    const button = buttons[i];
    button.addEventListener("click", function (ev) {
        ev.preventDefault();
        let id = this.parentNode.getAttribute("data-id");
        let str = this.previousElementSibling.previousElementSibling.innerText;
        let basketStr = localStorage.getItem("basket");
        let products = [];
        if (basketStr) {
            products = JSON.parse(basketStr);
        }

        let existingProduct = products.find(p => p.id == id);
        if (existingProduct) {
            existingProduct.count++;
        } else {
            let product = {
                id,
                price: +str.substring(str.indexOf(":") + 1, str.indexOf("$")),
                url: this.parentNode.previousElementSibling.getAttribute("src"),
                desc: this.previousElementSibling.innerText,
                name: this.parentNode.firstElementChild.innerText,
                count: 1
            }
            products.push(product);
        }
        localStorage.setItem("basket", JSON.stringify(products));
        let BasketCount = document.getElementById("BasketCount");
        BasketCount.innerText = products.length;
    })
}

function BasketCount() {
    let basketStr = localStorage.getItem("basket");
    if (basketStr) {
        let products = JSON.parse(basketStr);
        let BasketCount = document.getElementById("BasketCount");
        BasketCount.innerText = products.length;
    }
}
BasketCount();

function ShowBasketItems() {
    let basketStr = localStorage.getItem("basket");
    if (basketStr) {
        let products = JSON.parse(basketStr);
        products.forEach(p => {
            let tr =
                `
             <tr>
                    <td>
                         <img src="${p.url}" alt="">
                    </td>
                    <td>${p.name}</td>
                    <td>${p.desc}</td>
                    <td>${p.price}</td>
                    <td>${p.count}</td>
                    <td>x</td>
             </tr>
            `
            let table = document.querySelector(".table");
            table.lastElementChild.innerHTML += tr;
        });
    }

}
ShowBasketItems();