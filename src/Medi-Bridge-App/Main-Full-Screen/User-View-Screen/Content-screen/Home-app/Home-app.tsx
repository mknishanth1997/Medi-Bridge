import Card, { InfoCard, ProfileCard } from '../../../../../Testing/TestComponent-1/TestComp1';
import { AddPatientIcon } from '../../../../../assets/icons/SVGCODE';
import Appp, {
  PatientDisplayScreen,
} from '../Patient-History/Patient-Display-Screen/PatientDisplayScreen';
import { HomeScreenCard } from './HomeScreenCard/HomeScreenCard';
import './Home-app.css';
import { ROUTES } from '../../../../types/DATATYPES';
import { useNavigate } from 'react-router-dom';

export function HomeScreen() {
  const navigate = useNavigate();

  const first = {
    headerText: 'Book Appointment and Patients',
    text1: 'Book',
    text2: 'Revisit',
    bottomText: 'Saved',
    gradient: {
      background: 'linear-gradient(to bottom right, #f8d22e, #ffb969)',
    },
    onclick: () => navigate(ROUTES.ADDPATIENT),
  };
  const second = {
    headerText: 'Pending Appointment',
    text1: 'Swap',
    text2: 'Deadline',
    bottomText: 'Saved',
    gradient: {
      background: 'linear-gradient(to bottom right, #e948a9, #f8488e)',
    },
    onclick: () => navigate(ROUTES.PENDINGAPPOINTMENT),
  };
  const third = {
    headerText: 'Finished Appointment & Add History',
    text1: 'Swap',
    text2: 'Deadline',
    bottomText: 'Saved',
    gradient: {
      background: 'linear-gradient(135deg, #a855f7, #8b5cf6)',
    },
    onclick: () => navigate(ROUTES.FINISHEDAPPOINTMENT),
  };
  const fourth = {
    headerText: 'Patient History & other details',
    text1: 'Swap',
    text2: 'Deadline',
    bottomText: 'Saved',
    gradient: {
      background: 'linear-gradient(135deg, #60a5fa, #3b82f6)',
    },
    onclick: () => navigate(ROUTES.PATIENTHISTORY),
  };
  const fifth = {
    headerText: 'Revenue Analysis & Balance Sheet',
    text1: 'Swap',
    text2: 'Deadline',
    bottomText: 'Saved',
    gradient: {
      background: 'linear-gradient(135deg, #a855f7, #8b5cf6)',
    },
    onclick: () => navigate(ROUTES.REVENUEANALYSIS),
  };
  const sixth = {
    headerText: 'Doctor Performance',
    text1: 'Book',
    text2: 'Revisit',
    bottomText: 'Saved',
    gradient: {
      background: 'linear-gradient(to bottom right, #f8d22e, #ffb969)',
    },
    onclick: () => navigate(ROUTES.DOCTORPERFORMANCEANALYSIS),
  };
  return (
    <>
      <div className="homeScreendsfa">
        <HomeScreenCard {...first}></HomeScreenCard>
        <HomeScreenCard {...second}></HomeScreenCard>
        <HomeScreenCard {...third}></HomeScreenCard>
        <HomeScreenCard {...fourth}></HomeScreenCard>
        <HomeScreenCard {...fifth}></HomeScreenCard>
        <HomeScreenCard {...sixth}></HomeScreenCard>
      </div>
    </>
  );
}
