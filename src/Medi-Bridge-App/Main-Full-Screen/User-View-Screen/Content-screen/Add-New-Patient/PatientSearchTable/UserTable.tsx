import { useEffect, useState } from 'react';
import DataTable, { TableColumn } from 'react-data-table-component';
import { useData } from '../../../../../context/DataContext';
import './UserTable.css';

interface UserTableProps {
  onEditPatient: (patientId: string) => void;
}

interface Appointment {
  patientId: string;
  patientName: string;
  patientAge: number;
  date: string;
  patientPhoneNumber: string;
  // any other fields you use
}

function PatientTable({ onEditPatient }: UserTableProps) {
  const { appointments } = useData();
  const [filterText, setFilterText] = useState('');

  // Step 1: Deduplicate appointments by patientId
  const uniqueAppointmentsMap = new Map<string, Appointment>();

  appointments.forEach(appointment => {
    if (appointment.patientId && !uniqueAppointmentsMap.has(appointment.patientId)) {
      uniqueAppointmentsMap.set(appointment.patientId, appointment);
    }
  });

  const uniqueAppointments = Array.from(uniqueAppointmentsMap.values());

  // Step 2: Filter by ID or Name
  const filteredData = uniqueAppointments.filter(appointment => {
    const search = filterText.toLowerCase();
    return (
      appointment.patientId?.toLowerCase().includes(search) ||
      appointment.patientName?.toLowerCase().includes(search)
    );
  });

  // Columns
  const columns: TableColumn<Appointment>[] = [
    {
      name: 'Name',
      selector: row => row.patientName,
      sortable: true,
    },
    {
      name: 'Age',
      selector: row => row.patientAge,
      sortable: true,
    },
    {
      name: 'DOB',
      selector: row => row.date,
    },
    {
      name: 'Phone Number',
      selector: row => row.patientPhoneNumber,
    },
    {
      name: 'Urgency',
      cell: row => <UrgencyIndicator age={row.patientAge}></UrgencyIndicator>,
    },
    {
      name: 'Action',
      cell: row => (
        <button
          className="userTableButton"
          onClick={() => {
            onEditPatient(row.patientId);
          }}
        >
          Add
        </button>
      ),
    },
  ];

  return (
    <div className="patient-table-container">
      <div className="patient-table-title">Patient Appointments</div>

      <input
        type="text"
        placeholder="Search by name or ID"
        value={filterText}
        onChange={e => setFilterText(e.target.value)}
        className="patient-search-bar"
      />

      <DataTable
        columns={columns}
        data={filteredData}
        fixedHeader
        // fixedHeaderScrollHeight="300px"
        dense={false}
        highlightOnHover
        striped
        noPagination
      />
    </div>
  );
}

export default PatientTable;

function UrgencyIndicator({ age }) {
  const [urgency, setUrgency] = useState('');

  const colors = {
    critical: '#DC2626', // Vibrant red for high urgency
    high: '#F97316', // Bright orange for noticeable contrast
    medium: '#F59E0B', // Warm amber for middle ground
    low: '#10B981', // Fresh green for lower urgency
    none: '#3B82F6', // Cool blue for no urgency
  };

  useEffect(() => {
    if (age >= 80) setUrgency('critical');
    else if (age >= 60) setUrgency('high');
    else if (age >= 40) setUrgency('medium');
    else if (age >= 20) setUrgency('low');
    else setUrgency('none');
  }, [age]);

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
      }}
    >
      {urgency.toUpperCase()}
    </button>
  );
}
