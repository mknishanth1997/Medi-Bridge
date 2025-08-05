import { useState } from 'react';
import { useData } from '../../../../context/DataContext';
import { FinishedPersonCard } from './Finished-person-card/Finished-person-card';
import PatientForm from '../Pending-Appointments/Pending-Form/Penidng-Form';

export function FinishedAppointment() {
  const [formOpen, isFormOpen] = useState(false);
  const [patientId, setPatientId] = useState('');
  const [appointmentId, setAppointmentId] = useState('');
  const { appointments, saveAppointments, patientHistories, savePatientHistories } = useData();

  const pA = appointments
    .filter(appointment => appointment.status === 'completed')
    .map(bookedApp => (
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
      />
    ));

  return (
    <>
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
    </>
  );
}
