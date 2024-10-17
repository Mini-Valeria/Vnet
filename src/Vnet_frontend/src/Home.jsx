import React from 'react';
import LeafletMap from './LeafletMap';

export default function Home () {

    return(
        <main className='mapcontai'>
            <header className='header'>
        
        <div className='logo'>
        <img className='logoimg' src='/src/imgs/logoimg.png'></img>
        
        
        </div>
  
            <nav>
                <a href='#' className='navlink'>S.O.S</a>
                <a href='/login' className='navlink '>login</a>
                <a href='#' className='navlink '>About</a>
                <a href='#' className='navlink '>Account</a>
            </nav>
          </header>

<div className="mapsettings">
      
      <LeafletMap />
    </div>
        </main>
       
    );
    
}