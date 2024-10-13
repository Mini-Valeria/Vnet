import { useState } from 'react';
import { Vnet_backend } from 'declarations/Vnet_backend';

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
    <div>
        <div className='navvar'>
        <nav>
        <img className='imglogo'src='https://imgs.search.brave.com/sdyfCwfg9itX4Xw_DLJO-0WcI4Hk73zlt3ROH-lyJfY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2YxLzM0/L2IzL2YxMzRiM2Y5/ZTFlOWZkZjI3ZDQy/NjlhYmYyNWQwZmJi/LmpwZw'></img>
        <input type="button" value="S.O,S" className='sosb'></input>
        <input type="button" value="ICP LOGIN" className='loginb'></input>
        </nav>
        </div>
      
        <hr></hr>

        <div className='graycont'>
          <h2 className='enca'>VNET </h2>
          <br></br>
          <br></br>
         <p className='pvnet'>A donde quieres ir hoy?</p>
         <input typeof='text' placeholder='Ubicacion' className='botonubicacion'></input>
        </div>








    </div>
  );
}

export default App;
