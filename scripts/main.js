// Get a reference to the buttons and the tab content elements
const buttons = document.querySelectorAll('.formButtons button');
const tabContent = document.querySelectorAll('.tab-panel');

// Add click event listeners to all of the buttons
buttons.forEach(button => {
  button.addEventListener('click', () => {
    // Get the ID of the button that was clicked
    const buttonId = button.getAttribute('id');

    // Hide all of the tab content elements
    tabContent.forEach(content => {
      content.style.display = 'none';
    });

    // Show the desired tab content element
    const selectedTab = document.querySelector(`#${buttonId}Tab`);
    selectedTab.style.display = 'block';

    // Add a click event listener to the close icon in the selected tab
    const closeIcon = selectedTab.querySelector('.fa-close');
    closeIcon.addEventListener('click', () => {
      // Hide the selected tab
      selectedTab.style.display = 'none';
    });
  });
});
