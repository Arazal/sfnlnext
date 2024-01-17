'use client'

import { useState, useEffect } from 'react'
            const adderRates = {
                'A': '45',
                'B': '47',
                'C': '68',
                'D': '84',
                'E': '76',
            }

             const Countries = {   
                "China Mainland": "A",
                ["Hong Kong"]: "A",
                "Macao": "A",
                "Thailand": "B",
                "Taiwan": "B",
                "Singapore": "B",
                "Vietnam": "B",
                "Japan": "B",
                "Korea":"B",
                "Philippines": "B",
                "Bangladesh": "C",
                "India": "C",
                "Malaysia": "C",
                "UAE": "C",
                "Indonesia": "C",
                "Sri Lanka": "C",
                "Australia": "C",
                "New Zealand": "C",
                "Pakistan": "D",
                "U.S.A": "D",
                "Canada": "D",
                "Nepal": "D",
                "South Africa": "E" 
            }

export default function Slide8() {
    const [country, setCountry] = useState('')
    const [weight, setWeight] = useState(0)
    const [length, setLength] = useState(0)
    const [width, setWidth] = useState(0)
    const [height, setHeight] = useState(0)
    const [volumicWeight, setVolumicWeight] = useState(null)
    const [jsonData, setJsonData] = useState({});
    const [selectedCountry, setSelectedCountry] = useState('');
    const [countryList, setCountryList] = useState(Countries)
    const [shipmentType, setShipmentType] = useState('')
    const [roundedWeight, setRoundedWeight] = useState(null)
    const [adder, setAdder] = useState(0)

    const [selectedWeight, setSelectedWeight] = useState(null)

    const [result, setResult] = useState('')



useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await fetch('/data1.json'); // Replace with the actual path
      const data = await response.json();
      setJsonData(data);
    } catch (error) {
      console.error('Error reading JSON file:', error);
    }
  };

  fetchData();
}, []); 

    const handleShipmentType = (e) => {
        setShipmentType(e.target.value)
    }

    const handleCountryChange = (event) => {
        setSelectedCountry(event.target.value);
    };
    const handleWeightChange = (e) => {
        setWeight(e.target.value)
    }
    const handleLengthChange = (e) => {
        setLength(e.target.value)
    }
    const handleWidthChange = (e) => {
        setWidth(e.target.value)
    }
    const handleHeightChange = (e) => {
        setHeight(e.target.value)
    }

    function roundToHalf(number: number): number {
        const rounded = Math.ceil(number * 2) / 2;
        return rounded;
    }

    

    const handleSubmit = (e) => {
        e.preventDefault();
      
        const volumicWeightResult = (length * width * height) / 5000;
      
        let selectedWeightResult;
      
        if (weight > volumicWeightResult) {
          selectedWeightResult = weight;
        } else {
          selectedWeightResult = volumicWeightResult;
        }
      
        setSelectedWeight((prevSelectedWeight) => selectedWeightResult);
      
        let roundedWeightResult;
      
        if (selectedWeightResult <= 20) {
          roundedWeightResult = roundToHalf(selectedWeightResult);
        } else if (selectedWeightResult > 20) {
          roundedWeightResult = Math.ceil(selectedWeightResult);
        }
      
        setRoundedWeight((prevRoundedWeight) => roundedWeightResult);
      
        try {
          if (weight && length && width && height && shipmentType) {
            if (selectedWeightResult <= 3) {
              const result = jsonData[countryList[selectedCountry]][shipmentType][roundedWeightResult];
            //   console.log(result);
              setResult(result)
            } else if (selectedWeightResult > 3 && selectedWeightResult <= 30) {
              const result = jsonData[countryList[selectedCountry]]['Doc/Non-doc'][roundedWeightResult];
            //   console.log(result);
              setResult(result)
            } else if (selectedWeightResult > 30) {
              // Handle the case for weight greater than 30
              const adder = (roundedWeightResult - 30)
            //   console.log(roundedWeightResult, adder, countryList[selectedCountry])
              const addedCost = adder * adderRates[countryList[selectedCountry]]
            //   console.log(addedCost)
              const result = jsonData[countryList[selectedCountry]]['Doc/Non-doc'][roundedWeightResult -adder] + addedCost;
              console.log(result);
              setResult(result)
            }
          } else {
            console.log('Not all the data is available');
          }
        } catch (e) {
          console.log(e);
        }
      
        setVolumicWeight(prevWeight => volumicWeightResult);
      };
      

    return (
        
    <div className=' md:w-1/2 mx-auto m-3 mt-12'>
        <h3 className='text-center text-3xl'>SF Economy Express(International) Rates Policy</h3>
        {/* <div>{`Zone ${countryList[selectedCountry]}`}</div>
        <div>{`volumetric weight (L x W x H (cm) ÷ 5,000): ${volumicWeight}`}</div>
        <div>{`Weight ${weight}`}</div> */}
        <div className=' columns-1 text-center text-xl m-3'>
            {countryList[selectedCountry] && <div>{`Zone: ${countryList[selectedCountry]}`}</div>}
            
            {weight && <div>{`Weight: ${weight}`}</div>}
            { volumicWeight && <div>{`Volumetric weight: ${volumicWeight}`}</div>}
            { roundedWeight && <div>{`Rounded weight: ${roundedWeight}`}</div>}
            {/* {length && width && height && <div>{`L+W+H: ${length + width + height} from 360`}</div>} */}
            {shipmentType && <div>{`Shpmnt type: ${shipmentType}`}</div>}
            {result && <div className=' text-sfsecondary-new1-600 animate-pulse text-2xl'>{`Result: ${result} €`}</div>}

        </div>
        



    <form onSubmit={handleSubmit} className=" m-3  mx-auto grid sm:grid-cols-1 md:grid-cols-2 gap-3 rounded-md  bg-white p-4 text-sfprimary-new1-950 shadow-2xl">
 
        <div className="space-y-1">
        <label className='' htmlFor="shipmentType">Select shipment type:</label>
            <select id="shipmentType" value={shipmentType} onChange={handleShipmentType} className="block w-full rounded-md border-2 p-2"  required >
                <option value="">Select shipment type</option>
                <option value="Document">Document</option>
                <option value="Non-document">Non-document</option>
            </select>
        </div>
        <div className="space-y-1">
        <label className='' htmlFor="countrySelect">Select a Country:</label>
            <select id="countrySelect" value={selectedCountry} onChange={handleCountryChange} className="block w-full rounded-md border-2 p-2"  required >
                <option value="">Select a country</option>
                <option value="China Mainland">China Mainland</option>
                <option value="Hong Kong">Hong Kong</option>
                <option value="Macao">Macao</option>
                <option value="Thailand">Thailand</option>
                <option value="Taiwan">Taiwan</option>
                <option value="Singapore">Singapore</option>
                <option value="Vietnam">Vietnam</option>
                <option value="Japan">Japan</option>
                <option value="Korea">Korea</option>
                <option value="Philippines">Philippines</option>
                <option value="Bangladesh">Bangladesh</option>
                <option value="India">India</option>
                <option value="Malaysia">Malaysia</option>
                <option value="UAE">UAE</option>
                <option value="Indonesia">Indonesia</option>
                <option value="Sri Lanka">Sri Lanka</option>
                <option value="Australia">Australia</option>
                <option value="New Zealand">New Zealand</option>
                <option value="Pakistan">Pakistan</option>
                <option value="U.S.A">U.S.A</option>
                <option value="Canada">Canada</option>
                <option value="Nepal">Nepal</option>
                <option value="South Africa">South Africa</option>
                {/* Add more countries as needed */}
            </select>
      </div>

        <div className="space-y-1">
            <label htmlFor="weight" className="block text-sm font-semibold">Weight (kg)</label>
            <input min={0.1} max={50}   onChange={handleWeightChange} value={weight} type="number" step='0.1' maxLength={7} id="weight" className="block w-full rounded-md border-2 p-2" required />
        </div>
        <div className="space-y-1">
            <label htmlFor="length" className="block text-sm font-semibold">Length (cm)</label>
            <input min={1} max={120}  onChange={handleLengthChange} value={length} type="number" id="length" className="block w-full rounded-md border-2 p-2" required />
        </div>
        <div className="space-y-1">
            <label htmlFor="width" className="block text-sm font-semibold">Width (cm)</label>
            <input min={1} max={80}  onChange={handleWidthChange} value={width} type="number" id="width" className="block w-full rounded-md border-2 p-2" required />
        </div>
        <div className="space-y-1">
            <label htmlFor="height" className="block text-sm font-semibold">Height (cm)</label>
            <input  min={1} max={160} onChange={handleHeightChange} value={height} type="number" id="height" className="block w-full rounded-md border-2 p-2" required />
        </div>  



  <div className="space-x-2">
    <button className="border border-sfsecondary-new1-400 p-3 hover:bg-sfsecondary-new1-500  hover:text-white m-1">Calculate</button>
  </div>
</form>
</div>

    )
}