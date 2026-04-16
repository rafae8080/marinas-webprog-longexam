import { Link } from "react-router-dom";

const variantClasses = {
  primary: "bg-zinc-900 text-zinc-50 hover:bg-zinc-700",
  secondary: "bg-blue-900 text-white hover:bg-zinc-200",
  third: "bg-zinc-50 text-zinc-900 hover:bg-zinc-200",
};

const Button = ({
  children,
  to,
  type = "button",
  variant = "secondary, third",
  className = "",
}) => {
  const classes = [
    "inline-flex items-center justify-center rounded-full border-2 border-zinc-900 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.24em] transition",
    variantClasses[variant] ?? variantClasses.secondary,
    className,
  ]
    .join(" ")
    .trim();

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes}>
      {children}
    </button>
  );
};

export default Button;
