import { Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { countries } from '../lib/phoneFormats';

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex items-center">
              <Phone className="h-6 w-6 text-indigo-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">Fake Phone Number Generator</span>
            </Link>
          </div>
          
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
            <div className="relative group">
              <button className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900">
                Country Specific Phone Number Generators
              </button>
              <div className="absolute z-10 hidden group-hover:block w-48 bg-white rounded-md shadow-lg py-1">
                {countries.map((country) => (
                  <Link
                    key={country.code}
                    to={`/generator/${country.code}`}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    {country.name} Fake Phone Number Generator
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}