

const menuP = (function() {
    const Display = document.getElementById('content');
    // ---------------------
    const Container = document.createElement('div');
    Container.classList.add('container');

    const Menu = document.createElement('section');
    Menu.classList.add('menu');

    const MenuGroup = document.createElement('div')
    MenuGroup.classList.add('menu__grid')

    for(let i = 0 ; i < 6 ; i++){
        const menuItem = document.createElement('div');
        menuItem.classList.add('menu__items');
        menuItem.textContent = "Lorem ipsum dolor sit amet consectetur, adipisicing elit.";

        MenuGroup.appendChild(menuItem);
    }
    Container.appendChild(MenuGroup);
    Menu.appendChild(Container);
    Display.appendChild(Menu);
})

export default menuP;