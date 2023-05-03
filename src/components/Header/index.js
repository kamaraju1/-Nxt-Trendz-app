// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <div className="header">
    <img
      className="header-image"
      src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png "
      alt=" website logo"
    />
    <nav>
      <ul className="list-items">
        <Link to="/" className="link-item">
          <li className="home">Home</li>
        </Link>
        <Link to="/products" className="link-item">
          <li className="home">Products</li>
        </Link>
        <Link to="/cart" className="link-item">
          <li className="home">Cart</li>
        </Link>
        <li>
          <button type="button" className="login-button">
            Logout
          </button>
        </li>
      </ul>
    </nav>
  </div>
)

export default Header
