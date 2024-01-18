'use client'

import { gsap } from 'gsap';

export default function MenuButtons() {
    const handleButton1Click = () => {
        gsap.to(window, { duration: 2, scrollTo: { y: '.definitions', offsetY: 10 } });
      }
    const handleButton2Click = () => {
        gsap.to(window, { duration: 2, scrollTo: { y: '.coverage', offsetY: 10 } });
      }
    const handleButton3Click = () => {
        gsap.to(window, { duration: 2, scrollTo: { y: '.ratespolicy', offsetY: 10 } });
      }
    const handleButton4Click = () => {
        gsap.to(window, { duration: 2, scrollTo: { y: '.sop', offsetY: 10 } });
      }
    return(
        <div className="mx-auto mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
            <button onClick={handleButton1Click} className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
                <h2 className={`mb-3 text-2xl font-semibold`}>
                        Definitions{' '}
                </h2>
                <div className=" text-sfsecondary-new1-500">&#9660;</div>
            </button>
            <button onClick={handleButton2Click} className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
                <h2 className={`mb-3 text-2xl font-semibold`}>
                    Coverage and Zone Area{' '}
                </h2>
                <div className=" text-sfsecondary-new1-500">&#9660;</div>
            </button>
            <button onClick={handleButton3Click} className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
                <h2 className={`mb-3 text-2xl font-semibold`}>
                    Product Selling points and Rates Policy{' '}
                </h2>
                <div className=" text-sfsecondary-new1-500">&#9660;</div>
            </button>
            <button onClick={handleButton4Click} className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
                <h2 className={`mb-3 text-2xl font-semibold`}>
                SOP of Using Guidance{' '}
                </h2>
                <div className=" text-sfsecondary-new1-500">&#9660;</div>
            </button>
        </div>
    )
}