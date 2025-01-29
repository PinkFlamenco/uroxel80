import React, { useState } from 'react';
import { Star } from 'lucide-react';

// Modal Component
const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-2xl max-w-2xl w-full mx-4">
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-gray-900">{title}</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
          </div>
          <div className="text-gray-600 whitespace-pre-line">
            {children}
          </div>
          <div className="mt-6 flex justify-end">
            <button
              onClick={onClose}
              className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-300"
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Header Component
const Header = () => (
  <header className="bg-gradient-to-r from-indigo-500 via-purple-500 to-purple-600 text-white py-8">
    <div className="container mx-auto px-4">
      <h1 className="text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-100">
        Uroxel
      </h1>
      <p className="text-2xl text-center mt-4 font-light">
        Evolución Natural para tu Vitalidad Diaria
      </p>
    </div>
  </header>
);

// Hero Component
const Hero = () => (
  <section className="py-20 bg-gradient-to-b from-purple-50 to-white">
    <div className="container mx-auto px-4 flex flex-wrap items-center">
      <div className="w-full md:w-1/2 mb-8 md:mb-0 transform hover:scale-105 transition-transform duration-500">
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-indigo-400 to-purple-600 rounded-lg blur opacity-30"></div>
          <img 
            src="/product.png" 
            alt="Uroxel - Evolución Natural" 
            className="relative mx-auto max-w-sm rounded-lg shadow-2xl"
          />
        </div>
      </div>
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-800">
          ¡Revoluciona tu Bienestar Natural!
        </h2>
        <p className="text-xl mb-8 text-gray-700">
          Descubre la sinergia perfecta entre ciencia avanzada y sabiduría natural para potenciar tu vitalidad
        </p>
        <div className="text-3xl font-bold text-indigo-600 mb-8">$590 MXN</div>
        <button 
          onClick={() => document.getElementById('orderForm').scrollIntoView({ behavior: 'smooth' })}
          className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-10 py-4 rounded-full hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
        >
          ¡Descubre la Diferencia!
        </button>
      </div>
    </div>
  </section>
);

