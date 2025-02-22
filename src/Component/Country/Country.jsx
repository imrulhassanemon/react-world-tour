import { useState } from 'react';
import './Country.css'
import ContriesDetails from '../Countries/CountriesDetails/ContriesDetails';
const Country = ({con, handel, handelVisitedFlag}) => {
    
    const {name, flags, population, area, cca3} = con;

    const [visited, setVisited] = useState(false)

    const handelVisited = ()=> {
        setVisited(!visited)
    }
    // console.log(handel);
    


    // console.log(con);
    return (
        <div className={`box ${visited? 'visited': 'non-visited'}`}>
            <h3 style={{color:visited? 'purple': 'white'}}>Country Name : {name.common} </h3>
            <img src= {flags.png} style={{height: '200px', width: '200px', objectFit: 'cover' }} alt="hel" />
            <p>Population : {population} </p>
            <p>Area : {area} (squre kilometer)</p>
            <p><small>Code: {cca3} </small></p>
            <button onClick={() => handelVisitedFlag(con.flags.png)}>handelVisitedFlag</button>
            <br />
            <button onClick={() => handel(con)}>Mark visited</button>
            <br />
            <button onClick={handelVisited} >{visited? 'Visited': 'Going'}</button> <br />
            {
                visited ? 'I have visited this country': 'I want to visite'
            }
            <hr />
            <ContriesDetails
                con = {con}
                handel = {handel}
                handelVisitedFlag = {handelVisitedFlag}
            ></ContriesDetails>

        </div>
    );
};

export default Country;