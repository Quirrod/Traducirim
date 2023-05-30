export default function Button({
  children,
  onClick,
  color = "blue",
  size = "md",
  width = "auto",
  disabled = false,
  type = "button",
}) {
  const colorClasses = {
    blue: "bg-blue-500 hover:bg-blue-700",
    gray: "bg-gray-500 hover:bg-gray-700",
    green: "bg-green-500 hover:bg-green-700",
  };
  const sizeClasses = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  const widthClasses = {
    full: "w-full",
    auto: "w-auto",
  };

  const disabledClasses = disabled ? "opacity-50 cursor-not-allowed" : "";

  return (
    <button
      type={type}
      className={`text-white font-bold rounded ${colorClasses[color]} ${sizeClasses[size]} ${disabledClasses} ${widthClasses[width]}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
