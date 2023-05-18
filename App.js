import React from 'react';
import DrillDownPieChart from './Components/DrillDownPieChart';

import './Components/recharts.css';
import './App.css';

const App = () => {
  return (
    <div className="pie-chart-container">
      <h1 style={{ backgroundColor: 'yellow', color: 'black', padding: '10px' }}>Drill-Down Pie Chart with Ranges</h1>
      <DrillDownPieChart />
      
    </div>
  );
};

export default App;
