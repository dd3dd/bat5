import '../assets/styles/ResulContainer.css'
import { useContext } from 'react'
import UserContext from '../Context/UserContext'

export default function Title() {
    // const { scroll, setScroll } = useContext(UserContext);

    // console.log(scroll)
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
                <button >可借車輛</button>
            </div>
            <div className='Return'>
                <button>可還空位</button>
            </div>
        </div>
    )

}