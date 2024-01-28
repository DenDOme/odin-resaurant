import rigthImg from "../img/mainImg.png";

const homeP = (function() {
    const Display = document.getElementById('content');
    // ---------------------------------------------------
    
    const Section = document.createElement('section');
    Section.classList.add('main');

    const ContainerTwo = document.createElement('div');
    ContainerTwo.classList.add('container');

    const main__row = document.createElement('div');
    main__row.classList.add('main__row');
    
    const MainLeft = document.createElement('div');
    const MainRight = document.createElement('div');
    MainLeft.classList.add('main__column-left');
    MainRight.classList.add('main__column-right');

    MainLeft.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, alias. Magni, voluptatibus inventore libero cum ducimus minus quidem dolorum natus doloribus, perspiciatis assumenda officiis debitis quas laudantium obcaecati amet? Esse.'
    
    const mainImg = document.createElement('img');
    mainImg.src = rigthImg;
    mainImg.classList.add = 'right-img';
    
    MainRight.appendChild(mainImg);
    main__row.appendChild(MainLeft);
    main__row.appendChild(MainRight);
    ContainerTwo.appendChild(main__row);
    Section.appendChild(ContainerTwo);

    Display.appendChild(Section)
    // -----------------------------------

    const Footer = document.createElement('footer');
    Footer.classList.add('footer');

    const footer__text = document.createElement('div')
    footer__text.classList.add('footer__text');
    footer__text.textContent = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'

    Footer.appendChild(footer__text);
    Display.appendChild(Footer);
    
})

export default homeP;