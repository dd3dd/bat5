import '../assets/styles/CheckBox.css'


export default function TownCheck({ Taipei = [], }) {


    return (
        <div className="TownCheck">
            {Taipei.map((item, index) => (
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