//const taxRate = 0.18;
// const shippingPrice = 25.99;
// const freeShippingPrice = 3000;

//localStorage vs. sessionStorage
window.addEventListener("load", () => {
    // localStorage.setItem("taxRate", taxRate);
    // localStorage.setItem("shippingPrice", shippingPrice);
    // localStorage.setItem("freeShippingPrice", freeShippingPrice);
    ///
});

const navbarList = document.querySelector(".nav__list");
const productList = document.querySelector("div.main__product-painel");

//capturing
navbarList.addEventListener("click", (e) => {
    if (e.target.getAttribute("class") == "nav__list--btn" || "fa-regular fa-trash-can") {
        //e.target.parentElement.firstElementChild.innerText = "My Cart";
        //e.target.previousElementSibling.innerText = "My Cart";
        //e.target vs. e.currentTarget
        //foreach ==> array, nodeList
        productList.innerText = "No Product!";
        e.currentTarget.firstElementChild.innerText = "My Cart";
        calculateCartPrice();
    }
});

//capturing
productList.addEventListener("click", (e)=>{
    //minus
    if(e.target.className == "fa-solid fa-minus"){
        if(e.target.nextElementSibling.innerText > 1){
            e.target.nextElementSibling.innerText --;
            calculateProductPrice(e.target);
        }
        else{
            if(confirm(`${e.target.closest(".main__product-info").querySelector("h2").innerText} will be removed!`)){
                e.target.closest(".main__product").remove();                
            }
        }
    }
    //plus
    else if(e.target.classList.contains("fa-plus")){
        e.target.previousElementSibling.innerText ++;
        calculateProductPrice(e.target);
    }
    //remove
    else if(e.target.id == "remove-product"){
        if(confirm(`${e.target.closest(".main__product-info").querySelector("h2").innerText} will be removed!`)){
            e.target.closest(".main__product").remove();                
        }
    }
    else{
        alert("other element clicked");
    }
    calculateCartPrice();
});

const calculateProductPrice = (target) =>{
    //product line calculations
    target.closest(".");
}

const calculateCartPrice = () =>{
    //cart total calculations
}

