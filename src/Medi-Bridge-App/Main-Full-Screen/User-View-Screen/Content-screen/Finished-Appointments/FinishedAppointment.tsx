import { useState } from 'react';
import { useData } from '../../../../context/DataContext';
import { FinishedPersonCard } from './Finished-person-card/Finished-person-card';
import PatientForm from '../Pending-Appointments/Pending-Form/Penidng-Form';
import './FinishedAppointment.css';
export function FinishedAppointment() {
  const [formOpen, isFormOpen] = useState(false);
  const [patientId, setPatientId] = useState('');
  const [appointmentId, setAppointmentId] = useState('');
  const { appointments, saveAppointments, patientHistories, savePatientHistories } = useData();

  const pA = appointments
    .filter(appointment => appointment.status === 'completed')
    .map((bookedApp, index) => (
      <FinishedPersonCard
        key={bookedApp.appointmentId}
        patientId={bookedApp.patientId}
        token={7}
        time={bookedApp.time}
        date={bookedApp.date}
        name={bookedApp.patientName}
        age={bookedApp.patientAge}
        gender={bookedApp.patientGender}
        firstVisit={bookedApp.firstVisit}
        saveAppointments={saveAppointments}
        bookedApp={bookedApp}
        appointments={appointments}
        isFormOpen={isFormOpen}
        setPatientId={setPatientId}
        setAppointmentId={setAppointmentId} // ✅ NEW
        isFormOpenState={isFormOpen} // optional helper
        index={index}
      />
    ));

  return (
    <>
      <div className="pending-app-container">
        <div className="heading-pa">
          <h1>Pending Appointment</h1>
        </div>
        <div className="pending-card-all">
          {' '}
          {formOpen === false ? (
            pA
          ) : (
            <PatientForm
              isFormOpen={isFormOpen}
              patientId={patientId}
              appointmentId={appointmentId} // ✅ PASSED HERE
              setPatientId={setPatientId}
            />
          )}
        </div>
      </div>
    </>
  );
}
