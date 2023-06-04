import './App.css';
import {Route, Routes} from "react-router-dom";
import logo from'./iconsAndImages/LogoDentail.svg';
import MenuBar from './components/MenuBar';
import Costumerslist from './components/CostumersList';
import Feedbacks from './components/Feedbacks';
import Products from './components/Products';
import Orders from './components/Orders';
import InvoiceMaker from './components/InvoiceMaker2';
import Records from './components/Records';
import HomeProducts from './components/HomeNew'
import LoginPage from './components/LoginPage'
import CarouselOne from './iconsAndImages/carouselOne.jpg';
import CarouselTwo from './iconsAndImages/carouselTwo.jpg';
import CarouselThree from './iconsAndImages/carouselThree.jpg';
import Main from './components/Page3/Main'
import Signup from './components/SignupPage'

// images
import pro1 from "./iconsAndImages/product11.jpg";
// import MainLogo from'./iconsAndImages/LogoHN.png';
// import MainLogo from'./iconsAndImages/logo.jpg';

function App(){
  return(
    <>
    {/* <Main/> */}
<Routes>
  {/* <Route exact  path='/' element={<PublicPage/>} /> */}
<Route exact  path='/' element={<Main
 cr1={CarouselOne} cr2={CarouselTwo} cr3={CarouselThree} logo={logo} imgg={pro1} />} />
  <Route exact  path='/login' element={<LoginPage logo={logo}/>} />
  <Route exact  path='/signup' element={<Signup logo={logo}/>} />
    <Route exact  path='/dashboard' element={<MenuBar logo={logo}/>}>
        <Route exact  path='/dashboard/costumersList' element={<Costumerslist/>} />
        <Route exact  path='/dashboard/feeds' element={<Feedbacks/>} />
        <Route exact  path='/dashboard/home' element={<HomeProducts/>} />
        <Route exact  path='/dashboard/products' element={<Products/>} />
        <Route exact  path='/dashboard/orders' element={<Orders/>} />
        <Route exact  path='/dashboard/invoiceMaker' element={<InvoiceMaker/>} />
        <Route exact  path='/dashboard/records' element={<Records/>} />
    </Route>
  </Routes>
  </>
  );
}

export default App;
