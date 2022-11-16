import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css';
import './Style/normalizar.css';
import './Style/mobile-320-480.css';
import './Style/768ancho.css';

function App() {


  useEffect(() => {
    
    const days = document.querySelector('#days');
    const horas = document.querySelector('#horas');
    const min = document.querySelector('#min');
    const sec = document.querySelector('#sec');

    const newYear = "20 Nov 2022";

    function countTimer (){
      const newYearDate = new Date(newYear);
      const currentDate = new Date();

      const totalSeconds = (newYearDate - currentDate) / 1000;

      const daysCalc = Math.floor(totalSeconds / 3600 / 24);
      const hoursCalc = Math.floor(totalSeconds / 3600 ) % 24;
      const minCalc = Math.floor(totalSeconds / 60) % 60;
      const secCalc = Math.floor(totalSeconds % 60);

      days.innerHTML = daysCalc;
      horas.innerHTML = hoursCalc;
      min.innerHTML = minCalc;
      sec.innerHTML = secCalc;
    }

    countTimer()

    setInterval(countTimer, 1000);

  }, [])

  return (
    <div className="App">
      <div className='title'>
        <h1>¡Vive la pasión del mundial Qatar 2022!</h1>
      </div>
      <div className='container-counter'>
        <div className='container-days'>
          <span>Dias</span>
          <p className='big-days' id='days'>99</p>
        </div>
        <div className='container-time'>
          <div className='container-time-item'>
            <p className='big-time' id='horas'>23</p>
            <span>Horas</span>
          </div>
          <div className='container-time-item'>
            <p className='big-time' id='min'>12</p>
            <span>Minutos</span>
          </div>
          <div className='container-time-item'>
            <p className='big-time' id='sec'>12</p>
            <span>Segundos</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
