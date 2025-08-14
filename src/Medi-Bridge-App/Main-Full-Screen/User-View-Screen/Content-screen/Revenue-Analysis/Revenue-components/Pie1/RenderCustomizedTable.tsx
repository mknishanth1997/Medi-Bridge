import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
const RADIAN = Math.PI / 180;

// The custom label rendering function remains the same
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? 'start' : 'end'}
      dominantBaseline="central"
      style={{ fontSize: '12px' }}
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export default function AgeGroupRevenueChart() {
  // Use a constant for the dummy data
  const chartData = [
    { name: '0-17', value: 1500 },
    { name: '18-35', value: 4000 },
    { name: '36-55', value: 3200 },
    { name: '56+', value: 2100 },
  ];

  return (
    // Set the overall container to be a flex column
    <div style={{ padding: '12px', display: 'flex', flexDirection: 'column', height: '100%' }}>
      <h3 style={{ marginBottom: '4px' }}>Age Group Revenue</h3>
      <p style={{ fontSize: '12px', color: '#666', marginBottom: '12px' }}>
        Revenue split by patient age category
      </p>
      {/* This div will now take up the remaining space */}
      <div style={{ flex: 1 }}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={chartData}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={80}
              dataKey="value"
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
