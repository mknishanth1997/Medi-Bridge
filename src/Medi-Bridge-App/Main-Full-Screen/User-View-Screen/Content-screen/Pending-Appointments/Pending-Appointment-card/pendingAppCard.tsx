import './pendingAppCard.css';
import babyboy from '../../../../../../assets/Logo/babyboy.png';
import babygirl from '../../../../../../assets/Logo/babygirl.png';
import Man from '../../../../../../assets/Logo/Man.png';
import teengirl from '../../../../../../assets/Logo/teengirl.png';
import man from '../../../../../../assets/Logo/man.png';
import woman from '../../../../../../assets/Logo/woman.png';
import oldman from '../../../../../../assets/Logo/oldman.png';
import oldwoman from '../../../../../../assets/Logo/oldwoman.png';

export function PendingPatientCard({
  patientId,
  token,
  time,
  date,
  name,
  age,
  gender,
  firstVisit,
  bookedApp,
  saveAppointments,
  appointments,
  isFormOpen,
  setPatientId,
  index,
}) {
  const colorIndex = (index % 9) + 1; // loops 1-9
  const [imgSrc, altText] = getImageDetails(age, gender);

  function cancelTheAppointment() {
    console.log(appointments);
    const updatedAppointments = appointments.map(app => {
      if (app.appointmentId === bookedApp.appointmentId) {
        return {
          ...app,
          status: 'cancel',
        };
      }
      return app;
    });

    saveAppointments(updatedAppointments);
  }

  function ghostedTheAppointment() {
    console.log(appointments);
    const updatedAppointments = appointments.map(app => {
      if (app.appointmentId === bookedApp.appointmentId) {
        return {
          ...app,
          status: 'no-show',
        };
      }
      return app;
    });

    saveAppointments(updatedAppointments);
  }

  function moveToTheFinishedAppointment() {
    console.log(appointments);
    const updatedAppointments = appointments.map(app => {
      if (app.appointmentId === bookedApp.appointmentId) {
        return {
          ...app,
          status: 'completed',
        };
      }
      return app;
    });

    saveAppointments(updatedAppointments);
  }

  function estimatedTimeAndRemaining() {
    const estTime = (token - 1) * 15;

    // Parse time string (e.g., "06:22 pm")
    const [timeStr, period] = time.split(' ');
    let [hours, minutes] = timeStr.split(':').map(Number);

    // Convert to 24-hour format
    if (period.toLowerCase() === 'pm' && hours !== 12) hours += 12;
    if (period.toLowerCase() === 'am' && hours === 12) hours = 0;

    // Create appointment Date
    const appointmentDate = new Date();
    appointmentDate.setHours(hours, minutes, 0, 0);

    // Add estimated time offset
    appointmentDate.setMinutes(appointmentDate.getMinutes() + estTime);

    // Calculate time remaining in minutes
    const now = new Date();
    let diffMs = appointmentDate - now; // ms difference
    let diffMins = Math.ceil(diffMs / 60000);

    if (diffMins < 0) diffMins = 0;

    // Format estimated time back to 12-hour format
    let newHours = appointmentDate.getHours();
    const newMinutes = appointmentDate.getMinutes();
    const newPeriod = newHours >= 12 ? 'pm' : 'am';
    newHours = newHours % 12 || 12;

    const paddedMinutes = newMinutes < 10 ? `0${newMinutes}` : newMinutes;

    const estimatedTimeStr = `${newHours}:${paddedMinutes} ${newPeriod}`;

    return [estimatedTimeStr, diffMins];
  }

  return (
    // <div className="card">
    //   <div className="card-header">
    //     <img src={imgSrc} alt={altText} className="avatar" />
    //     <div className="patient-info">
    //       <div className="name">{name}</div>
    //       <div className="details">{`${age} years old, ${gender}`}</div>
    //     </div>
    //     <div className="menu">⋮</div>
    //   </div>

    //   <div className="card-body">
    //     <div className="info">
    //       <span className="label">Patient ID</span>
    //       <span className="value">{patientId !== typeof 'HI' ? 'No Id' : patientId}</span>
    //     </div>
    //     <div className="info">
    //       <span className="label">Token</span>
    //       <span className="value">{`#${token}`}</span>
    //     </div>
    //     <div className="info">
    //       <span className="label">Your Time: </span>
    //       <span className="value">{estimatedTimeAndRemaining()[0]}</span>
    //     </div>
    //     <div className="info">
    //       <span className="label">Time Remaining: </span>
    //       <span className="value">{estimatedTimeAndRemaining()[1]}</span>
    //     </div>
    //     <div className="info time">
    //       <span className="value">{time}</span>
    //     </div>
    //     <div className="info date">
    //       <span className="value">{date}</span>
    //     </div>
    //   </div>

    //   <div className="card-footer">
    //     <button
    //       className="btn consult"
    //       onClick={() => {
    //         // isFormOpen(true);
    //         moveToTheFinishedAppointment();
    //         setPatientId(bookedApp.patientId);
    //       }}
    //     >
    //       {firstVisit === 'first' ? 'consult' : 'Revisit'}
    //     </button>
    //     <button className="btn no-show" onClick={() => ghostedTheAppointment()}>
    //       No Show
    //     </button>
    //     <button className="btn cancel" onClick={() => cancelTheAppointment()}>
    //       Cancel
    //     </button>
    //   </div>
    // </div>
    <div className="info-card-pending">
      <div className="colored-section">
        <div className={`top-section top-gradient-${colorIndex}`}>
          <h1>{`${token}`}</h1>
        </div>
        <div className={`bottom-section bottom-gradient-${colorIndex}`}></div>
      </div>
      <div className="card-header">
        <img src={imgSrc} alt={altText} className="avatar" />
        <div className="patient-info">
          <div className="name">{name}</div>
          <div className="details">{`${age} years old, ${gender}`}</div>
        </div>
        <div className="short-border"></div>
      </div>
      <div className="pendingcard-body">
        <div className="pendingcard-info">
          <div className="pendingcard-label">Patient ID</div>
          <div className="pendingcard-value">{patientId !== typeof 'HI' ? 'No Id' : patientId}</div>
        </div>

        <div className="pendingcard-info">
          <div className="pendingcard-label">Appointment Time:</div>
          <div className="pendingcard-value">{estimatedTimeAndRemaining()[0]}</div>
        </div>
        <div className="pendingcard-info">
          <div className="pendingcard-label">Time Remaining:</div>
          <div className="pendingcard-value">{estimatedTimeAndRemaining()[1]}</div>
        </div>
        <div className="pendingcard-info pendingcard-time">
          <div className="pendingcard-label">Booking Time:</div>
          <div className="pendingcard-value">{time}</div>
        </div>
        <div className="pendingcard-info pendingcard-date">
          <div className="pendingcard-label">Booking Date:</div>
          <div className="pendingcard-value">{date}</div>
        </div>
      </div>

      <div className="card-footerr">
        <button
          className="btn consultt"
          id={firstVisit === 'first' ? 'consult' : 'revisit'}
          onClick={() => {
            // isFormOpen(true);
            moveToTheFinishedAppointment();
            setPatientId(bookedApp.patientId);
          }}
        >
          {firstVisit === 'first' ? 'Consult' : 'Revisit'}
        </button>
        <button className="btn no-showw" id="no-show" onClick={() => ghostedTheAppointment()}>
          No Show
        </button>
        <button className="btn cancell" id="cancel" onClick={() => cancelTheAppointment()}>
          Cancel
        </button>
      </div>
    </div>
  );
}

const imgDetails = {
  babyboy: [babyboy, 'Baby Boy img'],
  babygirl: [babygirl, 'Baby Girl'],
  Man: [Man, 'Teen boy'],
  teengirl: [teengirl, 'Teen Girl'],
  man: [man, 'Man'],
  woman: [woman, 'woman'],
  oldwoman: [oldwoman, 'Old Woman'],
  oldman: [oldman, 'Old Man'],
};

function getImageDetails(age: number, gender: string) {
  if (age <= 3) {
    return gender === 'male' ? imgDetails.babyboy : imgDetails.babygirl;
  } else if (age <= 12) {
    return gender === 'male' ? imgDetails.Man : imgDetails.teengirl;
  } else if (age <= 29) {
    return gender === 'male' ? imgDetails.Man : imgDetails.woman;
  } else if (age <= 59) {
    return gender === 'male' ? imgDetails.man : imgDetails.woman;
  } else {
    return gender === 'male' ? imgDetails.oldman : imgDetails.oldwoman;
  }
}
