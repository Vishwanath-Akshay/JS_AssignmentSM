console.log("Hello");
//array or list
// const products=[
//     //1 object
//     {
//         image : './images/products/Cricketbat.webp',
//         name : 'Bold Fit Cricket Bat- Made in india',
//        rating: {
//             stars: './images/ratings/rating-50.png',
//             count: 253
//         },
//        priceinC : 1486 

//     },
//     //2 object
//     {
//         image: './images/products/intermediate-composite-basketball.jpg',
//         name: 'Intermediate Size Basketball',
//         rating :{
//             stars: 'images/ratings/rating-40.png',
//             count:127
//         },
//         priceinC:2095
//      },
//      //3 object, product
//      {
//         image: './images/products/backpack.jpg',
//         name : 'Black Color Backpack' ,
//         rating :{
//             stars:'images/ratings/rating-45.png',
//             count: 269
//         },
//         priceinC : 1299,

//      }
    
// ];

let productsHTML='';

products.forEach((product)=>{
        productsHTML+=`<div class="product-container">
          <div class="product-image-container">
            <img class="product-image" src=${product.image}>
          </div>
          <div class="product-name limit-text-to-2-lines">
              ${product.name}
          </div>
          <div class ="product-rating-container">
           
              <img class="product-rating-stars" src="images/">
              <div class="product-rating-count link-primary">
              ${product.rating.count}
              </div>
           </div>

           <div class="product-price">
            $${(product.priceinC /100).toFixed(2)}
           </div>

           <div class="product-quantity-container">
            <select>
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>

           </div>
           <div class="product-spacer"></div>
           <button class="add-to-cart-button button-primary" >Add to Cart</button>


        </div>`;
        
} );

console.log(productsHTML);


document.querySelector('.js-products-grid').innerHTML=productsHTML;


