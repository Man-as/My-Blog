import "./sidebar.css";
import logo from './harsh.copy1.jpeg';

export default function Sidebar() {
  return (
  <div className="sidebar">
      <div className="sidebaritem">
          <span className="sidebartitle">ABOUT ME</span>
          <img src={logo} alt="logo" />
          <p>I am Harsh Shukla. I am an undergraduate student at ABES Engineering College, Ghaziabad.
            I have started this blogging website out of my interest in technology and as a part of my project development.
            Apart from academics and project point of view, I shall keep you all updated with my latest posts and blogs.
          </p>
      </div>
      <div className="sidebaritem">
          <span className="sidebartitle">CATEGORIES</span>
          <ul className="sidebarlist">
              <li className="sidebarlistitem">Life</li>
              <li className="sidebarlistitem">Music</li>
              <li className="sidebarlistitem">Style</li>
              <li className="sidebarlistitem">Tech</li>
          </ul>
      </div>

      <div className="sidebaritem">
          <span className="sidebartitle">FOLLOW US</span>
          <div className="sidebarsocial">
          <i className="sidebaricon fa-brands fa-facebook-square"></i>
          <i className="sidebaricon fa-brands fa-twitter-square"></i>
          <i className="sidebaricon fa-brands fa-pinterest-square"></i>
          <i className="sidebaricon fa-brands fa-instagram-square"></i>
          </div>
      </div>
  </div>
  );
}
