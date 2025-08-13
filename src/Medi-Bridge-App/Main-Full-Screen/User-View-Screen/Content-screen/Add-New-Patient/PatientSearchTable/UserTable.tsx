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
      sortable: true,
    },
    {
      name: 'Phone Number',
      selector: row => row.patientPhoneNumber,
      sortable: true,
    },
    {
      name: 'Urgency',
      cell: row => <UrgencyIndicator age={row.patientAge} />,
    },
    {
      name: 'Action',
      cell: row => (
        <button
          className="userTableButton edit"
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
        // fixedHeaderScrollHeight="300px" // Uncomment if you want a fixed height
        dense={false}
        highlightOnHover
        striped
      />
    </div>
  );
}

export default PatientTable;

function UrgencyIndicator({ age }: { age: number }) {
  let urgency = 'none';
  if (age >= 80) urgency = 'critical';
  else if (age >= 60) urgency = 'high';
  else if (age >= 40) urgency = 'medium';
  else if (age >= 20) urgency = 'low';

  // Removed useState/useEffect as urgency is static per age

  return (
    <span
      className={`patient-table-urgency-indicator patient-table-urgency-${urgency}`}
    >
      {urgency.toUpperCase()}
    </span>
  );
}