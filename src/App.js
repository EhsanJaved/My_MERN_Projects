import './App.css';
import {Route, Routes} from "react-router-dom";
import MenuBar from './components/MenuBar';
import Costumerslist from './components/CostumersList';
import Feedbacks from './components/Feedbacks';
import Products from './components/Products';
import Orders from './components/Orders';
import InvoiceMaker from './components/InvoiceMaker2';
import Records from './components/Records';
import HomeProducts from './components/HomeNew'
import LoginPage from './components/LoginPage'
import Main from './components/Page3/Main'
import Signup from './components/SignupPage'
import Images from './components/Images.component';
import logo from'./iconsAndImages/LogoDentail.svg';
import pro1 from "./iconsAndImages/product11.jpg";
// import MainLogo from'./iconsAndImages/HN_Dental.png';
import MainLogo from'./iconsAndImages/HN_Dental_BG.png';
import MainLogo2 from'./iconsAndImages/HN_Dental.svg';
import CarouselOne from './iconsAndImages/carouselOne.jpg';
import CarouselTwo from './iconsAndImages/carouselTwo.jpg';
import CarouselThree from './iconsAndImages/carouselThree.jpg';

function App(){
  return(
    <>
<Routes>
  
<Route exact  path='/' element={<Main
 cr1={CarouselOne} cr2={CarouselTwo} cr3={CarouselThree} logo={MainLogo} imgg={pro1} />} />
 {/* <Footer/> */}
  <Route exact  path='/login' element={<LoginPage logo={MainLogo}/>} />
  <Route exact  path='/signup' element={<Signup logo={MainLogo}/>} />
    <Route exact  path='/dashboard' element={<MenuBar logo={MainLogo}/>}>
        <Route exact  path='/dashboard/costumersList' element={<Costumerslist/>} />
        <Route exact  path='/dashboard/images' element={<Images crz={CarouselOne} icon={MainLogo}/>} />
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
