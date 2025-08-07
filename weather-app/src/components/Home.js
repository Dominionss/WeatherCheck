import React from 'react';
import logo from '../assets/images/cloud.png';


function Home() {

    return(
        <div>
            <h1>Home page</h1>

            <p>Cloud picture</p>
            <img src={logo} alt="logo" width={300}/>

        </div>
    );
}

export default Home;