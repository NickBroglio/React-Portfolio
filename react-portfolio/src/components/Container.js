import React, { useState } from "react";
import Navbar from "./NavBar";
import Home from "./pages/Home";
import Form from "./pages/Form";
import Portfolio from "./pages/Portfolio";
import Resume from  "./pages/Resume";
import Footer from "./Footer";

export default function PageContainer() {
    const [currentPage, setCurrentPage] = useState('Home');

    const renderPage = () => {
        if(currentPage === 'Home') {
            return <Home />;
        }
        if(currentPage === 'Portfolio') {
            return <Portfolio />;
        }
        if(currentPage === 'Form') {
            return <Form />;
        }
        return <Resume />
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return(
        <div>
            <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
            <div 
            style={{
            backgroundImage: 'url(/start.jpg)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            height: '100vh'
        }}
        >
            {renderPage()}
            </div>
<div><Footer /></div>
        </div>
    );
}