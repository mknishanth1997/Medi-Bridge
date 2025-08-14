import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { MainFullScreen } from './Medi-Bridge-App/Main-Full-Screen/Main-Full-Screen';
import { HomeScreen } from './Medi-Bridge-App/Main-Full-Screen/User-View-Screen/Content-screen/Home-app/Home-app';
import { AddPatient } from './Medi-Bridge-App/Main-Full-Screen/User-View-Screen/Content-screen/Add-New-Patient/AddPatient';
import { PendingAppointment } from './Medi-Bridge-App/Main-Full-Screen/User-View-Screen/Content-screen/Pending-Appointments/pendingAppointment';
import { FinishedAppointment } from './Medi-Bridge-App/Main-Full-Screen/User-View-Screen/Content-screen/Finished-Appointments/FinishedAppointment';
import { PatientHistory } from './Medi-Bridge-App/Main-Full-Screen/User-View-Screen/Content-screen/Patient-History/PatientHistory';
import { RevenueAnalysis } from './Medi-Bridge-App/Main-Full-Screen/User-View-Screen/Content-screen/Revenue-Analysis/RevenueAnalysis';
import { DoctorPerformanceAnalysis } from './Medi-Bridge-App/Main-Full-Screen/User-View-Screen/Content-screen/Doctor-Performance/DoctorPerformance';
import { DataProvider } from './Medi-Bridge-App/context/DataContext';
import { PatientDisplayScreen } from './Medi-Bridge-App/Main-Full-Screen/User-View-Screen/Content-screen/Patient-History/Patient-Display-Screen/PatientDisplayScreen';

function App() {
  return (
    <DataProvider>
      <BrowserRouter basename="/Medi-Bridge">
        <Routes>
          <Route path="/*" element={<MainFullScreen />}>
            <Route path="home" element={<HomeScreen />} />
            <Route path="addPatient" element={<AddPatient />} />
            <Route path="pendingAppointment" element={<PendingAppointment />} />
            <Route path="finishedAppointment" element={<FinishedAppointment />} />
            <Route path="patientHistory" element={<PatientHistory />} />
            <Route path="revenueAnalysis" element={<RevenueAnalysis />} />
            <Route path="doctorPerformanceAnalysis" element={<DoctorPerformanceAnalysis />} />
            <Route
              path="doctorDisplayScreen"
              element={<PatientDisplayScreen></PatientDisplayScreen>}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
