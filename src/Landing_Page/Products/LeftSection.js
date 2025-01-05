import React from 'react';

function LeftSection({imageURl,productName,productDescription,tryDemo,learnMore,googlePlay,appStore}) {
    return ( 
        <div className='container'>
            <div className='row'>
                <div className='col-6 p-5 text-center'>
                    <img src={imageURl}/>
                </div>

                <div className='col-6 p-5 mt-5'>
                    <h1>{productName}</h1>
                    <p>{productDescription}</p>

                    <div>
                    <a href={tryDemo} style={{textDecoration:"none"}}>Try Demo</a>
                    <a href={learnMore} style={{marginLeft:"50px",textDecoration:"none"}}>Learn More</a>
                    </div>
                    
                    <div className='mt-3'>
                    <a href={googlePlay}><img src='media/images/googlePlayBadge.svg'/></a>
                    <a href={appStore}><img src='media/images/appstoreBadge.svg'/></a>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default LeftSection;