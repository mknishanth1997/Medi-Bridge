import './Finished-person-card.css';
import babyboy from '../../../../../../assets/Logo/babyboy.png';
import babygirl from '../../../../../../assets/Logo/babygirl.png';
import Man from '../../../../../../assets/Logo/Man.png';
import teengirl from '../../../../../../assets/Logo/teengirl.png';
import man from '../../../../../../assets/Logo/man.png';
import woman from '../../../../../../assets/Logo/woman.png';
import oldman from '../../../../../../assets/Logo/oldman.png';
import oldwoman from '../../../../../../assets/Logo/oldwoman.png';

export function FinishedPersonCard({
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
  setAppointmentId,
  index,
}) {
  const [imgSrc, altText] = getImageDetails(age, gender);
  const colorIndex = (index % 9) + 1; // loops 1-9
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

    //   <div className="card-footer">
    //     <button
    //       className="btn consult"
    //       onClick={() => {
    //         isFormOpen(true);
    //         // moveToTheFinishedAppointment();
    //         setPatientId(bookedApp.patientId);
    //         setAppointmentId(bookedApp.appointmentId);
    //       }}
    //     >
    //       {'Add Patient History'}
    //     </button>

    //     <button className="btn cancel" onClick={() => cancelTheAppointment()}>
    //       Cancell
    //     </button>
    //   </div>
    // </div>
    <div className="info-card-pending">
      <div className="colored-section">
        <div className={`top-section top-gradient-${colorIndex}`}>
          <h1>{`${index + 1}`}</h1>
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
      <div className="card-footerr">
        <button
          className="btn consultt"
          id="revisit"
          onClick={() => {
            isFormOpen(true);
            // moveToTheFinishedAppointment();
            setPatientId(bookedApp.patientId);
            setAppointmentId(bookedApp.appointmentId);
          }}
        >
          Add Patient History
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
