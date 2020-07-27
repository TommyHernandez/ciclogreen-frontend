import React from 'react';
import { withRouter } from 'react-router-dom';

export const Rutas = () => {
  return (
    <section className="rutas-page">
      <h1>Welcome From the routes page</h1>
    </section>
  );
};
export default withRouter(Rutas);
