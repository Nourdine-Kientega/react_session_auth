import { useState } from "react";
import HeaderPanelComponent from "../components/HeaderPanelComponent";

const HeaderComponent = () => {

  const [showPanel, setShowPanel] = useState(false);



  return (
    <div className="header-container">
      <header className="header">

        <div className="header-left">
          <div className="logo">
            <a href="/">
              <i className="fa-brands fa-slack"></i>
            </a>
          </div>
          <nav className="nav-links">
            <a href="/">Home</a>
            <a href="/#">About</a>
          </nav>
        </div>

        <div className="header-right">
          <div className="profile">
            <i className="fas fa-user-circle profile-img"></i>
          </div>
          <div className="dropdown">
            <button className="dropdown-btn" onClick={() => setShowPanel(!showPanel)}><i className={ !showPanel ? "fas fa-caret-down" : "fas fa-caret-up" }></i></button>
            {showPanel && (
              <HeaderPanelComponent />
            )}
          </div>
        </div>
      </header>

      <hr className="header-line" />
    </div>

  )
}

export default HeaderComponent;