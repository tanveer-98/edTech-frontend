import React from 'react'
import HeroLeft from '../HeroLeft/HeroLeft'
import HeroRight from '../HeroRight/HeroRight'
const Hero = () => {
  return (
    <div className="overflow-y-hidden grid grid-cols-1 md:grid-cols-2 h-full">
      <div className="left"><HeroLeft/> </div>
      <div className="right"> <HeroRight/></div>
    </div>
  )
}

export default Hero