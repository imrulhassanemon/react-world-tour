import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Countries.css'

const Countries = () => {
   const[countries, setCountries] = useState([])
   const [VisitedCountries, setVisitedCountries] = useState([])
   const [VisitedCountriesFlag, setVisttedCountriesFlag] = useState([])

   useEffect(()=> {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => setCountries(data))
   }, [])

   const handelVisitedCountry = country => {
    console.log('add this to your visited country');
    // console.log(country);
    const newVisitedCountries = [...VisitedCountries, country]
    setVisitedCountries(newVisitedCountries)
   }

//    handel visited countries flag 
   const handelVisitedFlag = (flag) => {
    const newVisitedFlag = [...VisitedCountriesFlag, flag]
    setVisttedCountriesFlag(newVisitedFlag)
   }


   

    return (
        <div>
            <h3>Countries: {countries.length} </h3>
            <div>
                <h5>Visited countries {VisitedCountries.length} </h5>
                <ul>
                    {
                        VisitedCountries.map(country =>  <li key={country.cca3}>{country.name.common} <img src={country.flag.png} alt="" /> </li>)
                    }
                </ul>
            </div>
            <div>
            {/* show visited countries flag */}

            <div className="hei-wig">
                {
                    VisitedCountriesFlag.map((flg, id) =>  <img key={id} src={flg}></img> )
                }
            </div>

                {/* show flag */}
                <img src= {VisitedCountriesFlag.flag} alt="" />
            </div>
            <div className="countries">
            {
                countries.map(count => <Country key={count.cca3}
                 handel = {handelVisitedCountry}
                  con ={count}
                  handelVisitedFlag = {handelVisitedFlag}
                  >
                   
                </Country>)   
            }
            </div>
        </div>
    );
};

export default Countries;