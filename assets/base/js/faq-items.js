// Variables
const faqItemToggler = document.querySelectorAll('.faq-item-toggler');

// A Function That Takes Status , Element, Attribute As Parameter And Checks If Status Returns True
// Then Sets Given Attribute Of Given Element To False. Otherwise, Sets It To True.
function setAttrByStatus(status, element, attr) {
    if (status === 'true') {element.setAttribute(attr, 'false');}
    else {element.setAttribute(attr, 'true');}
}

// Adding event Listner On Eeach faqItemToggler That Listenes To Click And Calls 'setAttrByStatus' Function.
faqItemToggler.forEach(item => {
    item.addEventListener('click', () => {
        const isItemOpened = item.parentElement.getAttribute('data-opened');
        setAttrByStatus(isItemOpened, item.parentElement, 'data-opened');
    })
})