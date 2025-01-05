import React from 'react';

function Footer() {
    return (
        <footer style={{backgroundColor:'rgb(250,250,250)'}}>
        <div className='container border-top mt-5'>
            <div className='row mt-5'>
                <div className='col'>
                    <img src='media/images/logo.svg' alt='log' style={{ width: "50%" }} className='mb-3'/>
                    <p>&#169; 2010 - 2024, Zerodha Broking Ltd.<br />All rights reserved.</p>

                </div>
                <div className='col'>
                    <p>Company</p>
                    <a href="https://zerodha.com/about/" className='text-body-secondary' style={{textDecoration:"none",color:"black"}}>About</a><br></br>
                    <a href="" className='text-body-secondary' style={{textDecoration:"none",color:"black"}}>Products</a><br></br>
                    <a href="" className='text-body-secondary' style={{textDecoration:"none",color:"black"}}>Pricing</a><br></br>
                    <a href="" className='text-body-secondary' style={{textDecoration:"none",color:"black"}}>Referral programme</a><br></br>
                    <a href="" className='text-body-secondary' style={{textDecoration:"none",color:"black"}}>Careers</a><br></br>
                    <a href="" className='text-body-secondary' style={{textDecoration:"none",color:"black"}}>Zerodha.tech</a><br></br>
                    <a href="" className='text-body-secondary' style={{textDecoration:"none",color:"black"}}>Press & media</a><br></br>
                    <a href="" className='text-body-secondary' style={{textDecoration:"none",color:"black"}}>Zerodha Cares (CSR)</a><br></br>
                </div>
                <div className='col'>
                    <p>Support</p>
                    <a href="https://zerodha.com/contact/" className='text-body-secondary' style={{textDecoration:"none",color:"black"}}>Contact us</a><br></br>
                    <a href="" className='text-body-secondary' style={{textDecoration:"none",color:"black"}}>Support portal</a><br></br>
                    <a href="" className='text-body-secondary' style={{textDecoration:"none",color:"black"}}>Z-Connect blog</a><br></br>
                    <a href="" className='text-body-secondary' style={{textDecoration:"none",color:"black"}}>List of charges</a><br></br>
                    <a href="" className='text-body-secondary' style={{textDecoration:"none",color:"black"}}>Downloads & resources</a><br></br>
                </div>
                <div className='col'>
                    <p>Account</p>
                    <a href="https://zerodha.com/open-account/" className='text-body-secondary' style={{textDecoration:"none",color:"black"}}>Open an account</a><br></br>
                    <a href="" className='text-body-secondary' style={{textDecoration:"none",color:"black"}}>Fund transfer</a><br></br>
                    <a href="" className='text-body-secondary' style={{textDecoration:"none",color:"black"}}>60 day challenge</a>
                </div>
            </div>

            <div className='mt-5 text-body-secondary' style={{fontSize:"13px"}}>
            <p>Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. - SEBI Registration no.: IN-DP-431-2019 Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001 – SEBI Registration no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@zerodha.com, for DP related to dp@zerodha.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF</p>

            <p>Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances</p>

            <p>Smart Online Dispute Resolution | Grievances Redressal Mechanism</p>

            <p>Investments in securities market are subject to market risks; read all the related documents carefully before investing.</p>

            <p>Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.</p>

            <p>"Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please create a ticket here.</p>
        </div>

        <div className='text-center mb-3'>
        <a href="" className='text-body-secondary footerOpt' >NSE</a>
        <a href="" className='text-body-secondary footerOpt' >BSE</a>
        <a href="" className='text-body-secondary footerOpt' >MCX</a>
        <a href="" className='text-body-secondary footerOpt' >Terms & conditions</a>
        <a href="" className='text-body-secondary footerOpt' >Policies & procedures</a>
        <a href="" className='text-body-secondary footerOpt' >Privacy policy</a>
        <a href="" className='text-body-secondary footerOpt' >Disclosure</a>
        <a href="" className='text-body-secondary footerOpt' >For investor's attention</a>
        <a href="" className='text-body-secondary footerOpt' >Investor charter</a>
        </div>
        </div>
        </footer>
    );
}

export default Footer;