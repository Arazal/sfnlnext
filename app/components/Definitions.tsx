import Image from 'next/image'

export default function Definitions() {
    return (
        <>
        <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark: to-sfsecondary-new1-700 before:dark:opacity-10 after:dark: from-sfsecondary-new1-200 after:dark:via-[#c8102e] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
            <h1 className="  text-center text-4xl text-white m-3">SF Economy Express (International) Definitions</h1>
        </div>
        <div className='text-center m-3 font-miller '>
        {/* <h1 className='text-3xl m-3'>SF Economy Express (International) Definitions</h1> */}
            <p>SF Economy Express (International) is an international economy express delivery serivce launched for customers who need ship middle/high-value commodities and who are demanding on transit time and service</p>
       
        <div className='grid sm:grid-cols-1 md:grid-cols-3 gap-3 text-center m-3 font-miller'>
            
            <div className=" border-dashed  group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-sfsecondary-new2-300 hover:bg-gray-100 hover:dark:border-sfsecondary-new2-600 hover:dark:bg-neutral-800/30">
                <h2 className={`mb-3 text-2xl font-semibold`}>Netherlands</h2>
                <Image
                        src="/company.svg"
                        alt="company"
                        className="dark:invert mx-auto"
                        width={45}
                        height={45}
                        priority
                        />
                <h3>Stores</h3>
                    <Image
                        src="/store.svg"
                        alt="store"
                        className="dark:invert mx-auto"
                        width={45}
                        height={45}
                        priority
                        />
                        <h3>Company</h3>
                    <Image
                        src="/people.svg"
                        alt="people"
                        className="dark:invert mx-auto"
                        width={45}
                        height={45}
                        priority
                        />
                        <h3>Consumer</h3>
            </div>
            <div className=" border-dashed  group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-sfsecondary-new2-300 hover:bg-gray-100 hover:dark:border-sfsecondary-new2-600 hover:dark:bg-neutral-800/30">
                <h2 className={`mb-3 text-2xl font-semibold`}>
                Delivery to SF AMS Warehouse{' '}
                </h2>
                <Image
                        src="/warehouse.svg"
                        alt="warehouse"
                        className="dark:invert mx-auto"
                        width={45}
                        height={45}
                        priority
                        />
                <h3>SF AMS Warehouse</h3>
                    <Image
                        src="/customs.svg"
                        alt="customs"
                        className="dark:invert mx-auto"
                        width={45}
                        height={45}
                        priority
                        />
                        <h3>Customs Clearence</h3>
                </div>
                <div className=" border-dashed  group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-sfsecondary-new2-300 hover:bg-gray-100 hover:dark:border-sfsecondary-new2-600 hover:dark:bg-neutral-800/30">
                <h2 className={`mb-3 text-2xl font-semibold`}>
                Transit hub in China of SF{' '}
                </h2>
                <Image
                        src="/warehouse.svg"
                        alt="warehouse"
                        className="dark:invert mx-auto"
                        width={45}
                        height={45}
                        priority
                        />
                <h3>China</h3>
                <Image
                        src="/warehouse.svg"
                        alt="warehouse"
                        className="dark:invert mx-auto"
                        width={45}
                        height={45}
                        priority
                        />
                <h3>HK Hub</h3>
                    <Image
                        src="/customs.svg"
                        alt="customs"
                        className="dark:invert mx-auto"
                        width={45}
                        height={45}
                        priority
                        />
                    <h3>China Mainland</h3>
                    <Image
                        src="/customs.svg"
                        alt="customs"
                        className="dark:invert mx-auto"
                        width={45}
                        height={45}
                        priority
                        />
                    <h3>Other Countries</h3>
                </div>
            <h3>Features of Commodies</h3>
            <p>middle/high value</p>
            <p>time-senstive</p>
        </div>
        </div>
        </>
    )
}