// Benefits Component
const Benefits = () => {
  const benefitsData = [
    {
      icon: "🔬",
      title: "Ciencia Avanzada",
      description: "Fórmula revolucionaria desarrollada por expertos, combinando lo mejor de la investigación moderna con principios naturales"
    },
    {
      icon: "⚡",
      title: "Potencia Natural",
      description: "Activación optimizada de tus recursos naturales para un rendimiento excepcional y sostenible"
    },
    {
      icon: "🌟",
      title: "Calidad Superior",
      description: "Estándares premium en cada paso del proceso, desde la selección de ingredientes hasta el producto final"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-800">
          Beneficios Excepcionales
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {benefitsData.map((benefit, index) => (
            <div 
              key={index}
              className="text-center p-8 rounded-xl bg-gradient-to-b from-white to-purple-50 shadow-xl hover:transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="text-5xl mb-6">{benefit.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-indigo-700">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Ingredients Component
const Ingredients = () => {
  const ingredientsData = [
    {
      title: "Extracto BioActivo",
      description: "Complejo natural concentrado que maximiza la absorción y eficacia de los componentes activos"
    },
    {
      title: "Complejo Vital",
      description: "Sinergia única de minerales y nutrientes esenciales para potenciar tu energía natural"
    },
    {
      title: "Fórmula Avanzada",
      description: "Combinación científicamente optimizada para resultados superiores y duraderos"
    },
    {
      title: "Potenciador Natural",
      description: "Ingredientes seleccionados para trabajar en armonía con tu cuerpo"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-purple-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-800">
          Tecnología Avanzada
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {ingredientsData.map((ingredient, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300"
            >
              <h3 className="text-2xl font-bold mb-4 text-indigo-600">{ingredient.title}</h3>
              <p className="text-gray-600">{ingredient.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Reviews Component
const Reviews = () => {
  const reviews = [
    {
      name: "Dr. Alejandro R.",
      rating: 5.0,
      text: "Como profesional de la salud, estoy impresionado por la calidad y efectividad de esta fórmula. Mis pacientes reportan resultados excepcionales desde las primeras semanas."
    },
    {
      name: "María S.",
      rating: 4.9,
      text: "Increíble cómo un producto natural puede marcar tanta diferencia. Mi energía y vitalidad han mejorado notablemente. ¡Totalmente recomendado!"
    },
    {
      name: "Ing. Carlos M.",
      rating: 5.0,
      text: "La mejor inversión en mi bienestar. Los resultados son consistentes y la calidad del producto es evidente. Una experiencia transformadora."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-800">
          Testimonios de Éxito
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {reviews.map((review, index) => (
            <div 
              key={index} 
              className="bg-gradient-to-b from-white to-purple-50 p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={i < Math.floor(review.rating) ? "text-indigo-500 fill-current" : "text-gray-300"}
                    size={24}
                  />
                ))}
                <span className="ml-3 text-lg text-gray-600">{review.rating}</span>
              </div>
              <p className="mb-6 text-gray-700">{review.text}</p>
              <p className="font-bold text-indigo-600">{review.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Order Form Component
const OrderForm = () => {
  const [showThankYouModal, setShowThankYouModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowThankYouModal(true);
  };

  return (
    <section id="orderForm" className="py-20 bg-gradient-to-b from-purple-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-800">
          ¡Inicia tu Transformación!
        </h2>
        <div className="max-w-md mx-auto">
          <form 
            onSubmit={handleSubmit}
            className="bg-white p-10 rounded-2xl shadow-2xl"
          >
            <div className="mb-8">
              <input
                type="text"
                className="name w-full px-6 py-4 border-2 border-indigo-200 rounded-xl focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all"
                name="name"
                maxLength="30"
                placeholder="Tu nombre completo"
                required
              />
            </div>
            <div className="mb-8">
              <input
                type="tel"
                className="name w-full px-6 py-4 border-2 border-indigo-200 rounded-xl focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all"
                name="phone"
                id="phoneNumber"
                placeholder="Tu número de teléfono"
                required
              />
            </div>

            <input type="hidden" name="pp" value="everad" />
            <input type="hidden" name="flow_id" value="1135205" />
            <input type="hidden" name="offer_id" value="" />
            <input type="hidden" name="geo" value="MX" />
            <input type="hidden" name="price" value="590" />
            <input type="hidden" name="sub1" value="{subid}" />
            <input type="hidden" name="sub2" value="carti" />
            <input type="hidden" name="sub3" value="{utm_campaign}" />
            <input type="hidden" name="sub4" value="{utm_medium}" />
            <input type="hidden" name="sub5" value="{utm_content}" />
            <input type="hidden" name="pixel" value="{pixel}" />
            <input type="hidden" name="gclid" value="{gclid}" />
            <input type="hidden" name="gbraid" value="{gbraid}" />
            <input type="hidden" name="wbraid" value="{wbraid}" />

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-8 py-4 rounded-xl text-xl font-bold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
            >
              Solicitar Ahora - $590 MXN
            </button>
            
            <p className="text-sm text-gray-500 mt-6 text-center">
              Uroxel es un suplemento natural premium diseñado para optimizar tu bienestar. 
              Consulta con tu profesional de salud antes de iniciar cualquier régimen de suplementación.
            </p>
          </form>
        </div>
      </div>

      <Modal
        isOpen={showThankYouModal}
        onClose={() => setShowThankYouModal(false)}
        title="¡Felicidades por tu Decisión!"
      >
        ¡Bienvenido a una nueva etapa en tu bienestar personal!

        Tu pedido de Uroxel ha sido registrado exitosamente. Nuestro equipo especializado está preparando tu pedido con el máximo cuidado y atención.

        Próximos pasos:
        1. Recibirás la confirmación por correo electrónico en breve
        2. Un especialista se comunicará contigo en las próximas 24 horas
        3. Preparación y envío discreto de tu pedido
        4. Seguimiento personalizado de tu envío

        Estamos aquí para apoyarte:
        Email: support@uroxelgood.netlify.app
        WhatsApp: +52 (52) 2234-5672
        
        ¡Gracias por elegir Uroxel para optimizar tu bienestar natural!
      </Modal>
    </section>
  );
};

// Footer Component
const Footer = () => {
  const [activeModal, setActiveModal] = useState(null);

  const footerLinks = [
    { 
      id: 'privacy', 
      title: 'Política de Privacidad', 
      content: `Compromiso con tu Privacidad en Uroxel

Tu privacidad y seguridad son fundamentales para nosotros. Entendemos la importancia de proteger tu información personal.

Información que Protegemos:
• Datos personales de contacto
• Información de pedidos
• Preferencias de productos
• Historial de compras

Medidas de Protección:
• Certificado SSL de última generación
• Servidores seguros certificados
• Acceso restringido a datos sensibles
• Monitoreo continuo de seguridad

Tus Derechos Incluyen:
• Acceso a tu información
• Corrección de datos
• Eliminación de registros
• Control de comunicaciones

Para consultas sobre privacidad:
Email: support@uroxelgood.netlify.app
WhatsApp: +52 (52) 2234-5672`
    },
    { 
      id: 'terms', 
      title: 'Términos de Servicio', 
      content: `Términos y Condiciones de Uroxel

Al utilizar nuestros servicios, aceptas los siguientes términos:

Sobre Nuestros Servicios:
• Productos exclusivos para mayores de 18 años
• Precios en Pesos Mexicanos (MXN)
• Verificación de pedidos por seguridad
• Disponibilidad sujeta a stock

Política de Compra:
• Métodos de pago verificados
• Confirmación automática por email
• Procesamiento seguro garantizado
• Facturación disponible

Envío y Logística:
• Entrega express nacional
• Seguimiento en tiempo real
• Embalaje discreto y seguro

Contacto directo:
Email: support@uroxelgood.netlify.app
WhatsApp: +52 (52) 2234-5672`
    },
    { 
      id: 'guarantee', 
      title: 'Garantía Total', 
      content: `Garantía de Satisfacción Uroxel

Tu satisfacción es nuestra prioridad absoluta.

Garantía Completa:
• 30 días de garantía total
• Devolución sin cuestionamientos
• Reembolso garantizado
• Proceso simple y rápido

Proceso de Devolución:
1. Contacta a nuestro equipo
2. Recibe instrucciones personalizadas
3. Envío gratuito de devolución
4. Reembolso en 48 horas

Compromiso de Calidad:
• Productos verificados
• Control de calidad estricto
• Satisfacción asegurada

Contacto para garantías:
Email: support@uroxelgood.netlify.app
WhatsApp: +52 (52) 2234-5672`
    },
    { 
      id: 'shipping', 
      title: 'Envío Seguro', 
      content: `Servicio de Envío Uroxel

Garantizamos la entrega segura y discreta de tu pedido.

Opciones de Envío:
• Express: 48-72 horas
• Estándar: 3-5 días hábiles
• Cobertura nacional completa

Características Premium:
• Empaque discreto garantizado
• Protección especial del producto
• Seguimiento en vivo
• Seguro incluido

Costos de Envío:
• Express: $149 MXN
• Estándar: $99 MXN
• Gratis en compras +$1000 MXN

Información y rastreo:
Email: support@uroxelgood.netlify.app
WhatsApp: +52 (52) 2234-5672`
    },
    { 
      id: 'contact', 
      title: 'Atención Personalizada', 
      content: `Servicio al Cliente Uroxel

Estamos para asistirte en todo momento.

Medios de Contacto:
Email: support@uroxelgood.netlify.app
WhatsApp: +52 (52) 2234-5672

Horario de Atención:
• Lunes a Viernes: 9:00 - 18:00
• Sábados: 10:00 - 14:00

Asistencia Disponible:
• Información de productos
• Seguimiento de pedidos
• Asesoría personalizada
• Soporte técnico

Tiempo de Respuesta:
• WhatsApp: 2-4 horas
• Email: 24 horas máximo
• Llamadas: Inmediato

¡Tu bienestar es nuestra prioridad!`
    }
  ];

  const activeModalData = footerLinks.find(link => link.id === activeModal);

  return (
    <footer className="bg-gradient-to-r from-gray-900 to-indigo-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {footerLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => setActiveModal(link.id)}
              className="text-left hover:text-purple-400 transition-colors duration-300"
            >
              {link.title}
            </button>
          ))}
        </div>
        
        <Modal
          isOpen={!!activeModal}
          onClose={() => setActiveModal(null)}
          title={activeModalData?.title}
        >
          {activeModalData?.content}
        </Modal>
      </div>
    </footer>
  );
};

const CookieConsent = () => {
  const [show, setShow] = useState(true);

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-xl p-6 z-40">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <p className="text-gray-700 mb-4 md:mb-0">
          Para mejorar tu experiencia, utilizamos cookies en nuestro sitio web.
        </p>
        <div className="flex gap-4">
          <button
            onClick={() => setShow(false)}
            className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-300"
          >
            Aceptar
          </button>
          <button
            onClick={() => setShow(false)}
            className="bg-gray-100 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-200 transition-colors"
          >
            Rechazar
          </button>
        </div>
      </div>
    </div>
  );
};



const App = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Benefits />
      <Ingredients />
      <Reviews />
      <OrderForm />
      <Footer />
      <CookieConsent />
    </div>
  );
};

export default App;