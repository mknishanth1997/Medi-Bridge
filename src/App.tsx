import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { MainFullScreen } from './Medi-Bridge-App/Main-Full-Screen/Main-Full-Screen';
import { HomeScreen } from './Medi-Bridge-App/Main-Full-Screen/User-View-Screen/Content-screen/Home-app/Home-app';
import { AddPatient } from './Medi-Bridge-App/Main-Full-Screen/User-View-Screen/Content-screen/Add-New-Patient/AddPatient';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<MainFullScreen />}>
          <Route path="dashboard" element={<HomeScreen />} />
          <Route path="dashboardd" element={<AddPatient />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
