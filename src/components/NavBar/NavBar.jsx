import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import './NavBar.css'

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav>
      <div className="navbar">
        <ul>
          <li><Link to="/orders/new">Home</Link></li>
          <li><Link to="/orders">Past Orders</Link></li>
          {/* TODO: create cart button that shows and hides Cart Order Component */}
          <li><Link to="/">Cart</Link></li>
        </ul>
        <div className="navbar-user">
          <span>Welcome, {user.name}</span>
          &nbsp;&nbsp;
          <Link to="" onClick={handleLogOut}>Log Out</Link>
        </div>
      </div>
    </nav>
  );
}