import { useData } from '../../Medi-Bridge-App/context/DataContext';

export function Example() {
  const { appointments, saveAppointments } = useData();

  console.log({ appointments });
  const addAppointment = () => {
    const newAppointment = {
      appointmentId: 'xyz',
      patientId: 'abc',
      patientName: 'John Doe',
      patientAge: 30,
      patientGender: 'male',
      patientPhoneNumber: '1234567890',
      patientEmailId: 'john@example.com',
      date: '2025-08-03',
      time: '10:00',
      reason: 'checkup',
      doctor: 'Dr. A',
      bloodGroup: 'O+',
      firstVisit: true,
      status: 'booked',
    };

    saveAppointments([...appointments, newAppointment]);
  };

  return <button onClick={addAppointment}>Add Appointment</button>;
}
