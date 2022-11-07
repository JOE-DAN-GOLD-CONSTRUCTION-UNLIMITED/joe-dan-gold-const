import React from 'react'
import './Footer.css'
import { Link } from "react-router-dom";
import logo from '../../assets/images/logo.png'

function Footer() {
  return (
    <div className='footer'>
        <footer className='resize-max'>        
            <div className="main-content">

                <div className="logo box">
                    
                    <div className='contentz'>
                        <img id='logo' src={logo} alt="logo" />
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores, asperiores? Saepe id ad veniam nobis inventore quia officiis voluptas provident iusto, eos autem repudiandae molestiae, praesentium culpa illum nesciunt corporis!</p>
                    </div>
                </div>

                <div className="quick-links box">
                    <h2>Quick Links</h2>
                    <div className="content">
                        <ul>
                            <Link to='/'>
                                <li>Home</li>
                            </Link>

                            <Link to='/about' >
                                <li>About</li>
                            </Link>
                            
                            <Link to='/projects'>
                                <li>Projects</li>
                            </Link>

                            <Link to='/staff' >  
                                <li>Staff</li>
                            </Link>
                            
                            <Link to='/Contact Us'> 
                                <li>Contact Us</li>
                            </Link>
                            

                        </ul>
                    </div>
                </div>


                <div className="contact-us box">
                    <h2>SIGN UP TO OUR NEWSLETTER</h2>                
                    <div className='phone'>
                        <input className='fme-input' name='phone' placeholder='Phone'/>
                    </div>
                    

                    <div className='send-message'>
                        <CustomButton id="sm-button" type={'submit'} content='SEND' style={{ width: '350px', height: '70px', borderRadius: '70px'}} />
                    </div>
                </div>

            </div>


            <div className="fotter-bottom">
                <center>
                    <div className="footer-left-bottom">
                        <p>Copyright © 2021-2022 JOEDAN GOLD TECHNOLOGIES UNLIMITED. All Rights Reserved.</p>
                    </div>

                    <div className='footer-right-bottom'>
                        <ul>

                            <Link to='/faq' className='contentt'>  
                                <li>Privacy Policy</li>
                            </Link>

                            <Link to='/termsandconditions' className='contentt'>  
                                <li>Terms and Condition</li>
                            </Link>
                            
                        </ul>
                    </div>    
                </center>
            </div>
        </footer>
    </div>
  )
}

export default Footer