import { Route, Routes } from 'react-router-dom';

import BlogPages from './Pages/BlogPages';
import ShopPages from './Pages/ShopPages';
import HomePage from './Pages/HomePage'
import AboutPages from './Pages/AboutPages'
import LoginPages from './Pages/LoginPage'
import NewProduct from './components/NewProduct'; 
import ProductDetail from './Pages/ProductDetail';
import LandingPage from './components/LandingPage';

const AppRoutes = () => {
    return(
        <Routes>
            <Route path='/' element={<LoginPages />} />
            <Route path='/HomePages' element= {<HomePage />} />
            <Route path='/ShopPages' element= {<ShopPages />} />
            <Route path='/BlogPages' element= {<BlogPages />} />
            <Route path='/AboutPages' element= {<AboutPages />} />
            <Route path='/LoginPages' element= {<LoginPages />} />
            <Route path='/products' element={<NewProduct />} />
            <Route path='/products' element={<LandingPage />} />

            <Route path='/products/:id' element={<ProductDetail />} />
        </Routes>
        

    )
}

export default AppRoutes;