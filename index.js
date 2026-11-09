function addproduct() {

    let name_el = document.getElementById('name');
    let number_el = document.getElementById('number');
    let phone_el = document.getElementById('Phone');
    let dateob = document.getElementById('dateb');
    
    const mydiv = document.getElementById('products');
    let product = document.createElement('p');
    //   alert("gg")

    product.innerHTML =
        "FullName: " + name_el.value +
        " | age: " + number_el.value +
        " | Phone: " + phone_el.value +
        " | dateb: " + dateob.value;

    mydiv.appendChild(product);
}
function removeproduct() {
    document.getElementById('products').innerHTML = "";
    //   alert("bye")



}
