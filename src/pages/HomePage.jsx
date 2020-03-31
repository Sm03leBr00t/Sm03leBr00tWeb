import React from 'react'

import Hero from "../components/Hero";

const HomePage = ({headtitle, subtitle}) => {
    return (
        <div>
            <Hero title={headtitle} subtitle={subtitle}/>
        </div>
    )
}

export default HomePage;