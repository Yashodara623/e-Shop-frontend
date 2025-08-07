// header
const createHeader = () => {
    let header = document.querySelector('header');

    header.innerHTML = `
    <input type="checkbox" name="" id="toggler"/>
    <label for="toggler" class="bi  bi-list"></label>

    <a href="index.html" class="text-decoration-none logo"><span>e</span>-Shop</a>
    <nav class="navbar">
        <a href="index.html" class="text-decoration-none">Home</a>
        <a href="products.html" class="text-decoration-none">Products</a>
        <a href="about.html" class="text-decoration-none">About</a>
        <a href="contact.html" class="text-decoration-none">Contact</a>
    </nav>
    <div class="icons">
        <a href="#"><i  class="bi bi-heart"></i></a> 
        <a href="sign.html"><i  class="bi bi-person-circle"></i></a>
        <a href="#"><i  class="bi bi-cart4"></i></a>
    </div>
    `;
}

createHeader();



// footer 
const createFooter = () => {
    let footer = document.querySelector('.footer');

    footer.innerHTML = `
    <div class="box-container">

    <div class="box">
        <h3>quick links</h3>
        <a href="index.html" class="text-decoration-none"><i  class="bi bi-house-fill"></i> home</a> 
        <a href="products.html" class="text-decoration-none"><i  class="bi bi-bag-check-fill"></i> products</a>
        <a href="contact.html" class="text-decoration-none"><i  class="bi bi-envelope-paper-fill"></i> contact</a>
    </div>

    <div class="box">
        <h3>extra links</h3>
        <a href="sign.html" class="text-decoration-none"><i  class="bi bi-person-circle"></i> my account</a>
        <a href="#" class="text-decoration-none"><i  class="bi bi-cart-check-fill"></i> my orders</a>
        <a href="#" class="text-decoration-none"><i  class="bi bi-heart-fill"></i> my favorites</a>
    </div>
    
    <div class="box">
        <h3>branches</h3>
        <a href="#" class="text-decoration-none"><i class="bi bi-geo-alt-fill"></i> kegalle</a>
        <a href="#" class="text-decoration-none"><i class="bi bi-geo-alt-fill"></i> kandy</a>
        <a href="#" class="text-decoration-none"><i class="bi bi-geo-alt-fill"></i> kurunegala</a>
    </div>
    
    <div class="box">
        <h3>contact info</h3>
        <a href="#" class="text-decoration-none"><i class="bi bi-telephone-fill"></i> +94 70 123 4567</a>
        <a href="#" class="text-decoration-none"><i class="bi bi-envelope-at-fill"></i> eshop.lanka@gmail.com</a>
        <a href="#" class="text-decoration-none"><i class="bi bi-geo-alt-fill"></i> main street, kegalle</a>
        <!-- <img src="img/payment_method" alt=""> -->
    </div>

</div>

<div class="rights"> All Rights Reserved | <span> e-shop </span>| copyright &copy2023</div> 
`;
}

createFooter();

// sign up process
function changeView(){
    var signUpBox = document.getElementById("signUpBox");
    var signInBox = document.getElementById("signInBox");
 
    signUpBox.classList.toggle("d-none");
    signInBox.classList.toggle("d-none");
 
}
