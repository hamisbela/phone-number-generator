import { useState } from 'react';
import { Copy, RefreshCw } from 'lucide-react';
import { generatePhoneNumber } from '../lib/phoneFormats';
import type { CountryFormat } from '../lib/phoneFormats';

interface Props {
  country?: CountryFormat;
  countries?: CountryFormat[];
}

export default function PhoneGenerator({ country, countries }: Props) {
  const [selectedCountry, setSelectedCountry] = useState(country || countries?.[0]);
  const [generatedNumbers, setGeneratedNumbers] = useState<string[]>([]);

  const generateNumbers = () => {
    if (!selectedCountry) return;
    const numbers = selectedCountry.formats.map(format => generatePhoneNumber(format));
    setGeneratedNumbers(numbers);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        {countries && (
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select Country
            </label>
            <select
              className="w-full p-2 border border-gray-300 rounded-md"
              onChange={(e) => setSelectedCountry(countries.find(c => c.code === e.target.value))}
              value={selectedCountry?.code}
            >
              {countries.map((c) => (
                <option key={c.code} value={c.code}>
                  {c.name}
                </option>
              ))}
            </select>
          </div>
        )}

        <button
          onClick={generateNumbers}
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 flex items-center justify-center gap-2"
        >
          <RefreshCw className="h-4 w-4" />
          Generate Fake Phone Numbers
        </button>

        {generatedNumbers.length > 0 && (
          <div className="mt-6 space-y-4">
            {generatedNumbers.map((number, index) => (
              <div key={index} className="flex items-center justify-between bg-gray-50 p-3 rounded-md">
                <span className="font-mono text-lg">{number}</span>
                <button
                  onClick={() => copyToClipboard(number)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <Copy className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}