import "./settings.css";
import Sidebar from "../../components/sidebar/Sidebar";

export default function Settings() {
  return (
  <div className="settings"> 
        <div className="settingswrapper">
            <div className="settingstitle">
                <span className="settingsupdatetitle">
                    Update your Account
                </span>
                <span className="settingsdeletetitle">
                    Delete Account
                </span>
            </div>
            <form className="settingsform">
                <label>Portfolio picture</label>
                <div className="settingspp">
                    <img src="https://daniellemareeblog.files.wordpress.com/2018/08/blog-welcome1.jpg" alt="" />
                    <label htmlFor="fileinput">
                    <i className="settingsppicon fa-solid fa-user"></i>
                    </label>
                    <input type="file" id="fileinput" style={{display: "none"}}/>
                </div>
                <label>Username</label>
                <input type="text" placeholder="Nishtha"/>
                <label>Email</label>
                <input type="email" placeholder="nishtha@gmail.com"/>
                <label>Password</label>
                <input type="password"/>
                <button className="settingssubmit">Update</button>
            </form>
        </div>
        <Sidebar/>
  </div>
  );
}
