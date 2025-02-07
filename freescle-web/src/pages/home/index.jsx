import React from 'react'
import Services from './components/Services'
import Clients from './components/Clients'
import Testimonial from './components/Testimonials'
import Team from './components/TeamSection'
import ToolboxSection from './components/Toolbox'

const home = () => {
    return (

        <div>
            <Services />
            <Clients />
            <Testimonial />
            <Team />
            <ToolboxSection />
        </div>
    )
}

export default home