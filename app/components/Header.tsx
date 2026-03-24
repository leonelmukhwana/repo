export default function Header() {
  return (
    <header className="sticky top-0 bg-white border-b border-yellow-500 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">

        <h1 className="text-xl font-bold text-black">
          Airtel 5G
        </h1>

        <nav className="space-x-6 text-black text-sm font-medium">
          <a href="/" className="hover:text-yellow-500">Home</a>
          <a href="/order" className="hover:text-yellow-500">Order</a>
          <a href="/thank-you" className="hover:text-yellow-500">Status</a>
          <a href="/troubleshoot" className="hover:text-yellow-500">Help</a>
        </nav>

      </div>
    </header>
  );
}