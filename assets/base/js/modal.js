// Variables
const modalBg = document.getElementById('modal-bg');
const firstSectionLeftVideos = document.querySelectorAll('.first-section-left-videos');
const videoModal = document.getElementById('video-modal');
const chargeAccountBtn = document.querySelectorAll('.charge-account-btn');
const chargeModal = document.getElementById('charge-modal');
const chargeModalForm = document.getElementById('charge-modal-form');
const chargeModalStep2 = document.getElementById('charge-modal-step2');
const modalGoBackBtn = document.getElementById('modal-go-back-btn');
const chargeModalStep2SubmitBtn = document.getElementById('charge-modal-step2-submit-btn');
const chargeModalSuccessful = document.getElementById('charge-modal-successful');
const chargedSuccsesfulyAcceptBtn = document.getElementById('charge-successful-accept-btn');
const denibtn = document.getElementById('deni-btn');

// A Function That Takes Modal As An Argument And Removes It And Removes Dark Bg Of It.
function closeModal(modal) {
    modal.classList.add('d-none');
    modalBg.classList.add('pointer-event-none');
    modalBg.classList.add('opacity-0');
}

// A Function That Shows Next Modal And Closes Current Open Modal.
function showNextModal(currentModal, nextModal) {
    closeModal(currentModal);
    showModal(nextModal);
}

// A Function That Shows Previous Modal And Closes Current Open Modal.
function showPreviousModal(currentModal, prevModal) {
    closeModal(currentModal);
    showModal(prevModal);
}

// A Function That Shows Given Modal
function showModal(modal) {
    // Adding To Opacity Of Modal And Make It Intractable
    modal.classList.remove('d-none');
    modal.classList.replace('pointer-event-none','pointer-event-visible');

    // Adding Event Listener On Modal Bg That Listens To Click And Calls 'closeModal' Function On Modal
    modalBg.onclick = () => closeModal(modal);

    // Adding Interactivity To dark Bg And Adding Opacity To It
    modalBg.classList.remove('pointer-event-none');
    modalBg.classList.remove('opacity-0');
}

// Adding Event Listener On First Sections Left side Videos That Listens To Click And Shows A Modal That Plays Video.
firstSectionLeftVideos.forEach(video => video.addEventListener('click', () => showModal(videoModal)))
chargeAccountBtn.forEach(btn => btn.addEventListener('click', () => showModal(chargeModal)));

// Adding Event Listener On Go Back Button That Shows Previous Modal
modalGoBackBtn.addEventListener('click', () => showPreviousModal(chargeModalStep2, chargeModal))

// Adding Event Listener On Second Step Of Charge Modal That Shows Next Modal
chargeModalStep2SubmitBtn.addEventListener('click', () => showNextModal(chargeModalStep2, chargeModalSuccessful))

// Adding Event Listener Charge Was Successful Modal That Closes Modal;
chargedSuccsesfulyAcceptBtn.addEventListener('click', () => closeModal(chargeModalSuccessful));

// Adding Event Listner On Deni Button That Again Closes Modal
denibtn.addEventListener('click', () => closeModal(chargeModalStep2));

// Adding Event Listener On Form Element Of Charge Modal That Listens To Submit And Prevents From Default Action
// And Shows Its Next Modal.
chargeModalForm.addEventListener('submit', (e) => {
    e.preventDefault();
    showNextModal(chargeModal, chargeModalStep2);
})

document.querySelectorAll('nav .charge-account-btn').forEach(btn => {
    btn.addEventListener('click', () => openOrCloseNav('false'))
})