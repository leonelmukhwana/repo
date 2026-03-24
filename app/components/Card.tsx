export default function Card({
  children,
  variant = "black",
}: {
  children: React.ReactNode;
  variant?: "black" | "gold";
}) {
  return (
    <div className="relative group rounded-2xl p-[2px] transition-all duration-300 hover:scale-[1.02]">

      {/* OUTER GLOW */}
      <div className="absolute inset-0 rounded-2xl bg-yellow-500 blur-md opacity-60 group-hover:opacity-100 transition"></div>

      {/* CARD BODY */}
      <div
        className={`relative rounded-2xl p-6 text-white ${
          variant === "gold"
            ? "bg-gradient-to-br from-black via-yellow-600 to-black"
            : "bg-black"
        }`}
      >
        {children}
      </div>
    </div>
  );
}