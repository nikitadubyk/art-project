const showMoreStyles = (trigger, card) => {
    const cards = document.querySelectorAll(card),
          btn = document.querySelector(trigger);

    cards.forEach(item => {
        item.classList.add('animated', 'fadeInUp');
    });

    btn.addEventListener('click', () => {
        cards.forEach(item => {
            item.classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
            item.classList.remove('hidden-lg', 'hidden-md', 'hidden-sm', 'hidden-xs', 'styles-2');
        });

        btn.remove();
    });
};

export default showMoreStyles;