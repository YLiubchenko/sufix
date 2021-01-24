import Swiper from 'https://unpkg.com/swiper/swiper-bundle.esm.browser.min.js'

new Swiper('.swiper-container', {
    slidesPerView: 'auto',
    centeredSlides: true,
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});


document.addEventListener('click', function (e) {
    const {dataset, nextElementSibling} = e.target;
    const menu = document.querySelector('.nav');

    switch (dataset.set) {
        case 'burger':
            menu.classList.toggle('burger--active');
            break;

        case 'dropdown-nav':
            if (nextElementSibling) {
                dropdown(nextElementSibling.classList[0]);
            }
            break;
        case 'dropdown-language':
            dropdown('language');
            break;
        case 'dropdown-phones':
            dropdown('phones');
            break;
        default:
            menu.classList.remove('burger--active');
            const close = document.querySelectorAll('.dropdown');

            close.forEach(element => {
                element.classList.remove('nav__dropdown--active');
                element.classList.remove('header__dropdown--active');
            })
            break;
    }
})


function dropdown(className) {

    if (className === 'products' || className === 'support') {
        const node = document.querySelector(`.${className}.dropdown`);

        node.classList.toggle(`nav__dropdown--active`);
    } else {
        const node = document.querySelector(`.${className} .dropdown`);
        node.classList.toggle(`header__dropdown--active`);
    }
}

sliderTrustUs();

export function sliderTrustUs() {

    let arrows = document.querySelectorAll('.arrow');
    let list = document.querySelector('.customers__slider-list');

    let arr = [];

    createImgArray();
    clickOnArrow();


    function createImgArray() {
        let imgs = [{
            img: 'img/slide1.png',
            colorImg: 'img/slide1.png'
        }, {
            img: 'img/slide2.png',
            colorImg: 'img/slide2.png'
        }, {
            img: 'img/slide3.png',
            colorImg: 'img/kg.png'
        }, {
            img: 'img/slide4.png',
            colorImg: 'img/slide4.png'
        }];

        imgs.forEach(obj => {

            let div = document.createElement('div');
            div.className = 'slider__img-block'

            for (let key in obj) {
                let img = document.createElement('img');
                img.src = obj[key];
                img.className = 'customers__slider-img';
                img.alt = 'Наш клієнт';
                if (key === 'colorImg') {
                    img.className = 'customers__slider-img focus';
                }
                div.appendChild(img);
            }
            arr.push(div);
        })

        showSlider(arr);
        return arr;
    }

    function clickOnArrow() {
        arrows.forEach(arrow => {
            arrow.addEventListener('click', function () {
                list.innerHTML = '';
                showSlider(countN(arrow.dataset.arrow));
            })
        })
    }

    function countN(value) {
        let valueArr;
        if (value === 'left') {
            valueArr = arr.splice(0, 1);
            arr.push(...valueArr);
        } else if (value === 'right') {
            valueArr = arr.splice(-1);
            arr.splice(0, 0, ...valueArr);
        }

        return arr;
    }

    function showSlider(arr) {
        const picturesNumber = 4;

        for (let i = 0; i < picturesNumber; i++) {
            list.appendChild(arr[i]);
        }
    }
}













