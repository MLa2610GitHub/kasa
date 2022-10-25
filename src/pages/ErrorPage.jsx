import React from 'react';
import '../../src/index.scss';
import { Link } from 'react-router-dom';


const ErrorPage = () => {
  return (
    <div>
      <h2>Oups! La page que vous demandez n'existe pas !</h2>
     
      <Link to='/'>Retourner sur la page d’accueil</Link>
    </div>
  );
};

export default ErrorPage;
