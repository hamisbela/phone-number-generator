interface CountryFormat {
  name: string;
  code: string;
  formats: string[];
  example: string;
}

export const countries: CountryFormat[] = [
  {
    name: "United States",
    code: "us",
    formats: ["(XXX) XXX-XXXX", "XXX-XXX-XXXX"],
    example: "(555) 123-4567"
  },
  {
    name: "United Kingdom",
    code: "uk",
    formats: ["XXXX XXXXXX", "XXXXX XXXXXX"],
    example: "07911 123456"
  },
  {
    name: "China",
    code: "cn",
    formats: ["XXX XXXX XXXX"],
    example: "139 1234 5678"
  },
  {
    name: "India",
    code: "in",
    formats: ["XXXXX XXXXX"],
    example: "98765 43210"
  },
  {
    name: "Germany",
    code: "de",
    formats: ["XXXX XXXXXXX"],
    example: "0170 1234567"
  },
  {
    name: "Japan",
    code: "jp",
    formats: ["XXX-XXXX-XXXX", "XX-XXXX-XXXX"],
    example: "090-1234-5678"
  },
  {
    name: "France",
    code: "fr",
    formats: ["XX XX XX XX XX"],
    example: "06 12 34 56 78"
  },
  {
    name: "Canada",
    code: "ca",
    formats: ["(XXX) XXX-XXXX", "XXX-XXX-XXXX"],
    example: "(416) 123-4567"
  },
  {
    name: "Australia",
    code: "au",
    formats: ["XXXX XXX XXX", "XX XXXX XXXX"],
    example: "0412 345 678"
  },
  {
    name: "South Korea",
    code: "kr",
    formats: ["XXX-XXXX-XXXX"],
    example: "010-1234-5678"
  },
  {
    name: "Italy",
    code: "it",
    formats: ["XXX XXX XXXX"],
    example: "333 123 4567"
  },
  {
    name: "Spain",
    code: "es",
    formats: ["XXX XXX XXX"],
    example: "612 345 678"
  },
  {
    name: "Netherlands",
    code: "nl",
    formats: ["XX XXXXXXXX"],
    example: "06 12345678"
  },
  {
    name: "Switzerland",
    code: "ch",
    formats: ["XXX XXX XX XX"],
    example: "078 123 45 67"
  },
  {
    name: "Sweden",
    code: "se",
    formats: ["XXX-XXX XX XX"],
    example: "070-123 45 67"
  },
  {
    name: "Singapore",
    code: "sg",
    formats: ["XXXX XXXX"],
    example: "8123 4567"
  },
  {
    name: "United Arab Emirates",
    code: "ae",
    formats: ["XX XXX XXXX"],
    example: "50 123 4567"
  },
  {
    name: "Saudi Arabia",
    code: "sa",
    formats: ["XXX XXX XXXX"],
    example: "501 234 5678"
  },
  {
    name: "Brazil",
    code: "br",
    formats: ["(XX) XXXXX-XXXX"],
    example: "(11) 98765-4321"
  },
  {
    name: "Russia",
    code: "ru",
    formats: ["X (XXX) XXX-XX-XX"],
    example: "7 (903) 123-45-67"
  }
];

export function generatePhoneNumber(format: string): string {
  return format.replace(/X/g, () => Math.floor(Math.random() * 10).toString());
}

export function getCountryByCode(code: string): CountryFormat | undefined {
  return countries.find(country => country.code === code);
}