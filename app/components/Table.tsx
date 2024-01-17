export default function Table() {
    return (
        <>
    {/* <h3 className="text-center m-3 ">Current Service Coverage</h3>

    <h4 className="text-center m-3">23 Countries and Regions, from Europe to Asia/North America etc.</h4>
    <h4 className="text-center m-3">SF Economy Express (International) Coverage</h4> */}

    <section className="grid grid-cols-3 gap-1 m-3  mx-auto group text-sm">
      <div className="text-center bg-sfprimary-new1-300 text-primary-50">Zone Area</div>
      <div className="text-center bg-sfprimary-new1-300 text-primary-50">Destinations (ex AMS)</div>
      <div className="text-center bg-sfprimary-new1-300 text-primary-50">Ttransit Time (working days)</div>
      <div className="text-center bg-[#FF0100]">A</div>
      <div className="text-center bg-[#FF0100] ">
          <p>China mainland</p>
          <p>Hong Kong</p>
          <p>Macao</p>
      </div>
      <div className="text-center bg-[#FF0100] ">3-5</div>

      <div className="text-center bg-[#80659F]">B</div>
      <div className="text-center bg-[#80659F]">
        <p>Singapore</p>
        <p>Thailand</p>
        <p>Taiwan</p>
        <p>Vietnam</p>
        <p>Philippines</p>
        <p>Japan</p>
        <p>Korea</p>
      </div>
      <div className="text-center bg-[#80659F]">3-6</div>

      <div className="text-center bg-[#F79745]">C</div>
      <div className="text-center bg-[#F79745]">
        <p>India</p>
        <p>Bangladesh</p>
        <p>Malaysia</p>
        <p>United Arab Emirates</p>
        <p>Indonesia</p>
        <p>Sri Lanka</p>
        <p>Australia</p>
        <p>New Zealand</p>
      </div>
      <div className="text-center bg-[#F79745]">4-7</div>

      <div className="text-center bg-[#5081BE]">D</div>
      <div className="text-center bg-[#5081BE]">
        <p>Nepal</p>
        <p>Pakistan</p>
        <p>Canada</p>
        <p>America</p>
      </div>
      <div className="text-center bg-[#5081BE]">4-8</div>

      <div className="text-center text-black bg-[#FDFF05]">E</div>
      <div className="text-center text-black bg-[#FDFF05]">
        <p>South Africa</p>
      </div>
      <div className="text-center text-black bg-[#FDFF05]">5-9</div>

    </section>
        </>
    )
}