import React from 'react'
import './ContactPage.css'
import NavBar from '../../components/navBar/NavBar';
import CustomButton from '../../components/custombutton/CustomButton'
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

            <div className='contact-us-pg'>
                <h2>Contact Us Page</h2>
            </div>

            <div className='contact-us-header'>
                <h1>CONTACT US</h1>
            </div>

            <div className="contact-container">
                <div className='contact-details'>

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


                        <div className='cn-send-message'>
                            <CustomButton  type={'submit'} content='SEND' />
                        </div>

                    </form>  

                    <div className='map'>
                        <map name=""></map>

                    </div>
                </div>

            </div>

            <div className='moving-truck'>
                <div className='truck1'> 
             
                </div>

                <div className='truck2'>
                  
                </div>

            </div>  

            <div className='cnt-footer'>
                <Footer />
            </div>

        </div>

    )
}

export default ContactPage