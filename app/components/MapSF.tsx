'use client'


import { useEffect, useRef, useLayoutEffect } from 'react'
import { gsap } from "gsap";
import {MotionPathPlugin} from "gsap/MotionPathPlugin";

gsap.registerPlugin(MotionPathPlugin);

export default function Map() {

// const comp = useRef();
 const svgRef = useRef(null);

  useEffect(() => {
    

    const svgElement = svgRef.current;
    //  const plane1 = svgElement.getElementById('plane1'); 
    //  const path1 = svgElement.getElementById('path1'); 

        gsap.to('#plane1', {
        duration: 52, 
        repeat: -1,
        repeatDelay: 3,
        //   yoyo: true,
        //   ease: "power1.inOut",
        ease: 'none',
        motionPath:{
            path: '#path1',
            align: '#path1',
            autoRotate: true,
            alignOrigin: [0.5, 0.5]
        }
        });
        gsap.to('#plane2', {
        duration: 62, 
        repeat: -1,
        delay: 2,
          ease: "power1.inOut",
        motionPath:{
            path: '#path2',
            align: '#path2',
            autoRotate: true,
            alignOrigin: [0.5, 0.5]
        }
        });
        gsap.to('#plane3', {
        duration: 52, 
        repeat: -1,
        delay: 4,
          ease: "power1.inOut",
        motionPath:{
            path: '#path2',
            align: '#path2',
            autoRotate: true,
            alignOrigin: [0.5, 0.5]
        }
        });
        gsap.to('#plane4', {
        duration: 57, 
        repeat: -1,
        delay: 4,
          ease: "power1.inOut",
        motionPath:{
            path: '#path1',
            align: '#path1',
            autoRotate: true,
            alignOrigin: [0.5, 0.5]
        }
        });
        gsap.to('#plane5', {
        duration: 42, 
        repeat: -1,
        delay: 4,
          ease: "power1.inOut",
        motionPath:{
            path: '#path2',
            align: '#path2',
            autoRotate: true,
            alignOrigin: [0.5, 0.5]
        }
        });
  }, []);

    return (
      <div className=''>
        <svg ref={svgRef} id="Слой_1" data-name="Слой 1" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 567.36 259.44">
            <image width="2364" height="1081" transform="scale(0.24)" href="/map.png"/>
            <path id="path1" className="cls-1" d="M1052.43,580c.64-1.33-52.67-36.89-129.13-58.7-82.58-23.55-151.69-19.51-151.82-18s63.66.14,148.69,24C1000.27,549.78,1051.81,581.29,1052.43,580Z" fill="none" transform="translate(-676 -410)"/>
            <path id="path2" className="cls-1" d="M1052.44,590.27c.4-.77-54.74-40.77-137.31-60.78-69.41-16.81-126.65-11.86-126.7-11.07s54.73-2.68,124.88,14.42C997.81,553.44,1052.05,591,1052.44,590.27Z" fill="none" transform="translate(-676 -410)"/>
            <g id="plane1" data-name="SVGRepo iconCarrier">
                <path className="cls-2" d="M1052.43,600.71h0s.56.89-6.16,1.23l-1.73,2.49h.28a.76.76,0,0,1,.76.75.75.75,0,0,1-.76.74h-1.36l-.84,1.12h.11a.75.75,0,1,1,0,1.49h-1.28a14.4,14.4,0,0,1-2.53,2.61s-1.33,0-1.33-.75c0,0,3.09-5.55,4.19-8.34-6.85.05-6.85-.41-6.85-.41s-1.52,2.79-3.05,2.79l1.14-3.72h0l-1.14-3.73c1.52,0,3,2.8,3,2.8s0-.46,6.85-.41c-1.09-2.79-4.19-8.34-4.19-8.34,0-.75,1.33-.75,1.33-.75a13.75,13.75,0,0,1,2.53,2.61h1.28a.75.75,0,0,1,.76.74.76.76,0,0,1-.76.75h-.11l.84,1.11h1.36a.76.76,0,0,1,.76.75.75.75,0,0,1-.76.74h-.28l1.74,2.5C1053,599.82,1052.43,600.71,1052.43,600.71Z" transform="translate(-676 -410)"/>
            </g>
            <g id="plane4" data-name="SVGRepo iconCarrier">
                <path className="cls-2" d="M1052.43,600.71h0s.56.89-6.16,1.23l-1.73,2.49h.28a.76.76,0,0,1,.76.75.75.75,0,0,1-.76.74h-1.36l-.84,1.12h.11a.75.75,0,1,1,0,1.49h-1.28a14.4,14.4,0,0,1-2.53,2.61s-1.33,0-1.33-.75c0,0,3.09-5.55,4.19-8.34-6.85.05-6.85-.41-6.85-.41s-1.52,2.79-3.05,2.79l1.14-3.72h0l-1.14-3.73c1.52,0,3,2.8,3,2.8s0-.46,6.85-.41c-1.09-2.79-4.19-8.34-4.19-8.34,0-.75,1.33-.75,1.33-.75a13.75,13.75,0,0,1,2.53,2.61h1.28a.75.75,0,0,1,.76.74.76.76,0,0,1-.76.75h-.11l.84,1.11h1.36a.76.76,0,0,1,.76.75.75.75,0,0,1-.76.74h-.28l1.74,2.5C1053,599.82,1052.43,600.71,1052.43,600.71Z" transform="translate(-676 -410)"/>
            </g>
            <g id="plane5" data-name="SVGRepo iconCarrier">
                <path className="cls-2" d="M1052.43,600.71h0s.56.89-6.16,1.23l-1.73,2.49h.28a.76.76,0,0,1,.76.75.75.75,0,0,1-.76.74h-1.36l-.84,1.12h.11a.75.75,0,1,1,0,1.49h-1.28a14.4,14.4,0,0,1-2.53,2.61s-1.33,0-1.33-.75c0,0,3.09-5.55,4.19-8.34-6.85.05-6.85-.41-6.85-.41s-1.52,2.79-3.05,2.79l1.14-3.72h0l-1.14-3.73c1.52,0,3,2.8,3,2.8s0-.46,6.85-.41c-1.09-2.79-4.19-8.34-4.19-8.34,0-.75,1.33-.75,1.33-.75a13.75,13.75,0,0,1,2.53,2.61h1.28a.75.75,0,0,1,.76.74.76.76,0,0,1-.76.75h-.11l.84,1.11h1.36a.76.76,0,0,1,.76.75.75.75,0,0,1-.76.74h-.28l1.74,2.5C1053,599.82,1052.43,600.71,1052.43,600.71Z" transform="translate(-676 -410)"/>
            </g>
            <g id="plane2" data-name="SVGRepo iconCarrier">
                <path className="cls-2" d="M1074.33,561.74h0s.61.92-6.54,1.26l-1.85,2.58h.3a.77.77,0,1,1,0,1.53h-1.44l-.89,1.15h.11a.77.77,0,1,1,0,1.54h-1.36a14.68,14.68,0,0,1-2.69,2.68s-1.41,0-1.41-.77c0,0,3.29-5.71,4.45-8.59-7.28,0-7.28-.42-7.28-.42s-1.62,2.88-3.24,2.88l1.21-3.84h0l-1.21-3.84c1.61,0,3.23,2.88,3.23,2.88s0-.48,7.29-.42c-1.17-2.88-4.46-8.6-4.46-8.6,0-.76,1.42-.76,1.42-.76a15,15,0,0,1,2.69,2.68H1064a.77.77,0,1,1,0,1.54h-.11l.89,1.15h1.45a.77.77,0,1,1,0,1.53h-.3l1.85,2.57C1074.93,560.82,1074.33,561.74,1074.33,561.74Z" transform="translate(-676 -410)"/>
            </g>
            <g id="plane3" data-name="SVGRepo iconCarrier">
                <path className="cls-2" d="M1074.33,561.74h0s.61.92-6.54,1.26l-1.85,2.58h.3a.77.77,0,1,1,0,1.53h-1.44l-.89,1.15h.11a.77.77,0,1,1,0,1.54h-1.36a14.68,14.68,0,0,1-2.69,2.68s-1.41,0-1.41-.77c0,0,3.29-5.71,4.45-8.59-7.28,0-7.28-.42-7.28-.42s-1.62,2.88-3.24,2.88l1.21-3.84h0l-1.21-3.84c1.61,0,3.23,2.88,3.23,2.88s0-.48,7.29-.42c-1.17-2.88-4.46-8.6-4.46-8.6,0-.76,1.42-.76,1.42-.76a15,15,0,0,1,2.69,2.68H1064a.77.77,0,1,1,0,1.54h-.11l.89,1.15h1.45a.77.77,0,1,1,0,1.53h-.3l1.85,2.57C1074.93,560.82,1074.33,561.74,1074.33,561.74Z" transform="translate(-676 -410)"/>
            </g>
        </svg>

    </div>
    )
}