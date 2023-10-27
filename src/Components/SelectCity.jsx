import '../assets/styles/SearchContainer.css'
import { useContext } from 'react'
import UserContext from '../Context/UserContext'
export default function SelectCity() {
    const { selectCity, setSelectCity } = useContext(UserContext);
    const test = (e) => {
        // console.log(e.target.value)
        setSelectCity(e.target.value)
    }
    return (
        <select className='SelectCity' onChange={test}>
            <option value="臺北市">臺北市</option>
            <option value="新北市" >新北市</option>
            <option value="新竹市">新竹市</option>
        </select>
    )
}