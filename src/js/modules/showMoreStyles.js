import {getResource} from './services/requests';

const showMoreStyles = (trigger, wrapper) => {
    const btn = document.querySelector(trigger);

    // cards.forEach(item => {
    //     item.classList.add('animated', 'fadeInUp');
    // });

    // btn.addEventListener('click', () => {
    //     cards.forEach(item => {
            // item.classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
    //         item.classList.remove('hidden-lg', 'hidden-md', 'hidden-sm', 'hidden-xs', 'styles-2');
    //     });

    //     btn.remove();
    // });


    btn.addEventListener('click', function() {
        getResource('assets/db.jso')
        .then(res => {
            createCards(res.styles);
        })
        .catch(error => {
            console.log(error);

            const message = document.createElement('div');
            message.classList.add('animated', 'fadeInUp');
            message.style.fontSize = '24px';
            message.style.textAlign = 'center';
            message.textContent = 'Упс, произошла ошибка';
            document.querySelector('#styles .row').appendChild(message);
        });

        this.remove();
    });

    function createCards(response) {
        response.forEach(({src, title, link}) => {
            let card = document.createElement('div');

            card.classList.add('animated', 'fadeInUp', 'col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');

            card.innerHTML = `
                <div class="styles-block">
                    <img src=${src} alt=style>
                    <h4>${title}</h4>
                    <a href=${link}>Подробнее</a>
                </div>
            `;

            document.querySelector(wrapper).appendChild(card);
        });
    }
};

export default showMoreStyles;