import "./css/main.css" 
import _ from 'lodash';
import homeP from './pages/homePage';
import menuP from './pages/menuPage';
import aboutP from "./pages/aboutPage";
import HeaderTag from './pages/headerPage';

const firstLoad = function(){
    const Display = document.getElementById('content');
    const Header = HeaderTag();

    Display.appendChild(Header);

    homeP();

}

const render = function(){
    const Display = document.getElementById('content');
    Display.style="";
    while(Display.children.length > 1){
        Display.children[1].remove()
    }
}

firstLoad();

const Homebutton = document.getElementById('HomeBtn')
const Menubutton = document.getElementById('MenuBtn')
const Aboutbutton = document.getElementById('AboutBtn')

Homebutton.addEventListener('click',() => {
    render();
    homeP();
})

Menubutton.addEventListener('click', () => {
    render();
    menuP();
})

Aboutbutton.addEventListener('click', () => {
    render();
    aboutP();
})