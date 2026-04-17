import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function PublicLayout() {
  return (
    <>
      <div className=" bg-whitetransition-colors sm:overflow-hidden duration-500">
        <Navbar />

        <main>
          <Outlet />
        </main>
      </div>
      <Footer />
    </>
  );
}
