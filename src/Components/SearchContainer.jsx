import '../assets/styles/SearchContainer.css'
import bicycle from '../assets/images/Frame.png';
import SearchCheckBox from './SearchCheckBox'
import SearchHeader from './SearchHeader'
import SearchSelect from './SearchSelect'
export default function SearchContainer() {
    return (
        <div className="SearchContainer">
            <SearchHeader />
            <SearchSelect />
            <SearchCheckBox />
            <div className='MyImg'>
            </div>
        </div>
    )
}