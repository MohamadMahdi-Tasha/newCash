// Variables
const closeIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" viewBox="0 0 16 16"><path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/></svg>';
const modalHolder = document.getElementById('modal-holder');
const modalBg = document.getElementById('modal-bg');
const firstSectionsLeftSideVideos = document.querySelectorAll('.first-section-left-videos');

// A Function That Closes Modal And Its Dark Bg
function closeModal(modal) {
    modal.remove();
    modalBg.setAttribute('data-opened', 'false');
    modalHolder.classList.add('pointer-event-none');
}

// A Function That Takes Content Of Modal As Parameter And Creates Modal
function newModal(content) {
    // Creating Elements
    const modal = document.createElement('div');
    const closeBtn = document.createElement('button');

    // Adding Class Names To Elements
    closeBtn.className = "mb-1 p-1 aspect-ratio circle w-10 border-green bg-none hover-bg-green hover-text-white text-green transition";
    modal.className = 'modal bg-white w-50 p-3 rounded shadow transition mq-900-w-100 mq-900-p-1';

    // Adding Close Icon Into Close Button
    closeBtn.innerHTML = closeIcon;
    closeBtn.addEventListener('click', () => closeModal(modal));

    // Appending Children To Their Parents
    modal.appendChild(closeBtn);
    modal.appendChild(content);

    // And Appending Modal To Modal Holder
    modalBg.setAttribute('data-opened', 'true')
    modalHolder.classList.remove('pointer-event-none');
    modalHolder.appendChild(modal);
}

// Creating Video Element And Applying Configs To It
const videoElement = document.createElement('div');
videoElement.style.height = '50vh';
videoElement.className = 'w-100 bg-orange';

// Adding event Listener On Each First Sections Video That Listens To Click And Calls newModal On Video Element.
firstSectionsLeftSideVideos.forEach(video => {
    video.addEventListener('click', () => {
        newModal(videoElement)
    })
})