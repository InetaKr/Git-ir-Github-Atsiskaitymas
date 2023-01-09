
const buttons = document.querySelectorAll('.formButtons button');
const tabContent = document.querySelectorAll('.tab-panel');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const buttonId = button.getAttribute('id');

    tabContent.forEach(content => {
      content.style.display = 'none';
    });

    document.querySelector(`#${buttonId}Tab`).style.display = 'flex';
  });
});
