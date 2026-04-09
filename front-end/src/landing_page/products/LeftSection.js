import React from 'react';

function LeftSection({imageURL, productName, productDescription, tryDemo, learnMore, googlePlay, appStore, coin}) {
    return ( 
        <div className='container '>
            <div className='row'>
                
                <div className='col-6 p-5' >
                    <img style={{width:"80%"}} src={imageURL}/>
                </div>
                
                <div className='col-6 p-5  mt-5 fs-5 text-muted' >
                  <h1 style={{fontSize:"1.8rem", color:"#3d3d3d"}}>{productName}</h1> 
                  <p className='mt-4 ' style={{width:"70%"}}>{productDescription}</p>
                  <div className='mb-4 mt-4'>
                  <a href={tryDemo} style={{textDecoration:"none"}}>Try Demo <i class="fa-solid fa-arrow-right"></i></a>
                  <a href={learnMore} style={{marginLeft:"60px", textDecoration:"none"}}>Learn More <i class="fa-solid fa-arrow-right"></i></a>

                  </div>
                  <div className='mt-3'>
                  <a href={googlePlay} style={{marginRight:"20px"}}><img src='media\image\googlePlayBadge.svg'></img></a>
                  <a href={appStore}><img src='media\image\appstoreBadge.svg'></img></a>
                  </div>
                </div>
            </div>
        </div>
     );
}

export default LeftSection;