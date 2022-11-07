import React from 'react'


import clients from './clients.json'
function ClientPage() {
    return (
        <div className='client-words'>
            <div>
                <NavBar/> 
            </div>    

            <div className='client-header'>
                <h1 id='client-hd'>CLIENT REMARKS</h1>
            </div>

            <div className='client-info'>
                <div className='client-details'>
                    <h1> Clients Words</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate nesciunt error ex quae. Atque obcaecati pariatur, sit nemo illum hic. Eligendi quam molestiae maxime numquam accusamus eveniet nostrum aspernatur natus?</p>
                </div>

                <div className='clients-container'>
                    {
                        clients.map((client, index) => (
                        <React.Fragment key={index}>
                            <div className='clients-box'>
                                <div className='clients-images'>
                                    <img src={Daniel} alt={client.name} />
                                </div>

                                <h1>{client.name}</h1>
                                <p>{client.remarks}</p>
                            </div>
                        
                        </React.Fragment>
                        ))
                    }
                </div>


            </div>

        </div>
    )
}

export default ClientPage