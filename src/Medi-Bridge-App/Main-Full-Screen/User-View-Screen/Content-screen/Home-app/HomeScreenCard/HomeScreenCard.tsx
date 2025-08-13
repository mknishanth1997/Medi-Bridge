import dseth from '../../../../../../assets/Logo/3dseth.avif';
import { IoIosStar } from 'react-icons/io';
import { MdOutlineHealthAndSafety } from 'react-icons/md';
import './HomeScreenCard.css';
export function HomeScreenCard({ headerText, text1, text2, bottomText, onclick, gradient }) {
  return (
    <>
      <div className="homeScreenCard" onClick={onclick} style={gradient}>
        <div className="starter-text">
          <p className="starter-actual-text">24/7 Hospital</p>
          <MdOutlineHealthAndSafety size={24}></MdOutlineHealthAndSafety>
        </div>
        <div className="header-text-home-scree-app">
          <div className="midsssss">
            <h1 className="header-acutal-text-hs">
              {headerText ?? 'Book Appointment and Patients'}
            </h1>
            <div className="some-dummy-texting">
              <p>{text1 ?? 'text-1'}</p>
              <p>{text2 ?? 'text-2'}</p>
            </div>
          </div>
          <div className="home-screen-card-header-img-container">
            <div className="someanotherdummytext">
              <IoIosStar size={34}></IoIosStar>
              <p>Saved</p>
            </div>
            <img src={dseth} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
