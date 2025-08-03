import './Header.css';
import hospitalLogo from '../../../../assets/Logo/hospitalLogo.png';
import { BellIconOff, BellIconOn, PendingAppointmentIcon } from '../../../../assets/icons/SVGCODE';
import { useState } from 'react';
export function Header() {
  const [notificationStatus, setNotificationStatus] = useState<boolean>(false);
  return (
    <>
      <div className="header">
        <div className="left">
          <img src={hospitalLogo} alt="Hospital Logo" />
          <div className="left-text">
            <h1>Medi Bridge</h1>
            <p>Medical Management Service</p>
          </div>
        </div>
        <div className="right">
          <div className="pendingAppointmentheaderwidget">
            <PendingAppointmentIcon></PendingAppointmentIcon>
            <p>Today: 12 Appointments</p>
          </div>
          {notificationStatus === true ? <BellIconOn></BellIconOn> : <BellIconOff></BellIconOff>}
          <button>Save </button>
        </div>
      </div>
    </>
  );
}
