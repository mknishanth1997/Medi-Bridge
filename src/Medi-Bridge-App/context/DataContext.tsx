import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { Appointment, patientHistory } from '../types/DATATYPES';

// Data Types :
type DataContextType = {
  appointments: Appointment[];
  patientHistories: patientHistory[];
  saveAppointments: (data: Appointment[]) => void;
  savePatientHistories: (data: patientHistory[]) => void;
  clearAppointments: () => void;
  clearPatientHistories: () => void;
};

// Context Creation:

const DataContext = createContext<DataContextType | undefined>(undefined);

// Context Provider:

export function DataProvider(props: { children: ReactNode }) {
  // State Variables
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [patientHistories, setPatientHistories] = useState<patientHistory[]>([]);

  // Loading the Initial Data
  function loadInitialData() {
    const a = localStorage.getItem('appointments');
    // console.log(a);
    const p = localStorage.getItem('patientHistories');

    if (a) {
      setAppointments(JSON.parse(a));
    }
    if (p) {
      setPatientHistories(JSON.parse(p));
    }
  }

  // Save Appointments

  function saveAppointments(data: Appointment[]) {
    localStorage.setItem('appointments', JSON.stringify(data));
    setAppointments(data);
  }

  // Save Patient History

  function savePatientHistories(data: patientHistory[]) {
    localStorage.setItem('patientHistories', JSON.stringify(data));
    setPatientHistories(data);
  }

  // Clear Appointment Fromt the local Storage

  function clearAppointments() {
    localStorage.removeItem('appointments');
    setAppointments([]);
  }
  // Clear Patient History Fromt the local Storage

  function clearPatientHistories() {
    localStorage.removeItem('patientHistories');
    setPatientHistories([]);
  }

  // Run once on mount
  useEffect(loadInitialData, []);

  return (
    <DataContext.Provider
      value={{
        appointments,
        patientHistories,
        saveAppointments,
        savePatientHistories,
        clearAppointments,
        clearPatientHistories,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
}

// Context usage:
export function useData(): DataContextType {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used inside a <DataProvider>');
  }
  return context;
}

// Usage Example
// import { useData } from './DataContext';

// function Example() {
//   const { appointments, saveAppointments } = useData();

//   const addAppointment = () => {
//     const newAppointment = {
//       appointmentId: 'xyz',
//       patientId: 'abc',
//       patientName: 'John Doe',
//       patientAge: 30,
//       patientGender: 'male',
//       patientPhoneNumber: '1234567890',
//       patientEmailId: 'john@example.com',
//       date: '2025-08-03',
//       time: '10:00',
//       reason: 'checkup',
//       doctor: 'Dr. A',
//       bloodGroup: 'O+',
//       firstVisit: true,
//       status: 'booked',
//     };

//     saveAppointments([...appointments, newAppointment]);
//   };

//   return <button onClick={addAppointment}>Add Appointment</button>;
// }
