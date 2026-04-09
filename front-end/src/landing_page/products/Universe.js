import React from 'react';

function Universe() {
    return ( 
        <div className='container '>
            <div className='row text-center '>
                <h1 style={{fontSize:"1.5rem", lineHeight:"1.5",color:"#4a4a4a" }} className='mt-5'>The Zerodha Universe</h1>
                <p style={{fontSize:"1.1rem", lineHeight:"1.8" }} className='mt-1'>Extend your trading and investment experience even further with our partner platforms</p>

                <div className='col-4 p-3 mt-4'>
                    <img style={{width:"50%"}} src='media\image\smallcaseLogo.png'></img>
                    <p style={{fontSize:"0.9rem"}} className='text-muted text-small mt-2'>Thematic investing platform </p>
                </div>
                <div className='col-4 p-3 mt-4'>
                    <img style={{width:"50%"}} src='media\image\zerodhaFundhouse.png'></img>
                    <p style={{fontSize:"0.9rem"}} className='text-muted text-small mt-2'>Assest management</p>
                </div>
                <div className='col-4 p-3 mt-4'>
                    <img style={{width:"50%"}} src='media\image\sensibullLogo.svg'></img>
                    <p style={{fontSize:"0.9rem"}} className='text-muted text-small mt-2'>option trading platform </p>
                </div>
                <div className='col-4 p-3 mt-4'>
                    <img style={{width:"50%"}} src='media\image\streakLogo.png'></img>
                    <p style={{fontSize:"0.9rem"}} className='text-muted text-small mt-2'>Algo & strategy platform </p>
                </div>
                <div className='col-4 p-3 mt-4'>
                    <img style={{width:"35%"}} src='media\image\dittoLogo.png'></img>
                    <p style={{fontSize:"0.9rem"}} className='text-muted text-small mt-2'>Insurance</p>
                </div>
                <div className='col-4 p-3 mt-4 '>
                    <img style={{width:"50%"}} src='media\image\goldenpiLogo.png'></img>
                    <p style={{fontSize:"0.9rem"}} className='text-muted text-small mt-2'>Bonds trading platform </p>
                </div>

                <button className='p-2 btn btn-primary fs-6 mb-5 ' style={{width: "15%", margin: "0 auto"}}>Signup for free</button>
            </div>
        </div>
     );
}

export default Universe;