// Variables
const modalHolder = document.getElementById('modal-holder');
const modalBg = document.getElementById('modal-bg');
const firstSectionLeftVideos = document.querySelectorAll('.first-section-left-videos');
const videoEl = document.createElement('div');

// A Function That Takes Modal As An Argument And Removes It And Removes Dark Bg Of It.
function closeModal(modal) {
    modal.remove();
    modalBg.classList.add('pointer-event-none');
    modalBg.classList.add('opacity-0');
}

// A Function That Creates New Modal
function newModal(content) {
    // Creating Modal
    const modal = document.createElement('div');

    // Applying ClassName To Modal
    modal.className = 'w-50 bg-white rounded shadow p-3 mq-900-w-100 mq-900-p-1 h-100 ov-scroll scroll-hidden pointer-event-visible';

    // Appending Content If Given Call To Modal
    modal.appendChild(content);

    // Adding Event Listener On Modal Bg That Listens To Click And Calls 'closeModal' Function On Modal
    modalBg.onclick = () => closeModal(modal);

    // Appending Modal To Modal Holder
    modalHolder.appendChild(modal);

    // Adding Interactivity To dark Bg And Adding Opacity To It
    modalBg.classList.remove('pointer-event-none');
    modalBg.classList.remove('opacity-0');
}

// Adding Classes To Video Element And Height
videoEl.className = 'w-100 bg-orange rounded';
videoEl.style.height = '100vh';

// Adding Event Listener On First Sections Left side Videos That Listens To Click And Shows A Modal That Plays Video.
firstSectionLeftVideos.forEach(video => {
    video.addEventListener('click', () => {
        newModal(videoEl);
    })
})