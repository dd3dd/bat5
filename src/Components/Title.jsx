import '../assets/styles/ResulContainer.css'
import { useContext } from 'react'
import UserContext from '../Context/UserContext'

export default function Title() {
    const { sortBorrow, setSortBorrow } = useContext(UserContext);
    const { sortReturn, setSortReturn } = useContext(UserContext);
    const handleSortBorrow = () => {
        setSortBorrow(previous => (previous + 1) % 3)
        setSortReturn(0)
    }
    const handleSortReturn = () => {
        setSortReturn(previous => (previous + 1) % 3)
        setSortBorrow(0)
    }
    return (
        <div className="Title">
            <div className='City'>
                <p >縣市</p>
            </div>
            <div className='Region'>
                <p >區域</p>
            </div>
            <div className='StationName'>
                <p >站點名稱</p>
            </div>
            <div className='Borrow'>
                <button onClick={handleSortBorrow}>可借車輛
                </button>
                <span className='SortIcon'>
                    {
                        (sortBorrow === 0 || sortBorrow === 1) &&
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-up-fill" viewBox="0 0 16 16">
                            <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
                        </svg>
                    }

                    {
                        (sortBorrow === 0 || sortBorrow === 2) &&
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-down-fill" viewBox="0 0 16 16">
                            <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                        </svg>
                    }
                </span>
            </div>
            <div className='Return'>
                <button onClick={handleSortReturn}>可還空位
                </button>
                <span className='SortIcon'>
                    {
                        (sortReturn === 0 || sortReturn === 1) &&
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-up-fill" viewBox="0 0 16 16">
                            <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
                        </svg>
                    }
                    {
                        (sortReturn === 0 || sortReturn === 2) &&
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-down-fill" viewBox="0 0 16 16">
                            <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                        </svg>
                    }
                </span>
            </div>
        </div>
    )

}