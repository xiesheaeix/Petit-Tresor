import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import './NavBar.css'
import {AiOutlineShoppingCart} from 'react-icons/ai'

export default function NavBar({ setUser, showCart, setShowCart }) {

  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav>
      <div className="navbar">
        <div className='nav-links'>
          <ul>
            <li><Link to="/orders/new">Home</Link></li>
            <li><Link to="/orders">Past Orders</Link></li>
          </ul>
        </div>
        <div className="navbar-user">
          <ul>
            <li><button onClick={() => setShowCart(!showCart)}><AiOutlineShoppingCart/></button></li>
            <li><Link to="" onClick={handleLogOut}>Log Out</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}