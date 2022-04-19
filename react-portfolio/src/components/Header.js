import React from "react";
import Navbar from "./NavBar";

function Header({children}){
    return(
        <div className='headerName'>

            {children}
        </div>
      );
}


export default Header;