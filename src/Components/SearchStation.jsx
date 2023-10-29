import '../assets/styles/SearchContainer.css'
import { useContext } from 'react'
import UserContext from '../Context/UserContext'
export default function SearchStation() {
    const { searchText, setSearchText } = useContext(UserContext);
    const handleInput = (e) => {
        setSearchText(e.target.value)
    }
    const deleteText = () => {
        setSearchText('');
    }
    if (searchText !== null) {
        return (
            <div className='SearchDiv'>
                <input value={searchText} onChange={handleInput} className='SearchStation' placeholder='搜尋站點' type="text" />
                <button onClick={deleteText} className='DeleteIcon'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                    </svg>
                </button>
            </div>
        )
    }
}