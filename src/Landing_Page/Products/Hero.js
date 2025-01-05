import React from 'react';

function Hero() {
    return ( 
        <div className='container border-bottom'>
            <div className='row text-center p-3 mt-5'>
                <div>
                    <h1>Technology</h1>
                    <h3  className='text-body-secondary mt-3 fs-4'>Sleek, modern, and intuitive trading platforms</h3>
                    <p className='mt-4 mb-5'>Check out our <a href='https://zerodha.com/investments' style={{textDecoration:"none"}}>investment offerings <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a></p>
                </div>
            </div>
        </div>
    );
}

export default Hero;