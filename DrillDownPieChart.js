import React, { Fragment, useState } from 'react';
import './recharts.css';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

const colors = [
  '#FF6363',
  '#63C2FF',
  '#FFB563',
  '#63FF94',
  '#A763FF',
  '#FF63F8',
  '#FFCE63',
  '#63FFD6',
  '#FFA663',
  '#63A0FF',
];

const DrillDownPieChart = () => {
  const [data, setData] = useState([
    { name: 'Range A', value: 1, label: '1-25' },
    { name: 'Range B', value: 1, label: '26-50' },
    { name: 'Range C', value: 1, label: '51-75' },
    { name: 'Range d', value: 1, label: '76-100' },
    { name: 'Range e', value: 1, label: '101-125' },
    { name: 'Range f', value: 1, label: '126-150' },
    { name: 'Range g', value: 1, label: '151-175' },
    { name: 'Range h', value: 1, label: '176-200' },
    { name: 'Range i', value: 1, label: '201-224' },
  ]);

  const [previousData, setPreviousData] = useState([]);

  const handleSliceClick = (name) => {
    let subRangeData = [];

    if (name === 'Range A') {
      subRangeData = [
        { name: 'Range A Subrange 1', value: 1, label: 'Hebbal' },
        { name: 'Range A Subrange 2', value: 1, label: 'Yelhanka' },
        { name: 'Range A Subrange 3', value: 1, label: 'Rupa' },
        { name: 'Range A Subrange 4', value: 1, label: 'Rupa' },
        { name: 'Range A Subrange 5', value: 1, label: 'Rupa' },
        { name: 'Range A Subrange 6', value: 1, label: 'Rupa' },
        { name: 'Range A Subrange 7', value: 1, label: 'Rupa' },
        { name: 'Range A Subrange 8', value: 1, label: 'Rupa' },
        { name: 'Range A Subrange 9', value: 1, label: 'Rupa' },
        { name: 'Range A Subrange 10', value: 1, label: 'Rupa' },
        { name: 'Range A Subrange 11', value: 1, label: 'Rupa' },
        { name: 'Range A Subrange 12', value: 1, label: 'Rupa' },
        { name: 'Range A Subrange 13', value: 1, label: 'Rupa' },
        { name: 'Range A Subrange 14', value: 1, label: 'Rupa' },
        { name: 'Range A Subrange 15', value: 1, label: 'Rupa' },
        { name: 'Range A Subrange 16', value: 1, label: 'Rupa' },
        { name: 'Range A Subrange 17', value: 1, label: 'Rupa' },
        { name: 'Range A Subrange 18', value: 1, label: 'Rupa' },
        { name: 'Range A Subrange 19', value: 1, label: 'Rupa' },
        { name: 'Range A Subrange 20', value: 1, label: 'Rupa' },
        { name: 'Range A Subrange 21', value: 1, label: 'Rupa' },
        { name: 'Range A Subrange 22', value: 1, label: 'Rupa' },
        { name: 'Range A Subrange 23', value: 1, label: 'Rupa' },
        { name: 'Range A Subrange 24', value: 1, label: 'Rupa' },
        { name: 'Range A Subrange 25', value: 1, label: 'Rupa' },
        

        
      ];
    } else if (name === 'Range B') {
      subRangeData = [
        { name: 'Range B Subrange 1', value: 5, label: 'Udaya' },
        { name: 'Range B Subrange 2', value: 5, label: 'Jaya' },
        { name: 'Range B Subrange 3', value: 5, label: 'Sai' },
      ];
    }

    setPreviousData(data); // Store the previous data before updating
    setData(subRangeData);
  };

  const handleBackClick = () => {
    setData(previousData); // Restore the previous data
    setPreviousData([]);
  };

  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const RADIAN = Math.PI / 180;
    const radius = outerRadius + 10; // Distance between slice and label
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
    const angle = midAngle > 90 && midAngle < 270 ? midAngle + 180 : midAngle; // Adjust label position for slices in the left half of the pie chart

    return (
      <text x={x} y={y} fill="sage green" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {data[index].label}
      </text>
    );
  };

  return (
    <Fragment>
      {previousData.length > 0 && (
        <button onClick={handleBackClick} style={{ marginBottom: '10px' }}>
          Back
        </button>
      )}
      <ResponsiveContainer width="100%" height={550}>
        <PieChart>
          <Pie
            data={data}
            label={renderCustomizedLabel}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={180}
            onClick={(data, index, e) => handleSliceClick(data.name)}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </Fragment>
  );
};

export default DrillDownPieChart;
