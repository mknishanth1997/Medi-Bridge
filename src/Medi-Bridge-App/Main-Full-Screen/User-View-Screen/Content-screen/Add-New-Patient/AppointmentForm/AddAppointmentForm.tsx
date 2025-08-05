import { useEffect, useId, useState } from 'react';
import { UserIcon, VitalsIcon } from '../../../../../../assets/icons/SVGCODE';
import { useData } from '../../../../../context/DataContext';
import './AddAppointmentForm.css';

const VALID_GENDER = ['male', 'female', 'other'];
interface AddPatientDetailsFormProps {
  patientId: string | null;
  onClose: () => void;
}
export function AddPatientDetailsForm({ patientId, onClose }: AddPatientDetailsFormProps) {
  const ID = useId();
  // Context usage
  const {
    appointments,
    patientHistories,
    saveAppointments,
    savePatientHistories,
    clearAppointments,
  } = useData();

  // Personal Info
  const [fullName, setFullName] = useState<string>('');
  const [age, setAge] = useState<number>(0);
  const [gender, setGender] = useState<string>('male');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [emailId, setEmailId] = useState<string>('');

  // Vitals
  const [height, setHeight] = useState<number>(0);
  const [heartRate, setHeartRate] = useState<number>(0);
  const [weight, setWeight] = useState<number>(0);
  const [bp, setBp] = useState<number>(0);

  // Visit Details
  const [isReturning, setIsReturning] = useState<string>('first');
  const [reason, setReason] = useState<string>('');

  // File Upload
  const [file, setFile] = useState<File | null>(null);
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };
  console.log(appointments);

  useEffect(() => {
    if (patientId !== null) {
      const existing = appointments.find(app => app.patientId === patientId);
      if (existing) {
        setFullName(existing.patientName || '');
        setAge(existing.patientAge || 0);
        setGender(existing.gender || 'male');
        setPhoneNumber(existing.patientPhoneNumber || '');
        setEmailId(existing.emailId || '');
        setIsReturning(existing.isReturning || 'first'); // assuming your data model has this
      }
    }
  }, [patientId, appointments]);

  function handleSubmit() {
    const { date, time } = getTodayDateTime();
    const newAppointment = {
      appointmentId: crypto.randomUUID(),
      patientId: patientId,
      patientName: fullName,
      patientAge: age,
      patientGender: gender,
      patientPhoneNumber: phoneNumber,
      patientEmailId: emailId,
      date: date,
      time: time,
      reason: reason,
      doctor: 'Nishanth',
      heartRate: heartRate,
      bp: bp,
      weight: weight,
      height: height,
      firstVisit: isReturning,
      status: 'booked',
    };
    // ✅ Manual merge instead of updater function
    const updatedAppointments = [...appointments, newAppointment];
    saveAppointments(updatedAppointments);
    console.log({ newAppointment });
    console.log('Data Added');
  }

  return (
    <>
      <div className="add-patient-form-header">
        <h1 onClick={clearAppointments}>Book Appointment</h1>
        <p>Enter the details to schedule a new appointment</p>
      </div>

      <form
        className="add-patient-form"
        onSubmit={e => {
          console.log('Submitted');
          e.preventDefault();
          handleSubmit();
          onClose();
        }}
      >
        {/* Personal Information */}
        <section className="form-section">
          <div className="section-header">
            <UserIcon />
            <h3>Personal Information</h3>
          </div>

          <div className="section-content">
            <div className="form-group">
              <label htmlFor={`fullName-${ID}`}>
                Full Name <span>*</span>
              </label>
              <input
                required
                type="text"
                id={`fullName-${ID}`}
                value={fullName}
                onChange={e => setFullName(e.target.value)}
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor={`age-${ID}`}>
                  Age <span>*</span>
                </label>
                <input
                  required
                  type="number"
                  id={`age-${ID}`}
                  value={age}
                  onChange={e => setAge(Number(e.target.value))}
                />
              </div>

              <div className="form-group gender-group">
                <span>
                  Gender <span>*</span>
                </span>
                <div className="gender-options">
                  {VALID_GENDER.map(option => (
                    <label key={option}>
                      <input
                        required
                        type="radio"
                        name="gender-selection"
                        value={option}
                        checked={gender === option}
                        onChange={e => setGender(e.target.value)}
                      />
                      {option}
                    </label>
                  ))}
                </div>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor={`phone-${ID}`}>
                  Phone Number <span>*</span>
                </label>
                <input
                  required
                  type="tel"
                  id={`phone-${ID}`}
                  value={phoneNumber}
                  onChange={e => setPhoneNumber(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor={`email-${ID}`}>
                  Email <span>*</span>
                </label>
                <input
                  required
                  type="email"
                  id={`email-${ID}`}
                  value={emailId}
                  onChange={e => setEmailId(e.target.value)}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Visit Details */}
        <section className="form-section">
          <div className="section-header">
            <span role="img" aria-label="visit">
              🩺
            </span>
            <h3>Visit Details</h3>
          </div>

          <div className="section-content">
            <div className="form-group">
              <span>
                Is this a returning patient? <span>*</span>
              </span>
              <div className="radio-group">
                <label>
                  <input
                    type="radio"
                    name={`returning-${ID}`}
                    value="first"
                    checked={isReturning === 'first'}
                    onChange={e => setIsReturning(e.target.value)}
                  />
                  No
                </label>
                <label>
                  <input
                    type="radio"
                    name={`returning-${ID}`}
                    value="returning"
                    checked={isReturning === 'returning'}
                    onChange={e => setIsReturning(e.target.value)}
                  />
                  Yes
                </label>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor={`reason-${ID}`}>
                Reason for Visit <span>*</span>
              </label>
              <textarea
                required
                id={`reason-${ID}`}
                rows={3}
                value={reason}
                onChange={e => setReason(e.target.value)}
              />
            </div>
          </div>
        </section>

        {/* Vitals */}
        <section className="form-section">
          <div className="section-header">
            <VitalsIcon />
            <h3>Vitals</h3>
          </div>

          <div className="section-content">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor={`heartRate-${ID}`}>
                  Heart Rate (bpm) <span>*</span>
                </label>
                <input
                  type="number"
                  id={`heartRate-${ID}`}
                  value={heartRate}
                  onChange={e => setHeartRate(Number(e.target.value))}
                />
              </div>
              <div className="form-group">
                <label htmlFor={`height-${ID}`}>
                  Height (cm) <span>*</span>
                </label>
                <input
                  type="number"
                  id={`height-${ID}`}
                  value={height}
                  onChange={e => setHeight(Number(e.target.value))}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor={`weight-${ID}`}>
                  Weight (kg) <span>*</span>
                </label>
                <input
                  type="number"
                  id={`weight-${ID}`}
                  value={weight}
                  onChange={e => setWeight(Number(e.target.value))}
                />
              </div>
              <div className="form-group">
                <label htmlFor={`bp-${ID}`}>
                  Blood Pressure <span>*</span>
                </label>
                <input
                  type="number"
                  id={`bp-${ID}`}
                  value={bp}
                  onChange={e => setBp(Number(e.target.value))}
                />
              </div>
            </div>
          </div>
        </section>

        {/* File Upload */}
        <section className="form-section">
          <div className="section-header">
            <span role="img" aria-label="upload">
              📁
            </span>
            <h3>Upload Report</h3>
          </div>

          <div className="section-content">
            <div className="file-upload">
              <div className="form-group">
                <label htmlFor={`file-${ID}`}>Upload Patient Report (PDF, Image)</label>
                <input
                  type="file"
                  id={`file-${ID}`}
                  onChange={handleFileChange}
                  accept=".pdf,.jpg,.jpeg,.png"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Book Appointment Button */}
        <div className="form-actions">
          <button type="submit" className="book-appointment-button">
            Book Appointment
          </button>
          <button type="button" onClick={onClose} className="book-appointment-button">
            Cancel
          </button>
        </div>
      </form>
    </>
  );
}
function getTodayDateTime() {
  const now = new Date();

  const date = now.toLocaleDateString('en-IN', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  }); // Example: "04-Aug-2025"

  const time = now.toLocaleTimeString('en-IN', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  }); // Example: "07:15 PM"

  return { date, time };
}
