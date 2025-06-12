
import { Phone, Mail, MapPin } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      {/* Top bar with contact info */}
      <div className="bg-corporate-blue text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center text-sm gap-2 sm:gap-4">
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6">
              <div className="flex items-center gap-2">
                <Phone size={14} />
                <span>+34 631 588 763</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={14} />
                <span>contacto@cmnecommerce.com</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={14} />
              <span>París, Francia</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-center sm:text-left">
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-corporate-blue">
              CMN E-COMMERCE SOLUTION
            </h1>
            <p className="text-sm text-corporate-gray mt-1">Distribuidor mayorista de confianza</p>
          </div>
          <div className="text-center sm:text-right bg-gray-50 px-4 py-2 rounded-lg border">
            <p className="text-xs text-corporate-gray mb-1">Matrícula N°</p>
            <p className="font-bold text-corporate-blue text-lg">814 428 785</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
