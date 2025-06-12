
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

interface ContactFormProps {
  type: 'information' | 'quote';
  productName?: string;
  onSuccess: () => void;
}

const ContactForm = ({ type, productName, onSuccess }: ContactFormProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    console.log('Form submitted:', { type, productName, ...formData });

    toast({
      title: "¡Mensaje enviado con éxito!",
      description: "En breve un representante se pondrá en contacto contigo.",
    });

    setIsSubmitting(false);
    onSuccess();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const isFormValid = formData.name && formData.email && formData.message;

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="name">Nombre *</Label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Tu nombre completo"
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email *</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="tu@email.com"
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="phone">Teléfono</Label>
          <Input
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+34 600 000 000"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="company">Empresa</Label>
          <Input
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Nombre de tu empresa"
          />
        </div>
      </div>

      {productName && (
        <div className="p-3 bg-blue-50 rounded-lg border">
          <p className="text-sm text-corporate-blue font-medium">
            {type === 'quote' ? 'Producto para cotización:' : 'Producto de interés:'} {productName}
          </p>
        </div>
      )}

      <div className="space-y-2">
        <Label htmlFor="message">Mensaje *</Label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder={
            type === 'quote' 
              ? "Describe las cantidades y especificaciones que necesitas..."
              : "Describe la información que necesitas sobre nuestros productos o servicios..."
          }
          rows={4}
          required
        />
      </div>

      <Button
        type="submit"
        disabled={!isFormValid || isSubmitting}
        className="w-full bg-corporate-blue hover:bg-corporate-blue-dark text-white"
      >
        {isSubmitting ? 'Enviando...' : (type === 'quote' ? 'Solicitar Cotización' : 'Enviar Solicitud')}
      </Button>
    </form>
  );
};

export default ContactForm;
