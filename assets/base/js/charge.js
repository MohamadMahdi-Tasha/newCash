// Variables
const chargeModal = document.getElementById('charge-modal');
const chargeModalForm = document.getElementById('charge-modal-form');
const chargeModalStep2 = document.getElementById('charge-modal-step2');
const modalGoBackBtn = document.getElementById('modal-go-back-btn');
const chargeModalStep2SubmitBtn = document.getElementById('charge-modal-step2-submit-btn');
const chargeModalSuccessful = document.getElementById('charge-successful');

// A Function That Takes Modal As Parameter And Adds ClassNames OF 'left-100', 'pos-abs' To Given Modal
function closeModal(modal) {modal.classList.add('pos-abs', 'left-100');}
// A Function That Takes Modal As Parameter And Removes ClassNames OF 'lefted', 'pos-abs' From Given Modal
function showModal(modal) {modal.classList.remove('lefted', 'pos-abs');}
// A Function That Closes Current Modal And Shows Next One
function showNextModal(currentModal, nextModal) {closeModal(currentModal);showModal(nextModal);}
// A Function That Closes Current Modal And Shows Previous One
function showPreviousModal(currentModal, prevModal) {closeModal(currentModal);showModal(prevModal);}
// Adding Event Listener On First Modal That Listens To Submit ANd Prevents From Default Action And Shows Next Modal
chargeModalForm.addEventListener('submit', (event) => {event.preventDefault();showNextModal(chargeModal, chargeModalStep2);})
// Adding Event Listener On Second Modals Go Back Button That Listens To Click And Shows Previous Modal
modalGoBackBtn.addEventListener('click', () => showPreviousModal(chargeModalStep2, chargeModal))
// Adding Event Listener On Second Modals Submit Button That Listens To Click And Shows Next Modal
chargeModalStep2SubmitBtn.addEventListener('click', () => showNextModal(chargeModalStep2 ,chargeModalSuccessful))