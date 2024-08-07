/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from '../../axios';
import Container from 'react-bootstrap/Container';
import logo from '../../assets/images/mechanfo.png'
import '../../pages/Login/Login.css'
import { ButtonLoader } from '../../components/Loader';

const VerifyOtp = () => {
    const [otp, setOtp] = useState('');
    const {state} = useLocation();

    const [loader, setloader] = useState(false)
    const [isButtonDisabled, setButtonDisabled] = useState(false);
    const [otpError, setotpError] = useState(false);
    const [otpErrorMessage, setotpErrorMessage] = useState('');

    let phone = state.phone
    const data = { phone, otp };
    const navigate = useNavigate();

  const handleVerifyOtp = async (e) => {
    e.preventDefault()
        if(phone.length<6){
            setotpError(true)
        }else{
            setotpError(false)
            setloader(true)
            setButtonDisabled(true);
            // Make an API request to send the OTP
            await axios.post('/admin/verifyOtpAdmin', data).then(response=>{
                if(response.data.status==='error')
                {   
                    setotpError(true)
                    setotpErrorMessage("Invalid OTP")
                }  else{
                    localStorage.setItem('isAuthenticated', true);
                    localStorage.setItem('accessToken', response.data.token);
                    localStorage.setItem('refreshToken', response.data.refreshToken);
                    localStorage.setItem('user', JSON.stringify(response.data.user));
                    navigate('/')
                    setloader(false)
                    setButtonDisabled(false);
                }
            }).catch(error=>{
                setotpError(true)
                setotpErrorMessage("Invalid OTP")
                console.error('Something went wrong!!!', error);
            })
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
                    <h5 className="card-title text-center pb-0 fs-4">Verify OTP</h5>
                    <p className="text-center small">Enter your registered number to login</p>
                  </div>

                  <form className="row g-3 needs-validation" onSubmit={handleVerifyOtp}>

                    <div className="col-12">
                      <div className="input-group has-validation">
                        <input type="text" value={otp} onChange={(e)=>{setOtp(e.target.value)}} name="phone" className="form-control" id="phone" required="" placeholder='OTP'/>
                       
                        <div className={`invalid-feedback ${otpError?'d-block':''}`}>{otpErrorMessage}</div>
                      </div>
                    </div>
                    <div className="col-12 login-button">
                      <button className="btn btn-primary" type="submit">Verify OTP</button>
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

export default VerifyOtp;
