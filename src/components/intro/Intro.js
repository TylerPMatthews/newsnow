import React from 'react';
import { Link } from 'react-router-dom';

const Intro = () => {
    return(
        <div>
            <h2>Welcome to Speed News</h2>
            <p>Get the most up to date news, without the ads and slow laod times!</p>
            <Link to='/home'>Home</Link>
        </div>
    )
}
export default Intro;