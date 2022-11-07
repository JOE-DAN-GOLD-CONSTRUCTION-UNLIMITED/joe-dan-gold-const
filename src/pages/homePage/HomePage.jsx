import React from 'react'
import './HomePage.css'
import { Link } from "react-router-dom";
import NavBar from '../../components/navBar/NavBar';
import homeP from "../../assets/images/homeP.png";
import CustomButton from '../../components/custombutton/CustomButton';
import constserv from "../../assets/images/constserv.png";
import electserv from "../../assets/images/electserv.png";
import reconst from "../../assets/images/reconst.png";
import Footer from '../../components/footer/Footer';


function HomePage() {
  return (   
    <div className="home-page">
     
      <div>
        <NavBar/> 
      </div>
    
      <div className="home-info">
        <div className='home-details'>
          <h1>We Are Builders </h1> 

          <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta totam doloribus magni minima ab inventore repellat at blanditiis. Tempore nesciunt iusto eius ex, delectus corporis ipsa possimus accusamus sed laudantium? </p>

          
          <div className ="home-btn">
            
            <Link to='/contactus' pathname='/contactus'>
               <CustomButton content="Contact Us" />          
            </Link>

          </div>

        </div>

        <div className="home-pic"> 
          <img src={homeP} alt="" />
        </div> 
        
      </div>


      <div className='services-done'>
        <div className='construction-services'>
          <img src={constserv} alt="" />
          <h1>CONSTRUCTION SERVICES</h1>
        </div>

        <div className='reconstruction'>
          <img src={electserv} alt="" />
          <h1>RECONSTRUCTION</h1>
        </div>

        <div className='electrical-services'>
          <img src={reconst} alt="" />
          <h1>ELECTRICAL SERVICES</h1>
        </div>

      </div>
    

     

        <div className='our-awesome-team' >
          <div className='our-awesome-team-header'>
            <h1 id='miion-pg'>Our Awesome Team</h1>
          </div>

          <p> 
          Presenting the minds behind JOE-DAN Gold Technology Unlimited. A unified team of experts who are passionately driven by the concept of smart solutions, bringing new technological ideas for the world at large. they ensure that comfort and satisfaction go hand-in-hand </p>
        </div>

        <div className='founder'>
          <div className='founder-details-box'>
            <div className='founder-image'>
              <img src={Joseph} alt="" />
            </div>

            <h3>UKAGA JOSEPH C.</h3>
            <p>CE0 / FOUNDER</p>
          </div>

          <div className='founder-details-box'>
            <div className='founder-image'>
              <img src={Daniel} alt="" />
            </div>
            <h3>ACHILIHU DANIEL U.</h3>
            <p>CTO / CO-FOUNDER</p>
          </div>

        
          <div className='founder-voice'>
            <h1>Founders Voice</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea minus itaque nostrum obcaecati vero in numquam quaerat tempore, rerum voluptates doloribus quasi molestias! Consequuntur illo quidem eos velit, quisquam ea.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi eos, earum temporibus dignissimos tempora qui suscipit praesentium hic debitis iure ducimus. Exercitationem, dicta non quos nihil laborum nulla quo nemo.
            </p>
          </div>

        </div>

        <div className='team-details-container'>
          {
            founders.map((founder, index) => (
              <React.Fragment key={index}>
                <div className='team-details-box'>
                  <div className='team-details-image'>
                    <img src={Daniel} alt={founder.name} />
                  </div>
                  <h3 className='team-name'>{founder.name}</h3>
                  <p className="team-position">{founder.position}</p>
            
                  <CustomButton content="View Details" />
                  
                </div>
            
              </React.Fragment>
            ))
          }
        </div>



      <div className='footer'>
        <Footer/>
      </div>

    </div>

  )
}

export default HomePage