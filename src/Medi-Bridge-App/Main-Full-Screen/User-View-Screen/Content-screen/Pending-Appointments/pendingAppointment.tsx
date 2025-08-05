import { useState } from 'react';
import { useData } from '../../../../context/DataContext';
import { PendingPatientCard } from './Pending-Appointment-card/pendingAppCard';

export function PendingAppointment() {
  const [formOpen, isFormOpen] = useState(false);
  const [patientId, setPatientId] = useState('');
  const { appointments, patientHistories, saveAppointments, savePatientHistories } = useData();
  const pA = appointments
    .filter(appointment => appointment.status === 'booked')
    .map(bookedApp => (
      <PendingPatientCard
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
      ></PendingPatientCard>
    ));

  return <>{pA}</>;
}
