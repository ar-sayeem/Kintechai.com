// (15:02) https://www.youtube.com/watch?v=lCCN_lkl3Xw
let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

// (12:04) https://youtu.be/zz59yzczSLk?si=Q2IhrbG5XM0w1MNz&t=724
let shoppingCart = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick = () => {
    shoppingCart.classList.toggle('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

// (06:30) https://youtu.be/0Y-3WG1rsJo?si=QeyUki7Swcr7Pf1e&t=390
let loginForm = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () => {
    loginForm.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    navbar.classList.remove('active');
}

// (16:33) https://youtu.be/HMFGTwQD4Ck?si=gPFhVVjZOJoxlErj&t=993
let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
}


// (18:50) https://youtu.be/HMFGTwQD4Ck?si=42gJvvW1tFbPj7Rb&t=1130
window.onscroll = () => {
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}






// (11:40) https://youtu.be/_3zc79s5WcE?si=ZSnU9yzrL7eUUrTr&t=700
var swiper = new Swiper(".product-slider", {
    loop: true,
    spaceBetween: 15,
    autoplay: {
        delay: 6000,
        disableOnInteraction: false,
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1020: {
            slidesPerView: 3,
        },
    },
});



// (16:53) https://youtu.be/Bzez3F7SR1A?si=4utMGXYt9Tz6N8ni&t=1013
var swiper = new Swiper(".review-slider", {
    loop: true,
    spaceBetween: 35,
    autoplay: {
        delay: 6000,
        disableOnInteraction: false,
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1020: {
            slidesPerView: 3,
        },
    },
});