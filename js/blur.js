
const tabs = document.querySelectorAll('.nav-item');
const blurSelect = document.querySelectorAll('.blur-select');

function handleTabHover(event) {
    // Add the 'non-blur' class to the hovered tab
    event.currentTarget.classList.add('non-blur');

    // Add the 'blur' class to all blur-select elements
    blurSelect.forEach(element => {
        element.classList.add('blur');
    });

    // Add the 'blur' class to all other tabs except the hovered tab and its content
    const otherTabs = Array.from(tabs).filter(tab => tab !== event.currentTarget);
    otherTabs.forEach(tab => {
        tab.classList.add('blur');
        const dropdownMenu = tab.querySelector('.dropdown-menu');
        if (dropdownMenu) {
            dropdownMenu.classList.add('blur');
        }
    });
}

function handleTabLeave() {
    // Remove the 'non-blur' class from all tabs
    tabs.forEach(tab => {
        tab.classList.remove('non-blur');
    });

    // Remove the 'blur' class from all blur-select elements
    blurSelect.forEach(element => {
        element.classList.remove('blur');
    });

    // Remove the 'blur' class from all tabs and their dropdowns
    tabs.forEach(tab => {
        tab.classList.remove('blur');
        const dropdownMenu = tab.querySelector('.dropdown-menu');
        if (dropdownMenu) {
            dropdownMenu.classList.remove('blur');
        }
    });
}

// Add event listeners for mouseenter and mouseleave on each tab item
tabs.forEach(tab => {
    tab.addEventListener('mouseenter', handleTabHover);
    tab.addEventListener('mouseleave', handleTabLeave);
});

