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
}) {
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

  return (
    <div className="card">
      <div className="card-header">
        <img src={imgSrc} alt={altText} className="avatar" />
        <div className="patient-info">
          <div className="name">{name}</div>
          <div className="details">{`${age} years old, ${gender}`}</div>
        </div>
        <div className="menu">⋮</div>
      </div>

      <div className="card-body">
        <div className="info">
          <span className="label">Patient ID</span>
          <span className="value">{patientId === (undefined | null) ? 'No Id' : patientId}</span>
        </div>
        <div className="info">
          <span className="label">Token</span>
          <span className="value">{`#${token}`}</span>
        </div>
        <div className="info time">
          <span className="value">{time}</span>
        </div>
        <div className="info date">
          <span className="value">{date}</span>
        </div>
      </div>

      <div className="card-footer">
        <button
          className="btn consult"
          onClick={() => {
            isFormOpen(true);
            // moveToTheFinishedAppointment();
            setPatientId(bookedApp.patientId);
            setAppointmentId(bookedApp.appointmentId);
          }}
        >
          {'Add Patient History'}
        </button>

        <button className="btn cancel" onClick={() => cancelTheAppointment()}>
          Cancell
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
