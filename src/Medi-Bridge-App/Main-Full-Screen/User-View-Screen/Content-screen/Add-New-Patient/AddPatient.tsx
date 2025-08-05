import { useState } from 'react';
import './AddPatient.css';
import UserTable from './PatientSearchTable/UserTable';
import { AddPatientDetailsForm } from './AppointmentForm/AddAppointmentForm';

export function AddPatient() {
  const [formVisible, setFormVisible] = useState(false);
  const [selectedPatientId, setSelectedPatientId] = useState<string | undefined>(undefined);
  return (
    <>
      <div className="wrap">
        {formVisible ? (
          <AddPatientDetailsForm
            key={selectedPatientId ?? 'new'}
            patientId={selectedPatientId}
            onClose={() => {
              setFormVisible(false);
              setSelectedPatientId(undefined);
            }}
          />
        ) : (
          <UserTable
            onEditPatient={(id: string) => {
              setSelectedPatientId(id); // from row click
              setFormVisible(true); // show form
            }}
          />
        )}
      </div>

      {/* New patient button */}
      <button
        onClick={() => {
          setSelectedPatientId(undefined); // new patient = no ID
          setFormVisible(true); // show form
        }}
      >
        + New Patient
      </button>
    </>
  );
}
