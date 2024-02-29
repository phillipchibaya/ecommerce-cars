import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import About from './pages/About';


function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/products' element={ <Products /> } />
        <Route path='/products/:id' element={ <ProductDetails /> } />
        <Route path='/about' element={ <About /> } />
      </Routes>
      {/** add Footer compoponent here */}
      <Footer/>
    </>
  )
}

export default App
