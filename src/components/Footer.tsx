
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        <nav className="flex flex-wrap justify-center">
          <div className="px-5 py-2">
            <Link to="/about" className="text-gray-500 hover:text-gray-900">
              About
            </Link>
          </div>
          <div className="px-5 py-2">
            <Link to="/terms" className="text-gray-500 hover:text-gray-900">
              Terms
            </Link>
          </div>
          <div className="px-5 py-2">
            <Link to="/privacy" className="text-gray-500 hover:text-gray-900">
              Privacy
            </Link>
          </div>
          <div className="px-5 py-2">
            <Link to="/contact" className="text-gray-500 hover:text-gray-900">
              Contact
            </Link>
          </div>
        </nav>
        <div className="mt-8">
          <p className="text-center text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} EngageAI Events. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
