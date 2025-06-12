
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import ContactForm from './ContactForm';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'information' | 'quote';
  productName?: string;
}

const ContactModal = ({ isOpen, onClose, type, productName }: ContactModalProps) => {
  const title = type === 'quote' 
    ? 'Solicitar Cotización' 
    : 'Solicitar Información';

  const description = type === 'quote'
    ? 'Completa el formulario y te enviaremos una cotización personalizada'
    : 'Completa el formulario y te proporcionaremos toda la información que necesitas';

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md max-w-[95vw] mx-auto max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-corporate-blue">
            {title}
          </DialogTitle>
          <p className="text-sm text-corporate-gray mt-2">
            {description}
          </p>
        </DialogHeader>
        
        <div className="mt-4">
          <ContactForm
            type={type}
            productName={productName}
            onSuccess={onClose}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ContactModal;
