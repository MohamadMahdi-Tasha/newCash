// Variables
const faqItemToggler = document.querySelectorAll('.faq-item-toggler');
const plusSvg = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"> <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/> <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/> </svg>'
const minusSvg = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/></svg>';

// A Function That Takes Status , Element, Attribute As Parameter And Checks If Status Returns True
// Then Sets Given Attribute Of Given Element To False. Otherwise, Sets It To True.
function setAttrByStatus(status, element, attr) {
    if (status === 'true') {element.setAttribute(attr, 'false');}
    else {element.setAttribute(attr, 'true');}
}

// Adding event Listener On Each faqItemToggler That Listens To Click And Calls 'setAttrByStatus' Function And Checks If Items Is Opened
// If It Is The Icon Changes To Minus Otherwise To Plus Icon.
faqItemToggler.forEach(item => {
    item.addEventListener('click', () => {
        const isItemOpened = item.parentElement.getAttribute('data-opened');
        const itemIcon = item.lastElementChild.firstElementChild;
        setAttrByStatus(isItemOpened, item.parentElement, 'data-opened');

        isItemOpened === 'true' ? itemIcon.innerHTML = minusSvg : itemIcon.innerHTML = plusSvg;
    })
})