import '../assets/styles/CheckBox.css'
import { useContext } from 'react'
import UserContext from '../Context/UserContext'
export default function SelectAll() {
    const { selectCity, setSelectCity } = useContext(UserContext);
    return (<>
        {
            selectCity === '臺北市' && <div className="Select">
                <input className='MyInput' type="checkbox" id="scales" name="scales" checked />
                <label className='' htmlFor="scales">全部勾選</label>
            </div>
        }
    </>
    )
}