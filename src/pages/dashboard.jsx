import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { Select, MenuItem, InputLabel } from '@material-ui/core';
import * as d3 from "d3";
import {Bar} from '../components';
const Dashboard = () => {
  const generateData = (value, length = 5) =>
    d3.range(length).map((item, index) => ({
      index: index,
      date: index,
      value: value === null || value === undefined ? Math.random() * 100 : value
    }));
  const [distSelected, setDistSelected] = useState('walk');
  const [kmSelected, setKmSelected] = useState('walk');
  const [data, setData] = useState(generateData());
  const [data2, setData2] = useState(generateData());
  const handleChangedist = (e) => {
    setDistSelected(e.target.value);
    setData(generateData());
  };
  const handleChangeKm = (e) => {
    setKmSelected(e.target.value);
    setData2(generateData());
  };
  return (
    <section className="dashboard-wrapper">
      <h1>Dashboard Resume</h1>
      <div className="flex-wrapper">
        <div className="col col-1">
          <div className="g-area">
          <Bar
          data={data}
          width={320}
          height={250}
          top={20}
          bottom={30}
          left={30}
          right={0}
        />
          </div>
          <InputLabel id="dist-yearl">Distancia en un año</InputLabel>
          <Select
            labelId="dist-year"
            id="distance-select"
            value={distSelected}
            onChange={handleChangedist}
          >
            <MenuItem value="walk">Walk</MenuItem>
            <MenuItem value="Cycling">Cycling</MenuItem>
          </Select>
        </div>
        <div className="col col-2">
          <div className="g-area">
          <Bar
          data={data2}
          width={320}
          height={250}
          top={20}
          bottom={30}
          left={30}
          right={0}
        />
          </div>
          <InputLabel id="km-year">Kilometros en un año</InputLabel>
          <Select
            labelId="km-year"
            id="km-select"
            value={kmSelected}
            onChange={handleChangeKm}
          >
            <MenuItem value="walk">Walk</MenuItem>
            <MenuItem value="cycling">Cycling</MenuItem>
          </Select>
        </div>
      </div>
    </section>
  );
};

export default withRouter(Dashboard);
