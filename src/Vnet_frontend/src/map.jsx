import React from 'react';
import LeafletMap from './LeafletMap';

export default function Map () {

    return(
        <main className='mapcontai'>
            <header className='header'>
        
        <div className='logo'>
        <img className='logoimg' src='/src/imgs/png.png'></img>
        </div>
  
            <nav>
                <a href="javascript: history.go(-1)" className='navlink'>◀</a>
                <a href='https://www.aguascalientes.gob.mx/estado/emergencias.html' className='navlink'>Eᴍᴇʀɢᴇɴᴄɪᴀ</a>
                <a href='https://identity.ic0.app/' className='navlink'>Lᴏɢɪɴ</a>
                <a href='#' className='navlink '>Aʙᴏᴜᴛ</a>
            </nav>
  
          </header>

    <div className="mapsettings">
        <LeafletMap />
    </div>
        </main>
       
    );
    
}