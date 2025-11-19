"use client"

import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import { MapPin, Phone, Mail, Clock, Heart } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-primary/5 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Contacto y Petición de Oración
          </h1>
          <p className="text-xl text-muted-foreground text-center max-w-3xl mx-auto">
            Nos encantaría escucharte. Contáctanos con preguntas o envíanos tus peticiones de oración
          </p>
        </div>
      </section>

      {/* Contact Info & Forms */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6">Mantente en Contacto</h2>
                <p className="text-muted-foreground mb-8">
                  Ya sea que estés planeando tu primera visita, tengas preguntas sobre nuestros 
                  ministerios o necesites apoyo en oración, estamos aquí para ti.
                </p>
              </div>

              <Card>
                <CardContent className="pt-6 space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 shrink-0">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Dirección</h3>
                      <p className="text-muted-foreground">
                        Calle Principal 123<br />
                        Ciudad, Estado 12345
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 shrink-0">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Teléfono</h3>
                      <p className="text-muted-foreground">(555) 123-4567</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 shrink-0">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Correo Electrónico</h3>
                      <p className="text-muted-foreground">info@elremanente.org</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 shrink-0">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Horario de Oficina</h3>
                      <p className="text-muted-foreground">
                        Lunes - Viernes<br />
                        9:00 AM - 5:00 PM
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact & Prayer Request Forms */}
            <Card>
              <CardContent className="pt-8">
                <Tabs defaultValue="contact" className="w-full">
                  <TabsList className="grid w-full grid-cols-2 mb-6">
                    <TabsTrigger value="contact">Contacto</TabsTrigger>
                    <TabsTrigger value="prayer">
                      <Heart className="h-4 w-4 mr-2" />
                      Petición de Oración
                    </TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="contact">
                    <h3 className="text-2xl font-bold mb-6">Envíanos un Mensaje</h3>
                    <form className="space-y-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">
                          Nombre *
                        </label>
                        <Input id="name" placeholder="Tu nombre" required />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                          Correo Electrónico *
                        </label>
                        <Input id="email" type="email" placeholder="tu@correo.com" required />
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium mb-2">
                          Teléfono
                        </label>
                        <Input id="phone" type="tel" placeholder="(555) 123-4567" />
                      </div>

                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium mb-2">
                          Asunto *
                        </label>
                        <Input id="subject" placeholder="¿Cómo podemos ayudarte?" required />
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium mb-2">
                          Mensaje *
                        </label>
                        <Textarea 
                          id="message" 
                          placeholder="Cuéntanos más..." 
                          rows={5}
                          required
                        />
                      </div>

                      <Button type="submit" className="w-full" size="lg">
                        Enviar Mensaje
                      </Button>
                    </form>
                  </TabsContent>
                  
                  <TabsContent value="prayer">
                    <h3 className="text-2xl font-bold mb-2">Petición de Oración</h3>
                    <p className="text-sm text-muted-foreground mb-6">
                      Comparte tu petición y nuestro equipo de oración intercederá por ti.
                    </p>
                    <form className="space-y-4">
                      <div>
                        <label htmlFor="prayer-name" className="block text-sm font-medium mb-2">
                          Nombre *
                        </label>
                        <Input id="prayer-name" placeholder="Tu nombre" required />
                      </div>

                      <div>
                        <label htmlFor="prayer-email" className="block text-sm font-medium mb-2">
                          Correo Electrónico *
                        </label>
                        <Input id="prayer-email" type="email" placeholder="tu@correo.com" required />
                      </div>

                      <div>
                        <label htmlFor="prayer-phone" className="block text-sm font-medium mb-2">
                          Teléfono (Opcional)
                        </label>
                        <Input id="prayer-phone" type="tel" placeholder="(555) 123-4567" />
                      </div>

                      <div>
                        <label htmlFor="prayer-request" className="block text-sm font-medium mb-2">
                          Tu Petición de Oración *
                        </label>
                        <Textarea 
                          id="prayer-request" 
                          placeholder="Comparte tu petición de oración aquí. Toda información será tratada con confidencialidad." 
                          rows={6}
                          required
                        />
                      </div>

                      <div className="flex items-start gap-2">
                        <input 
                          type="checkbox" 
                          id="public-prayer" 
                          className="mt-1"
                        />
                        <label htmlFor="public-prayer" className="text-sm text-muted-foreground">
                          Permito que esta petición sea compartida públicamente con la congregación (opcional)
                        </label>
                      </div>

                      <Button type="submit" className="w-full" size="lg">
                        <Heart className="h-4 w-4 mr-2" />
                        Enviar Petición de Oración
                      </Button>
                    </form>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Encuéntranos</h2>
          <div className="max-w-5xl mx-auto">
            <div className="aspect-video rounded-lg overflow-hidden bg-secondary">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2412648750455!2d-73.98731668459395!3d40.74844097932847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Church Location Map"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Visit Info */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">¿Planeas Tu Primera Visita?</h2>
            <p className="text-muted-foreground text-lg mb-8">
              ¡No podemos esperar para darte la bienvenida! Esto es lo que puedes esperar:
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 text-left mb-8">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-2">Ven Como Eres</h3>
                  <p className="text-sm text-muted-foreground">
                    Viste casual o elegante - ¡encajarás perfectamente de cualquier manera!
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-2">Llega Temprano</h3>
                  <p className="text-sm text-muted-foreground">
                    Ven 15 minutos antes para estacionar y tomar un café antes del servicio.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-2">Cuidado Infantil Disponible</h3>
                  <p className="text-sm text-muted-foreground">
                    Programas seguros y divertidos para bebés hasta niños de edad primaria.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/about">Conoce Más Sobre Nosotros</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/">Volver al Inicio</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}