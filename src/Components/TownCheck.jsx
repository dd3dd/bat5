import '../assets/styles/CheckBox.css'
import { useContext } from 'react'
import UserContext from '../Context/UserContext'
export default function TownCheck({ Taipei = [] }) {
    const { selectCity, setSelectCity } = useContext(UserContext);
    const { isChecked, setIsChecked } = useContext(UserContext);
    const handleCheck = (index) => {
        const upDateChecked = [...isChecked];
        upDateChecked[index] = !upDateChecked[index];
        setIsChecked(upDateChecked)
    }
    return (
        <div className="TownCheck">
            {selectCity === '臺北市' && Taipei.map((item, index) => (
                <div className='Select' key={index}>
                    <input className='MyInput' type="checkbox" id={index}
                        checked={isChecked[index]} onChange={() => handleCheck(index)} />
                    <label htmlFor={index}>{item}</label>
                </div>
            ))}
        </div>
    )
}