import React from 'react';
import {
  LineChart,
  Line,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from 'recharts';

const chartData = [
  { name: 'Jan', revenue: 2000 },
  { name: 'Feb', revenue: 2800 },
  { name: 'Mar', revenue: 3500 },
  { name: 'Apr', revenue: 4200 },
  { name: 'May', revenue: 5000 },
  { name: 'Jun', revenue: 6200 },
  { name: 'Jul', revenue: 7400 },
  { name: 'Aug', revenue: 8600 },
  { name: 'Sep', revenue: 9500 },
  { name: 'Oct', revenue: 10300 },
  { name: 'Nov', revenue: 11200 },
  { name: 'Dec', revenue: 12500 },
];

export default function RevenueChart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={chartData} margin={{ top: 10, right: 20, bottom: 0, left: 0 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
        <XAxis dataKey="name" tick={{ fontSize: 12 }} />
        <YAxis tick={{ fontSize: 12 }} />
        <Tooltip formatter={value => `${value} Rs`} />
        <Line
          type="monotone"
          dataKey="revenue"
          stroke="#3b82f6"
          strokeWidth={3}
          dot={{ r: 4, fill: '#3b82f6' }}
          activeDot={{ r: 6, fill: '#2563eb' }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
