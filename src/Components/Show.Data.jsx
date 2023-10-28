import '../assets/styles/ResulContainer.css'
import { useContext } from 'react'
import UserContext from '../Context/UserContext'
export default function ShowData() {
    const Taipei = ['大安區', '大同區', '士林區', '文山區', '中正區', '中山區', '內湖區', '北投區',
        '松山區', '南港區', '信義區', '萬華區', '臺大公館校區']
    const { selectCity, setSelectCity } = useContext(UserContext);
    const { data, setData } = useContext(UserContext);
    const { isChecked, setIsChecked } = useContext(UserContext);
    const { searchText, setSearchText } = useContext(UserContext);

    const selectedRegion = isChecked.map((e, index) => {
        if (e === true)
            return Taipei[index];
    })
    // console.log(selectedRegion)
    // const { scroll, setScroll } = useContext(UserContext);
    // console.log(data)
    // const handleScroll = (e) => {
    //     //console.log(e.target.scrollLeft)
    //     setScroll(e.target.scrollLeft)
    // }
    if (data && selectCity === '臺北市') {
        // console.log(searchText)
        return (
            <div className="ShowData">
                {data.map((e) => {
                    if (selectedRegion.includes(e.sarea)) {
                        if (searchText === null || searchText.length === 0) {
                            return <div className='DataRow'>
                                <div className='City'>
                                    <p >臺北市</p>
                                </div>
                                <div className='Region'>
                                    <p >{e.sarea}</p>
                                </div>
                                <div className='StationName'>
                                    <p >{e.sna.slice(11)}</p>
                                </div>
                                <div className='Borrow'>
                                    <p className='NumStyle'>{e.sbi}</p>
                                </div>
                                <div className='Return'>
                                    <p className='NumStyle'>{e.bemp}</p>
                                </div>
                            </div>
                        }
                        else {
                            if (e.sna.indexOf(searchText) !== -1) {
                                return <div className='DataRow'>
                                    <div className='City'>
                                        <p >臺北市</p>
                                    </div>
                                    <div className='Region'>
                                        <p >{e.sarea}</p>
                                    </div>
                                    <div className='StationName'>
                                        <p >{e.sna.slice(11)}</p>
                                    </div>
                                    <div className='Borrow'>
                                        <p className='NumStyle'>{e.sbi}</p>
                                    </div>
                                    <div className='Return'>
                                        <p className='NumStyle'>{e.bemp}</p>
                                    </div>
                                </div>
                            }

                        }
                    }
                })}

            </div>
        )
    }
}