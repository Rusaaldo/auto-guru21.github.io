// JavaScript для интерактивности сайта автошколы

// Бургер меню
const burgerMenu = document.getElementById('burgerMenu');
const mobileNav = document.getElementById('mobileNav');
const closeMenu = document.getElementById('closeMenu');
const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

burgerMenu.addEventListener('click', () => {
    mobileNav.classList.add('active');
    document.body.style.overflow = 'hidden';
});

closeMenu.addEventListener('click', () => {
    mobileNav.classList.remove('active');
    document.body.style.overflow = 'auto';
});

mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileNav.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
});

// Карусель
const slides = document.querySelectorAll('.carousel-slide');
const indicators = document.querySelectorAll('.indicator');
let currentSlide = 0;
const slideInterval = 10000; // 10 секунд

function showSlide(index) {
    // Скрыть все слайды
    slides.forEach(slide => {
        slide.classList.remove('active');
    });
    
    // Убрать активный класс со всех индикаторов
    indicators.forEach(indicator => {
        indicator.classList.remove('active');
    });
    
    // Показать выбранный слайд
    slides[index].classList.add('active');
    indicators[index].classList.add('active');
    currentSlide = index;
}

function nextSlide() {
    let nextIndex = (currentSlide + 1) % slides.length;
    showSlide(nextIndex);
}

// Автопереключение слайдов
let slideTimer = setInterval(nextSlide, slideInterval);

// Обработчики для индикаторов
indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        clearInterval(slideTimer);
        showSlide(index);
        slideTimer = setInterval(nextSlide, slideInterval);
    });
});

// Пауза при наведении на карусель
const carousel = document.querySelector('.carousel');
carousel.addEventListener('mouseenter', () => {
    clearInterval(slideTimer);
});

carousel.addEventListener('mouseleave', () => {
    slideTimer = setInterval(nextSlide, slideInterval);
});

// Модальное окно
const askQuestionBtn = document.getElementById('askQuestionBtn');
const modalOverlay = document.getElementById('modalOverlay');
const modalClose = document.getElementById('modalClose');

askQuestionBtn.addEventListener('click', () => {
    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
});

modalClose.addEventListener('click', () => {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = 'auto';
});

modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
        modalOverlay.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// Обработка формы записи
const enrollmentForm = document.getElementById('enrollmentForm');

enrollmentForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Сбор данных формы
            const formData = {
                lastName: document.getElementById('lastName').value,
                firstName: document.getElementById('firstName').value,
                middleName: document.getElementById('middleName').value,
                phone: document.getElementById('phone').value,
                category: document.getElementById('category').value
            };
            
            // В реальном проекте здесь был бы AJAX-запрос на сервер
            console.log('Данные формы:', formData);
            
            // Показ сообщения об успешной отправке
            alert('Спасибо за заявку! Мы свяжемся с вами в ближайшее время для уточнения деталей.');
            
            // Очистка формы
            enrollmentForm.reset();
        });
        
        // Обработка формы вопроса
        const questionForm = document.getElementById('questionForm');
        
        questionForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Сбор данных формы
            const questionData = {
                name: document.getElementById('questionName').value,
                phone: document.getElementById('questionPhone').value,
                text: document.getElementById('questionText').value
            };
            
            // В реальном проекте здесь был бы AJAX-запрос на сервер
            console.log('Вопрос от пользователя:', questionData);
            
            // Показ сообщения об успешной отправке
            alert('Ваш вопрос отправлен! Мы ответим вам в течение 15 минут в рабочее время.');
            
            // Очистка формы и закрытие модального окна
            questionForm.reset();
            modalOverlay.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
        
        // Плавная прокрутка к якорям
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });
        
        // Изменение шапки при скролле
        window.addEventListener('scroll', () => {
            const header = document.querySelector('header');
            if (window.scrollY > 100) {
                header.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
            } else {
                header.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
            }
        });

