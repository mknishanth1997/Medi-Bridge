import './TestComp1.css';
import hospitalLogo from '../../assets/Logo/hospitalLogo.png';
import { BellIconOff, BellIconOn, PendingAppointmentIcon } from '../../assets/icons/SVGCODE';
import { useEffect, useState } from 'react';
import { useData } from '../../Medi-Bridge-App/context/DataContext';
import { ROUTES } from '../../Medi-Bridge-App/types/DATATYPES';
import { useNavigate } from 'react-router-dom';
import {
  toPendingAppp,
  appointmentfakedata,
  patientHistoryFakeData,
} from '../../Medi-Bridge-App/DATA/DATA';

export function TestHeader() {
  const navigate = useNavigate();
  const {
    appointments,
    saveAppointments,
    patientHistories,
    savePatientHistories,
    clearAppointments,
    clearPatientHistories,
  } = useData();
  const [notificationStatus, setNotificationStatus] = useState(false);

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
  const noOfAppointment = appointments.filter(
    app => app.status === 'booked' && app.date === todayFormatted
  );
  useEffect(() => {
    if (noOfAppointment.length > 0) {
      setNotificationStatus(true);
    } else {
      setNotificationStatus(false);
    }
  }, [noOfAppointment.length]);

  return (
    <div className="modern-header">
      <div className="header-background-overlay"></div>

      <div className="header-content">
        <div className="header-left">
          <div className="logo-container">
            <img src={hospitalLogo} alt="Hospital Logo" className="hospital-logo" />
            <div className="logo-glow"></div>
          </div>
          <div className="brand-info">
            <h1 className="brand-title">
              <span className="brand-highlight">Medi</span> Bridge
            </h1>
            <p className="brand-subtitle">Advanced Medical Management</p>
          </div>
        </div>

        <div className="header-right">
          <div className="stats-widget" onClick={() => navigate(ROUTES.PENDINGAPPOINTMENT)}>
            <div className="stats-icon">
              <PendingAppointmentIcon />
              <div className="pulse-ring"></div>
            </div>
            <div className="stats-info">
              <span className="stats-number">{noOfAppointment.length}</span>
              <span className="stats-label">Today's Appointments</span>
            </div>
          </div>
          <div
            className={`notification-container ${notificationStatus ? 'active' : ''}`}
            // onClick={() => setNotificationStatus(!notificationStatus)}
          >
            {notificationStatus ? <BellIconOn /> : <BellIconOff />}
            <div className="notification-dot"></div>
            <div className="notification-ripple"></div>
          </div>
          <button
            className="save-button"
            onClick={() => {
              saveAppointments(appointmentfakedata);
              savePatientHistories(patientHistoryFakeData);
            }}
          >
            <span className="save-button-text">Populate</span>
            <div className="save-button-shine"></div>
          </button>{' '}
          <button
            className="save-button"
            onClick={() => {
              clearAppointments();
              clearPatientHistories();
            }}
          >
            <span className="save-button-text">Erase</span>
            <div className="save-button-shine"></div>
          </button>
        </div>
      </div>
    </div>
  );
}
