import React from 'react'
import Header from './Navbar'
import Footer from './Footer'


function AboutStefan() {

    return(
        <div>

        <div className='title'>
        <h2>What's a CodePretzel?</h2>
        </div>
       
       <div class="row about">
       <div class="col">
         Photo
       </div>
       <div class="col">
         <h4>Short</h4>
         <br>
         </br>
         <p>A man and his computer!</p>
         <p>My name is Stefan and since I was a little Child I was absest with computers. Computer games, a website toolkid I had it all. This passion helps me delivering the solution in need</p>
       </div>
       <div class="col">
       <h4>Long</h4>
       <p>Born in Bavaria Germany and here with the Coding solution just for you. Full Stack Development, no matter if webside, application or anything in between. </p>
       <br></br>
       <p>With the help of Javascript, React, Bootstrap, Jquery and many</p>
       </div>
     </div>

     </div>
       
    )
}

export default AboutStefan