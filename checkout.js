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
    if (e.target.getAttribute("class") == "nav__list--btn") {
        //e.target.parentElement.firstElementChild.innerText = "My Cart";
        //e.target.previousElementSibling.innerText = "My Cart";
        //e.target vs. e.currentTarget
        //foreach ==> array, nodeList
        productList.innerHTML = "No Product!"
        e.currentTarget.firstElementChild.innerText = "My Cart";
    }
    else{}
});

