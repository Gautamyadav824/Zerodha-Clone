import React from 'react';

function Hero() {
    return ( 
        <div className='container '>
            <div className=' text-center mt-5 p-5 mb-5 pb-5 border-bottom '>
            <h1 >Technology</h1>
            <h3 className='text-muted mt-3 fs-5'> Sleek, modern and intuitive trading platforms</h3>
            <p className='mt-3 '>
                Check out our{" "}
                <a href=''style={{textDecoration:"none"}}>investment offering{" "}  <i class="fa-solid fa-arrow-right"></i></a>
            </p>
            </div>
        </div>
     );
}

export default Hero;