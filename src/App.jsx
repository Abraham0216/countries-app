import React, { createContext, useEffect, useState } from 'react';
import axiosConfig from './axiosConfig';
import CountryDetails from './components/CountryDetails';
import Home from './components/Home';
import { MdOutlineNightlight } from "react-icons/md";


export const appContext = createContext(null)

function App() {
  const [responseData, setResponseData] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('');
  const [isDark, setIsDark] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
    

  useEffect(() => {
    axiosConfig.get('/all/')
      .then(response => {
        setResponseData((response.data))
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const handleCountryClick = (country) => {
    setSelectedCountry(country);
  };

  
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleRegionChange = (region) => {
    setSelectedRegion(region);
    setSelectedCountry(null); // Reset selected country when region changes
    setIsOpen(false)

  };


  
  

  let filteredCountries = [];

  if (responseData) {
    filteredCountries = responseData.filter(country => {
      const commonName = country.name.common.toLowerCase();
      const searchTermLower = searchTerm.toLowerCase();
      return commonName.includes(searchTermLower);
    });
  }

  if (selectedRegion !== '') {
    filteredCountries = filteredCountries.filter(country => {
      return country.region.toLowerCase() === selectedRegion.toLowerCase();
    });
  }


  
   

  
  return (
    <appContext.Provider value={{responseData, filteredCountries, handleCountryClick, setSelectedCountry, selectedCountry, searchTerm, setSearchTerm, selectedRegion, setSelectedRegion,handleSearchChange, handleRegionChange, isDark, isOpen, setIsOpen}}>
    <div className={`App min-h-screen   transition-all duration-500 ease-in-out ${isDark ? 'bg-veryDarkBlue' : 'bg-veryLightGray text-textDarkBlue'}`}>
    <div className={`h-20 fixed top-0  shadow-lg w-screen flex items-center justify-between transition-all duration-500 ease-in-out px-8 font-extrabold ${isDark ? 'bg-darkBlue' : 'bg-white'}`}>
          <h2 className={`text-lg transition-all duration-500 ease-in-out lg:text-2xl ${isDark && 'text-white'}`}>Where in the world?</h2>
          <button onClick={() => setIsDark(!isDark)} className={`bg-inherit transition-all duration-500 ease-in-out flex items-center ${isDark && 'text-white'}`}><MdOutlineNightlight style={{width: "20px", height: "20px"}}/> <span className='ml-1 text-xs lg:text-lg '>Dark Mode</span></button>
    </div>
     
    {
      !selectedCountry ?
      <Home />
    : <CountryDetails/>
  

    }
    </div>
    </appContext.Provider>
  );
}

export default App;
