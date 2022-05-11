import React from 'react';
import './App.css';
import twitter from './assets/twitter.png'
import linkedin from './assets/linkedin.png'

function App() {
  const fullname = "Lukmon Abdulsalam"
 const TwitterUsername = "https://twitter.com/litmus13lukman"
const Linkedin = "https://www.linkedin.com/in/lukmon-abdulsalam/"
  
  return (
    <main>
      <div className='Info'>
      <div className= 'image'>
      <img src='https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80' alt={fullname} />
      </div>
        <div className='personal'>
        <h1>{fullname}</h1>
          <div className='title'>
          <p>Software Engineer</p>
            <div className='socials'>
              <a href={TwitterUsername} target='_blank'>
            <img src={twitter} alt='twitter'/>
              </a>
              <a href={Linkedin} target='_blank'>   
            <img src={linkedin} alt='linkedin'/>
              </a>
            </div>
          </div>
          <p>I am a Software engineer with flair for blockchain development, you can drop your recommendation here about what you think i should improve on. Ciao from Litmus😎</p>
        </div>
      </div>
<div className='textarea'>
  
  <h2>You need to connect your wallet before you can send a message</h2>
<button className='button-cta'> Connect Wallet </button>
</div>
      
    </main>
  );
}

export default App;