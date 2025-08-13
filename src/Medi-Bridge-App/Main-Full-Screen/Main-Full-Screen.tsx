import { Header } from './User-View-Screen/Header/Header';
import './Main-Full-Screen.css';
import { SideBar } from './Side-Bar/Side-Bar';
import { Outlet } from 'react-router-dom';
import './User-View-Screen/Content-screen/Content-Screen.css';
import { TestHeader } from '../../Testing/TestComponent-1/TestComp1';

export function MainFullScreen() {
  return (
    <>
      <div className="app-layout">
        <SideBar></SideBar>
        {/*<Header></Header>*/}
        <TestHeader></TestHeader>
        <div className="content-screen">
          <Outlet /> {/* Routed content will render here */}
        </div>
      </div>
    </>
  );
}
