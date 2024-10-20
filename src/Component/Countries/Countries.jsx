import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Countries.css'

const Countries = () => {
   const[countries, setCountries] = useState([])

   useEffect(()=> {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => setCountries(data))
   }, [])


    return (
        <div>
            <h3>Countries: {countries.length} </h3>
            <div className="countries">
            {
                countries.map(count => <Country key={count.cca3} con ={count}></Country>)   
            }
            </div>
        </div>
    );
};

export default Countries;