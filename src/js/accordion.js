document.querySelectorAll('.faq-acc-el-trigger').forEach(trigger => {
    trigger.addEventListener('click', () => {
        const parentElement = trigger.closest('.faq-acc-el');
        const panel = parentElement.querySelector('.faq-acc-el-descr-frame');
        const use = trigger.querySelector('svg use');
        const isOpen = parentElement.classList.contains('open');

        if (!isOpen) {
            parentElement.classList.add('open');
            panel.style.maxHeight = panel.scrollHeight + 'px';
            use.setAttribute('href', '/img/sprite.svg#icon-close');
        } else {
            parentElement.classList.remove('open');
            panel.style.maxHeight = '0';
            use.setAttribute('href', '/img/sprite.svg#icon-add');
        }
    });
});