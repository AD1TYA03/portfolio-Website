
import './App.css';
import Typical from 'react-typical'
import {useState} from 'react'
import React from 'react';
import portfolio from './components/portfolio';
import Cards from './components/cards';

function App() {
  const [screen,currentScreen] = useState("home");
 
  if(screen==="home")
  return (
    <div className="app">
    
    <div className='profilePic'></div>
    <div className='intro'>
      <h1 className='name'>
      I'M ADITYA KUMAR SINGH</h1>
      <h1 className='role'><Typical
        steps={['CODER 🧑‍💻', 1000, 'WEB DEVLOPER 💻', 1000,'GEEK 😎',1000]}
        loop={Infinity}
        wrapper="p"
      /></h1>
      <p className='details'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 

</p>
      <li className='about'><button onClick={() => currentScreen("about")}>MORE ABOUT ME</button></li>
    </div>

<div className='navBar'>
      <ul>
        <li><button  onClick={() => currentScreen("home")}>HOME</button></li>
          <li><button onClick={() => currentScreen("about")} >ABOUT</button></li>
        <li><button onClick={() => currentScreen("portfolio")}>PORTFOLIO</button></li>
        <li><button onClick={() => currentScreen("contact")}>CONTACT</button></li>
      </ul>
    </div>
    </div>
  );

  if(screen==="about")
  return(
   <div className='about'>
   <div className='heading'>
   <h1 className='title-bg'>RESUME</h1>
<h1 className='space'>ABOUT</h1>
<h1 className='col'>ME</h1>

</div>





<div className='navBar'>
      <ul>
        <li><button  onClick={() => currentScreen("home")}>HOME</button></li>
          <li><button onClick={() => currentScreen("about")} >ABOUT</button></li>
        <li><button onClick={() => currentScreen("portfolio")}>PORTFOLIO</button></li>
        <li><button onClick={() => currentScreen("contact")}>CONTACT</button></li>
      </ul>
  
    </div>
     </div>
  );
  if(screen==="portfolio")
  return(
   <div className='portfolio'>


<div className='heading'>
   <h1 className='title-bg'>WORKS</h1>
<h1>MY</h1>
<h1 className='col'>PORTFOLIO</h1>



</div>


{portfolio.map( cardItem =>
      <Cards
   key ={cardItem.key}
    title = {cardItem.title}
    image={cardItem.image}

  />)

    }
  
<div className='navBar'>
      <ul>
        <li><button  onClick={() => currentScreen("home")}>HOME</button></li>
          <li><button onClick={() => currentScreen("about")} >ABOUT</button></li>
        <li><button onClick={() => currentScreen("portfolio")}>PORTFOLIO</button></li>
        <li><button onClick={() => currentScreen("contact")}>CONTACT</button></li>
      </ul>
   
    </div>
   </div>
  );
  if(screen==="contact")
  return(
   <div className='contact'>
   <div className='heading'>
   <h1 className='title-bg'>CONTACT</h1>
<h1>GET IN</h1>
<h1 className='col'>TOUCH</h1>

</div>


<div className='navBar'>
      <ul>
        <li><button  onClick={() => currentScreen("home")}>HOME</button></li>
          <li><button onClick={() => currentScreen("about")} >ABOUT</button></li>
        <li><button onClick={() => currentScreen("portfolio")}>PORTFOLIO</button></li>
        <li><button onClick={() => currentScreen("contact")}>CONTACT</button></li>
      </ul>
   
    </div>
   </div>
  );
}

export default App;
