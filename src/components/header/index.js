import React, {useState} from 'react';
import './header.css';
import Mobile from './mobile';
import Web from './web';


function Header() {
    const [isOpen, setIsOpen] = useState(false);                 // React Hooks
    return (
        <React.Fragment>

        <div className = "header">
           <div className = "logo"> Sourabh Raha </div>
           <div className = "menu"> 
           
                <div className = "web-menu">
                    <Web />
                </div>

                <div className = "mobile-menu">
                    <div onClick = {() => setIsOpen(!isOpen)}>
                        <i class="fi-rr-apps menu-icon"></i>
                    </div>

                    <div>
                    {
                        isOpen && <Mobile
                         isOpen = {isOpen} 
                         setIsOpen = {setIsOpen}
                    />
                    }
                    </div>
                </div>

           </div>
        </div>

        </React.Fragment>
    )
}

export default Header;
