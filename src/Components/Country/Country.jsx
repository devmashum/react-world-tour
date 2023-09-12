import { useState } from 'react';
import './Country.css'
const Country = ({ country }) => {
    console.log(country)
    const { name, flags, population, cca3
    } = country;
    const [visited, setVisited] = useState(false);

    const handleVisited = () => {
        setVisited(!visited);
    }

    return (
        <div className="country">
            <h4>Name: {name.official} </h4>
            <img className='img' src={flags.png} alt="" />
            <p>population
                : {population
                }</p>
            <p><small>Code: {cca3}</small></p>
            <button onClick={handleVisited}>{visited ? 'Visited' : 'Going'}</button>
            {visited ? 'I have visited this country' : 'I want to visit'}

        </div >
    );
};

export default Country;