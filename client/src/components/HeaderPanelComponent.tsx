import React from 'react'

const HeaderPanelComponent = () => {
  return (
    <div className="user-panel">
    <div className="card">
      <i className="fas fa-user-circle user-icon"></i>
      <h3 className="username">John Doe</h3>
      <button className="btn-logout">Logout</button>
    </div>
  </div>
  )
}

export default HeaderPanelComponent;