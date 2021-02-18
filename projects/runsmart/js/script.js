/* Для хранения информации используются переменные
var name = "Dmitriy"; Создаём коробку имя и помещаем туда Dmitriy
let number = 7; Создаём число, команда let используется, если значение в будущем может поменяться
const pi = 3.14; const используется, если значение всегда будет постоянным */

/* Типы данных */

// number - числа для обозначения зарплаты, кол-ва пикселей и т.д.
// string - "", '', `` - строка, любая информация, которую можно описать словами: имя, описание предмета и т.д
// true/false - условие, если выполняется то..., если нет то...
// null - если чего-то просто не существует в природе
// undefined - что-то существует, но значения никакого не имеет
/* let obj = {
    name: 'apple',
    color: 'green',   Есть объект яблоко зелённого цвета, весом 200 грамм
    weight: 200
} */
// Symbol 

// alert(1234) Выводит информацию, которая есть у него на страницу
// console.log("number") Выводит информацию в консоли, нужна для общения с разработчиком.
// confirm("Вам есть 18?") Формирует поведение сайта.

// let answer = confirm("Вам есть 18?"); Задаёт вопрос, если отвечает да, то в консоли появится true, отмена - false
// console.log(answer);

// let answer = confirm("Вам есть 18?", ""); Задаёт вопрос, пользователь отвечает и в консоли высвечивается ответ
// console.log(answer);

// console.log(4+4)

// let isChecked = true,
//     isClose = true;

// console.log(isChecked && isClose); /*  && - И (and) */

// let isChecked = true,
//      isClose = true;

//  console.log(isChecked || isClose); || - или (or)

/* Условия */

/* Условие-1 */

// if (2*4 == 8*1) {
//     console.log('Верное выражение')
// } /* = присваивается значение, == сравнение */

// let answer = confirm("Вам есть 18?");
// if (answer) {
//     console.log('Проходите')
// } else {
//     console.log('Уходи')
// }

/* Условие-2 */

// const num = 50;

// if (num < 49) {
//     console.log('Неправильно')
// } else if (num > 100) {
//     console.log('Много')
// } else {
//     console.log('Верно')
// }

/* Цикл */

// for(let i = 1; i < 8; i++) {
//     console.log(i);
// } /* Цикл начинается, когда i = 1 и будет работать до тех пор, пока i = 8, ++ увеличивает значение на единицу */

/* Функции */

// function logging(a, b) {
//     console.log(a + b)
// }

// logging(3, 5);

// logging(9, 8);

/* Скрипт карусели */

$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1000, /* Скорость перелистывания */
        // adaptiveHeight: true, /* Подстраивается под высоту картинки */
        autoplay: false, /* Автопереключение слайдов */
        autoplaySpeed: 2000, /* Скорость автопереключения */
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/left-solid.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/right-solid.png"></button>',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                dots:true,
                dotsClass: "carousel-dots",
                arrows: false,
            }
            }
        ]
      });

/* Скрипт переключения каталога (фитнес, бег) */

    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
        .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
        .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });

// /* Скрипт подробнее */
//     $('.catalog-item__link').each(function(i) {
//         $(this).on('click', function(e) {
//             e.preventDefault();
//             $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
//             $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
//         })
//     });
// /* Скрипт назад */
//     $('.catalog-item__back').each(function(i) {
//         $(this).on('click', function(e) {
//             e.preventDefault();
//             $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
//             $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
//         })
//     });

/* Скрипт переключения подробнее и назад. Сделано для оптимизации проекта. */

    function toggleSlide(item) {
        $(item).each(function(i) {
            $(this).on('click', function(e) {
                e.preventDefault();
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
            })
        });
    };

/* Подключение подробнее и назад */

    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__back');

/* Подключаю модальное окно с консультацией*/

    $('[data-modal=consultation]').on('click', function () {
        $('.overlay, #consultation').fadeIn('slow');

    });
/* Подключаю крестик (чтоб закрыть модальное окно) */
    $('.modal__close').on('click', function(){
        $('.overlay, #consultation, #thanks, #order').fadeOut('slow');
    });
/* Подключаю модальное окно с покупкой */
    // $('.button_mini').on('click', function() {
    //     $('.overlay, #order').fadeIn('slow');
    // });

    $('.button_mini').each(function(i) {
        $(this).on('click', function() {
            $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
            $('.overlay, #order').fadeIn('slow');
        })
    });

    /* Валидируем формы, т.е. при заполнении формы, если что-то было не заполнено, высветится оповещение о заполнении недостающего пункта jquery.validate.min.js */ 
    // $('#consultation-form').validate();
    // $('#consultation form').validate( {
    //     rules: {
    //         name: "required",
    //         phone: "required",
    //         email: {
    //             required: true,
    //             email: true
    //         }
    //     },
    //     messages: {
    //         name: "Пожалуйста введите ваше имя",
    //         phone: "Пожалуйста введите ваш номер телефона",
    //         email: {
    //           required: "Пожалуйста введите ваш email",
    //           email: "Неправильно введён адрес email"
    //         }
    //       }
    // });
    // $('#order form').validate();


/* Оптимизирую валидатную форму */

    function validateForms(form){
        $(form).validate( {
            rules: {
                name: "required",
                phone: "required",
                email: {
                    required: true,
                    email: true
                }
            },
            messages: {
                name: "Пожалуйста введите ваше имя",
                phone: "Пожалуйста введите ваш номер телефона",
                email: {
                  required: "Пожалуйста введите ваш email",
                  email: "Неправильно введён адрес email"
                }
              }
        });
    };

    validateForms('#consultation-form');
    validateForms('#consultation form');
    validateForms('#order form');


    /* Маска ввода номера на сайте jquery.maskedinput.min.js */

    $('input[name=phone]').mask("+7 (999) 999-9999");

    /* Отправка данные на почту*/

    $('form').submit(function(e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            $('#consultation, #order').fadeOut();
            $('.overlay, #thanks').fadeIn('slow');
            $('form').trigger('reset');
        });
        return false;
    });

    /* Поднятие страницы вверх */

    $(window).scroll(function() {
        if ($(this).scrollTop() > 1600) {
            $('.pageup').fadeIn();
        } else {
            $('.pageup').fadeOut();
        }
    });

    /* Плавный скролл страницы */

    $("a[href=#up]").click(function(){
        const _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });


    /* Подключаю wow.js */

    new WOW().init();
});