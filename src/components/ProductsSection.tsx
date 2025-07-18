import ProductCard from './ProductCard';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import ContactModal from './ContactModal';

const products = [
  {
    id: 1,
    name: "Auriculares Inalámbricos Premium",
    description: "Auriculares Bluetooth de alta calidad con cancelación de ruido activa. Batería de larga duración hasta 30 horas. Perfectos para uso profesional y personal.",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop",
    category: "Electrónicos"
  },
  {
    id: 2,
    name: "Cafetera Espresso Automática",
    description: "Máquina de café espresso totalmente automática con molinillo integrado. Sistema de vapor para cappuccinos y lattes. Ideal para oficinas y hogares.",
    price: 69.99,
    image: "https://d296pbmv9m7g8v.cloudfront.net/Custom/Content/Products/10/40/1040935_cafeteira-dolce-gusto-arno-genio-s-plus-dgs3-capsula-automatica-vermelha-10006431_z144_638597707627247593.webp?w=400&h=300&fit=crop",
    category: "Hogar"
  },
  {
    id: 3,
    name: "Kit Herramientas Profesional",
    description: "Set completo de herramientas para profesionales. Incluye taladro, destornilladores, llaves y maletín organizador. Garantía de 2 años.",
    price: 24.99,
    image: "https://m.media-amazon.com/images/I/81NzamswRGL.__AC_SX300_SY300_QL70_ML2_.jpg?w=400&h=300&fit=crop",
    category: "Herramientas"
  },
  {
    id: 4,
    name: "Smartwatch Deportivo",
    description: "Reloj inteligente con GPS, monitor de ritmo cardíaco y resistente al agua. Compatible con iOS y Android. Pantalla AMOLED de alta resolución.",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop",
    category: "Electrónicos"
  },
  {
    id: 5,
    name: "Aspiradora Robot Inteligente",
    description: "Robot aspirador con navegación inteligente y mapeo láser. Control por app móvil. Base de carga automática y filtro HEPA incluido.",
    price: 34.99,
    image: "https://cdn.awsli.com.br/2500x2500/2780/2780034/produto/317870928/img_0319-ywe0antymz.jpeg?w=400&h=300&fit=crop",
    category: "Hogar"
  },
  {
    id: 6,
    name: "Mochila Antirobo Premium",
    description: "Mochila de alta seguridad con puerto USB, compartimento para laptop hasta 15.6 pulgadas. Material resistente al agua y cremalleras ocultas.",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=300&fit=crop",
    category: "Accesorios"
  },
  {
    id: 7,
    name: "Tablet 10 Pulgadas 4G",
    description: "Tablet Android con pantalla Full HD, 4GB RAM, 64GB almacenamiento. Conectividad 4G LTE. Perfecta para trabajo y entretenimiento.",
    price: 36.99,
    image: "https://s.alicdn.com/@sc04/kf/Hf569a5432eba43c79a4bf7297949456bT.jpg_720x720q50.jpg?w=400&h=300&fit=crop",
    category: "Electrónicos"
  },
  {
    id: 8,
    name: "Set Utensilios Cocina Acero",
    description: "Juego completo de utensilios de cocina en acero inoxidable. Incluye sartenes, ollas y accesorios. Apto para todo tipo de cocinas.",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop",
    category: "Hogar"
  },
  {
    id: 9,
    name: "Cámara de Seguridad WiFi",
    description: "Cámara IP inalámbrica con visión nocturna y detección de movimiento. Resolución 1080p Full HD. Acceso remoto desde smartphone.",
    price: 29.99,
    image: "https://www.upperseg.com.br/img/products/camera-ip-sem-fio-mini-speed-dome-wi-fi-full-hd-1080p-infravermelho-ip66_1_2000.webp?w=400&h=300&fit=crop",
    category: "Electrónicos"
  },
  {
    id: 10,
    name: "Juego Toallas Premium Bambú",
    description: "Set de toallas de bambú ultra suaves y absorbentes. Antibacterianas y ecológicas. Incluye toallas de baño, mano y cara.",
    price: 14.99,
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Sb834d15d1c4745ce9b3c5c798b081c11n.jpg_960x960q75.jpg_.avif?w=400&h=300&fit=crop",
    category: "Hogar"
  },
  {
    id: 11,
    name: "Lámpara LED Recargable",
    description: "Lámpara portátil LED con batería recargable por USB. Ideal para camping, emergencias o escritorio. Ligera y duradera.",
    price: 9.99,
    image: "https://images.tcdn.com.br/img/img_prod/1180965/lampada_led_recarregavel_usb_100w_197863159_1_a97addec16c8fde96ec400e84f2e5b20.jpg?w=400&h=300&fit=crop",
    category: "Electrónicos"
  },
  {
    id: 12,
    name: "Organizador de Cables Multifuncional",
    description: "Caja organizadora para cables, cargadores y accesorios tecnológicos. Mantén tu escritorio limpio y ordenado.",
    price: 9.49,
    image: "https://ugreendobrasil.com.br/wp-content/uploads/2024/05/3880_01.jpg?w=400&h=300&fit=crop",
    category: "Accesorios"
  },
  {
    id: 13,
    name: "Guantes Antideslizantes Cocina",
    description: "Par de guantes resistentes al calor para cocina o parrilla. Material antideslizante y seguro para temperaturas elevadas.",
    price: 9.89,
    image: "https://ae01.alicdn.com/kf/H917b2099d8264e888d1004f735cf9f24w/Guantes-Resistentes-a-Altas-Temperaturas-para-la-Parrilla-Manoplas-Ign-fugas-con-Aislamiento-de-500-800.jpg?w=400&h=300&fit=crop",
    category: "Hogar"
  },
  {
    id: 14,
    name: "Botella Deportiva con Filtro",
    description: "Botella reutilizable de 650ml con filtro incluido. Ideal para actividades deportivas y al aire libre. Libre de BPA.",
    price: 9.75,
    image: "https://www.thundra.co/wp-content/uploads/2020/03/IMG_2542-1.jpeg?w=400&h=300&fit=crop",
    category: "Accesorios"
  },
  {
    id: 15,
    name: "Cortador de Verduras Multifunción",
    description: "Herramienta de cocina 4 en 1 para cortar, rallar y pelar vegetales. Ahorra tiempo y espacio en la cocina.",
    price: 9.59,
    image: "https://down-br.img.susercontent.com/file/br-11134207-7r98o-m21aayr3a501be?w=400&h=300&fit=crop",
    category: "Hogar"
  }
];

const ProductsSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section id="productos" className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-corporate-blue-dark mb-3 md:mb-4">
              Nuestros Productos
            </h2>
            <p className="text-base md:text-lg text-corporate-gray max-w-2xl mx-auto px-2">
              Descubre nuestra amplia gama de productos de alta calidad para mayoristas. 
              Precios competitivos y stock garantizado.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="text-center mt-8 md:mt-12 px-4">
            <p className="text-corporate-gray mb-4 text-sm md:text-base">
              ¿Necesitas más información sobre nuestros productos?
            </p>
            <Button 
              className="w-full sm:w-auto bg-corporate-blue hover:bg-corporate-blue-dark text-white px-6 md:px-8 py-3 text-sm md:text-base"
              onClick={() => setIsModalOpen(true)}
            >
              Contactar Ahora
            </Button>
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

export default ProductsSection;
