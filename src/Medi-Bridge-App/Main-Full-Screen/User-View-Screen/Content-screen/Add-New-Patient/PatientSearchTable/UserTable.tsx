import { useState } from 'react';
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
      name: 'Patient ID',
      selector: row => row.patientId,
      sortable: true,
    },
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
        fixedHeaderScrollHeight="300px"
        dense={false}
        highlightOnHover
        striped
        noPagination
      />
    </div>
  );
}

export default PatientTable;
