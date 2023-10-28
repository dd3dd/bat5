import '../assets/styles/SearchContainer.css'
import { useContext } from 'react'
import UserContext from '../Context/UserContext'
export default function SearchStation() {
    const { searchText, setSearchText } = useContext(UserContext);
    const handleInput = (e) => {
        //console.log(e.target.value)
        setSearchText(e.target.value)
    }
    if (searchText !== null) {
        return (
            <input value={searchText} onChange={handleInput} className='SearchStation' placeholder='搜尋站點' type="text" />
        )
    }
}