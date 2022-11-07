import React from 'react'
import './ContactPage.css'
import NavBar from '../../components/navBar/NavBar';
import CustomButton from '../../components/custombutton/CustomButton'
import truck from '../../assets/images/truck.png'
import truck2 from '../../assets/images/truck2.png'
import Footer from '../../components/footer/Footer';



function ContactPage() {
    
    // const [data, setData] = useState({});

    function contactDetails(event) {
        // const { name, value } = event.target
        // const newData = { ...data }
        // newData[name] = value;
        // setData(newData);
        // console.log(newData)
    }

    return (

        <div className='contact-page' id='contact-pg'>

            <div>
                <NavBar />
            </div>

            <div className='contact-us-header'>
                <h2>Contact Us</h2>
            </div>

            <form action="" className='contact-page-form'>
                <div className='name-phone-email-mes'>
                    <div className='name'>
                        <input className='fme-input' name='fullName' placeholder='Name'/> 
                    </div>

                    <div className='phone'>
                        <input className='fme-input' name='phone' placeholder='Phone'/>
                    </div>

                    <div className='email-address'>
                        <input className='fme-input' onChange={contactDetails}  name='email' placeholder='Email ' />
                    </div>
                
                    <div className='message'>
                        <textarea  id="message-input" onChange={contactDetails} name="message" cols="30" rows="10" placeholder='Message....'></textarea>
                    </div>

                </div>


                <div className='send-message'>
                    <CustomButton id="sm-button" type={'submit'} content='SEND' style={{ width: '350px', height: '70px', borderRadius: '70px'}} />
                </div>

            </form>  

            <div className='map'>

            </div>

            <div className='moving-truck'>
                <div className='truck1'>
                    <img src={truck} alt="" />
                </div>

                <div>
                    <img src={truck2} alt="" />
                </div>

            </div>  

            <div>
                <Footer />
            </div>

        </div>

    )
}

export default ContactPage