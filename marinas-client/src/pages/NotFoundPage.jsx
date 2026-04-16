import Button from "../components/Button";
import logo from "../assets/img/nubdexchange_logo.png";

const NotFoundPage = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 px-4">
      <div className="text-center max-w-lg">
        {/* Logo */}
        <div className="mb-6 flex justify-center">
          <img
            src={logo}
            alt="BulldogEx Logo"
            className="h-20 w-auto object-contain opacity-90"
          />
        </div>
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-400">
          Error 404
        </p>

        <h1 className="mt-3 text-3xl sm:text-4xl font-bold text-zinc-900">
          Page not found
        </h1>

        {/* Description */}
        <p className="mt-4 text-sm sm:text-base text-zinc-500 leading-relaxed">
          The page you’re looking for doesn’t exist, was removed, or you might
          have entered the wrong URL.
        </p>

        {/* Actions */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button to="/" variant="primary" className="w-full sm:w-auto">
            Back Home
          </Button>

          <Button
            to="/products"
            variant="secondary"
            className="w-full sm:w-auto"
          >
            Browse Products →
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
