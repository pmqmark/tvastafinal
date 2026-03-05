import React from 'react'
import { PageTransition } from '../../utils/animations'
import Navbar from '../Navbar'
import Hero from './Hero'
import ProjectOverview from './ProjectOverview'
import ChallengeAndApproach from './ChallengeAndApproch'
import Outcome from './Outcome'
import Footer from '../Footer'

const First3DPrintedPage = () => {
  return (
    <PageTransition className="relative w-full min-h-screen bg-white">
        <Navbar/>
        <div className="flex flex-col w-full">
            <Hero/>
            <ProjectOverview/>
            <ChallengeAndApproach/>
            <Outcome/>
        </div>
        {/* Spacing before footer */}
        <div className="w-full h-[80px] sm:h-[90px] md:h-[100px] lg:h-[110px] xl:h-[120px]"></div>
        <Footer/>
    </PageTransition>
  )
}

export default First3DPrintedPage