import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import Header from "./Header";
import Footer from "./Footer";

function Layout() {
  return (
    <>
      <Header />
      <main className="dark:bg-gray-900">
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
