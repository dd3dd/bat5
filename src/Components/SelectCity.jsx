import '../assets/styles/SearchContainer.css'
import { useContext } from 'react'
import UserContext from '../Context/UserContext'
export default function SelectCity() {
    const { selectCity, setSelectCity } = useContext(UserContext);
    const { searchText, setSearchText } = useContext(UserContext);
    const handleSearch = (e) => {
        setSearchText('');
        setSelectCity(e.target.value)
    }
    return (
        <select className='SelectCity' onChange={handleSearch}>
            <option value="臺北市">臺北市</option>
            <option value="新北市" >新北市</option>
            <option value="新竹市">新竹市</option>
        </select>
    )
}