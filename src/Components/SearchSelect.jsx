import '../assets/styles/SearchContainer.css'
import SearchStation from './SearchStation'
import SelectCity from './SelectCity'
export default function SearchSelect() {


    return (
        <div className="SearchSelect">
            <SelectCity />
            <SearchStation />
        </div>
    )
}