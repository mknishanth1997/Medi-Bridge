import { useState } from 'react';
import { PatientHistoryTable } from './Patient-History-Table/PatientHistoryTable';
import './PatientHistory.css';
import { PatientDisplayScreen } from './Patient-Display-Screen/PatientDisplayScreen';
export function PatientHistory() {
  const [isPtntScrnVisible, setIsPtntScrnVisible] = useState(false);
  const [patientId, setPatientId] = useState('');
  const patientDisplayScreenAcutal = (
    <PatientDisplayScreen
      patientId={patientId}
      setIsPtntScrnVisible={setIsPtntScrnVisible}
    ></PatientDisplayScreen>
  );

  const patientHistoryTable = (
    <div>
      <div className="heading-pa">
        <h1>Patient History</h1>
      </div>
      <div>
        <PatientHistoryTable
          setIsPtntScrnVisible={setIsPtntScrnVisible}
          setPatientId={setPatientId}
        ></PatientHistoryTable>
      </div>
    </div>
  );

  return <>{isPtntScrnVisible ? patientDisplayScreenAcutal : patientHistoryTable}</>;
}
