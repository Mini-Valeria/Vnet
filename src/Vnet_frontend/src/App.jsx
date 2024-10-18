import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';

export default function App() {
  return(
    <main>
      <div className='p'>
      <meta name='viewport' content='widht=device-widht, initial-scale=1.0'></meta>
      <header className='header'>
        
      <div className='logo'>
      <img className='logoimg' src='/src/imgs/png.png'></img>
      </div>

          <nav>
              <a href="javascript: history.go(-1)" className='navlink'>◀</a>
              <a href='/sos' className='navlink'>S.O.S</a>
              <a href='https://identity.ic0.app/' className='navlink'>Login</a>
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
        <Form.Control placeholder='Ubicacion' />
    </Form>
    <br></br>
          <a href='/Home' type='Submit' className='botin'>🔍</a>
        </div>
        </div>
        
        <hr className='hr'></hr>
        <div className='contlabel2'>
        <h3 className='h3'>Recientes</h3>
        <p className='p1'>Feedbacks</p>
        <hr className='hr' />
        
        <div className='contlabel2'>
          <div className='contBox'>
            <div className='card' src='./imgs/background.jpg'>
              <div className='textos'>
              <h5>Ubicación 1</h5>
              <p>Descripción</p>
              </div>
          </div>

          <div className='card'>
              <div className='textos'>
              <h5>Ubicación 2</h5>
              <p>Descripción</p>
              </div>
          </div>

          <div className='card'>
              <div className='textos'>
              <h5>Ubicación 3</h5>
              <p>Descripción</p>
              </div>
          </div>

          <div className='card'>
              <div className='textos'>
              <h5>Ubicación 4</h5>
              <p>Descripción</p>
              </div>
          </div>
        </div>
        
        </div>
        <br></br>
          </div>
        </div>
   </div>

    </main>
  )
}