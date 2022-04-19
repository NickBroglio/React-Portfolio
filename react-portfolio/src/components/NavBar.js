import React from 'react';
// import { Link } from 'react-router-dom';
import './navBar.css'


function Navbar({ currentPage, handlePageChange }) {
  return (
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand title" href="#">React Portfolio</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav navLinks">
      <li class="nav-item active">
        <a 
        class="nav-link"
        onClick={() => handlePageChange('Home')}
        className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
        >Home
        </a>
      </li>
      <li class="nav-item">
        <a 
        class="nav-link" 
        onClick={() => handlePageChange('Portfolio')}
        className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
        >Portfolio
        </a>
      </li>
      <li class="nav-item">
        <a 
        class="nav-link" 
        onClick={() => handlePageChange('Form')}
        className={currentPage === 'Form' ? 'nav-link active' : 'nav-link'}
        >Contact
        </a>
      </li>
      <li class="nav-item">
        <a 
        class="nav-link disabled" 
        onClick={() => handlePageChange('Resume')}
        className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
        >Resume
        </a>
      </li>
    </ul>
  </div>
</nav>
  );
}

export default Navbar;