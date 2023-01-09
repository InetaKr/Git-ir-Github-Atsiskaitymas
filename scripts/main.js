const buttons = document.querySelectorAll('.formButtons button');
const tabContent = document.querySelectorAll('.tab-panel');

tabContent.forEach(content => {
  content.style.display = 'none';
});

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const buttonId = button.getAttribute('id');
    
    tabContent.forEach(content => {
      content.style.display = 'none';
    });

    const selectedTab = document.querySelector(`#${buttonId}Tab`);
    selectedTab.style.display = 'block';

    const closeIcon = selectedTab.querySelector('.fa-close');
    closeIcon.addEventListener('click', () => {
      selectedTab.style.display = 'none';
    });
  });
});

