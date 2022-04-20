import React from "react";
import './footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'





function Footer() {
    return (
        <div>
        <footer className="footer">
            <ul className="footer-links">
                <li>
                    <a className="logo" href='https://github.com/NickBroglio'><i className="fab fa-github"></i></a>
                </li>
                <li>
                    <a className="logo" href='https://www.linkedin.com/in/nick-broglio-88695220a/'><i className="fab fa-linkedin"></i></a>
                </li>
                <li>
                    <a className="logo" href="https://stackoverflow.com/users/18283842/nickbroglio"><i class="fa-brands fa-stack-overflow"></i></a>
                </li>
            </ul>
        </footer>
        </div>
    );
}

export default Footer;