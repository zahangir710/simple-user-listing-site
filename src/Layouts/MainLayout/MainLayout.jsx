import { Outlet } from "react-router-dom";
import Header from "../../shared/Header/Header";
import Footer from "../../shared/Footer/Footer";

function MainLayout() {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
}

export default MainLayout;
