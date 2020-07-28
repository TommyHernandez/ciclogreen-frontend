import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { db } from '../firebaseConfig';
import { Ruta } from '../components';
export const Rutas = () => {
  const [rutas, setRutas] = useState([]);
  useEffect(() => {
    let newRoutes = [];
    db.collection('routes')
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          console.log(doc.data());
          newRoutes.push(doc.data());
        });
        setRutas(newRoutes);
      });
  }, []);
  return (
    <section className="rutas-page">
      <h1>Lista de rutas</h1>
      <div className="routes-container">
        {rutas.map(r => <Ruta {...r} />)}
        
      </div>
    </section>
  );
};

export default withRouter(Rutas);
