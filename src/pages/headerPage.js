

const HeaderTag = function(){
    const ContainerOne = document.createElement('div');
    ContainerOne.classList.add('container');

    const Header = document.createElement('header');
    Header.classList.add('header');
    
    const header__menu = document.createElement('div');
    header__menu.classList.add('header__menu');
    
    const MenuItemOne = document.createElement('div');
    const MenuItemTwo = document.createElement('div');
    const MenuItemThree = document.createElement('div');

    MenuItemOne.textContent = 'Home';
    MenuItemTwo.textContent = 'Menu';
    MenuItemThree.textContent = 'About';

    MenuItemOne.classList.add('header__menu-items');
    MenuItemOne.id = 'HomeBtn'
    MenuItemTwo.classList.add('header__menu-items');
    MenuItemTwo.id = 'MenuBtn'
    MenuItemThree.classList.add('header__menu-items');
    MenuItemThree.id = 'AboutBtn'
    
    header__menu.appendChild(MenuItemOne);
    header__menu.appendChild(MenuItemTwo);
    header__menu.appendChild(MenuItemThree);
    
    ContainerOne.appendChild(header__menu);
    Header.appendChild(ContainerOne);
    
    return Header
}

export default HeaderTag