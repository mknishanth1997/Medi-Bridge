// routes

export const ROUTES = {
  HOME: '/home',
  ADDPATIENT: '/addPatient',
  PENDINGAPPOINTMENT: '/pendingAppointment',
  FINISHEDAPPOINTMENT: '/finishedAppointment',
  PATIENTHISTORY: '/patientHistory',
  REVENUEANALYSIS: '/revenueAnalysis',
  DOCTORPERFORMANCEANALYSIS: '/doctorPerformanceAnalysis',
};

// Individual Appointment Data

export type Appointment = {
  appointmentId: string;
  patientId: string;
  patientName: string;
  patientAge: number;
  patientGender: string;
  patientPhoneNumber: string;
  patientEmailId: string;
  date: string;
  time: string;
  reason: string;
  doctor: string;
  heartRate?: number;
  bp?: string;
  weight?: number;
  height?: number;
  bloodGroup: string;
  firstVisit: boolean;
  status: 'booked' | 'cancelled' | 'completed' | 'no-show';
};

// Individual Patient History Data

export type patientHistory = {
  patientId: string;
  diagnosis: string;
  prescribedMedication: string;
  modeOfPayment: 'cash' | 'card' | 'upi' | 'insurance' | 'other';
  amountPaid: number;
  pharmacyPurchaseConfirmation: boolean;
  followUpNeeded: boolean;
  followUpDate?: string;
  additionalNotes: string;
};
