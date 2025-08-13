import { useRef, useState } from 'react';
import { useData } from '../../../../context/DataContext';
import { PendingPatientCard } from './Pending-Appointment-card/pendingAppCard';
import './pendingAppointment.css';

export function PendingAppointment() {
  const [formOpen, isFormOpen] = useState(false);
  const [patientId, setPatientId] = useState('');
  const { appointments, patientHistories, saveAppointments, savePatientHistories } = useData();

  const today = new Date();

  const day = String(today.getDate()).padStart(2, '0'); // e.g. "08"
  const monthNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  const month = monthNames[today.getMonth()]; // e.g. "Aug"
  const year = today.getFullYear(); // e.g. 2025

  const todayFormatted = `${day} ${month} ${year}`; // "08 Aug 2025"

  const pA = appointments
    .filter(app => app.status === 'booked' && app.date === todayFormatted)
    .map((bookedApp, index) => (
      <PendingPatientCard
        key={bookedApp.appointmentId}
        patientId={bookedApp.patientId}
        token={index + 1}
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
        index={index}
      />
    ));

  return (
    <>
      <div className="pending-app-container">
        <div className="heading-pa" >
          <h1 id={"heading-paa"}>Book Appointment</h1>
        </div>
        <div className="pending-card-all" id={"pending-card-alll"}>{pA}</div>
      </div>
    </>
  );
}
