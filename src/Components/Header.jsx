import '../assets/styles/Container.css'
import Logo from '../assets/images/logo.png'
import { useState } from 'react';
export default function Header() {
    const [isMenuVisible, setMenuVisible] = useState(false);
    const [hamburger, setHamburger] = useState(false)
    const toggleMenu = () => {
        setMenuVisible(pre => !pre);
        setHamburger(pre => !pre);
    };
    return (
        <div className="Header">
            <nav className="myNav">
                <a href="#" className="Logo">
                    <img src={Logo} alt="" />
                </a>
                <div className={`FiveText hidden md:flex`}>
                    <a href="#" className="HeaderText">使用說明</a>
                    <a href="#" className="HeaderText">收費方式</a>
                    <a href="#" className="HeaderText">站點資訊</a>
                    <a href="#" className="HeaderText">最新消息</a>
                    <a href="#" className="HeaderText">活動專區</a>
                </div>
                <div className='LoginButDiv hidden md:flex'>
                    <button className='LoginBut'>登入</button>
                </div>
                <div className="md:hidden grow flex justify-end">
                    <button id="mobile-menu-button" className="text-HeaderGreen" onClick={toggleMenu}>
                        {
                            hamburger === false ?
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                                </svg>
                                :
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                                </svg>
                        }
                    </button>
                </div>
            </nav>
            {
                isMenuVisible &&
                <div className='md:hidden DropMenu'>
                    <a onClick={toggleMenu} href="#" className="DropMenuText">使用說明</a>
                    <a onClick={toggleMenu} href="#" className="DropMenuText">收費方式</a>
                    <a onClick={toggleMenu} href="#" className="DropMenuText">站點資訊</a>
                    <a onClick={toggleMenu} href="#" className="DropMenuText">最新消息</a>
                    <a onClick={toggleMenu} href="#" className="DropMenuText">活動專區</a>
                    <button className='DropMenuBut'>登入</button>
                </div>
            }
        </div>
    )
}