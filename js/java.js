const headerBtn = document.querySelector('.header__burger');
const headerLinks = document.querySelector('.header__links');
const headerLink = document.querySelector('.header__link');

headerBtn.addEventListener('click', function() {
headerLinks.classList.toggle('active');
headerBtn.classList.toggle('active');
})
headerLinks.addEventListener('click', function() {
    headerLinks.classList.toggle('active');
    headerBtn.classList.toggle('active');
})

headerLink.addEventListener('active', function() {
    headerLinks.classList.toggle('active');
    headerBtn.classList.toggle('active');
})

// Добавление/Удаление класса active
var sections = document.querySelectorAll('section');

onscroll = function() {
    var scrollPosition = document.documentElement.scrollTop;

    sections.forEach(( section) => {
        if (
            scrollPosition >= section.offsetTop - section.offsetHeight
            *0.25 && 
            scrollPosition < section.offsetTop + section.offsetHeight
            - section.offsetHeight
            *0.25) {
        var currentId = section.attributes.id.value;
        removeAllActiveClasses();
        addActiveClass(currentId);
            }
})
};

var removeAllActiveClasses = function() {
    document.querySelectorAll('.header__link a').forEach( el => {
        el.classList.remove('active');
    })
}
var addActiveClass = function(id) {
    
    var selector = `.header__link a[href="#${id}"]`;
    document.querySelector(selector).classList.add('active');
}
// Добавление/Удаление класса active