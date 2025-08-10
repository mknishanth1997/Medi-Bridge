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
  const {
    appointments,
    patientHistories,
    saveAppointments,
    savePatientHistories,
    clearAppointments,
  } = useData();

  // State for form fields
  const [fullName, setFullName] = useState<string>('');
  const [age, setAge] = useState<number>(0);
  const [gender, setGender] = useState<string>('male');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [emailId, setEmailId] = useState<string>('');
  const [height, setHeight] = useState<number>(0);
  const [heartRate, setHeartRate] = useState<number>(0);
  const [weight, setWeight] = useState<number>(0);
  const [bp, setBp] = useState<number>(0);
  const [isReturning, setIsReturning] = useState<string>('first');
  const [reason, setReason] = useState<string>('');
  const [file, setFile] = useState<File | null>(null);

  // State for validation errors
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [touched, setTouched] = useState<{ [key: string]: boolean }>({});

  // Validation functions
  const validateFullName = (value: string) => {
    if (!value.trim()) return 'Full Name is required';
    if (!/^[a-zA-Z\s]{2,}$/.test(value))
      return 'Name must contain only letters and spaces (min 2 characters)';
    return '';
  };

  const validateAge = (value: number) => {
    if (value <= 0 || value > 150) return 'Age must be between 1 and 150';
    return '';
  };

  const validatePhoneNumber = (value: string) => {
    if (!value) return 'Phone Number is required';
    if (!/^\+?\d{10,12}$/.test(value.replace(/\s/g, '')))
      return 'Invalid phone number (e.g., 1234567890 or +911234567890)';
    return '';
  };

  const validateEmail = (value: string) => {
    if (!value) return 'Email is required';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Invalid email format';
    return '';
  };

  const validateReason = (value: string) => {
    if (!value.trim()) return 'Reason for visit is required';
    if (value.length < 5) return 'Reason must be at least 5 characters';
    return '';
  };

  const validateVitals = (value: number, field: string) => {
    if (value <= 0) return `${field} must be greater than 0`;
    if (field === 'Heart Rate' && (value < 30 || value > 200))
      return 'Heart Rate must be between 30 and 200 bpm';
    if (field === 'Height' && (value < 50 || value > 250))
      return 'Height must be between 50 and 250 cm';
    if (field === 'Weight' && (value < 2 || value > 300))
      return 'Weight must be between 2 and 300 kg';
    if (field === 'Blood Pressure' && (value < 50 || value > 250))
      return 'Blood Pressure must be between 50 and 250';
    return '';
  };

  // Handle blur for validation
  const handleBlur = (field: string, value: any) => {
    setTouched(prev => ({ ...prev, [field]: true }));
    let error = '';
    switch (field) {
      case 'fullName':
        error = validateFullName(value);
        break;
      case 'age':
        error = validateAge(value);
        break;
      case 'phoneNumber':
        error = validatePhoneNumber(value);
        break;
      case 'emailId':
        error = validateEmail(value);
        break;
      case 'reason':
        error = validateReason(value);
        break;
      case 'heartRate':
        error = validateVitals(value, 'Heart Rate');
        break;
      case 'height':
        error = validateVitals(value, 'Height');
        break;
      case 'weight':
        error = validateVitals(value, 'Weight');
        break;
      case 'bp':
        error = validateVitals(value, 'Blood Pressure');
        break;
    }
    setErrors(prev => ({ ...prev, [field]: error }));
  };

  // File upload handler
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
      setTouched(prev => ({ ...prev, file: true }));
      setErrors(prev => ({ ...prev, file: '' }));
    }
  };

  // ESC key handler
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  // Populate form for existing patient
  useEffect(() => {
    if (patientId) {
      const existing = appointments.find(app => app.patientId === patientId);
      if (existing) {
        setFullName(existing.patientName || '');
        setAge(existing.patientAge || 0);
        setGender(existing.patientGender || 'male');
        setPhoneNumber(existing.patientPhoneNumber || '');
        setEmailId(existing.patientEmailId || '');
        setIsReturning(existing.firstVisit || 'first');
      }
    }
  }, [patientId, appointments]);

  // Form submission with validation
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const newErrors: { [key: string]: string } = {
      fullName: validateFullName(fullName),
      age: validateAge(age),
      phoneNumber: validatePhoneNumber(phoneNumber),
      emailId: validateEmail(emailId),
      reason: validateReason(reason),
      heartRate: validateVitals(heartRate, 'Heart Rate'),
      height: validateVitals(height, 'Height'),
      weight: validateVitals(weight, 'Weight'),
      bp: validateVitals(bp, 'Blood Pressure'),
    };

    setErrors(newErrors);
    setTouched({
      fullName: true,
      age: true,
      phoneNumber: true,
      emailId: true,
      reason: true,
      heartRate: true,
      height: true,
      weight: true,
      bp: true,
    });

    if (Object.values(newErrors).some(error => error)) {
      console.log('Validation errors:', newErrors);
      return;
    }

    const { date, time } = getTodayDateTime();
    const newAppointment = {
      appointmentId: crypto.randomUUID(),
      patientId, // Keep as is, potentially undefined
      patientName: fullName,
      patientAge: age,
      patientGender: gender,
      patientPhoneNumber: phoneNumber,
      patientEmailId: emailId,
      date,
      time,
      reason,
      doctor: 'Nishanth',
      heartRate,
      bp,
      weight,
      height,
      firstVisit: isReturning,
      status: 'booked',
    };

    const updatedAppointments = [...appointments, newAppointment];
    saveAppointments(updatedAppointments);
    console.log({ newAppointment });
    console.log('Data Added');
    onClose();
  }

  return (
    <>
      <div className="add-patient-form-header">
        <h1 onClick={clearAppointments}>Book Appointment</h1>
        <p>Enter the details to schedule a new appointment</p>
      </div>

      <form className="add-patient-form" onSubmit={handleSubmit}>
        {/* Personal Information */}
        <section className="form-section">
          <div className="section-header">
            <UserIcon />
            <h3>Personal Information</h3>
          </div>

          <div className="section-content">
            <div
              className={`form-group ${errors.fullName && touched.fullName ? 'error' : ''}`}
              data-error={errors.fullName}
            >
              <label htmlFor={`fullName-${ID}`}>
                Full Name <span>*</span>
              </label>
              <input
                required
                type="text"
                id={`fullName-${ID}`}
                value={fullName}
                onChange={e => setFullName(e.target.value)}
                onBlur={() => handleBlur('fullName', fullName)}
                aria-invalid={errors.fullName && touched.fullName ? 'true' : 'false'}
                aria-describedby={
                  errors.fullName && touched.fullName ? `fullName-error-${ID}` : undefined
                }
              />
              {errors.fullName && touched.fullName && (
                <span id={`fullName-error-${ID}`} className="error-message">
                  {errors.fullName}
                </span>
              )}
            </div>

            <div className="form-row">
              <div
                className={`form-group ${errors.age && touched.age ? 'error' : ''}`}
                data-error={errors.age}
              >
                <label htmlFor={`age-${ID}`}>
                  Age <span>*</span>
                </label>
                <input
                  required
                  type="number"
                  id={`age-${ID}`}
                  value={age}
                  onChange={e => setAge(Number(e.target.value))}
                  onBlur={() => handleBlur('age', age)}
                  aria-invalid={errors.age && touched.age ? 'true' : 'false'}
                  aria-describedby={errors.age && touched.age ? `age-error-${ID}` : undefined}
                />
                {errors.age && touched.age && (
                  <span id={`age-error-${ID}`} className="error-message">
                    {errors.age}
                  </span>
                )}
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
              <div
                className={`form-group ${errors.phoneNumber && touched.phoneNumber ? 'error' : ''}`}
                data-error={errors.phoneNumber}
              >
                <label htmlFor={`phone-${ID}`}>
                  Phone Number <span>*</span>
                </label>
                <input
                  required
                  type="tel"
                  id={`phone-${ID}`}
                  value={phoneNumber}
                  onChange={e => setPhoneNumber(e.target.value)}
                  onBlur={() => handleBlur('phoneNumber', phoneNumber)}
                  aria-invalid={errors.phoneNumber && touched.phoneNumber ? 'true' : 'false'}
                  aria-describedby={
                    errors.phoneNumber && touched.phoneNumber ? `phone-error-${ID}` : undefined
                  }
                />
                {errors.phoneNumber && touched.phoneNumber && (
                  <span id={`phone-error-${ID}`} className="error-message">
                    {errors.phoneNumber}
                  </span>
                )}
              </div>
              <div
                className={`form-group ${errors.emailId && touched.emailId ? 'error' : ''}`}
                data-error={errors.emailId}
              >
                <label htmlFor={`email-${ID}`}>
                  Email <span>*</span>
                </label>
                <input
                  required
                  type="email"
                  id={`email-${ID}`}
                  value={emailId}
                  onChange={e => setEmailId(e.target.value)}
                  onBlur={() => handleBlur('emailId', emailId)}
                  aria-invalid={errors.emailId && touched.emailId ? 'true' : 'false'}
                  aria-describedby={
                    errors.emailId && touched.emailId ? `email-error-${ID}` : undefined
                  }
                />
                {errors.emailId && touched.emailId && (
                  <span id={`email-error-${ID}`} className="error-message">
                    {errors.emailId}
                  </span>
                )}
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

            <div
              className={`form-group ${errors.reason && touched.reason ? 'error' : ''}`}
              data-error={errors.reason}
            >
              <label htmlFor={`reason-${ID}`}>
                Reason for Visit <span>*</span>
              </label>
              <textarea
                required
                id={`reason-${ID}`}
                rows={3}
                value={reason}
                onChange={e => setReason(e.target.value)}
                onBlur={() => handleBlur('reason', reason)}
                aria-invalid={errors.reason && touched.reason ? 'true' : 'false'}
                aria-describedby={
                  errors.reason && touched.reason ? `reason-error-${ID}` : undefined
                }
              />
              {errors.reason && touched.reason && (
                <span id={`reason-error-${ID}`} className="error-message">
                  {errors.reason}
                </span>
              )}
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
              <div
                className={`form-group ${errors.heartRate && touched.heartRate ? 'error' : ''}`}
                data-error={errors.heartRate}
              >
                <label htmlFor={`heartRate-${ID}`}>
                  Heart Rate (bpm) <span>*</span>
                </label>
                <input
                  type="number"
                  id={`heartRate-${ID}`}
                  value={heartRate}
                  onChange={e => setHeartRate(Number(e.target.value))}
                  onBlur={() => handleBlur('heartRate', heartRate)}
                  aria-invalid={errors.heartRate && touched.heartRate ? 'true' : 'false'}
                  aria-describedby={
                    errors.heartRate && touched.heartRate ? `heartRate-error-${ID}` : undefined
                  }
                />
                {errors.heartRate && touched.heartRate && (
                  <span id={`heartRate-error-${ID}`} className="error-message">
                    {errors.heartRate}
                  </span>
                )}
              </div>
              <div
                className={`form-group ${errors.height && touched.height ? 'error' : ''}`}
                data-error={errors.height}
              >
                <label htmlFor={`height-${ID}`}>
                  Height (cm) <span>*</span>
                </label>
                <input
                  type="number"
                  id={`height-${ID}`}
                  value={height}
                  onChange={e => setHeight(Number(e.target.value))}
                  onBlur={() => handleBlur('height', height)}
                  aria-invalid={errors.height && touched.height ? 'true' : 'false'}
                  aria-describedby={
                    errors.height && touched.height ? `height-error-${ID}` : undefined
                  }
                />
                {errors.height && touched.height && (
                  <span id={`height-error-${ID}`} className="error-message">
                    {errors.height}
                  </span>
                )}
              </div>
            </div>
            <div className="form-row">
              <div
                className={`form-group ${errors.weight && touched.weight ? 'error' : ''}`}
                data-error={errors.weight}
              >
                <label htmlFor={`weight-${ID}`}>
                  Weight (kg) <span>*</span>
                </label>
                <input
                  type="number"
                  id={`weight-${ID}`}
                  value={weight}
                  onChange={e => setWeight(Number(e.target.value))}
                  onBlur={() => handleBlur('weight', weight)}
                  aria-invalid={errors.weight && touched.weight ? 'true' : 'false'}
                  aria-describedby={
                    errors.weight && touched.weight ? `weight-error-${ID}` : undefined
                  }
                />
                {errors.weight && touched.weight && (
                  <span id={`weight-error-${ID}`} className="error-message">
                    {errors.weight}
                  </span>
                )}
              </div>
              <div
                className={`form-group ${errors.bp && touched.bp ? 'error' : ''}`}
                data-error={errors.bp}
              >
                <label htmlFor={`bp-${ID}`}>
                  Blood Pressure <span>*</span>
                </label>
                <input
                  type="number"
                  id={`bp-${ID}`}
                  value={bp}
                  onChange={e => setBp(Number(e.target.value))}
                  onBlur={() => handleBlur('bp', bp)}
                  aria-invalid={errors.bp && touched.bp ? 'true' : 'false'}
                  aria-describedby={errors.bp && touched.bp ? `bp-error-${ID}` : undefined}
                />
                {errors.bp && touched.bp && (
                  <span id={`bp-error-${ID}`} className="error-message">
                    {errors.bp}
                  </span>
                )}
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

        {/* Form Actions */}
        <div className="form-actions">
          <button type="submit" className="book-appointment-button" id="bab">
            Book Appointment
          </button>
          <button type="button" onClick={onClose} className="cancel-button" id="cb">
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
  });
  const time = now.toLocaleTimeString('en-IN', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  });
  return { date, time };
}
