import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import Header from './components/Header';
import PhoneGenerator from './components/PhoneGenerator';
import SEOContent from './components/SEOContent';
import { countries, getCountryByCode } from './lib/phoneFormats';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="py-10">
          <Routes>
            <Route 
              path="/" 
              element={
                <>
                  <h1 className="text-4xl font-bold text-center text-gray-900 mb-10">
                    Fake Phone Number Generator
                  </h1>
                  <PhoneGenerator countries={countries} />
                  <SEOContent />
                </>
              } 
            />
            <Route 
              path="/generator/:countryCode" 
              element={
                <CountrySpecificGenerator />
              } 
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

function CountrySpecificGenerator() {
  const { countryCode } = useParams();
  const country = getCountryByCode(countryCode || '');

  if (!country) {
    return <div>Country not found</div>;
  }

  return (
    <>
      <h1 className="text-4xl font-bold text-center text-gray-900 mb-10">
        {country.name} Fake Phone Number Generator
      </h1>
      <PhoneGenerator country={country} />
      <SEOContent country={country.name} />
    </>
  );
}

export default App;