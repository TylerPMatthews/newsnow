import React from 'react';
import {Link} from 'react-router-dom';
import Search from '../Search';
const Header = () => {
    return(
        <div>
            <header>
                <nav>
                    <Search />
                
                </nav>
            </header>
        </div>
    )
}
export default Header;