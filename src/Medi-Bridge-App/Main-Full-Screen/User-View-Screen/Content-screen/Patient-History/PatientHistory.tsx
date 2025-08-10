import { PatientHistoryTable } from './Patient-History-Table/PatientHistoryTable';
import './PatientHistory.css';
export function PatientHistory() {
  return (
    <div>
      <div className="heading-pa">
        <h1>Patient History</h1>
      </div>
      <div>
        {' '}
        <PatientHistoryTable></PatientHistoryTable>
      </div>
    </div>
  );
}
