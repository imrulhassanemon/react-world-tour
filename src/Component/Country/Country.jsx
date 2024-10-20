import { useState } from 'react';
import './Country.css'
const Country = ({con}) => {

    const [visited, setVisited] = useState(false)

    const handelVisited = ()=> {
        setVisited(!visited)
    }




    console.log(con);
    const {name, flags, population, area, cca3} = con;
    return (
        <div className={`box ${visited? 'visited': 'non-visited'}`}>
            <h3 style={{color:visited? 'purple': 'white'}}>Country Name : {name.common} </h3>
            <img src= {flags.png} style={{height: '200px', width: '200px', objectFit: 'cover' }} alt="hel" />
            <p>Population : {population} </p>
            <p>Area : {area} (squre kilometer)</p>
            <p><small>Code: {cca3} </small></p>
            <button onClick={handelVisited} >{visited? 'Visited': 'Going'}</button> <br />
            {
                visited ? 'I have visited this country': 'I want to visite'
            }

        </div>
    );
};

export default Country;