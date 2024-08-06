export default function Navbar() {
  return (
    <nav className="bg-white py-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <img
            src="/Navbar/law-logo.png"
            alt="Law Logo"
            className="h-20 w-20"
          />
          <span className="text-xl font-bold ml-2">One Law</span>
        </div>

        <div className="space-x-8">
          <a href="#" className="text-gray-800 hover:text-gray-600">
            Home
          </a>
          <a href="#" className="text-gray-800 hover:text-gray-600">
            About Us
          </a>
          <a href="#" className="text-gray-800 hover:text-gray-600">
            Family Law
          </a>
          <a href="#" className="text-gray-800 hover:text-gray-600">
            Immigration Law
          </a>
          <a href="#" className="text-gray-800 hover:text-gray-600">
            Contacts
          </a>
        </div>
      </div>
    </nav>
  );
}
