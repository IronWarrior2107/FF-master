// // Импорт функционала ==============================================================================================================================================================================================================================================================================================================================
import { isMobile } from "./functions.js";
import { formsModules } from "./forms/forms.js";

let hamburger_1 = document.querySelector('.mobile-menu');

hamburger_1.addEventListener('click', function() {
    hamburger_1.classList.toggle('is-active');
})

let hamburger_2 = document.querySelector('.menu-catalog');

hamburger_2.addEventListener('click', function() {
    hamburger_2.classList.toggle('is-active');
})

document.addEventListener("click",documentActions);

function documentActions(e) {
    const targetElement = e.target;
    if (targetElement.closest('[data-parent]')) {
        const subMenu = document.querySelector(`[data-submenu]`);
        const catalogHeader = document.querySelector('.catalog-header');
        if (subMenu){
            catalogHeader.classList.toggle('_menu-none');
        }else {
            console.log('No')
        }
        e.preventDefault();
    }
}

$(function () {
    $('.sub-menu-catalog__category-wrapper').hover(
    function () {
        $('.sub-menu-catalog__wrapper ul').css("display", "none").hide();
        $(this).find('ul').show();
    }
);
});

const mobileMenu = document.querySelector('.mobile-menu__wrapper');
if (mobileMenu){
    const menuBody = document.querySelector('.top-header__container');
    mobileMenu.addEventListener("click", function(e) {
        menuBody.classList.toggle('menu-open')
    });
}

document.querySelector('.main-class').onclick = function() {
    this.classList.toggle('arrow_d')
}

document.querySelector('.mobile-menu').onclick = function() {
    this.classList.toggle('fix')
}

$('.sub-class').click(function() {
    this.classList.toggle('arrow_d');
});

$('.products-cards__favorite').click(function() {
    this.classList.toggle('_icon-favorite_1');
});

$(document).ready(function() {
    $('.main-class').click(function() {
    $(this).siblings(".catalog-сlosed").toggle(
    function () {
        $(this).find('ul').slideDown();
    },
    function() {
        $(this).find('ul').slideUp('');
    }
    )});
});
    
$(document).ready(function() {
    $('.sub-class').click(function() {
    $(this).siblings(".sub-catalog-сlosed").toggle(
    function () {
        $(this).find('ul').slideDown();
    },
    function() {
        $(this).find('ul').slideUp('fast');
    }
    )});
});

$(document).ready(function(){
    $('.body-header__menu').click(function(){
    $('#hint').toggle();
    });
    });

    $('.products-cards__like, .product-cart__like-button').click(function() {
        this.classList.toggle('liked');
    });

    var $filter = $(".filter-catalog__title");
var mobilewidth = $(window).width();
$filter.on('click', function() {
    if (mobilewidth < 992 ) {
        $(".filter-catalog__items").slideToggle();
    }
});
$(window).resize(function() {
    mobilewidth = $(window).width();
});

///
window.addEventListener("scroll", () => {
    document.querySelectorAll(".body-header, .sub-menu-catalog, .catalog-header, .sub-menu-catalog ")
        .forEach(el => el.classList.toggle("fixing", window.scrollY > 20));
});

document.querySelectorAll(".sub-menu-catalog__more-link").forEach(button => {
    button.addEventListener("click", () => {
        button.classList.toggle("visible");

        // Ищем ближайший список внутри родителя
        const moreList = button.parentElement.querySelector(".sub-menu-catalog__more-list");
        if (moreList) {
            moreList.classList.toggle("visible");
        }
    });
});


function updateZoom() {
    document.documentElement.style.setProperty('--zoom', window.devicePixelRatio);
}

window.addEventListener('resize', updateZoom);
updateZoom(); // Инициализация при загрузке

// Страница товара
document.addEventListener("DOMContentLoaded", function () {
    const tabs = document.querySelectorAll(".product-info__title");
    const contents = document.querySelectorAll(".product-info__body");

    function handleResize() {
        const isMobile = window.matchMedia("(max-width: 47.998em)").matches;

        tabs.forEach((tab, index) => {
            const textElement = tab.querySelector(".product-info__title-text");
            const content = contents[index];

            if (!content) return;

            if (isMobile) {
                // На мобильных перемещаем контент под заголовок
                if (!tab.contains(content)) {
                    tab.insertAdjacentElement("afterend", content);
                }
            } else {
                // На больших экранах возвращаем контент обратно
                document.querySelector(".product-info__content").appendChild(content);
            }

            tab.addEventListener("click", function () {
                // Удаляем активные классы
                tabs.forEach(t => t.classList.remove("active"));
                contents.forEach(c => c.classList.remove("active"));
                document.querySelectorAll(".product-info__title-text").forEach(txt => txt.classList.remove("line"));

                // Добавляем активные классы
                tab.classList.add("active");
                content.classList.add("active");
                if (textElement) {
                    textElement.classList.add("line");
                }
            });
        });
    }
    contents[0].classList.add("active");
    tabs[0].classList.add("active");
    
    handleResize();
    window.addEventListener("resize", handleResize);
});


