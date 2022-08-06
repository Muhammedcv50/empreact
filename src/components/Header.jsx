import logo from '../assets/kv logo@2x.png'
import '../styles/style.css'
const Header = () => { 
    return (
      <header>
         <div id ="logo" >
         <img id="logo1" src={logo} alt="logo"/>
         </div>
        </header>
    );
};
export default Header;