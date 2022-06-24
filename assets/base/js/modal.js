// Variables
const modalBg = document.getElementById('modal-bg');
const firstSectionLeftVideos = document.querySelectorAll('.first-section-left-videos');
const videoModal = document.getElementById('video-modal');

// A Function That Takes Modal As An Argument And Removes It And Removes Dark Bg Of It.
function closeModal(modal) {
    modal.classList.add('pointer-event-visible');
    modal.classList.add('opacity-0');

    modalBg.classList.add('pointer-event-none');
    modalBg.classList.add('opacity-0');
}

// A Function That Shows Given Modal
function showModal(modal) {
    // Adding To Opacity Of Modal And Make It Intractable
    modal.classList.remove('pointer-event-visible');
    modal.classList.remove('opacity-0');

    // Adding Event Listener On Modal Bg That Listens To Click And Calls 'closeModal' Function On Modal
    modalBg.onclick = () => closeModal(modal);

    // Adding Interactivity To dark Bg And Adding Opacity To It
    modalBg.classList.remove('pointer-event-none');
    modalBg.classList.remove('opacity-0');
}

// Adding Event Listener On First Sections Left side Videos That Listens To Click And Shows A Modal That Plays Video.
firstSectionLeftVideos.forEach(video => video.addEventListener('click', () => showModal(videoModal)))