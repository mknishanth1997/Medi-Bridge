import { useState } from 'react';
import DataTable from 'react-data-table-component';
import { TableColumn } from 'react-data-table-component';
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
  const filteredData = appointments
    .filter(appointment => appointment.status === 'booked') // ✅ condition
    .filter(
      appointment =>
        appointment.patientName?.toLowerCase().includes(filterText.toLowerCase()) ||
        appointment.patientId?.toLowerCase().includes(filterText.toLowerCase())
    );

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
        fixedHeaderScrollHeight="300px" // ~5 rows
        dense={false}
        highlightOnHover
        striped
        noPagination
      />
    </div>
  );
}

export default PatientTable;
