import Image from 'next/image'
import Table from './Table'

export default function Slide5() {
    return (
        <div className="mt-12 mx-auto">
            <div className="h-3 bg-sfsecondary-new1-700 w-screen my-24"></div>
            <h1 className='text-center text-4xl'>SF Economy Express (International) Coverage</h1>
            <h3 className="text-center"><span className="text-white bg-sfsecondary ">Service Coverage: </span>23 Countries and Regions, from NL to Asia/North America etc.</h3>
            <h3 className="text-center"><span className="text-white bg-sfsecondary ">Transit Time:</span> 5-12 working days</h3>

        <section className='w-5/6 mx-auto shadow-2xl rounded-md grid grid-cols1 md:grid-cols6'>
            <Image className=' lg:col-start-1 lg:col-end-4 ' src='/worldMap.png' height={1420} width={2291} alt='world map'/>
            <div className='lg:col-start-5'>
                <Table/>
            </div>
            
        </section>
            <div className='w-5/6 mx-auto mt-5'>
            <p><span className="text-white bg-sfsecondary-new1-500 p-1">Pricing Principle:</span> Fees are charged by ”Country-Country/Region” and market to price</p>
            <p><span className="text-white bg-sfsecondary-new1-500 p-1">Billing Model:</span> The chargeable weight shall be actual weight or the volume weight whichever is higher and the coefficient of volume weight is 5000 (Volume Weight=L*W*H/5000)</p>
            <p><span className="text-white bg-sfsecondary-new1-500 p-1">Pricing Method:</span> Price based on different Zones</p>
            </div>
            
        </div>

    )
}