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
import DoctorReal from '../../../assets/Logo/DoctorReal.webp';
import { ROUTES } from '../../types/DATATYPES';
import { useState } from 'react';

export function SideBar() {
  const iconColor = '#FDFDFD';
  const styClsNm = 'sidebar-icon-animation';

  const [isHovered, setIsHovered] = useState(false);
  return (
    <>
      <aside className="side-bar">
        <div className="sidebar-logo-section">
          <img src={DoctorReal} alt="Man Logo" />
          <div className="header-doc-details">
            <h3 className="header-doc-name">Dr. Nishanth</h3>
            <p className="header-doc-position">Administrator</p>
          </div>
        </div>
        <div className="actual-side-bar">
          <ul>
            <li>
              <NavLink to={ROUTES.HOME} className="sidebar-home sha">
                {/* ICON FIRST, TEXT SECOND */}
                <HomeIcon className={styClsNm} color={iconColor} />
                <p>Home</p>
              </NavLink>
            </li>

            <li>
              <NavLink to={ROUTES.ADDPATIENT} className="sidebar-add-patient sha">
                {/* ICON FIRST, TEXT SECOND */}
                <AddPatientIcon className={styClsNm} color={iconColor} />
                <p>Add Patient</p>
              </NavLink>
            </li>

            <li>
              <NavLink to={ROUTES.PENDINGAPPOINTMENT} className="sidebar-pending-appointments sha">
                {/* ICON FIRST, TEXT SECOND */}
                <PendingAppointmentIcon className={styClsNm} color={iconColor} />
                <p>Pending Appointments</p>
              </NavLink>
            </li>

            <li>
              <NavLink
                to={ROUTES.FINISHEDAPPOINTMENT}
                className="sidebar-finished-appointments sha"
              >
                {/* ICON FIRST, TEXT SECOND */}
                <FinishedAppointmentIcon className={styClsNm} color={iconColor} />
                <p>Finished Appointments</p>
              </NavLink>
            </li>

            <li>
              <NavLink to={ROUTES.PATIENTHISTORY} className="sidebar-patient-history sha">
                {/* ICON FIRST, TEXT SECOND */}
                <PatientHistoryIcon className={styClsNm} color={iconColor} />
                <p>Patient History</p>
              </NavLink>
            </li>

            <li>
              <NavLink to={ROUTES.REVENUEANALYSIS} className="sidebar-revenue-analysis sha">
                {/* ICON FIRST, TEXT SECOND */}
                <RevenueAnalysisIcon className={styClsNm} color={iconColor} />
                <p>Revenue Analysis</p>
              </NavLink>
            </li>

            <li>
              <NavLink
                to={ROUTES.DOCTORPERFORMANCEANALYSIS}
                className="sidebar-doctor-performance sha"
              >
                {/* ICON FIRST, TEXT SECOND */}
                <DoctorPerformanceIcon className={styClsNm} color={iconColor} />
                <p>Doctor Performance</p>
              </NavLink>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
}
