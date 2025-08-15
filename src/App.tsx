import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import BrowseRangeComponent from './components/BrowseRangeComponent'
import ProductsComponent from './components/ProductsComponent'
import InspirationComponent from './components/InspirationComponent'
import Hero from './components/Hero'

import Footer from './components/Footer'
import FurnitureComponent from './components/FurnitureComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Header />
       <Hero />
       <BrowseRangeComponent />
       <ProductsComponent />
       <InspirationComponent />
       <FurnitureComponent />
       <Footer />
    </>
  )
}

export default App
