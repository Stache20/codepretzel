import React from 'react'
import CodePretzel from './CodePretzelLogo'

function Home() {

    return(
        <div className='coverPage'>
        <main role="main" className="inner cover text-center">
        <div >
       <CodePretzel height='300px' weight='300px' />
       </div>
       <br></br>
       <br></br>
        <h1 className="cover-heading">Full-Stack Web Development</h1>
    <br></br>
    <div className='container'>
    <div className='row justify-content-md-center'>
    <div className='col col-lg-2 align-self-center'>
        <p className="lead">
          <a href="/about" class="btn btn-lg btn-dark">About</a>
        </p>
</div>
<div className='col-md-auto align-self-center'>
        <p className="lead">
          <a href="/services" class="btn btn-lg btn-dark">Services</a>
        </p>
</div>
<div className='col col-lg-2 align-self-center'>
        <p className="lead">
          <a href="/contact" class="btn btn-lg btn-dark">Contact</a>
        </p>
</div>
        </div>
</div>

      </main>
</div>
    )
}

export default Home