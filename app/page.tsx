'use client'

import Image from 'next/image'
import Slide1 from './components/Slide1'
import Definitions from './components/Slide1Definitions'
import { gsap } from "gsap";
import { ScrollToPlugin } from 'gsap/all';
import Herobanner from './components/Herobanner';
import Slide3 from './components/Slide2targetmarketing';
import Slide5 from './components/Slide5Coverage';
import Slide4 from './components/Slide4Processing';
import Slide9 from './components/Slide9';
import Goodbye from './components/Goodbye';
import Slide8 from './components/Slide8';
import MenuButtons from './components/MenuButtons';

gsap.registerPlugin(ScrollToPlugin)

export default function Home() {
  // const handleButtonClick = () => {
  //   gsap.to(window, { duration: 2, scrollTo: { y: '.definitions', offsetY: 10 } });
  // }
  
  return (
    <div className=''>
      <Herobanner />
      <MenuButtons />
      
      <div className="h-3 bg-sfsecondary-new1-700 w-screen my-24"></div>
      <Definitions />
      <div className="h-3 bg-sfsecondary-new1-700 w-screen my-24"></div>
      <Slide3 />
      <div className="h-3 bg-sfsecondary-new1-700 w-screen my-24"></div>
      <Slide5 />
      <div className="h-3 bg-sfsecondary-new1-700 w-screen my-24"></div>
      <Slide4 />
      <div className="h-3 bg-sfsecondary-new1-700 w-screen my-24"></div>
      <Slide8 />
      <Slide9 />
      <div className="h-3 bg-sfsecondary-new1-700 w-screen "></div>
      <Goodbye />
      <div className="h-3 bg-sfsecondary-new1-700 w-screen"></div>
    </div>
  )
}
