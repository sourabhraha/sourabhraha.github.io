import React from 'react'
import './home.css';
import Header from '../header';
import Body from '../body';
import Footer from '../footer';

function Home() {
    return(
        <React.Fragment>
        <div className = "home">
            <Header />
        </div>

        <div className = "home">
            <Body />
        </div>

        <div className = "home">
             <Footer />
        </div>
        </React.Fragment>
    )      
    
}

export default Home;
