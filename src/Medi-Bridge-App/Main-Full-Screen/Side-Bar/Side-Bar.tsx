import './Side-Bar.css';
import { NavLink } from 'react-router-dom';
import {
  AddPatientIcon,
  DoctorPerformanceIcon,
  FinishedAppointmentIcon,
  HomeIcon,
  PatientHistoryIcon,
  PendingAppointmentIcon,
  RevenueAnalysisIcon,
} from '../../../assets/icons/SVGCODE';
import Man from '../../../assets/Logo/Man.png';
import { ROUTES } from '../../types/DATATYPES';

export function SideBar() {
  return (
    <>
      <aside className="side-bar">
        <div className="sidebar-logo-section">
          <img src={Man} alt="Man Logo" />
          <div className="header-doc-details">
            <h3 className="header-doc-name">Dr. Nishanth</h3>
            <p className="header-doc-position">Administrator</p>
          </div>
        </div>
        <div className="actual-side-bar">
          <ul>
            <li>
              <NavLink to={ROUTES.HOME} className="sidebar-home">
                <p>Home</p>
                <HomeIcon />
              </NavLink>
            </li>

            <li>
              <NavLink to={ROUTES.ADDPATIENT} className="sidebar-add-patient">
                <p>Add Patient</p>
                <AddPatientIcon />
              </NavLink>
            </li>

            <li>
              <NavLink to={ROUTES.PENDINGAPPOINTMENT} className="sidebar-pending-appointments">
                <p>Pending Appointments</p>
                <PendingAppointmentIcon />
              </NavLink>
            </li>

            <li>
              <NavLink to={ROUTES.FINISHEDAPPOINTMENT} className="sidebar-finished-appointments">
                <p>Finished Appointments</p>
                <FinishedAppointmentIcon />
              </NavLink>
            </li>

            <li>
              <NavLink to={ROUTES.PATIENTHISTORY} className="sidebar-patient-history">
                <p>Patient History</p>
                <PatientHistoryIcon />
              </NavLink>
            </li>

            <li>
              <NavLink to={ROUTES.REVENUEANALYSIS} className="sidebar-revenue-analysis">
                <p>Revenue Analysis</p>
                <RevenueAnalysisIcon />
              </NavLink>
            </li>

            <li>
              <NavLink to={ROUTES.DOCTORPERFORMANCEANALYSIS} className="sidebar-doctor-performance">
                <p>Doctor Performance</p>
                <DoctorPerformanceIcon />
              </NavLink>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
}
