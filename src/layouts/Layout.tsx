import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import Header from "@/layouts/Header";
import Footer from "@/layouts/Footer";

function Layout() {
  return (
    <>
      <Header />
      <main className="dark:bg-gray-900 mt-20 max-w-screen-xl px-2 mx-auto">
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}

export default Layout;
