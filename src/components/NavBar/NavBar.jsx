import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import './NavBar.css'

export default function NavBar({ user, setUser, showCart, setShowCart }) {
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
            {/* TODO: create cart button that shows and hides Cart Order Component */}
          </ul>
        </div>
        <div className="navbar-user">
          <ul>
            <li><button onClick={() => setShowCart(!showCart)}>{showCart ? "HIDE" : "SHOW"}</button></li>
            <li><span>Welcome, {user.name}</span></li>
            <li><Link to="" onClick={handleLogOut}>Log Out</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}