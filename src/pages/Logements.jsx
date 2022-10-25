import React from 'react';
import { Link } from 'react-router-dom';
import logements from '../logements.json';

const Logements = () => {
 
  return (
    <section className="section">
      <h2>logements</h2>
      <div className='logements'>{logements.map((logement) => {
       return (
        <article key={logement.id}>
            <h5>{logement.name}</h5>
            <Link to={`/logements/${logement.id} `}>Plus d'info</Link> 

        </article>
       );
    })};
    </div>
    </section>
 
 );
}

export default Logements;
