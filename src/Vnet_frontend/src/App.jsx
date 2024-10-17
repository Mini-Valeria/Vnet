import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';


export default function App() {
  

  return(
    <main>
      <div className='p'>
      <meta name='viewport' content='widht=device-widht, initial-scale=1.0'></meta>
      <header className='header'>
        
      <div className='logo'>
      <img className='logoimg' src='./src/assets/images/logoimg.png'></img>
      
      
      </div>

          <nav>
              <a href='/sos' className='navlink'>S.O.S</a>
              <a href='https://identity.ic0.app/' className='navlink '>login</a>
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
        <Form>
        <Form.Control type='email' placeholder='Ubicacion' />
    </Form>
    <br></br>
          <a href='/Home' className='botin'></a>
        </div>
        </div>
        
        <hr className='hr'></hr>
        </div>
        
   </div>

    </main>
  )
  


}

  