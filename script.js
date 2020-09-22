const switchButton = document.querySelector('.header__switch input');

switchButton.addEventListener('change', e => {
    if (e.target.checked) {
        document.body.setAttribute('data-theme', 'light');
    } else {
        document.body.setAttribute('data-theme', 'dark');
    }
});