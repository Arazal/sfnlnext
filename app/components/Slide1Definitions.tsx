import Image from 'next/image'

export default function Definitions() {
    return (
        <div className='definitions md:mt-36 text-center font-miller '>
         
            <h1 className=" font-miller  text-center text-4xl">SF Economy Express (International) Definitions</h1>
            <p className='m-6'>SF Economy Express (International) is an international economy express delivery serivce launched for customers who need ship middle/high-value commodities and who are demanding on transit time and service</p>
       
        <div className='grid sm:grid-cols-1 md:grid-cols-3 gap-3 text-center m-3 font-miller'>
            
            <div className=" border-dashed border-sfsecondary-new1-600 group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-sfsecondary-new2-300 hover:bg-gray-100 hover:dark:border-sfsecondary-new2-600 hover:dark:bg-neutral-800/30">
                <h2 className={`mb-3 text-2xl font-semibold`}><span className='text-3xl text-sfsecondary-new1-500'>1. </span>Netherlands</h2>
                <Image
                        src="/company.svg"
                        alt="company"
                        className=" mx-auto my-3"
                        width={45}
                        height={45}
                        priority
                        />
                <h3>Stores</h3>
                    <Image
                        src="/store.svg"
                        alt="store"
                        className=" mx-auto my-3"
                        width={45}
                        height={45}
                        priority
                        />
                        <h3>Company</h3>
                    <Image
                        src="/people.svg"
                        alt="people"
                        className=" mx-auto my-3"
                        width={45}
                        height={45}
                        priority
                        />
                        <h3>Consumer</h3>
            </div>
            <div className="  border-dashed border-sfsecondary-new1-600 group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-sfsecondary-new2-300 hover:bg-gray-100 hover:dark:border-sfsecondary-new2-600 hover:dark:bg-neutral-800/30">
                <h2 className={`mb-3 text-2xl font-semibold`}><span className='text-3xl text-sfsecondary-new1-500'>2. </span>
                Delivery to SF AMS Warehouse{' '}
                </h2>
                <div className='grid grid-cols-2 my-auto'>
                    <div>
                        <Image
                            src="/warehouse.svg"
                            alt="warehouse"
                            className=" mx-auto my-3"
                            width={45}
                            height={45}
                            priority
                            />
                        <h3>SF AMS Warehouse</h3>
                    </div>
                    <div>
                        <Image
                        src="/customs.svg"
                        alt="customs"
                        className=" mx-auto my-3"
                        width={45}
                        height={45}
                        priority
                        />
                        <h3>Customs Clearence</h3>
                    </div>
                    
                </div>
                
                </div>
                <div className=" border-dashed border-sfsecondary-new1-600 group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-sfsecondary-new2-300 hover:bg-gray-100 hover:dark:border-sfsecondary-new2-600 hover:dark:bg-neutral-800/30">
                <h2 className={`mb-3 text-2xl font-semibold`}>
                <span className='text-3xl text-sfsecondary-new1-500'>3. </span>
                Transit hub in China of SF{' '}
                </h2>
                <div className='grid grid-cols-2 my-auto'>
                    <div>
                            <Image
                                src="/warehouse.svg"
                                alt="warehouse"
                                className=" mx-auto my-3"
                                width={45}
                                height={45}
                                priority
                                />
                        <h3>China</h3>
                        <Image
                                src="/warehouse.svg"
                                alt="warehouse"
                                className=" mx-auto my-3"
                                width={45}
                                height={45}
                                priority
                                />
                        <h3>HK Hub</h3>
                    </div>
                    <div>
                    <Image
                        src="/home1.svg"
                        alt="home"
                        className=" mx-auto my-3"
                        width={45}
                        height={45}
                        priority
                        />
                    <h3>China Mainland</h3>
                    <Image
                        src="/home1.svg"
                        alt="home"
                        className=" mx-auto my-3"
                        width={45}
                        height={45}
                        priority
                        />
                    <h3>Other Countries</h3>
                    </div>
          
                </div>
               
                  
                </div>
            
        </div>
            <h3>Features of Commodies:</h3>
            <p>middle/high value</p>
            <p>time-senstive</p>
        
        </div>
    )
}