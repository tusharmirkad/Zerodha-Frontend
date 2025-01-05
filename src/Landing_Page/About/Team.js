import React from 'react';

function Team() {
    return ( 
        <div className='container'>
            <div className='row mt-5 mb-5 pt-5 border-top'>
                <h1 className='mt-5 text-center'>Developer</h1>
            </div>

            <div className='row mt-5 pb-5 text-body-secondary' style={{lineHeight:"1.8",fontSize:"1.1em"}}>
                <div className='col-6 p-3 text-center'>
                    <img src='media/images/tushar.jpg' style={{width:"50%", borderRadius:"50%"}}/>
                    <h4 className='mt-5'>Tushar Mirkad</h4>
                    <h6>Developer of this website</h6>
                </div>

                <div className='col-6 mt-5 p-5'>
                    <p>Hello viewers,My name is Tushar Mirkad.</p>
                    <p>I am 20 years old.I have completed my Full Stack Web Development course at Apna College which was led by Shraddha Khapra mam.</p>
                    <p>My motive is to implement my knowledge which I have studied in my course to build websites.</p>
                    <p>Connect on <a href='https://www.linkedin.com/in/tushar-mirkad-0602b925a/' className='text-body-secondary bio'><i class="fa fa-linkedin" aria-hidden="true"></i></a> </p>
                </div>
            </div>
        </div>
    );
}

export default Team;