import React from 'react'
import './ProjectPage.css'
import NavBar from '../../components/navBar/NavBar';
import ch1 from "../../assets/images/ch1.png";
import ch2 from "../../assets/images/ch2.png";
import ch3 from "../../assets/images/ch3.png";

import projects from './projects.json'
import Footer from '../../components/footer/Footer';

function ProjectPage() {
  return (
    <div className='project-page'>

        <div>
            <NavBar/> 
        </div>    

        <div className='project-header'>
            <h1 id='project-hd'>PROJECT</h1>
        </div>

        <div className='project-info'>
            <div className='project-details'>
                <h1>Our Features Projects</h1>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quaerat eos nostrum perferendis debitis itaque ipsam corrupti, ut tempore saepe consequatur optio, eum illum officia iusto. Labore vel ratione quidem.</p>
            </div>

            <div className='project-images'>
                {
                    projects.map((project, index) => (
                    <React.Fragment key={index}>
                        <div className='project-images'>
                            <img src={Daniel} alt={project.name} />
                        </div>
                    
                    </React.Fragment>
                    ))
                }
            </div>

            <div className='why-choose-us'>
                <div className='why-choose-us-info'>
                    <h1> Why Choose Us</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis repudiandae maiores quia debitis saepe aut voluptatibus nihil, minus reprehenderit, maxime laborum, velit mollitia officiis totam laudantium voluptates reiciendis quis? Provident.</p>
                </div>

                <div className='cl-aw-tr'>
                    <div className='client-sat'>
                        <img src={ch1} alt="" />
                        <h1>CLIENT SATISFACTION</h1>
                    </div>

                    <div className='award'>
                        <img src={ch2} alt="" />
                        <h1>AWARD</h1>
                    </div>

                    <div className='trustable'>
                        <img src={ch3} alt="" />
                        <h1>TRUSTABLE</h1>
                    </div>

                </div>
            </div>

        </div>

        <div className='footer'>
            <Footer/>
        </div>

    </div>
  )
}

export default ProjectPage