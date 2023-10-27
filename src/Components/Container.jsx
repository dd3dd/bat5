import '../assets/styles/Container.css'
import Header from './Header'
import Result from './Result'
import Search from './Search'
export default function Container() {
    return (
        <div className="Container">
            <Header />
            <hr />
            <Search />
            <Result />
        </div>
    )
}