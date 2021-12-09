import React from 'react';
import'./style.css';
const Footer = (props)=>{
    return (
      <div>
        <div className="Footer fixed-bottom bg-light d-flex justify-content-center align-items-center">
          <div className="p-2">
            © {new Date().getFullYear()}, Made with{" "}
            <i className="fa fa-heart Heart"></i>
            &nbsp;
            <span>by Devstardude</span>
          </div>
        </div>
      </div>
    );
};

export default Footer ;