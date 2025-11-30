"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import VideoSection from "@/components/VideoSection";
import LiveStreamSection from "@/components/LiveStreamSection";
import { Heart, Users, Handshake, Shield, BookOpen, Sparkles, HandHeart, Youtube, MapPin, Phone, Mail, Clock, Facebook, Instagram, Send, Map, DollarSign } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useEffect, useState } from "react";

export default function Home() {
  const [lights, setLights] = useState<Array<{id: number;x: number;y: number;}>>([]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const newLight = {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY
      };
      setLights((prev) => [...prev, newLight]);

      // Remove light after animation completes
      setTimeout(() => {
        setLights((prev) => prev.filter((light) => light.id !== newLight.id));
      }, 1000);
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  const valores = [
  { icon: Heart, title: "Amor", description: "Amamos a Dios y a nuestro prójimo como a nosotros mismos" },
  { icon: Users, title: "Unidad", description: "Unidos en Cristo, formamos una familia espiritual" },
  { icon: Handshake, title: "Servicio", description: "Servimos con alegría y dedicación al Señor" },
  { icon: Shield, title: "Fe", description: "Confiamos plenamente en las promesas de Dios" },
  { icon: BookOpen, title: "Fidelidad", description: "Fieles a la Palabra de Dios y sus enseñanzas" },
  { icon: Sparkles, title: "Fraternidad", description: "Cultivamos relaciones genuinas y duraderas" },
  { icon: HandHeart, title: "Humildad", description: "Servimos con un corazón humilde y agradecido" }];


  const ministerios = [
  {
    title: "Ensayo Ministerio de Alabanza",
    schedule: "Lunes y Jueves 6:30 PM - 9:00 PM",
    description: "Práctica y preparación del equipo de alabanza para los servicios",
    services: ["Ensayos de música y canto", "Preparación de repertorio", "Adoración corporativa"],
    day: "Lunes/Jueves"
  },
  {
    title: "Ministerio de Mujeres",
    schedule: "Martes 7:00 PM - 8:00 PM",
    description: "Tiempo de compañerismo y edificación para mujeres",
    services: ["Estudios bíblicos para mujeres", "Grupos de apoyo y consejería", "Eventos de compañerismo"],
    day: "Martes"
  },
  {
    title: "Ayuno y Oración",
    schedule: "Miércoles 11:00 AM - 1:00 PM",
    description: "Día dedicado al ayuno corporativo y oración intercesora",
    services: ["Ayuno congregacional", "Intercesión por la iglesia", "Oración por necesidades comunitarias"],
    day: "Miércoles"
  },
  {
    title: "PGM Grupos Pequeños Multiplicadores",
    schedule: "Jueves 7:00 PM - 8:00 PM",
    description: "Reuniones en diferentes sectores de la comunidad",
    services: ["Grupos en sectores residenciales", "Estudio bíblico semanal", "Compañerismo en comunidad"],
    day: "Jueves",
    hasMap: true
  },
  {
    title: "Noche de Oración",
    schedule: "Viernes 6:00 PM - 8:00 PM",
    description: "Reunión de oración e intercesión",
    services: ["Oración intercesora", "Alabanza y adoración", "Peticiones especiales"],
    day: "Viernes"
  },
  {
    title: "Ministerio de Jóvenes",
    schedule: "Sábado 6:00 PM - 8:00 PM",
    description: "Actividades y enseñanza para jóvenes",
    services: ["Estudios bíblicos juveniles", "Actividades recreativas", "Discipulado para jóvenes"],
    day: "Sábado"
  },
  {
    title: "Escuela Dominical",
    schedule: "Domingo 8:00 AM - 10:00 AM",
    description: "Educación bíblica para todas las edades",
    services: ["Clases por edades", "Enseñanza bíblica sistemática", "Aplicación práctica"],
    day: "Domingo"
  },
  {
    title: "Escuela de Jóvenes y Adultos",
    schedule: "Domingo 11:00 AM - 12:30 PM",
    description: "Enseñanza bíblica especializada para jóvenes y adultos",
    services: ["Estudio profundo de la Palabra", "Teología práctica", "Formación de discípulos"],
    day: "Domingo"
  },
  {
    title: "Culto Evangelístico",
    schedule: "Domingo 5:00 PM - 8:30 PM",
    description: "Servicio de adoración y predicación evangelística",
    services: ["Predicación del evangelio", "Adoración congregacional", "Altar de oración y salvación"],
    day: "Domingo"
  }];


  const pgmSectores = [
  { nombre: "Mirador de Catarina", lider: "Familia García", direccion: "Mirador de Catarina" },
  { nombre: "Zona 4", lider: "Familia Martínez", direccion: "Zona 4, Catarina" },
  { nombre: "Niquinohomo", lider: "Familia López", direccion: "Niquinohomo" },
  { nombre: "San Juan de Oriente", lider: "Familia Rodríguez", direccion: "San Juan de Oriente" },
  { nombre: "Entrada de Catarina", lider: "Familia Hernández", direccion: "Entrada de Catarina" }];


  return (
    <div className="flex flex-col min-h-screen relative">
      {/* Interactive Light Effects */}
      {lights.map((light) =>
      <div
        key={light.id}
        className="fixed pointer-events-none z-50"
        style={{
          left: light.x,
          top: light.y,
          transform: 'translate(-50%, -50%)'
        }}>

          <div className="relative">
            {/* Main light burst */}
            <div className="absolute inset-0 w-20 h-20 bg-gradient-radial from-primary/60 via-sky/40 to-transparent rounded-full animate-ping opacity-75" />
            <div className="absolute inset-0 w-16 h-16 bg-gradient-radial from-gold/70 via-primary/50 to-transparent rounded-full animate-pulse" />
            {/* Sparkles */}
            <div className="absolute top-0 left-0 w-2 h-2 bg-gold rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
            <div className="absolute top-2 right-2 w-1.5 h-1.5 bg-sky rounded-full animate-bounce" style={{ animationDelay: '100ms' }} />
            <div className="absolute bottom-2 left-2 w-1.5 h-1.5 bg-primary rounded-full animate-bounce" style={{ animationDelay: '200ms' }} />
            <div className="absolute bottom-0 right-0 w-2 h-2 bg-gold rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
          </div>
        </div>
      )}

      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/10 via-sky/10 to-accent/10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItaDJ2LTJoLTJ6bTAgNGgtMnYyaDJ2LTJ6bTAtOGgydi0yaC0ydjJ6bTQgNHYtMmgydjJoLTJ6bS00IDB2Mmgydi0yaC0yem0wLTR2LTJoLTJ2Mmgyem00IDB2Mmgydi0yaC0yem0yLTJ2LTJoLTJ2Mmgyem0wIDR2Mmgydi0yaC0yem0wIDRoLTJ2Mmgydi0yem00LTR2LTJoMnYyaC0yem0wIDR2Mmgydi0yaC0yem0wLThoMnYtMmgtMnYyem0wIDRoLTJ2Mmgydi0yeiIvPjwvZz48L2c+PC9zdmc+')] opacity-40" />
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 animate-fade-in-up animation-delay-100">
            <span className="bg-gradient-to-r from-primary via-sky to-gold bg-clip-text text-transparent">
              Iglesia Bautista
            </span>
            <br />
            <span className="bg-gradient-to-r from-gold via-primary to-sky bg-clip-text text-transparent">
              del Remanente
            </span>
          </h1>
          
          <p className="text-2xl md:text-3xl text-muted-foreground mb-8 max-w-3xl mx-auto font-light tracking-wide animate-fade-in-up animation-delay-200">
            Firmes en la fe, creciendo en Cristo
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-up animation-delay-300">
            <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-sky hover:scale-105 transition-transform" asChild>
              <Link href="#sobre-nosotros">Conócenos</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-2 hover:scale-105 transition-transform" asChild>
              <Link href="#contacto">Visítanos</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-2 hover:scale-105 transition-transform" asChild>
              <Link href="#mensajes">
                <Youtube className="h-5 w-5 mr-2" />
                Ver Mensajes
              </Link>
            </Button>
          </div>

          <Card className="max-w-4xl mx-auto backdrop-blur bg-white/80 shadow-2xl animate-fade-in-up animation-delay-400">
            <CardContent className="p-8">
              <div className="flex items-center justify-center gap-2 mb-6">
                <Clock className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-bold">Horarios de Servicio</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 bg-gradient-to-br from-primary/10 to-sky/10 rounded-xl border-2 border-primary/20">
                  <p className="font-bold text-xl mb-2 text-primary">Cultos Dominicales</p>
                  <p className="text-lg">9:00 AM - Servicio Matutino</p>
                  <p className="text-lg">11:00 AM - Servicio Principal</p>
                </div>
                <div className="p-6 bg-gradient-to-br from-gold/10 to-accent/10 rounded-xl border-2 border-gold/20">
                  <p className="font-bold text-xl mb-2 text-gold">Entre Semana</p>
                  <p className="text-lg">Miércoles 7:00 PM - Estudio Bíblico</p>
                  <p className="text-lg">Viernes 6:00 PM - Jóvenes</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Quiénes Somos */}
      <section id="sobre-nosotros" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-primary to-sky bg-clip-text text-transparent">
              Quiénes Somos
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Somos una comunidad de creyentes comprometidos con seguir a Cristo y compartir Su amor con el mundo. 
              Nuestra iglesia es un lugar donde las personas pueden encontrar esperanza, sanidad y propósito a través 
              de una relación personal con Jesucristo. Creemos en la autoridad de las Escrituras, el poder transformador 
              del Evangelio y la importancia de vivir en comunidad.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <Card className="border-2 hover:border-primary/50 transition-all hover:shadow-lg">
                <CardContent className="pt-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/20 to-sky/20 flex items-center justify-center">
                    <BookOpen className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-bold text-xl mb-2">Enseñanza Bíblica</h3>
                  <p className="text-muted-foreground">Fundamentados en la Palabra de Dios</p>
                </CardContent>
              </Card>
              <Card className="border-2 hover:border-sky/50 transition-all hover:shadow-lg">
                <CardContent className="pt-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-sky/20 to-gold/20 flex items-center justify-center">
                    <Users className="h-8 w-8 text-sky" />
                  </div>
                  <h3 className="font-bold text-xl mb-2">Comunidad</h3>
                  <p className="text-muted-foreground">Unidos en amor y propósito</p>
                </CardContent>
              </Card>
              <Card className="border-2 hover:border-gold/50 transition-all hover:shadow-lg">
                <CardContent className="pt-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-gold/20 to-primary/20 flex items-center justify-center">
                    <Heart className="h-8 w-8 text-gold" />
                  </div>
                  <h3 className="font-bold text-xl mb-2">Servicio</h3>
                  <p className="text-muted-foreground">Sirviendo con amor a nuestra comunidad</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Visión y Misión */}
      <section id="vision-mision" className="py-20 bg-gradient-to-br from-muted/30 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* Visión */}
            <Card className="mb-12 border-2 border-primary/20 shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-primary to-sky p-6">
                <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground text-center">
                  Nuestra Visión
                </h2>
              </div>
              <CardContent className="p-8 md:p-12">
                <p className="text-lg md:text-xl leading-relaxed text-center tracking-wide" style={{ letterSpacing: '0.02em' }}>
                  La Iglesia Bautista del Remanente nace como un proyecto para el crecimiento integral de la comunidad, 
                  impulsado por la evangelización, el discipulado y el servicio cristiano.
                  <br /><br />
                  Anhelamos ser una iglesia que ilumine Catarina con el amor de Cristo, desarrollando creyentes maduros, 
                  comprometidos y transformados por la Palabra y el Espíritu Santo.
                </p>
              </CardContent>
            </Card>

            {/* Misión */}
            <Card className="border-2 border-gold/20 shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-gold to-primary p-6">
                <h2 className="text-4xl md:text-5xl font-bold text-gold-foreground text-center">
                  Nuestra Misión
                </h2>
              </div>
              <CardContent className="p-8 md:p-12">
                <p className="text-lg md:text-xl leading-relaxed text-center tracking-wide" style={{ letterSpacing: '0.02em' }}>
                  Somos una iglesia redimida por nuestro Señor Jesucristo y llamada a cumplir la Gran Comisión en el municipio de Catarina.
                  <br /><br />
                  Nos dedicamos a ganar nuevas almas para Cristo, a enseñar fielmente la Palabra de Dios, y a formar discípulos 
                  llenos del Espíritu Santo, comprometidos con vivir y servir conforme a la voluntad del Señor.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-sky bg-clip-text text-transparent">
              Nuestros Valores
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Los principios que guían nuestra vida y ministerio
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {valores.map((valor, index) =>
            <Card
              key={valor.title}
              className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/50 cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}>

                <CardContent className="pt-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary/10 to-sky/10 mb-4 group-hover:scale-110 transition-transform">
                    <valor.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {valor.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {valor.description}
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>

      {/* Videos Section */}
      <VideoSection />

      {/* Live Stream Section */}
      <LiveStreamSection />

      {/* Ministerios */}
      <section id="ministerios" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-sky bg-clip-text text-transparent">
              Ministerios y Actividades
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Descubre las diferentes formas en que puedes involucrarte y crecer espiritualmente
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {ministerios.map((ministerio, index) =>
            <Card
              key={ministerio.title}
              className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50">

                <CardContent className="pt-6">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/10 to-sky/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-xl mb-1">{ministerio.title}</h3>
                      <p className="text-sm text-primary font-semibold">{ministerio.schedule}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4">{ministerio.description}</p>
                  
                  {/* Servicios del Ministerio */}
                  <div className="space-y-2 mb-4 pt-4 border-t">
                    <p className="text-sm font-semibold text-sky mb-2">Servicios:</p>
                    <ul className="space-y-1">
                      {ministerio.services?.map((service, idx) =>
                    <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>{service}</span>
                        </li>
                    )}
                    </ul>
                  </div>

                  {ministerio.hasMap &&
                <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" className="w-full mt-2">
                          <Map className="h-4 w-4 mr-2" />
                          Ver Mapa de Sectores
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-3xl !px-2 !py-4">
                        <DialogHeader>
                          <DialogTitle>Sectores PGM - Grupos Pequeños Multiplicadores</DialogTitle>
                          <DialogDescription className="!w-0 !h-0">
                            Reuniones distribuidas por sectores en Catarina cada jueves de 7:00 PM a 8:00 PM
                          </DialogDescription>
                        </DialogHeader>
                        <div className="space-y-4 mt-4">
                          <div className="grid md:grid-cols-2 gap-4">
                            {pgmSectores.map((sector, idx) =>
                        <Card key={idx} className="border-2 border-primary/20">
                                <CardContent className="pt-4">
                                  <div className="flex items-start gap-3">
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-sky/20 flex items-center justify-center flex-shrink-0">
                                      <MapPin className="h-5 w-5 text-primary" />
                                    </div>
                                    <div>
                                      <h4 className="font-bold text-primary">{sector.nombre}</h4>
                                      <p className="text-sm text-muted-foreground mt-1">
                                        <span className="font-semibold">Líder:</span> {sector.lider}
                                      </p>
                                      <p className="text-sm text-muted-foreground">
                                        <span className="font-semibold">Ubicación:</span> {sector.direccion}
                                      </p>
                                    </div>
                                  </div>
                                </CardContent>
                              </Card>
                        )}
                          </div>
                          <div className="bg-muted/50 p-4 rounded-lg">
                            <p className="text-sm text-muted-foreground text-center">
                              <strong>Nota:</strong> Para conocer la dirección exacta del grupo en tu sector, 
                              comunícate con nosotros o pregunta en la iglesia el próximo domingo.
                            </p>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                }
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>

      {/* Donación y Manos de Amor */}
      <section id="donacion" className="py-20 bg-gradient-to-br from-muted/30 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-gold bg-clip-text text-transparent">
              Donación y Manos de Amor
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Tu generosidad transforma vidas y fortalece el ministerio de nuestra iglesia
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
            {/* Tarjeta de Donación */}
            <Card className="border-2 border-primary/20 shadow-xl">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary/20 to-sky/20 flex items-center justify-center">
                    <DollarSign className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold">Donaciones</h3>
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Tus ofrendas y diezmos sostienen la obra del Señor, permitiendo que la iglesia continúe 
                  predicando el evangelio, sirviendo a la comunidad y glorificando el nombre de Dios.
                </p>
                <div className="space-y-4 mb-6">
                  <div className="p-4 bg-gradient-to-r from-primary/5 to-sky/5 rounded-lg">
                    <h4 className="font-semibold mb-2 text-primary">Formas de Donar:</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Durante los servicios dominicales</li>
                      <li>• Transferencia bancaria</li>
                      <li>• En línea a través de nuestra página web</li>
                      <li>• En la oficina de la iglesia</li>
                    </ul>
                  </div>
                </div>
                <Button className="w-full bg-gradient-to-r from-primary to-sky" size="lg">
                  <DollarSign className="h-5 w-5 mr-2" />
                  Donar Ahora
                </Button>
              </CardContent>
            </Card>

            {/* Tarjeta de Manos de Amor */}
            <Card className="border-2 border-gold/20 shadow-xl">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-gold/20 to-primary/20 flex items-center justify-center">
                    <HandHeart className="h-7 w-7 text-gold" />
                  </div>
                  <h3 className="text-2xl font-bold">Manos de Amor</h3>
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Ministerio dedicado a servir a los necesitados en nuestra comunidad a través de actos 
                  concretos de amor, compartiendo el evangelio mediante acciones prácticas de servicio.
                </p>
                <div className="space-y-4 mb-6">
                  <div className="p-4 bg-gradient-to-r from-gold/5 to-accent/5 rounded-lg">
                    <h4 className="font-semibold mb-2 text-gold">Cómo Participar:</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Donación de alimentos y ropa</li>
                      <li>• Voluntariado en eventos comunitarios</li>
                      <li>• Apoyo a familias necesitadas</li>
                      <li>• Visitas a enfermos y ancianos</li>
                    </ul>
                  </div>
                </div>
                <Button className="w-full bg-gradient-to-r from-gold to-primary" size="lg" variant="outline">
                  <Heart className="h-5 w-5 mr-2" />
                  Unirme al Ministerio
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Versículo Bíblico */}
          <Card className="max-w-3xl mx-auto border-2 bg-white/80 backdrop-blur">
            <CardContent className="p-8 text-center">
              <p className="text-lg md:text-xl italic text-muted-foreground mb-4">
                "Cada uno dé como propuso en su corazón: no con tristeza, ni por necesidad, 
                porque Dios ama al dador alegre."
              </p>
              <p className="font-bold text-primary">2 Corintios 9:7</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contáctanos */}
      <section id="contacto" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-sky bg-clip-text text-transparent">
              Contáctanos
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Envíanos un mensaje o petición de oración
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Formulario de Contacto */}
            <Card className="border-2 shadow-xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Envíanos un Mensaje</h3>
                <form className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Nombre</label>
                    <Input placeholder="Tu nombre completo" className="h-12" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Correo Electrónico</label>
                    <Input type="email" placeholder="tu@email.com" className="h-12" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Teléfono</label>
                    <Input type="tel" placeholder="(505) 1234-5678" className="h-12" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Mensaje / Petición de Oración</label>
                    <Textarea placeholder="Escribe tu mensaje o petición de oración aquí..." className="min-h-32" />
                  </div>
                  <Button type="submit" className="w-full h-12 text-lg bg-gradient-to-r from-primary to-sky">
                    <Send className="h-5 w-5 mr-2" />
                    Enviar Mensaje
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Información de Contacto */}
            <div className="space-y-6">
              <Card className="border-2 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/10 to-sky/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Teléfono</h3>
                      <p className="text-muted-foreground">
                        +505 1234-5678<br />
                        +505 8765-4321
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/10 to-sky/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Email</h3>
                      <p className="text-muted-foreground">
                        info@ibdelremanente.org<br />
                        pastores@ibdelremanente.org
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/10 to-sky/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Horarios de Oficina</h3>
                      <p className="text-muted-foreground">
                        Lunes a Viernes: 9:00 AM - 5:00 PM<br />
                        Sábado: 9:00 AM - 12:00 PM
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 bg-gradient-to-br from-primary/5 to-sky/5">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-4 text-center">Síguenos en Redes Sociales</h3>
                  <div className="flex justify-center gap-4">
                    <Button size="lg" variant="outline" className="w-14 h-14 rounded-full p-0">
                      <Facebook className="h-6 w-6" />
                    </Button>
                    <Button size="lg" variant="outline" className="w-14 h-14 rounded-full p-0">
                      <Instagram className="h-6 w-6" />
                    </Button>
                    <Button size="lg" variant="outline" className="w-14 h-14 rounded-full p-0">
                      <Youtube className="h-6 w-6" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Visítanos */}
      <section id="visitanos" className="py-20 bg-gradient-to-br from-muted/30 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-gold bg-clip-text text-transparent">
              Visítanos
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Te esperamos con los brazos abiertos en nuestra iglesia
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-8">
            {/* Dirección */}
            <Card className="border-2 shadow-xl">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-primary/10 to-sky/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-2xl mb-2">Nuestra Ubicación</h3>
                    <p className="text-lg text-muted-foreground">
                      Catarina, Masaya<br />
                      Nicaragua
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Mapa de Google */}
            <Card className="border-2 shadow-xl overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-video w-full">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31036.927437891468!2d-86.07989932355955!3d11.913632294564515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f718c5fb5e8e8e1%3A0x4d7c7c5fb5e8e8e1!2sCatarina%2C%20Nicaragua!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Ubicación Iglesia Bautista del Remanente" />

                </div>
              </CardContent>
            </Card>

            {/* Información adicional */}
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-2 text-center">
                <CardContent className="pt-8">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/20 to-sky/20 flex items-center justify-center">
                    <Heart className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-bold text-xl mb-2">Todos Bienvenidos</h3>
                  <p className="text-muted-foreground">
                    Ven como eres, te recibiremos con amor
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 text-center">
                <CardContent className="pt-8">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-sky/20 to-gold/20 flex items-center justify-center">
                    <Clock className="h-8 w-8 text-sky" />
                  </div>
                  <h3 className="font-bold text-xl mb-2">Llega Temprano</h3>
                  <p className="text-muted-foreground">
                    15 minutos antes para conocernos mejor
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 text-center">
                <CardContent className="pt-8">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-gold/20 to-primary/20 flex items-center justify-center">
                    <Users className="h-8 w-8 text-gold" />
                  </div>
                  <h3 className="font-bold text-xl mb-2">Familias</h3>
                  <p className="text-muted-foreground">
                    Programas para todas las edades
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>);

}