const sliderButtons = document.querySelectorAll('[data-carousel-button]');
const filterButtons = document.querySelectorAll('.filter--btn');
const products = document.querySelectorAll('.product');
const productsContainer = document.querySelector(
  '.store--products--inner-container'
);
const productMessageContainer = document.querySelector(
  '.product--message-container'
);
const search = document.getElementById('search');
const faqs = document.querySelectorAll('.faq');
const addToCartBtn = document.querySelectorAll('.add-to-cart-btn');

const productDetails = document.querySelectorAll('.product--detail');

// FAQ
faqs.forEach(faq => {
  faq.addEventListener('click', () => {
    faq.classList.toggle('active');
  });
});

// Slide Show - Customer Review
const slideMovements = function () {};
sliderButtons.forEach(element => {
  element.addEventListener('click', () => {
    const offset = element.dataset.carouselButton === 'next' ? 1 : -1;
    const slides = element
      .closest('[data-carousel]')
      .querySelector('[data-slides]');

    const activeSlide = slides.querySelector('[data-active]');
    let newIndex = [...slides.children].indexOf(activeSlide) + offset;
    if (newIndex < 0) {
      newIndex = slides.children.length - 1;
    }

    if (newIndex >= slides.children.length) {
      newIndex = 0;
    }

    slides.children[newIndex].dataset.active = true;
    delete activeSlide.dataset.active;
  });
});

// Products Filter
const tabHighlight = function (element) {
  if (!element.classList.contains('active--filter-btn')) {
    filterButtons.forEach(i => i.classList.remove('active--filter-btn'));
    element.classList.toggle('active--filter-btn');
  }
};

filterButtons.forEach(element =>
  element.addEventListener('click', e => {
    e.preventDefault();

    const filter = e.target.dataset.filter;
    products.forEach(product => {
      if (filter == 'all') {
        product.style.display = 'flex';
        tabHighlight(element);
      } else {
        if (product.classList.contains(filter)) {
          product.style.display = 'flex';
          tabHighlight(element);
        } else {
          product.style.display = 'none';
        }
      }
    });
  })
);

// // Add To Cart
// const productName = document.querySelector('.product--name');
// const getProductDetails = function (product) {
//   product.forEach(val => {
//     // console.log(val);
//     return { name: `${productName}` };
//   });
// };

// console.log(getProductDetails(productDetails));

// let storeProductData = [
//   { name: 'laptop', price: 500, inCart: 0 },
//   { name: 'phone', price: 700, inCart: 0 },
//   { name: 'camera', price: 900, inCart: 0 },
//   { name: 'watch', price: 350, inCart: 0 },
// ];

// addToCartBtn.forEach((el, i) => {
//   el.addEventListener('click', function (e) {
//     cartNumbers(storeProductData[i]);
//     console.log(i);
//   });
// });

// const onLoadCartNumbers = function () {
//   console.log('product clicked is', storeProductData);
//   let productNumbers = localStorage.getItem('cartNumbers');

//   if (productNumbers) {
//     document.querySelector('.cart-item-quantity').textContent = productNumbers;
//   }
// };

// const cartNumbers = function (product) {
//   console.log('the product clicked is', product);
//   let productNumbers = localStorage.getItem('cartNumbers');

//   productNumbers = parseInt(productNumbers);

//   if (productNumbers) {
//     localStorage.setItem('cartNumbers', productNumbers + 1);
//     document.querySelector('.cart-item-quantity').textContent =
//       productNumbers + 1;
//   } else {
//     localStorage.setItem('cartNumbers', 1);
//     document.querySelector('.cart-item-quantity').textContent = 1;
//   }
// };

// onLoadCartNumbers();

// Products Search
search.addEventListener('keyup', function (e) {
  e.preventDefault();
  const searchInput = search.value.toLowerCase().trim();
  products.forEach(storeProduct => {
    // if (!storeProduct.classList.contains(searchInput)) {
    //   productMessageContainer.style.display = 'flex';
    //   storeProduct.style.display = 'none';
    // }

    if (storeProduct.classList.contains(searchInput)) {
      storeProduct.style.display = 'flex';
    } else if (searchInput == '') {
      storeProduct.style.display = 'flex';
    } else {
      storeProduct.style.display = 'none';
    }
  });
});
