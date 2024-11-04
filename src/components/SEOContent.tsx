interface Props {
  country?: string;
}

export default function SEOContent({ country }: Props) {
  if (!country) {
    return (
      <div className="max-w-3xl mx-auto p-6 prose prose-indigo">
        <h2>What is the Fake Phone Number Generator?</h2>
        <p>
          Our comprehensive fake phone number generator creates realistic-looking phone numbers
          for multiple countries worldwide. Whether you need US, UK, German, Indian, or Chinese
          phone numbers, our tool generates numbers that follow each country's specific format
          and pattern.
        </p>

        <h2>How to Use Our Fake Phone Number Generator?</h2>
        <ol>
          <li>Select your target country from the dropdown menu</li>
          <li>Click the "Generate Fake Phone Numbers" button</li>
          <li>Copy any of the generated numbers using the copy button</li>
          <li>Generate new numbers anytime by clicking the button again</li>
        </ol>

        <h2>Why Use Our Fake Phone Number Generator?</h2>
        <ul>
          <li>Generate phone numbers for 20+ countries</li>
          <li>All numbers follow country-specific formats</li>
          <li>Perfect for software testing and development</li>
          <li>Instant generation with one click</li>
        </ul>

        <h2>Frequently Asked Questions</h2>
        
        <h3>Which countries are supported?</h3>
        <p>
          Our generator supports major countries including the United States, United Kingdom,
          Germany, India, China, and many more. Each country's number format is carefully
          implemented to match real-world patterns.
        </p>

        <h3>Are these real phone numbers?</h3>
        <p>
          No, these are randomly generated numbers that follow correct country-specific formats
          but are not actual working phone numbers. They should only be used for testing and
          demonstration purposes.
        </p>

        <h3>Can I use these numbers for my project?</h3>
        <p>
          Yes, these generated numbers are perfect for development, testing, and
          demonstration purposes. However, ensure you're not using them in any way that might
          mislead people into thinking they're real phone numbers.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-6 prose prose-indigo">
      <h2>Generate Fake {country} Phone Numbers Instantly</h2>
      <p>
        Looking for a reliable fake {country} phone number generator? Our specialized fake {country} phone
        number generator creates authentic-looking {country} phone numbers that follow the exact
        format and pattern used in {country}. Perfect for testing applications, forms, and databases
        that require {country} phone number validation.
      </p>

      <h2>Why Choose Our Fake {country} Phone Number Generator?</h2>
      <ul>
        <li>Generates authentic {country} phone number formats</li>
        <li>Follows all {country} telecommunication standards</li>
        <li>Perfect for {country}-specific software testing</li>
        <li>Instant generation with one click</li>
        <li>Free to use for all your {country} testing needs</li>
      </ul>

      <h2>How to Use the {country} Phone Number Generator Tool?</h2>
      <ol>
        <li>Simply click the "Generate Fake Phone Numbers" button</li>
        <li>Get multiple {country} phone number formats instantly</li>
        <li>Copy any generated {country} phone number with one click</li>
        <li>Generate new {country} numbers anytime you need</li>
      </ol>

      <h2> Fake {country} Phone Number Generator - Common Use Cases</h2>
      <ul>
        <li>Testing {country}-specific registration forms</li>
        <li>Developing applications for the {country} market</li>
        <li>Creating {country} user interface mockups</li>
        <li>Testing {country} phone number validation</li>
        <li>Populating test databases with {country} phone data</li>
      </ul>

      <h2>Frequently Asked Questions - {country} Phone Number Generator</h2>
      
      <h3>Are these real {country} phone numbers?</h3>
      <p>
        No, our {country} phone number generator creates randomly generated numbers that follow
        the correct {country} format but are not actual working phone numbers. They are
        specifically designed for testing and demonstration purposes in {country}-focused projects.
      </p>

      <h3>How accurate are the {country} number formats?</h3>
      <p>
        Our {country} phone number generator follows the official telecommunication standards
        used in {country}, including proper area codes and number lengths. Each generated
        number matches the format of real {country} phone numbers, making them perfect for
        testing {country}-specific applications.
      </p>

      <h3>Can I use these {country} numbers for testing?</h3>
      <p>
        Yes, these generated {country} phone numbers are perfect for development, testing,
        and demonstration purposes of {country}-focused applications. However, ensure you're
        not using them in any way that might mislead people into thinking they're real
        {country} phone numbers.
      </p>
    </div>
  );
}