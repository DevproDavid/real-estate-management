import React from 'react'
import MainNav from '../components/GeneralComponents/MainNav';
import Brokers from '../components/AgentsComponents/brokers';
import Footer from '../components/GeneralComponents/footer';

function AgentPage() {
  return (
    <div className='mt-24 md:mt-0'>
      <MainNav/>
      <Brokers/>
      <Footer/>  
    </div>
  )
}

export default AgentPage
