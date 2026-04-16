import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-950 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl flex flex-col gap-8">
        {/* Top Section */}
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          {/* Brand */}
          <div>
            <h2 className="text-xl font-bold text-white">BulldogEx Shop</h2>
            <p className="mt-2 text-sm text-zinc-400 max-w-xs">
              Campus essentials made simple. Fast, reliable, and built for
              students.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
              Navigation
            </span>
            <NavLink
              to="/"
              className="text-sm text-zinc-400 hover:text-white transition"
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className="text-sm text-zinc-400 hover:text-white transition"
            >
              About
            </NavLink>
            <NavLink
              to="/products"
              className="text-sm text-zinc-400 hover:text-white transition"
            >
              Products
            </NavLink>
          </div>

          {/* Extra (optional but recommended) */}
          <div className="flex flex-col gap-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
              Contact
            </span>
            <p className="text-sm text-zinc-400">support@bulldogex.com</p>
            <p className="text-sm text-zinc-400">+63 912 345 6789</p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-zinc-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-zinc-500">
            © {new Date().getFullYear()} BulldogEx Shop. All rights reserved.
          </p>

          <div className="flex gap-4 text-xs text-zinc-500">
            <span className="hover:text-white cursor-pointer transition">
              Privacy
            </span>
            <span className="hover:text-white cursor-pointer transition">
              Terms
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
