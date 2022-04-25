import "./topbar.css"
import logo from './Manvi.jpeg'
import { Link } from "react-router-dom";

export default function Topbar() {
    const user = false;
  return <div className='top'>
      <div className="topLeft">
      <i className="topicon fa-brands fa-facebook-square"></i>
      <i className="topicon fa-brands fa-twitter-square"></i>
      <i className="topicon fa-brands fa-pinterest-square"></i>
      <i className="topicon fa-brands fa-instagram-square"></i>
      </div>
      <div className="topCenter">
          <ul className="toplist">
              <li className="toplistitem">
                  <Link className="link" to="/">HOME</Link>
                  </li>
              <li className="toplistitem"><Link className="link" to="/">ABOUT</Link></li>
              <li className="toplistitem"><Link className="link" to="/">CONTACT</Link></li>
              <li className="toplistitem"><Link className="link" to="/write">WRITE</Link></li>
              <li className="toplistitem">
                  {user && "LOGOUT"}
                  </li>
          </ul>
      </div>
      <div className="topRight">
          {
              user ? (
                <img className="topimg" src={logo} alt="logo" />
              ): (
                <ul className="toplist">
                    <li className="toplistitem">
                  <Link className="link" to="/login">
                      LOGIN
                  </Link>
                  </li>
                  <li className="toplistitem">
                  <Link className="link" to="/register">
                      REGISTER
                  </Link>
                  </li>
                  </ul>
              )}
      
      <i className="topsearchicon fa-solid fa-magnifying-glass"></i>
      </div>
  </div>;
}
