import React from 'react';
import { withRouter } from 'react-router-dom';

const Dashboard = () => {
  return (
    <section className="dashboard-wrapper">
      <h1>Welcome to the dashboard</h1>
    </section>
  );
};

export default withRouter(Dashboard);
