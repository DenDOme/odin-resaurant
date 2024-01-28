

const aboutP = (function() {
    const Display = document.getElementById('content');
    // -----------------------------
    const about = document.createElement('section');
    about.classList.add('about');

    const Container = document.createElement('div');
    Container.classList.add('container');

    const aboutText = document.createElement('div');
    aboutText.classList.add('about__text');
    aboutText.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non repudiandae cumque autem, tempora ad eveniet enim, earum esse id omnis, officiis perferendis. Cum dolores quo nulla, recusandae possimus harum. Nisi? Lorem ipsum dolor sit amet consectetur adipisicing elit. Non repudiandae cumque autem, tempora ad eveniet enim, earum esse id omnis, officiis perferendis. Cum dolores quo nulla, recusandae possimus harum. Nisi?'

    Container.appendChild(aboutText);
    about.appendChild(Container);
    Display.appendChild(about);

    // ------------------------------
    
    const Footer = document.createElement('footer');
    Footer.classList.add('footer');

    const footer__text = document.createElement('div')
    footer__text.classList.add('footer__text');
    footer__text.textContent = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'

    Footer.appendChild(footer__text);
    Display.appendChild(Footer);
})

export default aboutP