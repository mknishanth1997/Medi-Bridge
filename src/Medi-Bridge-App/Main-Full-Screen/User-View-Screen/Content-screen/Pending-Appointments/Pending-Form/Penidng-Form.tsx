import React, { useState } from 'react';
import { useData } from '../../../../../context/DataContext';
import './pending-form.css';
const PatientForm = ({ isFormOpen, patientId, setPatientId, appointmentId }) => {
  const { appointments, patientHistories, saveAppointments, savePatientHistories } = useData();
  const [diagnosis, setDiagnosis] = useState('');
  const [medications, setMedications] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [amountPaid, setAmountPaid] = useState('');
  const [pharmacyFromHospital, setPharmacyFromHospital] = useState('');
  const [doctorName, setDoctorName] = useState('');
  const [saveFollowup, setFollowup] = useState(false);
  const [followupDate, setFollowupDate] = useState('');
  const [additionalNotes, setAdditionalNotes] = useState('');

  console.log(patientId);

  function updateAppointments() {
    console.log({ patientId });
    let id;
    // Assignment of patient id
    if (patientId === undefined) {
      id = crypto.randomUUID();
    } else {
      id = patientId;
    }
    setPatientId(id);
    console.log({ patientId });

    const updatedAppointments = appointments.map(app => {
      if (app.appointmentId === appointmentId) {
        return {
          ...app,
          status: 'submitted',
          patientId: id,
        };
      }
      return app;
    });

    saveAppointments(updatedAppointments);
  }

  function savePatientVisit() {
    console.log('HI');
  }

  // function updateAppointmentStatusToSubmitted(
  //   appointmentId: string,
  //   appointments: Appointment[],
  //   saveAppointments: (updated: Appointment[]) => void
  // ): void {
  //   console.log({ appointmentId });

  //   if (!appointmentId) return;

  //   const updatedAppointments = appointments.map(appointment => {
  //     if (appointment.appointmentId === appointmentId) {
  //       return {
  //         ...appointment,
  //         status: 'submitted',
  //       };
  //     }
  //     return appointment;
  //   });

  //   saveAppointments(updatedAppointments);
  // }
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        // savePatientVisit();
        updateAppointments();

        // updateAppointmentStatusToSubmitted(appointmentId, appointments, saveAppointments);
        isFormOpen(false);
        // card logic
      }}
      className="patient-form"
    >
      <h2>Add Patient History</h2>
      <div className="form-section">
        <label>Enter patient diagnosis and treatment details</label>
        <textarea
          placeholder="Enter summary of doctor's diagnosis..."
          value={diagnosis}
          onChange={e => setDiagnosis(e.target.value)}
        />
      </div>

      <div className="form-section">
        <label>Prescribed Medications</label>
        <input
          type="text"
          placeholder="E.g., Paracetamol, Amoxicillin..."
          value={medications}
          onChange={e => setMedications(e.target.value)}
        />
        <small>Allow multiple medication entries separated by commas</small>
      </div>

      <div className="form-section">
        <label>Payment Details</label>
        <div className="radio-group">
          <label>
            <input
              type="radio"
              name="paymentMethod"
              value="Cash"
              checked={paymentMethod === 'Cash'}
              onChange={e => setPaymentMethod(e.target.value)}
            />
            Cash
          </label>
          <label>
            <input
              type="radio"
              name="paymentMethod"
              value="Card"
              checked={paymentMethod === 'Card'}
              onChange={e => setPaymentMethod(e.target.value)}
            />
            Card
          </label>
          <label>
            <input
              type="radio"
              name="paymentMethod"
              value="UPI"
              checked={paymentMethod === 'UPI'}
              onChange={e => setPaymentMethod(e.target.value)}
            />
            UPI
          </label>
          <label>
            <input
              type="radio"
              name="paymentMethod"
              value="Insurance"
              checked={paymentMethod === 'Insurance'}
              onChange={e => setPaymentMethod(e.target.value)}
            />
            Insurance
          </label>
          <label>
            <input
              type="radio"
              name="paymentMethod"
              value="Other"
              checked={paymentMethod === 'Other'}
              onChange={e => setPaymentMethod(e.target.value)}
            />
            Other
          </label>
        </div>
        <input
          type="text"
          placeholder="Enter amount paid"
          value={amountPaid}
          onChange={e => setAmountPaid(e.target.value)}
        />
      </div>

      <div className="form-section">
        <label>Pharmacy Confirmation</label>
        <div className="radio-group">
          <label>
            <input
              type="radio"
              name="pharmacy"
              value="Yes"
              checked={pharmacyFromHospital === 'Yes'}
              onChange={e => setPharmacyFromHospital(e.target.value)}
            />
            Yes
          </label>
          <label>
            <input
              type="radio"
              name="pharmacy"
              value="No"
              checked={pharmacyFromHospital === 'No'}
              onChange={e => setPharmacyFromHospital(e.target.value)}
            />
            No
          </label>
        </div>
      </div>

      <div className="form-section">
        <label>Additional Information (Optional)</label>
        <input
          type="text"
          placeholder="Dr. Suresh Kumar"
          value={doctorName}
          onChange={e => setDoctorName(e.target.value)}
        />
        <label>
          <input
            type="checkbox"
            checked={saveFollowup}
            onChange={e => setFollowup(e.target.checked)}
          />
          Follow-up needed?
        </label>
        <input
          type="date"
          value={followupDate}
          onChange={e => setFollowupDate(e.target.value)}
          disabled={!saveFollowup}
        />
        <textarea
          placeholder="Any additional notes or observations..."
          value={additionalNotes}
          onChange={e => setAdditionalNotes(e.target.value)}
        />
      </div>

      <button type="submit">Save Patient History</button>
    </form>
  );
};

export default PatientForm;
