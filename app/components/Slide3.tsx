import Image from 'next/image'

export default function Slide3() {
    return (

   <div className='mt-12'>

<h3 className='text-center m-3'>SF Economy Express (International) Target Marketing</h3>
<p className='text-center m-3'>Time-sensetive:focusing on electronics, auto parts, clothing and fresh industries, providing market- leading timeliness and services</p>
   
         {/* <div className="grid sm:grid-cols-1 md:grid-cols-2"> */}
         {/* <image width="1589" height="1878" transform="scale(.22)" xlinkHref="/map-sfeurope.png"/> */}
        <div className=' md:w-5/6 mx-auto my-3 grid grid-cols-1'>
        {/* <div className='w-3/4 md:w-1/2 mx-auto÷ my-3 grid grid-cols-1'> */}
            {/* <Image src='/map-sfeurope.png' width={1595} height={1879} alt='sf map europe'/>
            <div>2</div> */}
<div className=' z-10 max-w-max px-4 py-2  text-center space-y-4 col-start-1 row-start-1'>
    <div className=' text bg-[#F79645] text-white w-full p-3'>The 1st Echelon</div>
    <div className=' bg-[#517FB8] text-white w-full p-3'>The 2nd Echelon</div>
</div>
{/* <svg className='col-start-1 row-start-1' id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 384.5 509.67"> */}
<Image 
  className='col-start-1 row-start-1'
  src={'/map-sfeurope.png'}
  alt='map'
  width={1595}
  height={1879}
/>
    </div>
 </div>
    )
}