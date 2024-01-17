import Image from 'next/image'

export default function Slide3() {
    return (

<div className=''>
<div className="h-3 bg-sfsecondary-new1-700 w-screen my-24"></div>
<h3 className='text-center text-4xl m-3'>SF Economy Express (International) Target Marketing</h3>
<p className='text-center m-3'>Time-sensetive:focusing on electronics, auto parts, clothing and fresh industries, providing market- leading timeliness and services</p>
   
         {/* <div className="grid sm:grid-cols-1 md:grid-cols-2"> */}
         {/* <image width="1589" height="1878" transform="scale(.22)" xlinkHref="/map-sfeurope.png"/> */}
<div className='w-5/6 mx-auto grid grid-cols-2 grid-rows-1 shadow-2xl rounded-md'>
   
    <div className=' z-10 max-w-max px-4 py-2  text-center space-y-4  col-start-1 col-end-1 row-start-1 row-end-1'>
        <div className=' text bg-[#F79645] text-white w-full p-3'>The 1st Echelon</div>
        <div className=' bg-[#517FB8] text-white w-full p-3'>The 2nd Echelon</div>
    </div>

<Image 
  className='mx-auto col-start-1 col-end-3 row-start-1 row-end-1'
  src={'/map-sfeurope.png'}
  alt='map'
  width={700}
  height={900}
/>
<div className='col-start-2 col-end-3 row-start-1 row-end-1 flex flex-col justify-around items-end'>
<div className='w-2/3'>
<Image 
  className=' mb-3'
  src={'/retail.svg'}
  alt='retail'
  width={45}
  height={45}
/>
<p>Retail</p>
</div>

<div className='w-2/3'>
<Image 
  className=' mb-3'
  src={'/automobile-industry.svg'}
  alt='retail'
  width={45}
  height={45}
/>
<p>Automobile industry</p>
</div>

<div className='w-2/3'>
<Image 
  className=' mb-3'
  src={'/3c.svg'}
  alt='retail'
  width={45}
  height={45}
/>
<p>3C</p>
</div>

<div className='w-2/3'>
<Image 
//   className='col-start-1 row-start-1'
  src={'/electronic.svg'}
  alt='electronic'
  width={45}
  height={45}
/>
<p>Electronic</p>
</div>

<div className='w-2/3'>
<Image 
//   className='col-start-1 row-start-1'
  src={'/clothing.svg'}
  alt='clothing'
  width={45}
  height={45}
/>
<p>Clothing</p>
</div>

</div>



    </div>
 </div>
    )
}