
let productsTitles = document.querySelectorAll("h4");

let productsSections = document.querySelectorAll("[data-product-section]");
console.log(productsSections);


let searchBar = document.querySelector("[data-search-input]");
searchBar.addEventListener("input", () => {
  productsTitles.forEach((title) => {
    let productTitle = title.innerText.toLowerCase();

    if (!productTitle.includes(searchBar.value.toLowerCase())) {
      title.parentElement.classList.add("hide");
    } else {
      title.parentElement.classList.remove("hide");
    }
  });

  
});
