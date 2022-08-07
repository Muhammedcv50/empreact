import '../styles/style.css';
import icon from '../assets/Group 18536@2x.png';


const NavBar = () => { 
    return (
      <aside id="nav">
         <div id ="tab" >
            <div id="icon">
            <img src={icon} alt="e" />
            </div>
            <div id="emplist">
                Employee List
            </div>
         </div>
        </aside>
    );
};
export default NavBar;