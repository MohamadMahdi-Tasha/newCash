// Variables
const chargeModal = document.getElementById('charge-modal');
const chargeModalForm = document.getElementById('charge-modal-form');
const chargeModalStep2 = document.getElementById('charge-modal-step2');
const modalGoBackBtn = document.getElementById('modal-go-back-btn');
const chargeModalStep2SubmitBtn = document.getElementById('charge-modal-step2-submit-btn');
const chargeModalSuccessful = document.getElementById('charge-successful');
const priceInput = document.getElementById('price-number');
const price = document.getElementById('price-show');

// A Function That Takes Modal As Parameter And Adds ClassNames OF 'left-100', 'pos-abs' To Given Modal
function closeModal(modal) {modal.classList.add('pos-abs', 'left-100', 'w-100');}
// A Function That Takes Modal As Parameter And Removes ClassNames OF 'lefted', 'pos-abs' From Given Modal
function showModal(modal) {modal.classList.remove('lefted', 'pos-abs', 'w-100');}
// A Function That Closes Current Modal And Shows Next One
function showNextModal(currentModal, nextModal) {closeModal(currentModal);showModal(nextModal);}
// A Function That Closes Current Modal And Shows Previous One
function showPreviousModal(currentModal, prevModal) {closeModal(currentModal);showModal(prevModal);}
// Adding Event Listener On Second Modals Go Back Button That Listens To Click And Shows Previous Modal
modalGoBackBtn.addEventListener('click', () => showPreviousModal(chargeModalStep2, chargeModal))
// Adding Event Listener On Second Modals Submit Button That Listens To Click And Shows Next Modal
chargeModalStep2SubmitBtn.addEventListener('click', () => showNextModal(chargeModalStep2 ,chargeModalSuccessful))
// Adding Event Listener On First Modal That Listens To Submit And Prevents From Default Action , Shows Next Modal And Splits
// Given Price With Dot, Three By Three
chargeModalForm.addEventListener('submit', (event) => {
    event.preventDefault();
    price.innerText = priceInput.value.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    showNextModal(chargeModal, chargeModalStep2);
})