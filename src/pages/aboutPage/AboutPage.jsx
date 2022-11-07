import React from 'react'
import './AboutPage.css'
import { Link } from "react-router-dom";
import NavBar from '../../components/navBar/NavBar';
import aboutP from "../../assets/images/aboutP.png";
import CustomButton from '../../components/custombutton/CustomButton';
import Footer from '../../components/footer/Footer';

function AboutPage() {
    return (
        <div className='about-us-page'>

            <div>
                <NavBar/> 
            </div>
            
            <div className="aboutus-info">

                <div className='aboutus-header'>
                    <h1 id='about-hd'>ABOUT US</h1>
                </div>

                <div className='aboutus-details'>
                    <h1>About Our Company </h1> 

                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta totam doloribus magni minima ab inventore repellat at blanditiis. Tempore nesciunt iusto eius ex, delectus corporis ipsa possimus accusamus sed laudantium? </p>

                    
                    <div className ="aboutus-btn">
                        
                        <Link to='/contactus' pathname='/contactus'>
                        <CustomButton content="READ MORE" />
                        
                        </Link>
                    </div>

                </div>

                <div className="aboutus-pic"> 
                <img src={aboutP} alt="" />
                </div> 
                
            </div>

            <div className='footer'>
                <Footer/>
            </div>
           
        </div>
    )
}

export default AboutPage