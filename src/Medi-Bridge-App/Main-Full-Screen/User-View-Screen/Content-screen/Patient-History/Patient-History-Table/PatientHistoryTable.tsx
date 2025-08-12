import './PatientHistoryTable.css';
import { useData } from '../../../../../context/DataContext';
import DataTable from 'react-data-table-component';
import { useEffect, useState } from 'react';
import { FaPhone, FaEnvelope, FaTrash, FaEye, FaEdit, FaExclamation } from 'react-icons/fa';
import './PatientHistoryTable.css';
import { a } from '../../../../../../Testing/Vanilla-Ts-1/plainTS';
import { NavLink } from 'react-router-dom';
import { ROUTES } from '../../../../../types/DATATYPES';
export function PatientHistoryTable({ setIsPtntScrnVisible, setPatientId }) {
  const { patientHistories, savePatientHistories } = useData(); // You'll plug this in later

  // Placeholder data
  const [filterText, setFilterText] = useState('');
  const data = [
    {
      id: 1,
      col1: 'John Doe',
      col2: 'Male',
      col3: '25',
      col4: 'Flu',
      col5: '01-01-2025',
      col6: 'Dr. Smith',
    },
    {
      id: 2,
      col1: 'Jane Smith',
      col2: 'Female',
      col3: '30',
      col4: 'Diabetes',
      col5: '05-02-2025',
      col6: 'Dr. Brown',
    },
    {
      id: 3,
      col1: 'David Johnson',
      col2: 'Male',
      col3: '45',
      col4: 'Asthma',
      col5: '10-03-2025',
      col6: 'Dr. Wilson',
    },
    {
      id: 4,
      col1: 'Emily Davis',
      col2: 'Female',
      col3: '50',
      col4: 'Hypertension',
      col5: '12-03-2025',
      col6: 'Dr. Taylor',
    },
    {
      id: 5,
      col1: 'Michael Brown',
      col2: 'Male',
      col3: '60',
      col4: 'Arthritis',
      col5: '15-03-2025',
      col6: 'Dr. Anderson',
    },
  ];

  // Filter logic
  const filteredData = patientHistories.map(pH => pH);
  console.log('patientHistories:', patientHistories);
  console.log('filteredData:', filteredData);

  const columns = [
    {
      name: 'Name',
      selector: row => getImage(row.gender, row.name),
      sortable: true,
      minWidth: '200px',
    },
    { name: 'Gender', selector: row => generateGenderColor(row.gender), sortable: true },
    { name: 'Age', selector: row => row.age, sortable: true },
    {
      name: 'Urgency',
      selector: row => <UrgencyIndicator age={row.age}></UrgencyIndicator>,
      sortable: true,
    },
    { name: 'Call', selector: row => <Button variant={'call'}>Call</Button> },
    { name: 'Message', selector: row => <Button variant={'message'}>Message</Button> },
    { name: 'Delete', selector: row => <Button variant={'delete'}>Call</Button> },
    {
      name: 'View',
      selector: row => (
        <Button
          variant={'view'}
          onClick={() => {
            setPatientId(row);
            setIsPtntScrnVisible(true);
          }}
        >
          view
        </Button>
      ),
    },
    { name: 'Edit', selector: row => <Button variant={'edit'}>Call</Button> },
    { name: '', selector: row => '⋮' },
  ];

  return (
    <div className="patient-history-table-container">
      <div className="search-bar">
        <input
          type="text"
          placeholder="🔍 Search..."
          value={filterText}
          onChange={e => setFilterText(e.target.value)}
        />
      </div>

      <DataTable
        columns={columns}
        data={filteredData}
        selectableRows
        fixedHeader
        fixedHeaderScrollHeight="700px"
        highlightOnHover
        striped
      />
    </div>
  );
}

// Other program:

export function pickRandomLink(gender) {
  const peopleImageLink = {
    man: [
      'https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbGV8ZW58MHx8MHx8fDA%3D',
      'https://images.unsplash.com/photo-1525457136159-8878648a7ad0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1hbGV8ZW58MHx8MHx8fDA%3D',
      'https://images.unsplash.com/photo-1480429370139-e0132c086e2a?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1524538198441-241ff79d153b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ],
    woman: [
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZmVtYWxlfGVufDB8fDB8fHww',
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ],
  };

  const num = Math.floor(Math.random() * 5);

  if (gender === 'male') {
    return peopleImageLink.man[num];
  }
  if (gender === 'female') {
    return peopleImageLink.woman[num];
  }
}

function getImage(gender, name) {
  const imgSrc = pickRandomLink(gender);
  const styles = {
    container: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
    },
    img: {
      width: '32px',
      height: '32px',
      borderRadius: '50%',
      objectFit: 'cover',
      border: '2px solid #f0f0f0',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    },
    name: {
      fontSize: '0.9rem',
      color: '#333',
      fontWeight: '500',
      whiteSpace: 'nowrap',
    },
  };

  return (
    <div style={styles.container}>
      <img src={imgSrc} alt="Profile pic" style={styles.img} />
      <p style={styles.name}>{name}</p>
    </div>
  );
}

function generateGenderColor(gender) {
  if (gender === 'male') {
    return <p color="blue">Male</p>;
  }
  if (gender === 'female') {
    return <p color="hotPink">Female</p>;
  }
}
function UrgencyIndicator({ age }) {
  const colors = {
    critical: '#DC2626', // Red
    high: '#F97316', // Orange
    medium: '#F59E0B', // Amber
    low: '#10B981', // Green
    none: '#3B82F6', // Blue
  };

  // Determine urgency
  let urgency = 'none';
  if (age >= 80) urgency = 'critical';
  else if (age >= 60) urgency = 'high';
  else if (age >= 40) urgency = 'medium';
  else if (age >= 20) urgency = 'low';

  return (
    <button
      style={{
        backgroundColor: colors[urgency],
        color: '#fff',
        padding: '0.5rem 1rem',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer',
        fontWeight: 'bold',
        width: '100px', // uniform size
        textAlign: 'center',
        boxShadow: `0 0 8px ${colors[urgency]}80`, // soft glow with transparency
        transition: 'transform 0.15s ease, box-shadow 0.15s ease',
      }}
      onMouseEnter={e => {
        e.target.style.transform = 'scale(1.05)';
        e.target.style.boxShadow = `0 0 12px ${colors[urgency]}aa`;
      }}
      onMouseLeave={e => {
        e.target.style.transform = 'scale(1)';
        e.target.style.boxShadow = `0 0 8px ${colors[urgency]}80`;
      }}
    >
      {urgency.toUpperCase()}
    </button>
  );
}
function Button({ variant, onClick }) {
  const variants = {
    urgency: { label: 'Urgent', color: '#e53935', icon: <FaExclamation /> },
    call: { label: 'Call', color: '#43a047', icon: <FaPhone /> },
    message: { label: 'Message', color: '#1e88e5', icon: <FaEnvelope /> },
    delete: { label: 'Delete', color: '#d32f2f', icon: <FaTrash /> },
    view: { label: 'View', color: '#6d4c41', icon: <FaEye /> },
    edit: { label: 'Edit', color: '#f9a825', icon: <FaEdit /> },
  };

  const { label, color, icon } = variants[variant] || {};

  return (
    <button className="custom-btn" style={{ backgroundColor: color }} onClick={onClick}>
      {icon}
      <span>{label}</span>
    </button>
  );
}
