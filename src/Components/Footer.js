import React from 'react';

function Footer() {
  return (
    <footer style={{ backgroundColor: '#FFEAD0', color: '#6B747F' }}>
      <div className="container mx-auto py-8">
        <div className="flex flex-wrap justify-between">
          {/* Company */}
          <div className="w-full sm:w-1/2 md:w-auto mb-4">
            <h3 className="text-lg font-semibold mb-2">Company</h3>
            <ul>
              <li>About</li>
              <li>Partners</li>
              <li>Licenses</li>
              <li>Careers</li>
            </ul>
          </div>

          {/* Industries */}
          <div className="w-full sm:w-1/2 md:w-auto mb-4">
            <h3 className="text-lg font-semibold mb-2">Industries</h3>
            <ul>
              <li>Exporters</li>
              <li>Media & Telecommunications</li>
              <li>Travel & Tourism </li>
              <li>Charities & NGOs</li>
              <li>Educational Institutions</li>
              <li>Importers</li>
            </ul>
          </div>

          {/* Support */}
          <div className="w-full sm:w-1/2 md:w-auto mb-4">
            <h3 className="text-lg font-semibold mb-2">Support</h3>
            <ul>
              <li>Help Center</li>
              <li>Contact Us</li>
            </ul>
          </div>

          {/* Transparency */}
          <div className="w-full sm:w-1/2 md:w-auto mb-4">
            <h3 className="text-lg font-semibold mb-2">Transparency</h3>
            <ul>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
