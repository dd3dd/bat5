import SelectAll from "./SelectAll";
import TownCheck from "./TownCheck";
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useContext } from 'react'
import UserContext from '../Context/UserContext'
export default function SearchCheckBox() {
    const Taipei = ['大安區', '大同區', '士林區', '文山區', '中正區', '中山區', '內湖區', '北投區',
        '松山區', '南港區', '信義區', '萬華區', '臺大公館校區']
    // const [data, setData] = useState(null);
    const { data, setData } = useContext(UserContext);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const getData = await axios.get(`https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json`)
                // console.log(getData)
                setData(getData.data)
            }
            catch (error) {
                console.log(error)
            }

        }
        fetchData();

    }, [])
    return (
        <div className="SearchCheckBox">
            <SelectAll />
            <TownCheck Taipei={Taipei} />
        </div>
    )
}