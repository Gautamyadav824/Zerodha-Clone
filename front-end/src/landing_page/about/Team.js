import React from 'react';

function Team() {
    return ( 
        <div className='container'>
            <div className='row p-5 border-top mt-5 '>
                <h1 className='text-center'>People</h1>
            </div>

            <div className='row text-muted' style={{lineHeight:"1.8", fontSize:"1.2em"}}>
            <div className='col-5 mb-5 text-center   '>
                <img  src='\media\image\nithinKamath.jpg' style={{borderRadius:"100%", width:"60%"}}/>
                <h1 className='mt-4 fs-5'>Nithin Kamath</h1>
                <h6>Founder, CEO</h6>
            </div>
            <div className='col-7    ' style={{width:"46%", fontSize:"1.1rem"}} >
                <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
                <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
                <p>Playing basketball is his zen.</p>
                <p>Connect on <a style={{textDecoration:"none"}} href='#'>Homepage</a> / <a style={{textDecoration:"none"}} href='#'>TradingQnA</a> / <a style={{textDecoration:"none"}} href='#'>TradingQnA</a></p>
            </div>
            </div>
        </div>
     );
}

export default Team;