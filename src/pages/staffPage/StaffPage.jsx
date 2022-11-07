import React from 'react'

import NavBar from '../../components/navBar/NavBar';

import staffs from './staff.json'
import Footer from '../../components/footer/Footer';
function StaffPage() {
    return (
        <div className='staff-page'>
            
            <div>
                <NavBar/> 
            </div>    

            <div className='staff-header'>
                <h1 id='staff-hd'>STAFF</h1>
            </div>

            <div className='staff-info'>
                <div className='staff-details'>
                    <h1>Our Expert Staff</h1>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quaerat eos nostrum perferendis debitis itaque ipsam corrupti, ut tempore saepe consequatur optio, eum illum officia iusto. Labore vel ratione quidem.</p>
                </div>

                <div className='staff-images'>
                    {
                        staffs.map((staff, index) => (
                        <React.Fragment key={index}>
                            <div className='project-images'>
                                <img src={Daniel} alt={staff.name} />
                                <h1>{staff.name}</h1>
                                <p>{staff.about}</p>
                            </div>
                        
                        </React.Fragment>
                        ))
                    }
                </div>

            </div>

        <div className='footer'>
            <Footer/>
        </div>

        </div>
    )
}

export default StaffPage