import "./files/jquery-3.6.1.min.js"

import * as flsFunctions from "./files/functions.js";

flsFunctions.isWebp();

/* Динамический адаптив */
import "./libs/dynamic_adapt.js";

/* Форматирование чисел */
//import './libs/wNumb.min.js';

/*
Модуль работы со спойлерами
Документация:
Сниппет (HTML): spollers
*/
flsFunctions.spollers();

/*
Модуль работы с табами
Документация:
Сниппет (HTML): tabs
*/
flsFunctions.tabs();

/*
Модуль "показать еще"
Документация по работе в шаблоне:
Сниппет (HTML): showmore
*/
// flsFunctions.showMore();

// Работа с формами ========================================================================================================================================================================================================================================================
import * as flsForms from "./files/forms/forms.js";

/* Работа с полями формы: добавление классов, работа с placeholder. */
flsForms.formFieldsInit();

/* Oтправка формы со встроенной валидацией полей. false - отключит валидацию */
flsForms.formSubmit(true);

/* (В работе) Работа с масками. Для включения ??? (подсказок в консоли) передать true */
//flsForms.formMasks(true);

/* Модуль формы "колличество" */
flsForms.formQuantity();

/* Модуль формы "показать пароль" */
//flsForms.formViewpass();

/* Модуль звездного рейтинга */
flsForms.formRating();

/* Модуль работы с select. Для включения ??? (подсказок в консоли) передать true */
flsForms.formSelect(false);

// Модуль работы с ползунком  ===================================================================================================================================================================================================================================================================================
/*
Подключение и настройка выполняется в файле js/files/forms/range.js
Документация по работе в шаблоне:
Документация плагина: https://refreshless.com/nouislider/
Сниппет (HTML): range
*/
import "./files/forms/range.js";

// Модуль работы с подсказками (tippy) ====================================================================================================================================================================================================================================================================================
/*
Подключение плагина Tippy.js и настройка выполняется в файле js/files/tippy.js
Документация по работе в шаблоне:
Документация плагина: https://atomiks.github.io/tippyjs/
Сниппет (HTML): tip (добавляет атрибут с подсказкой для html тега)
*/
//import "./files/tippy.js";

// Работа со слайдером (Swiper) ========================================================================================================================================================================================================================================================
/*
Настройка подключения плагина слайдера Swiper и новых слайдеров выполняется в файле js/files/sliders.js
Документация по работе в шаблоне:
Документация плагина: https://swiperjs.com/
Сниппет(HTML): swiper
*/

import "./files/swiper.js";
// Модули работы с прокруткой страницы ========================================================================================================================================================================================================================================================

/*
Изменение дизайна скроллбара
Документация по работе в шаблоне: В HTML добавляем к блоку атрибут data-simplebar
Документация плагина: https://github.com/Grsmto/simplebar/tree/master/packages/simplebar
Сниппет(HTML): 
*/
// import './files/scroll/simplebar.js';

/*
Ленивая (отложенная) загрузка картинок
Документация по работе в шаблоне: В HTML добавляем img, video, audio, iframe но вместо src пишем data-src
Документация плагина: https://github.com/verlok/vanilla-lazyload
Сниппет(HTML):
*/
// import './files/scroll/lazyload.js';

// Функции работы скроллом ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//import * as flsScroll from "./files/scroll/scroll.js";

// Наблюдатель за объектами c атрибутом data-watch
// Документация по работе в шаблоне: js/libs/watcher.js
// Сниппет(HTML):
// Для включения ??? (подсказок в консоли), указать параметр true
// flsScroll.scrollWatcher(false);

// Плавная навигация по странице
// flsScroll.pageNavigation();

// Функционал добавления классов к хедеру при прокрутке
// flsScroll.headerScroll();

// Функционал липкого блока
// flsScroll.stickyBlock();

// Галерея ========================================================================================================================================================================================================================================================
/*
Документация по работе в шаблоне: https://www.lightgalleryjs.com/docs/
Документация плагина: https://www.lightgalleryjs.com/docs/
Сниппет(HTML):
*/
// import "./files/gallery.js";
import "./files/script.js";


