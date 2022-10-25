
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import logements from '../logements.json';


const FicheLogement = () => {
    const { logementId } = useParams();
    const logement = logements.find((logement) => logement.id === logementId);
    const { image, title, tag, description, host, rating, location, equipments } = logement;

    return (
      <section className="section logement">
        <img src={image} alt={title} />
        <h2>{title}</h2>
        <h5>{tag}</h5>
        <h5>{rating}</h5>
        <h5>{host}</h5>
        <h5>{location}</h5>
        <h3>{description}</h3>
        <h3>{equipments}</h3>

        <Link to="/logements">Retour aux logements</Link>
      </section>
    );
};

export default FicheLogement;