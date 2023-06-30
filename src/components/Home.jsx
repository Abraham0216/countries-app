import React, { useContext } from 'react';
import { appContext } from '../App';
import { AiOutlineSearch } from "react-icons/ai";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RiArrowDropUpLine } from "react-icons/ri";


const Home = () => {

  const { filteredCountries, isOpen, setIsOpen, handleCountryClick, searchTerm, selectedRegion, handleSearchChange, handleRegionChange, isDark } = useContext(appContext);

  return (

    <div className='lg:px-14 pt-32'>
      <div className='flex flex-col  mx-auto   '>
        <div className='flex flex-col ml-4 lg:ml-0 justify-center lg:flex-row lg:justify-between  lg:items-center mb-6'>
          <div className={` transition-all duration-500 ease-in-out  w-11/12 lg:w-2/5 lg: py-4 px-6  rounded-xl shadow-md ${isDark && 'bg-darkBlue text-white'}`}>
            <label className='flex flex-row items-center justify-between lg:justify-around' htmlFor='inputField'>
              <AiOutlineSearch style={{ width: "24px", height: "24px", opacity: "0.4" }} />
              <input id="inputField" className='bg-inherit w-4/5 outline-none' type="text" value={searchTerm} onChange={handleSearchChange} placeholder="Search for a country..." />
            </label>
          </div>

          <div className={`relative mt-8 mb-10  transition-all duration-500 ease-in-out w-60 rounded-xl shadow-md justify-start ${isDark && 'bg-darkBlue text-white'}`}>



            <button onClick={() => setIsOpen(!isOpen)} className='p-4 w-full  cursor-pointer bg-inherit  outline-none border-none shadow-sm rounded-md  focus:bg-inherit flex justify-between items-center' id="regionFilter" value={selectedRegion} onChange={handleRegionChange}>

              <label className='cursor-pointer' htmlFor="regionFilter">Filter by Region {selectedRegion}</label>
              {!isOpen ?
                <RiArrowDropDownLine style={{ width: "24px", height: "24px", opacity: "0.4" }} />
                : <RiArrowDropUpLine style={{ width: "24px", height: "24px", opacity: "0.4" }} />
              }
            </button>


            {isOpen && (
              <ul className={`bg-inherit w-full absolute top-16 rounded-lg shadow-md px-6 py-2 transition-all duration-500 ease-in-out ${isDark ? 'bg-darkBlue text-white' : 'bg-white'}`} id="regionFilter" value={selectedRegion} onChange={handleRegionChange}>
                <li className='mb-2.5 cursor-pointer' onClick={() => handleRegionChange('')} value="">All</li>
                <li className='mb-2.5 cursor-pointer' onClick={() => handleRegionChange('Africa')} value="africa">Africa</li>
                <li className='mb-2.5 cursor-pointer' onClick={() => handleRegionChange('Americas')} value="americas">Americas</li>
                <li className='mb-2.5 cursor-pointer' onClick={() => handleRegionChange('Asia')} value="asia">Asia</li>
                <li className='mb-2.5 cursor-pointer' onClick={() => handleRegionChange('Europe')} value="europe">Europe</li>
                <li className='mb-2.5 cursor-pointer' onClick={() => handleRegionChange('Oceania')} value="oceania">Oceania</li>
              </ul>
            )}

          </div>

        </div>
      </div>


      <div className='flex flex-col lg:flex-row lg:flex-wrap lg:justify-center items-center gap-14 pb-8'>
        {filteredCountries?.map(country => (
          <div className={`w-[290px] h-[370px] transition-all duration-500 ease-in-out  max-w-sm rounded shadow-lg cursor-pointer  ${isDark && 'bg-darkBlue text-white'}`} key={country.cca3} onClick={() => handleCountryClick(country)} >
            <img className='h-[213px] w-full rounded-t-xl object-cover' src={country.flags.png} alt="flag"></img>
            <div className='px-6 py-4'>
              <h2 className='font-bold text-xl mb-2'>{country.name.common}</h2>

              <p className='text-base'><span className='font-semibold'>Population: </span>{country.population.toLocaleString()}</p>
              <p className='text-base'><span className='font-semibold'>Region: </span>{country.region}</p>
              <p className='text-base'><span className='font-semibold'>Capital: </span>{country.capital}</p>

            </div>

          </div>

        ))}
      </div>
    </div>
  );
}

export default Home;
