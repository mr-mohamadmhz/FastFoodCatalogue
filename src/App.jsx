import Header from './component/Header/Header'
import CategoryList from './component/CategoryList/CategoryList'
import { useEffect, useState } from 'react'
import './App.css'
import axios from './axios'
import Loading from './component/Loading/Loading'
import FastFoodList from './component/FastFoodList/FastFoodList'
import SearchBar from './component/searchBar/searchBar'




function App() {

  const [loading, setLoading] = useState(false)
  const [fastFoodItems, setFastFoodItems] = useState([])

  const fetchData = async (categoryId = null) => {
    setLoading(true);
    const respons = await axios.get(`/FastFood/list/${categoryId ? "?categoryId=" + categoryId : ""}`);
    setLoading(false)
    setFastFoodItems(respons.data)
  };

  useEffect(() => {
    fetchData()
  }, [])

  const filterItems = (categoryId) => {
    fetchData(categoryId)
  }

  const searchItems = async (term) => {
    setLoading(true);
    const respons = await axios.get(`/FastFood/search/${term ? "?term=" + term : ""}`)
    setFastFoodItems(respons.data);
    setLoading(false)
  }

  const renderContent = () => {
    if (loading) {
      return <Loading />
    }
    return <FastFoodList fastFoodItems={fastFoodItems} />
  }

  return (
    <>
      <Header />
      <CategoryList filterItems={filterItems}>
        <SearchBar searchItems={searchItems}/>
      </CategoryList>
      <div className='mt-20'>{renderContent()}</div>
    </>
  )
}

export default App
