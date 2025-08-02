import { Header } from './User-View-Screen/Header/Header';
import './Main-Full-Screen.css';
import { SideBar } from './Side-Bar/Side-Bar';
import { Outlet } from 'react-router-dom';
import './User-View-Screen/Content-screen/Content-Screen.css';
export function MainFullScreen() {
  return (
    <>
      <div className="app-layout">
        <SideBar></SideBar>
        <Header></Header>
        <div className="content-screen">
          <Outlet /> {/* Routed content will render here */}
        </div>
      </div>
    </>
  );
}
