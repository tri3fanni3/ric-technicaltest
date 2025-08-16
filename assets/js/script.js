document.addEventListener('DOMContentLoaded', () => {

    const imageModal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const closeModal = document.getElementById('closeModal');
    const galleryImages = document.querySelectorAll('.gallery-img');

    /**
     * Opens the modal and displays the clicked image.
     * @param {string} src - The source URL of the image to display.
     */
    function openModal(src) {
        modalImage.src = src; // Set the image source in the modal
        imageModal.classList.remove('hidden'); // Show the modal
        imageModal.classList.add('flex');
    }

    /**
     * Closes the image modal.
     */
    function closeTheModal() {
        imageModal.classList.add('hidden'); // Hide the modal
        imageModal.classList.remove('flex');
        modalImage.src = ""; // Clear the image source to prevent loading issues
    }

    // Add a click event listener to each gallery image
    galleryImages.forEach(img => {
        img.addEventListener('click', () => {
            openModal(img.src);
        });
    });

    // Add a click event listener to the close button (the '×')
    closeModal.addEventListener('click', closeTheModal);

    // Add a click event listener to the modal background to close it
    imageModal.addEventListener('click', (e) => {
        if (e.target === imageModal) {
            closeTheModal();
        }
    });

    // Add a keyboard event listener to close the modal with the 'Escape' key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !imageModal.classList.contains('hidden')) {
            closeTheModal();
        }
    });
});