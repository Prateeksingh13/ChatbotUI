import React from 'react';
import robot from './robot.png'

const Chatbot = () => {
    return(
        <>
        <body>
        <input type="checkbox" id="click"></input>
         <label for="click">
        </label>
        <div class="wrapper">
         <div class="head-text">
            IRIS<br></br>
            Hello 👋<br></br>
            I am Iris, a Virtual Assistant<br></br>
            How may I help
         </div>
         <div class="chat-box">
            <form action="#">
            <img class="icon" src={robot}/>
               <div class="out">Frequently Asked Question?</div>
               <div class="firstline">
                 <button><h2>Can I redeem my FB before the original term?</h2></button>
               </div>
               <div class="firstline">
                  <button type="submit">do I pay my Credit Card bill?</button>
                </div>
                <div class="firstline">
                  <button type="submit">How can I get my Account Statement?</button>
                </div>
                <div class="firstline">
                  <button type="submit" >What is the tenure of Fixed Deposit?</button>
                </div>
               <div class="chat-start">
                  <button type="submit"> 💬 Start New Conversation</button>
               </div>
            </form>
         </div>
      </div>
      </body>
    </>
    )
}


export default Chatbot;