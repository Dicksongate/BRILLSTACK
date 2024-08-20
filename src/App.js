
import './App.css';
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Shop from './pages/Shop';
import Menu from './pages/Menu';
// import ShopCategory from './pages/ShopCategory';
import Contact from './pages/Contact';
import Apps from './pages/Apps';
import About from './pages/About';
import Resources from './pages/Resources';
import Product from './pages/Product';
import Cart from './pages/Cart';
import LoginSignup from './pages/LoginSignup';
import Video from './pages/Video';
import Websitepage from './components/Websitepage/Websitepage';
import Others from './pages/Others';
import Footer from './components/Footer/Footer';
// import menu_banner from './components/Assets/menu_banner.jpg'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Shop/>}/>
        {/* Remember here we are not going to iterate through the products because we did not design the website to take different category, but we will assume that menu is one of the category and we are going toiterate products in it. please dont be confuse. if we are to design the app to take different category of the product, the we will use shopcategory as value to the element as we do to the menu */}
        {/* <Route path='/menu' element={<ShopCategory category="menu"/>}/> */}
        <Route path='/menu' element={<Menu />}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/apps' element={<Apps/>}/>
        <Route path='/resources' element={<Resources/>}/>
        <Route path='/videos' element={<Video/>}/>
        <Route path='/others' element={<Others/>}/>
        <Route path='/websitepage' element={<Websitepage/>}/>
        <Route path='/product' element={<Product/>}>  
       
            <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
        
      </Routes>
      <Footer/>
      </BrowserRouter>
     
      
    </div>
  );
}

export default App;
