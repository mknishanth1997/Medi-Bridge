import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

// 💰 Dummy data - Payment Modes Revenue
const data = [
  { name: 'Cash', revenue: 42000, transactions: 120 },
  { name: 'Credit Card', revenue: 38000, transactions: 95 },
  { name: 'UPI', revenue: 55000, transactions: 160 },
  { name: 'Net Banking', revenue: 25000, transactions: 60 },
  { name: 'Insurance', revenue: 30000, transactions: 50 },
  { name: 'Pharmacy Sales', revenue: 15000, transactions: 40 },
];

export default function PaymentModeRevenueChart() {
  return (
    <div style={{ width: '100%', height: 300 }}>
      <ResponsiveContainer>
        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip formatter={value => `₹${value.toLocaleString()}`} />
          <Legend />
          <Bar dataKey="revenue" fill="#4f46e5" name="Revenue (₹)" barSize={40} />
          <Bar dataKey="transactions" fill="#22c55e" name="Transactions" barSize={40} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
