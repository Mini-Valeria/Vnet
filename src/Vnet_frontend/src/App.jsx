import { useState } from 'react';
import { Vnet_backend } from 'declarations/Vnet_backend';
import { AuthButton } from '@bundly/ic-react';

<style>@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&display=swap');</style>

function App() {
  const [greeting, setGreeting] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    const name = event.target.elements.name.value;
    Vnet_backend.greet(name).then((greeting) => {
      setGreeting(greeting);
    });
    return false;
  }

  return (
    <div className='p'>
      <meta name='viewport' content='widht=device-widht, initial-scale=1.0'></meta>
      <header className='header'>
        
      <div className='logo'>
      <img className='logoimg' src='./src/assets/images/logoimg.png'></img>
      
      
      </div>

          <nav>
              <a href='#' className='navlink'>S.O.S</a>
              <a href='#' className='navlink '>Login</a>
              <a href='#' className='navlink '>About</a>
              <a href='#' className='navlink '>Account</a>
          </nav>
        </header>
        <hr className='hr'></hr>
        <div className='contenedorpadre'>
        <div className='conthijo'>
        <div className='contlabel'>
          <h1>Vnet</h1>
        <p >Ingresa tu destino</p>
          <input type='text' placeholder='Ubicacion'  className='textin'></input>
          <a href='map.jsx' className='botin' target = 'map.html'>🔍</a>
        </div>
        </div>
        
        <hr className='hr'></hr>
        </div>
        
   </div>
  );
}

export default App;
