import React, { useContext } from 'react';
import { appContext } from '../App';
import { BsArrowLeft } from "react-icons/bs";

const CountryDetails = () => {

  const { responseData, selectedCountry, setSelectedCountry, isDark } = useContext(appContext);


  const goBack = () => {
    setSelectedCountry("")
  }

  const handleBorderCountryClick = (cca3) => {
    responseData.map(country => country.cca3 === cca3 && setSelectedCountry(country))




  };

  return (
    <div className="pt-28 px-4 lg:px-20 min-h-screen  flex justify-center items-center">
      <div>
        <button className={`px-6 py-1 mb-6 xl:mt-6 transition-all duration-500 ease-in-out border  shadow-sm  flex items-center rounded ${isDark && 'bg-darkBlue text-white border-none shadow-black'}`} onClick={goBack}><BsArrowLeft style={{ width: "20px", height: "20px" }} /> <span className='ml-2.5'>Back</span></button>
        {selectedCountry && (
          <div className={`flex flex-col transition-all duration-500 ease-in-out lg:flex-row lg:gap-32 lg:w-full ${isDark && 'text-white'}`}>
            <img className='mb-10 mt-10 mx-auto lg:h-96  object-fill' src={selectedCountry.flags.png} alt="flag"></img>


            <div className='flex flex-col justify-center lg:w-[660px]'>
              <h2 className='font-extrabold text-3xl'>{selectedCountry.name.common}</h2>

              <div className='lg:flex flex-row gap-20 lg:items-start lg:mt-6'>
                <div className='mt-6 lg:mt-0'>
                  <p className='mb-2.5'><span className='font-extrabold'>Native Name:</span> {selectedCountry.name.nativeName ? Object.values(selectedCountry.name.nativeName).map(nativeName => nativeName.common).join(', ') : 'NO INFO'} </p>
                  <p className='mb-2.5'><span className='font-extrabold'>Population:</span> {selectedCountry.population.toLocaleString()}</p>
                  <p className='mb-2.5'><span className='font-extrabold'>Region:</span> {selectedCountry.region}</p>
                  <p className='mb-2.5'><span className='font-extrabold'>Sub Region:</span> {selectedCountry.subregion}</p>
                  <p className='mb-2.5'><span className='font-extrabold'>Capital:</span> {selectedCountry.capital}</p>
                </div>

                <div className='mt-9 lg:mt-0  mb-6'>
                  <p className='mb-2.5'><span className='font-extrabold'>Top Domain:</span> {selectedCountry.tld}</p>
                  <p className='mb-2.5'><span className='font-extrabold'>Currencies:</span> {selectedCountry.currencies ? Object.values(selectedCountry.currencies).map(currency => currency.name).join(', ') : 'NO INFO'} </p>
                  <p className='mb-2.5'><span className='font-extrabold'>Languages:</span> {selectedCountry.languages ? Object.values(selectedCountry.languages).join(', ') : 'NO INFO'}</p>
                </div>
              </div>


              <p className='mt-10 lg:flex flex-row items-center'><span className='font-extrabold'>Border Countries:</span><ul className={'flex flex-row  flex-wrap justify-evenly mt-4 lg:w-3/4 lg:mt-0 mb-14 lg:mb-0 gap-2 '}> {selectedCountry.borders ? (selectedCountry.borders).map(border => <li key={border}><button className={` border rounded shadow-sm  text-xs px-5 py-2  ${isDark && 'bg-darkBlue text-white border-none shadow-black'}`} onClick={() => handleBorderCountryClick(border)}>{responseData.map(country => country.cca3 === border && country.name.common)}</button></li>) : 'NO INFO'} </ul></p>
            </div>

          </div>
        )}
      </div>
    </div>
  );
}

export default CountryDetails;
