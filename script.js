const darkModeSwitch = document.getElementById('dark-mode-switch');

const darkModeToggle = () => {
    document.body.classList.toggle('darkmode');
}

darkModeSwitch.addEventListener('click', darkModeToggle);