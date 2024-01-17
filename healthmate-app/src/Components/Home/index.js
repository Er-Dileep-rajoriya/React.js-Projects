import React from 'react';
import './index.css';

const Home = () => {
  return (
    <div className='all'>
      <div className="thought">
        <h1 className='thoughthead'>Hello Sunita, we should focus on our wellbeing <br />also, joy and take full advantage within recent memory!</h1>
        <p className='thoughpara'>Here is a basic equation for a solid and blissful life: focus on exercise and yoga,<br /> keep a reasonable eating regimen, and track down satisfaction in your #1 leisure activities and diversion.</p>
      </div>
      <div className='imagecont'>
        <div className='containerdetails'>
          <h1><span className='salubiname'>HealthMate</span> can be your friend in keeping a sound and blissful way of life.</h1>
          <p>Irrespective of age, placing a premium on your health is crucial for illness prevention and longevity promotion. Aging often brings a weakened immune system, rendering one more susceptible to infections. It becomes imperative to adopt a healthy lifestyle to fortify your immune system and diminish the likelihood of falling prey to illnesses. By prioritizing your well-being, you pave the way for a vibrant and content life, regardless of the number of candles on your birthday cake.</p>
        </div>
        <img className='image' alt='' src='https://shorturl.at/cnrCJ' />
      </div>
      <div className='tips'>
        <h2>Nine Hints to Remain Sound All year</h2>
        <ol>
          <li>Regular Exercise: Stay active daily.</li>
          <li>Balanced Diet: Include fruits, vegetables, lean proteins, and whole grains.</li>
          <li>Hydration: Drink enough water daily.</li>
          <li>Adequate Sleep: Aim for 7-9 hours per night.</li>
          <li>Stress Management: Practice techniques like meditation or deep breathing.</li>
          <li>Health Check-ups: Schedule regular screenings.</li>
          <li>Hand Hygiene: Wash hands regularly.</li>
          <li>Sun Protection: Use sunscreen and protective clothing.</li>
          <li>Social Connections: Foster positive relationships.</li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
