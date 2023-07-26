import { useEffect, useState } from "react"
import React from "react"
import axios from "../../axios"
import { Row, Col } from "antd"
import Loading from "../Loading/Loading"
import SearchBar from "../searchBar/searchBar"

export default function CategoryList({ filterItems ,children}) {
    const [loading, setLoading] = useState(true)
    const [categories, setCategorise] = useState([])

    useEffect(() => {
        const fetchCategoris = async () => {
            const respons = await axios.get('FoodCategory/categories');
            setCategorise(respons.data)
            setLoading(false)
        }
        fetchCategoris()
    }, [])

    const renderContent = () => {
        if (loading) {
            return <Loading />
        }
        return (
            <ul className="flex gap-5">
                <li onClick={() => filterItems()} 
                className="list-none text-[1rem] font-bold ">
                    <a className="text-slate-400 hover:text-slate-600" href="#">همه فست فود ها</a>
                </li>
                {
                    categories.map((categorie, key) => (
                        <li onClick={() => filterItems(categorie.id)}
                            className="list-none text-[1rem] font-bold"
                            key={categorie.id}>
                            <a className="text-slate-400 hover:text-slate-600" href="#">{categorie.name}</a>
                        </li>
                    ))
                }
            </ul>
        )
    }

    return (
        <>
            <nav className="flex justify-center w-[90%] mx-0" style={{margin:'-40px auto'}}>
                <Row className="flex items-center justify-between px-5 py-5 w-full h-full  bg-white rounded-[50px] shadow">
                    {renderContent()}
                    {children}
                </Row>
            </nav>
        </>
    )
}