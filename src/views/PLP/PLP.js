import './styles.css'
import { useEffect, useState } from "react"
import Search from "../../components/Filters/Search/Search";
import Loader from "../../components/Loader/Loader";

function PLP() {
    const [data, setData] = useState([])

    const getData = () => {
        fetch('https://fakestoreapi.com/products')
            .then((response) => response.json())
            .then((fetchedData) => setData(fetchedData))
    }

    useEffect (()=> {
        getData()
    }, [])

    return (
        <section className="plp">
            {
                data.length ?
                <Search products={data} />
                : <Loader />
            }
        </section>
    )
}

export default PLP