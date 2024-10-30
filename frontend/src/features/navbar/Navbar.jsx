/*
a. logo
b. pages redirect
*/

import logo from "../../assets/images/logo.png";
import menubutton from "../../assets/images/menubutton.svg";

function viewMenu() {
    const button = document.querySelector('#menu-button');
    const menu = document.querySelector('#menu');
    button.addEventListener('click', () => {
    menu.classList.toggle('hidden');
    });
}

function Navbar() {
    return (
        <header className="fixed top-0 left-0 right-0">
            <nav className="flex flex-wrap items-center justify-between w-full py-4 md:py-0 px-4 text-lg text-gray-700 bg-transparent">
                <div>
                    <a href="#"><img src={logo} alt="logo" className="w-16 h-auto"/></a>
                </div>
                <div id="menu-button" className="h-6 w-6 cursor-pointer md:hidden block" onClick={viewMenu}>
                    <img src={menubutton} alt="hamburger menu"/>
                </div>
                <div className="hidden w-full md:flex md:items-center md:w-auto text-right" id="menu">
                    <ul className="pt-4 text-base text-gray-700 md:flex md:justify-between md:pt-0">
                        <li className="md:p-4 py-2 block hover:text-orange-600">Home</li>
                        <li className="md:p-4 py-2 block hover:text-orange-600">About</li>
                        <li className="md:p-4 py-2 block hover:text-orange-600">Collection</li>
                        <li className="md:p-4 py-2 block hover:text-orange-600">Instagram</li>
                        <li className="md:p-4 py-2 block hover:text-orange-600">Contact</li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Navbar