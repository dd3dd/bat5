import '../assets/styles/CheckBox.css'
import { useContext } from 'react'
import UserContext from '../Context/UserContext'
export default function TownCheck({ Taipei = [], }) {
    const { selectCity, setSelectCity } = useContext(UserContext);
    console.log(selectCity)
    return (
        <div className="TownCheck">
            {selectCity === '臺北市' && Taipei.map((item, index) => (
                <div className='Select' key={index}>
                    <input className='MyInput' type="checkbox" id={index} checked />
                    <label htmlFor={index}>{item}</label>
                </div>
            ))}

            {/* <div className='Select'>
                <input className='MyInput' type="checkbox" id="1" name="scales" checked />
                <label htmlFor="1">信義區</label>
            </div> */}
        </div>
    )
}