
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import { useState } from 'react';
import ContactModal from './ContactModal';

const HeroBanner = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const scrollToProducts = () => {
    const productsSection = document.getElementById('productos');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <section className="hero-gradient text-white py-12 md:py-20 lg:py-32">
        <div className="container mx-auto px-4 text-center">
          <div className="animate-fade-in">
            <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
              Distribuidor mayorista de confianza en Europa
            </h1>
            <p className="text-base md:text-xl lg:text-2xl mb-6 md:mb-8 text-blue-100 max-w-3xl mx-auto px-4">
              Productos de calidad al mejor precio, con envío rápido y soporte personalizado
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
              <Button 
                onClick={scrollToProducts}
                size="lg" 
                className="w-full sm:w-auto bg-white text-corporate-blue hover:bg-gray-100 px-6 md:px-8 py-3 text-base md:text-lg font-semibold"
              >
                Ver Productos
                <ArrowDown className="ml-2" size={20} />
              </Button>
              <Button 
                onClick={() => setIsModalOpen(true)}
                variant="outline" 
                size="lg" 
                className="w-full sm:w-auto border-2 border-white text-white bg-transparent hover:bg-white hover:text-corporate-blue px-6 md:px-8 py-3 text-base md:text-lg font-semibold transition-colors"
              >
                Solicitar Información
              </Button>
            </div>
          </div>
        </div>
      </section>

      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        type="information"
      />
    </>
  );
};

export default HeroBanner;
