
import Header from '@/components/Header';
import HeroBanner from '@/components/HeroBanner';
import ProductsSection from '@/components/ProductsSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroBanner />
      <ProductsSection />
      <Footer />
    </div>
  );
};

export default Index;
