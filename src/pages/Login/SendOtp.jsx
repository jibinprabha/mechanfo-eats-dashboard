/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../../axios';
import Container from 'react-bootstrap/Container';
import logo from '../../assets/images/mechanfo.png'
import '../../pages/Login/Login.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'react-phone-number-input/style.css'
import { ButtonLoader } from '../../components/Loader';

const SendOtp = () => {
    const [phone, setPhone] = useState('91')
    const countryId = '6365355d03caa4af877fa37f'
    const [loader, setloader] = useState(false)
    const data = { phone, countryId };
    const navigate = useNavigate();
    const [isButtonDisabled, setButtonDisabled] = useState(false);
    const [phoneError, setphoneError] = useState(false);

    const handleSendOtp = async (e) => {
        e.preventDefault()
        if(phone.length<12){
            setphoneError(true)
        }else{
            setphoneError(false)
            try {
            setloader(true)
            setButtonDisabled(true);
            // Make an API request to send the OTP
            await axios.post('/admin/sendOtp', data);
                navigate('/verify-otp', { state: { phone } });
                setloader(false)
                setButtonDisabled(false);
            } catch (error) {
                setloader(false)
                console.error('Failed to send OTP', error);
            }
        } 
    };
  return (

    <Container style={{minWidth:'100%'}}>
        <section>
        <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">

              <div className="d-flex justify-content-center py-4">
                <a href="index.html" className="logo d-flex align-items-center w-auto">
                  <img src={logo} alt=""/>
                </a>
              </div>

              <div className="card mb-3">

                <div className="card-body">

                  <div className="pt-4 pb-2 mb-3 mt-3">
                    <h5 className="card-title text-center pb-0 fs-4">Send OTP</h5>
                    <p className="text-center small">Enter your registered number to login</p>
                  </div>

                  <form className="row g-3 needs-validation" onSubmit={handleSendOtp}>

                    <div className="col-12">
                      <div className="input-group has-validation">
                        <input type="text" value={phone} onChange={(e)=>{setPhone(e.target.value)}} name="phone" className="form-control" id="phone" required="" placeholder='Phone'/>
                       
                        <div className={`invalid-feedback ${phoneError?'d-block':''}`}>Please enter your Phone Number</div>
                      </div>
                                 </div>
                    <div className="col-12 login-button">
                        {
                            loader? <button className="btn btn-primary" type="submit" disabled={isButtonDisabled}><ButtonLoader/></button>:
                            <button className="btn btn-primary" type="submit" disabled={isButtonDisabled}>Send OTP</button>
                        }
                    </div>
                    
                  </form>

                </div>
              </div>


            </div>
          </div>
        </section>
      
    </Container>
  );
};

export default SendOtp;
