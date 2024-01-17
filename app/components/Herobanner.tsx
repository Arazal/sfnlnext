import MapSF from '../components/MapSF'

export default function Herobanner() {
    const handleButtonClick = () => {
        gsap.to(window, { duration: 4, scrollTo: { y: '.btn-scrollto', offsetY: 150 } });
      }
    return (
        <section className=" mt-24 m-3 rounded">
          <div className=" shadow-2xl relative overflow-hidden bg-cover bg-no-repeat bg-[50%]  h-[500px] ">
            <MapSF />
          </div>
          <div className="container  mx-auto px-6 md:px-12 xl:px-32">
            <div className="text-center bg-white ">
              <div
                className=" opacity-85  mt-[-350px] md:mt-[-150px] block rounded-lg  px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] backdrop-blur-sm md:py-16 md:px-12">
                {/* className=" opacity-80 mt-[-350px] md:mt-[-150px] block rounded-lg bg-[hsla(0,0%,100%,0.55)] bg-[hsla(0,0%,100%,0.7)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] backdrop-blur-[30px] dark:bg-[hsla(0,0%,5%,0.55)] dark:shadow-black/20 md:py-16 md:px-12"> */}
                <h1 className="  animate-herotext pb-3 text-sfsecondary-new1-700 mb-16  text-5xl xl:text-7xl">
                {/* <h1 className="hero-text pb-3 text-sfprimary mb-16 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl"> */}
                  Deliver <br /><span className="font-miller text-sfprimary-new1-950">on our every promise</span>
                </h1>
                {/* <p
                  className="bg-gradient-to-r from-primary to-danger bg-clip-text text-transparent">
                  Gradient text
                </p> */}
                {/* <div className=' space-x-4'> */}
                  <button  className="btn-getstarted  m-1"
                     onClick={handleButtonClick}>GET STARTED</button>
                  <a className="btn-getstarted m-1"
                     href="mailto: laiweicai@sf-express.com">CONTACT US</a>
                {/* </div> */}
                
              </div>
            </div>
          </div>
        </section>  
    )
}