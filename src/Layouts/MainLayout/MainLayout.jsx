import { Outlet } from "react-router-dom";
import Header from "../../shared/Header/Header";
import Footer from "../../shared/Footer/Footer";
import "./MainLayout.css";

function MainLayout() {
  return (
    <div className="main-layout">
      <div className="sidebar">
        <p>Left Sidebar</p>
      </div>
      <div className="content">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}

export default MainLayout;
