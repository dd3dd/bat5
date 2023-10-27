import '../assets/styles/CheckBox.css'
export default function SelectAll() {
    return (
        <div className="Select">
            <input className='MyInput' type="checkbox" id="scales" name="scales" checked />
            <label className='' htmlFor="scales">全部勾選</label>
        </div>
    )
}