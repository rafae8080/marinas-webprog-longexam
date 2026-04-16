import { Outlet } from "react-router-dom";
import logo from "../assets/img/nubdexchange_logo.png";
const AuthLayout = () => {
  return (
    <section className="min-h-screen bg-stone-100 text-stone-900">
      <div className="grid min-h-screen w-full lg:grid-cols-[1fr_0.95fr]">
        {/* Left decorative panel */}
        <div className="hidden lg:flex items-center justify-center border-r-2 border--300 border-gray-500 bg-linear-to-bl from-blue-700 to-yellow-400  p-16">
          <div className="flex w-full max-w-md flex-col items-center justify-center gap-10">
            <div className="flex w-full items-center justify-center rounded-3xl  p-10">
              <img src={logo} alt="Logo" className="h-60.5 w-60.5" />
            </div>
          </div>
        </div>

        {/* Right form panel */}
        <main className="flex min-h-screen items-center bg-stone-50 px-6 py-10 sm:px-10 lg:px-16">
          <div className="mx-auto w-full max-w-md">
            <Outlet />
          </div>
        </main>
      </div>
    </section>
  );
};

export default AuthLayout;
