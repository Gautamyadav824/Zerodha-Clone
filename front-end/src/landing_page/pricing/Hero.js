import React from 'react';

function Hero() {
    return ( 
       <div className='container'>
        <div className='row p-5 mt-5 border-bottom text-center'>
            <h1>Pricing</h1>
            <h3 className='text-muted fs-5 mt-3'>Free equity investments and flat ₹20 traday and F&Q trades </h3>

        </div>
        <div className='row p-5 mt-5  text-center'>
            <div className='col-4'>
                <img style={{width:"70%"}} src='media\image\pricing0.svg'/>
                <h1 className='fs-2 '>
                    Free equity delivery
                </h1 >
                <p className=' text-muted mt-4' style={{fontSize:"1.1rem", width:"90%"}}>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage</p>
            </div>
            <div className='col-4'>
                <img style={{width:"70%"}} src='media\image\intradayTrades.svg'/>
                <h1 className='fs-2 '>
                    Intraday and F&O trades 
                </h1>
                <p  className=' text-muted mt-4' style={{fontSize:"1.1rem", width:"90%"}}>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
            </div>
            <div className='col-4'> 
                <img style={{width:"70%"}} src='media\image\pricing0.svg'/>
                <h1 className='fs-2 '>
                    Free direct MF
                </h1>
                <p  className=' text-muted mt-4' style={{fontSize:"1.1rem", width:"90%"}}>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
            </div>
        </div>
       </div>
     );
}

export default Hero;