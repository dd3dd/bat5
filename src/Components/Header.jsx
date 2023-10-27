import '../assets/styles/Container.css'
import Logo from '../assets/images/logo.png'
export default function Header() {
    return (
        <div className="Header">
            <nav className="myNav">
                <a href="#" className="Logo">
                    <img src={Logo} alt="" />
                </a>
                <div className="FiveText hidden md:flex">
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
                    <button id="mobile-menu-button" className="text-HeaderGreen">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
            </nav>
        </div>
    )
}