// routes

export const ROUTES = {
  HOME: '/home',
  ADDPATIENT: '/addPatient',
  PENDINGAPPOINTMENT: '/pendingAppointment',
  FINISHEDAPPOINTMENT: '/finishedAppointment',
  PATIENTHISTORY: '/patientHistory',
  REVENUEANALYSIS: '/revenueAnalysis',
  DOCTORPERFORMANCEANALYSIS: '/doctorPerformanceAnalysis',
  DOCTORDISPLAYSCREEN: './doctorDisplayScreen',
};

// Individual Appointment Data

export type Appointment = {
  appointmentId: string;
  patientId: string | undefined;
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
  bloodGroup?: string;
  firstVisit: boolean;
  status: string;
};

// Individual Patient History Data

export type patientHistory = {
  patientId: string;
  name: string;
  age: number;
  gender: string;
  phoneNumber: string;
  emailId: string;
  visits: Visit[];
};

//
//

export type Visit = {
  visitId: string;
  date: string;
  time: string;
  reason?: string;
  doctor?: string;
  firstVisit?: boolean;
  status: string;

  vitals?: {
    heartRate?: number;
    bp?: string;
    weight?: number;
    height?: number;
  };

  history?: {
    diagnosis?: string;
    prescribedMedication?: string;
    modeOfPayment?: 'cash' | 'card' | 'upi' | 'insurance' | 'other';
    amountPaid?: number;
    pharmacyPurchaseConfirmation?: boolean;
    followUpNeeded?: boolean;
    followUpDate?: string;
    additionalNotes?: string;
  };
};

export type FullPatient = {
  patientId: string;
  name: string;
  age: number;
  gender: string;
  phoneNumber: string;
  emailId: string;
  visits: Visit[];
};

// export type patientHistory = {
//   patientId: string;
//   diagnosis: string;
//   prescribedMedication: string;
//   modeOfPayment: 'cash' | 'card' | 'upi' | 'insurance' | 'other';
//   amountPaid: number;
//   pharmacyPurchaseConfirmation: boolean;
//   followUpNeeded: boolean;
//   followUpDate?: string;
//   additionalNotes: string;
// };
