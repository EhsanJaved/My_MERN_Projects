import './App.css';
// import PublicPage from './components/PublicPage';
// import { BrowserRouter as Router, Switch, Route, Redirect,} from "react-router-dom";
import mainLogo from'./iconsAndImages/logoHN.png';
// import MenuBar from './components/MenuBar';
import PublicPage from './components/PublicPage';
// import LoginPage from './components/LoginPage'
function App(){
  return(
  <>
  <PublicPage/>
    {/* <MenuBar Logo={mainLogo} /> */}
{/* <LoginPage Logo={mainLogo}/> */}
  </>
  );
}

export default App;
