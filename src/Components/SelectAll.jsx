import '../assets/styles/CheckBox.css'
import { useContext } from 'react'
import UserContext from '../Context/UserContext'
export default function SelectAll() {
    const { selectCity, setSelectCity } = useContext(UserContext);
    const { isChecked, setIsChecked } = useContext(UserContext);
    const { isCheckedAll, setIsCheckedAll } = useContext(UserContext);
    const handleCheckAll = () => {
        if (isCheckedAll === true) {
            const upDateCheck = isChecked.map(e => false)
            setIsChecked(upDateCheck)
            setIsCheckedAll(false)
        }
        else {
            const upDateCheck = isChecked.map(e => true)
            setIsChecked(upDateCheck)
            setIsCheckedAll(true)
        }
    }
    return (<>
        {
            selectCity === '臺北市' && <div className="Select">
                <input className='MyInput' type="checkbox" id="scales" name="scales"
                    checked={isCheckedAll} onChange={handleCheckAll} />
                <label className='' htmlFor="scales">全部勾選</label>
            </div>
        }
    </>
    )
}