import React from "react";


function ServiceContent(){

        function smoothScroll(e) {
          
            let scroll = document.getElementById("bottom");
            e.preventDefault();  // Stop Page Reloading
            scroll && scroll.scrollIntoView({behavior:'smooth'});
        }
      
      


    return(
        <div class="container text-center">
  <div className="serviceBox"> 
  <h1>A Solution for every need.</h1><br></br>
  <p>Offering Full Stack Web Development to get the maximum out of your web presents.</p><br></br>
  <p >If Webpage, Webapplication, desktop app, etc. we got you covered. With percicse service that offers quality and quick solution.</p> 
  <svg  onClick={smoothScroll} stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" class="divider__arrow" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path  fill-rule="evenodd" d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z"></path></svg>
  </div>
  

<div className='serviceBox'>
<a href="./contact"><h1>Get started now and get in touch!</h1></a>
<br>
</br>
<div class="row ">
    <div class="col">
    <i class="fab fa-html5 fa-3x"></i>
    </div>
    <div class="col">
    <i class="fa-brands fa-css3-alt fa-3x"></i>
    </div>
    <div class="col">
    <i class="fa-brands fa-js fa-3x"></i>
    </div>
    <div class="col">
    <i class="fa-brands fa-react fa-3x"></i>
    </div>
  </div>
  <br></br>

  <div id='bottom'class="row">
    <div class="col">
    <i class="fab fa-node-js fa-3x"></i>
    </div>
    <div class="col">
    <i class="fas fa-database fa-3x"></i>
    </div>
    <div class="col">
    <i class="fas fa-terminal fa-3x"></i>
    </div>
    <div class="col">
    <i class="fab fa-git fa-3x"></i>
    </div>
    </div>

  </div>


</div>

    )
}

export default ServiceContent