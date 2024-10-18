import React from 'react';
import LeafletMap from './LeafletMap';

export default function Home () {

    return(
        <main className='main'>
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
        <hr className='hr2'></hr>
        <div className='contenedorpadre'>
        <div className='conthijo'>

            <div className="mapsettings">
                <LeafletMap />
            </div>
        </div>
        </div>
        </main>
       
    );
    
}