import { Outlet } from "react-router";
import Navbar from "../sections/Navbar";
import UnderNavbar from "../sections/UnderNavbar";
import StarBg from "../assets/StarBg";
import { SmoothCursor } from "@/components/ui/smooth-cursor";

function AdminLayout() {
  return (
    <div className="min-h-screen">
      <StarBg />
      <SmoothCursor />
      <Navbar />
      <main className="pt-16 pb-20">
        <Outlet />
      </main>
      <UnderNavbar />
    </div>
  );
}

export default AdminLayout;
