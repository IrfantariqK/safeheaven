// components/Header.js
import Link from "next/link";

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto py-4 flex justify-between items-center">
        <div>
          <Link href="/" legacyBehavior>
            <a className="flex items-center space-x-2">
              <img src="/logo.png" alt="Logo" className="w-8 h-8" />
              <span className="text-lg font-bold">Consultic Advisor</span>
            </a>
          </Link>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/" legacyBehavior>
                <a className="text-gray-600 hover:text-gray-900">Services</a>
              </Link>
            </li>
            <li>
              <Link href="/" legacyBehavior>
                <a className="text-gray-600 hover:text-gray-900">About</a>
              </Link>
            </li>
            <li>
              <Link href="/" legacyBehavior>
                <a className="text-gray-600 hover:text-gray-900">Blog</a>
              </Link>
            </li>
            <li>
              <Link href="/" legacyBehavior>
                <a className="text-gray-600 hover:text-gray-900">Contact</a>
              </Link>
            </li>
          </ul>
        </nav>
        <div>
          <a
            href="#"
            className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600"
          >
            Find a Financial Advisor
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
