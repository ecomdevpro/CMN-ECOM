
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useState } from 'react';
import ContactModal from './ContactModal';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Card className="card-hover h-full flex flex-col">
        <CardHeader className="p-0">
          <div className="relative overflow-hidden rounded-t-lg">
            <img 
              src={product.image}
              alt={product.name}
              className="w-full h-40 md:h-48 object-cover transition-transform duration-300 hover:scale-105"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop";
              }}
            />
            <Badge className="absolute top-2 left-2 bg-corporate-blue text-white text-xs">
              {product.category}
            </Badge>
          </div>
        </CardHeader>
        
        <CardContent className="p-3 md:p-4 flex-1">
          <h3 className="font-semibold text-base md:text-lg mb-2 text-corporate-blue-dark line-clamp-2">
            {product.name}
          </h3>
          <p className="text-corporate-gray text-xs md:text-sm mb-3 md:mb-4 line-clamp-3">
            {product.description}
          </p>
          <div className="text-xl md:text-2xl font-bold text-corporate-blue">
            €{product.price.toFixed(2)}
          </div>
        </CardContent>
        
        <CardFooter className="p-3 md:p-4 pt-0">
          <Button 
            className="w-full bg-corporate-blue hover:bg-corporate-blue-dark text-white text-xs md:text-sm py-2"
            onClick={() => setIsModalOpen(true)}
          >
            Solicitar Cotización
          </Button>
        </CardFooter>
      </Card>

      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        type="quote"
        productName={product.name}
      />
    </>
  );
};

export default ProductCard;
