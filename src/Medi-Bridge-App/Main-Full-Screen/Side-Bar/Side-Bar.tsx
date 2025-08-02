import { NavLink } from 'react-router-dom';

export function SideBar() {
  return (
    <>
      <div className="side-bar">
        <h1>Side-Bar</h1>
        <NavLink to="/dashboard">Home Screen</NavLink>
        <NavLink to="/dashboardd">Add Patient</NavLink>
      </div>
    </>
  );
}
