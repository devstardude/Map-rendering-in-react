import React from "react";

const Header = (props) => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid d-flex justify-content-center">
          <span className="navbar-brand mb-0 h1 p-2">
            🗺️ Render MAP in React app
          </span>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Header;
