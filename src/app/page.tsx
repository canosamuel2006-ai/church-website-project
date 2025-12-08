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
import { useState } from "react";
import { toast } from "sonner";

export default function Home() {
  const [openManosDialog, setOpenManosDialog] = useState(false);

  const valores = [
    { icon: Heart, title: "Amor", description: "Amamos a Dios y a nuestro prójimo como a nosotros mismos" },
    { icon: Users, title: "Unidad", description: "Unidos en Cristo, formamos una familia espiritual" },
    { icon: Handshake, title: "Servicio", description: "Servimos con alegría y dedicación al Señor" },
    { icon: Shield, title: "Fe", description: "Confiamos plenamente en las promesas de Dios" },
    { icon: BookOpen, title: "Fidelidad", description: "Fieles a la Palabra de Dios y sus enseñanzas" },
    { icon: Sparkles, title: "Fraternidad", description: "Cultivamos relaciones genuinas y duraderas" },
    { icon: HandHeart, title: "Humildad", description: "Servimos con un corazón humilde y agradecido" }
  ];

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
    }
  ];

  const pgmSectores = [
    { nombre: "Mirador de Catarina", lider: "Familia García", direccion: "Mirador de Catarina" },
    { nombre: "Zona 4", lider: "Familia Martínez", direccion: "Zona 4, Catarina" },
    { nombre: "Niquinohomo", lider: "Familia López", direccion: "Niquinohomo" },
    { nombre: "San Juan de Oriente", lider: "Familia Rodríguez", direccion: "San Juan de Oriente" },
    { nombre: "Entrada de Catarina", lider: "Familia Hernández", direccion: "Entrada de Catarina" }
  ];

  const donationItems = [
    "Ropa en buen estado",
    "Alimentos no perecederos",
    "Juguetes para niños",
    "Artículos de higiene personal",
    "Material escolar",
    "Pañales",
    "Toallas y sábanas",
    "Agua embotellada",
    "Productos de limpieza"
  ];

  const handleDonationClick = () => {
    toast.info("Sistema de donaciones en línea próximamente disponible. Por favor, dona durante los servicios o contacta la oficina.");
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/hero-church.jpg"
            alt="Iglesia Bautista del Remanente"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-sky/60 to-gold/40" />
        </div>

        {/* Content */}
        <div className="container mx-auto px-6 text-center relative z-10 py-20">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-8 animate-fade-in-up">
            <span className="block text-white drop-shadow-2xl">
              Iglesia Bautista
            </span>
            <span className="block text-gold drop-shadow-2xl mt-2">
              del Remanente
            </span>
          </h1>
          
          <p className="text-2xl md:text-4xl text-white mb-12 max-w-4xl mx-auto font-light tracking-wide animate-fade-in-up animation-delay-200 drop-shadow-lg">
            Firmes en la fe, creciendo en Cristo
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 animate-fade-in-up animation-delay-300">
            <Button size="lg" className="text-lg px-10 py-7 bg-white text-primary hover:scale-105 transition-all duration-300 shadow-2xl rounded-full font-semibold" asChild>
              <Link href="#sobre-nosotros">Conócenos</Link>
            </Button>
            <Button 
              size="lg" 
              className="text-lg px-10 py-7 border-2 border-gold bg-transparent text-white hover:bg-gold hover:text-white hover:shadow-[0_0_30px_rgba(212,175,55,0.6)] hover:scale-105 transition-all duration-300 rounded-full font-semibold" 
              asChild
            >
              <Link href="#contacto">Visítanos</Link>
            </Button>
            <Button 
              size="lg" 
              className="text-lg px-10 py-7 border-2 border-gold bg-transparent text-white hover:bg-gold hover:text-white hover:shadow-[0_0_35px_rgba(212,175,55,0.7)] hover:scale-105 transition-all duration-300 rounded-full font-semibold inline-flex items-center gap-2" 
              asChild
            >
              <Link href="#mensajes">
                <Youtube className="h-6 w-6" />
                Ver Mensajes
              </Link>
            </Button>
          </div>

          {/* Schedule Card with Glassmorphism */}
          <Card className="max-w-5xl mx-auto backdrop-blur-xl bg-white/10 border-2 border-white/30 shadow-2xl animate-fade-in-up animation-delay-400 rounded-3xl">
            <CardContent className="p-10">
              <div className="flex items-center justify-center gap-3 mb-8">
                <Clock className="h-8 w-8 text-gold" />
                <h2 className="text-3xl font-bold text-white">Horarios de Servicio</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="p-8 bg-white/20 backdrop-blur-lg rounded-2xl border border-white/40 hover:scale-105 transition-transform duration-300">
                  <p className="font-bold text-2xl mb-4 text-gold">Culto Dominical</p>
                  <p className="text-xl text-white mb-2">8:00 AM - Escuela Dominical</p>
                  <p className="text-xl text-white">5:00 PM - Culto Evangelístico</p>
                </div>
                <div className="p-8 bg-white/20 backdrop-blur-lg rounded-2xl border border-white/40 hover:scale-105 transition-transform duration-300">
                  <p className="font-bold text-2xl mb-4 text-gold">Estudio Bíblico</p>
                  <p className="text-xl text-white mb-2">Miércoles 11:00 AM - Ayuno y Oración</p>
                  <p className="text-xl text-white">Jueves 7:00 PM - PGM</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Quiénes Somos */}
      <section id="sobre-nosotros" className="py-32 bg-background transition-colors duration-300">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-sky to-gold bg-clip-text text-transparent">
                Quiénes Somos
              </h2>
              <div className="w-32 h-1.5 bg-gradient-to-r from-primary via-sky to-gold mx-auto mb-8 rounded-full"></div>
            </div>
            
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-16 text-center max-w-4xl mx-auto">
              Somos una comunidad de creyentes comprometidos con seguir a Cristo y compartir Su amor con el mundo. 
              Nuestra iglesia es un lugar donde las personas pueden encontrar esperanza, sanidad y propósito a través 
              de una relación personal con Jesucristo.
            </p>

            {/* Galería de Imágenes */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <Card className="overflow-hidden border-2 border-primary/20 shadow-xl hover:shadow-2xl transition-all duration-300 rounded-3xl group">
                <div className="relative h-80 overflow-hidden">
                  <img 
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/e1f90d12-0718-4647-aa07-a5d1db5f4e6c/generated_images/modern-church-exterior-in-catarina-nicar-bb45584b-20251206193413.jpg"
                    alt="Iglesia Bautista del Remanente - Exterior"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white text-2xl font-bold">Nuestro Templo</h3>
                    <p className="text-white/90 text-sm">Un lugar de encuentro con Dios</p>
                  </div>
                </div>
              </Card>

              <Card className="overflow-hidden border-2 border-primary/20 shadow-xl hover:shadow-2xl transition-all duration-300 rounded-3xl group">
                <div className="relative h-80 overflow-hidden">
                  <img 
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/e1f90d12-0718-4647-aa07-a5d1db5f4e6c/generated_images/church-congregation-community-gathering--dc457bc1-20251206193413.jpg"
                    alt="Comunidad de la iglesia reunida"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white text-2xl font-bold">Nuestra Comunidad</h3>
                    <p className="text-white/90 text-sm">Unidos en amor y fe</p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Historia Section */}
            <Card className="mb-16 border-2 border-primary/20 shadow-2xl rounded-3xl overflow-hidden hover:shadow-3xl transition-all duration-300">
              <CardContent className="p-12 md:p-16">
                <h3 className="text-3xl font-bold mb-6 text-primary">Nuestra Historia</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Creemos en la autoridad de las Escrituras, el poder transformador del Evangelio y la importancia 
                  de vivir en comunidad. La Iglesia Bautista del Remanente nació con la visión de impactar Catarina 
                  y sus alrededores con el mensaje de amor y esperanza que solo Cristo puede ofrecer.
                </p>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="group border-2 border-border hover:border-primary transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 rounded-2xl">
                <CardContent className="pt-12 pb-10 px-8 text-center">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary/20 to-sky/20 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <BookOpen className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="font-bold text-2xl mb-4 group-hover:text-primary transition-colors">Enseñanza Bíblica</h3>
                  <p className="text-muted-foreground text-lg">Fundamentados en la Palabra de Dios</p>
                </CardContent>
              </Card>

              <Card className="group border-2 border-border hover:border-sky transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 rounded-2xl">
                <CardContent className="pt-12 pb-10 px-8 text-center">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-sky/20 to-gold/20 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <Users className="h-10 w-10 text-sky" />
                  </div>
                  <h3 className="font-bold text-2xl mb-4 group-hover:text-sky transition-colors">Comunidad</h3>
                  <p className="text-muted-foreground text-lg">Unidos en amor y propósito</p>
                </CardContent>
              </Card>

              <Card className="group border-2 border-border hover:border-gold transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 rounded-2xl">
                <CardContent className="pt-12 pb-10 px-8 text-center">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-gold/20 to-primary/20 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <Heart className="h-10 w-10 text-gold" />
                  </div>
                  <h3 className="font-bold text-2xl mb-4 group-hover:text-gold transition-colors">Servicio</h3>
                  <p className="text-muted-foreground text-lg">Sirviendo con amor a nuestra comunidad</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Visión y Misión */}
      <section id="vision-mision" className="py-32 bg-muted/30 transition-colors duration-300">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto space-y-16">
            {/* Visión */}
            <Card className="border-2 border-primary/30 shadow-2xl overflow-hidden rounded-3xl hover:shadow-3xl transition-all duration-300">
              <div className="bg-gradient-to-r from-primary via-sky to-primary p-10">
                <h2 className="text-5xl md:text-6xl font-bold text-white text-center">
                  Nuestra Visión
                </h2>
              </div>
              <CardContent className="p-12 md:p-20 bg-card">
                <p className="text-xl md:text-2xl leading-relaxed text-center tracking-wide text-foreground">
                  La Iglesia Bautista del Remanente nace como un proyecto para el crecimiento integral de la comunidad, 
                  impulsado por la evangelización, el discipulado y el servicio cristiano.
                  <br /><br />
                  Anhelamos ser una iglesia que ilumine Catarina con el amor de Cristo, desarrollando creyentes maduros, 
                  comprometidos y transformados por la Palabra y el Espíritu Santo.
                </p>
              </CardContent>
            </Card>

            {/* Misión */}
            <Card className="border-2 border-gold/30 shadow-2xl overflow-hidden rounded-3xl hover:shadow-3xl transition-all duration-300">
              <div className="bg-gradient-to-r from-gold via-primary to-gold p-10">
                <h2 className="text-5xl md:text-6xl font-bold text-white text-center">
                  Nuestra Misión
                </h2>
              </div>
              <CardContent className="p-12 md:p-20 bg-card">
                <p className="text-xl md:text-2xl leading-relaxed text-center tracking-wide text-foreground">
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
      <section className="py-32 bg-background transition-colors duration-300">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-sky to-gold bg-clip-text text-transparent">
              Nuestros Valores
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-primary via-sky to-gold mx-auto mb-8 rounded-full"></div>
            <p className="text-muted-foreground text-xl max-w-3xl mx-auto">
              Los principios que guían nuestra vida y ministerio
            </p>
          </div>

          {/* Galería de Imágenes de Valores */}
          <div className="grid md:grid-cols-2 gap-8 mb-16 max-w-6xl mx-auto">
            <Card className="overflow-hidden border-2 border-primary/20 shadow-xl hover:shadow-2xl transition-all duration-300 rounded-3xl group">
              <div className="relative h-80 overflow-hidden">
                <img 
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/e1f90d12-0718-4647-aa07-a5d1db5f4e6c/generated_images/church-worship-service-people-with-raise-663ccecc-20251206193413.jpg"
                  alt="Adoración y alabanza en la iglesia"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white text-2xl font-bold">Adoración</h3>
                  <p className="text-white/90 text-sm">En espíritu y en verdad</p>
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden border-2 border-primary/20 shadow-xl hover:shadow-2xl transition-all duration-300 rounded-3xl group">
              <div className="relative h-80 overflow-hidden">
                <img 
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/e1f90d12-0718-4647-aa07-a5d1db5f4e6c/generated_images/church-small-group-bible-study-people-si-9351a9fd-20251206193413.jpg"
                  alt="Estudio bíblico en grupo pequeño"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white text-2xl font-bold">Discipulado</h3>
                  <p className="text-white/90 text-sm">Creciendo juntos en la fe</p>
                </div>
              </div>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {valores.map((valor, index) => (
              <Card
                key={valor.title}
                className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-2 border-border hover:border-primary cursor-pointer rounded-2xl overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-sky/0 group-hover:from-primary/10 group-hover:to-sky/10 transition-all duration-500"></div>
                <CardContent className="pt-12 pb-10 px-8 text-center relative z-10">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/10 to-sky/10 mb-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">
                    <valor.icon className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                    {valor.title}
                  </h3>
                  <p className="text-muted-foreground text-base leading-relaxed">
                    {valor.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Videos Section */}
      <VideoSection />

      {/* Live Stream Section */}
      <LiveStreamSection />

      {/* Ministerios */}
      <section id="ministerios" className="py-16 md:py-24 bg-background transition-colors duration-300">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-primary via-sky to-gold bg-clip-text text-transparent">
              Ministerios y Actividades
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary via-sky to-gold mx-auto mb-6 rounded-full"></div>
            <p className="text-muted-foreground text-base md:text-lg max-w-3xl mx-auto px-4">
              Descubre las diferentes formas en que puedes involucrarte y crecer espiritualmente
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-7xl mx-auto">
            {ministerios.map((ministerio, index) => (
              <Card
                key={ministerio.title}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 border-border hover:border-primary rounded-xl overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-sky/0 group-hover:from-primary/5 group-hover:to-sky/5 transition-all duration-300"></div>
                <CardContent className="p-4 md:p-5 relative z-10">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/10 to-sky/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-base md:text-lg mb-1 group-hover:text-primary transition-colors line-clamp-2">{ministerio.title}</h3>
                      <p className="text-xs md:text-sm text-primary font-semibold">{ministerio.schedule}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-2">{ministerio.description}</p>
                  
                  <div className="space-y-2 pt-4 border-t border-border">
                    <p className="text-xs font-semibold text-sky mb-2">Servicios:</p>
                    <ul className="space-y-1.5">
                      {ministerio.services?.map((service, idx) => (
                        <li key={idx} className="text-xs text-muted-foreground flex items-start gap-1.5">
                          <span className="text-primary mt-0.5 font-bold text-sm">•</span>
                          <span className="line-clamp-2">{service}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {ministerio.hasMap && (
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" className="w-full mt-4 text-sm py-2 hover:bg-primary hover:text-white transition-all duration-300">
                          <Map className="h-4 w-4 mr-2" />
                          Ver Mapa de Sectores
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                        <DialogHeader>
                          <DialogTitle className="text-xl md:text-2xl">Sectores PGM - Grupos Pequeños Multiplicadores</DialogTitle>
                          <DialogDescription>
                            Reuniones distribuidas por sectores en Catarina cada jueves de 7:00 PM a 8:00 PM
                          </DialogDescription>
                        </DialogHeader>
                        <div className="space-y-6 mt-6">
                          <div className="grid sm:grid-cols-2 gap-4">
                            {pgmSectores.map((sector, idx) => (
                              <Card key={idx} className="border-2 border-primary/30 hover:border-primary hover:shadow-lg transition-all duration-300">
                                <CardContent className="p-4">
                                  <div className="flex items-start gap-3">
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-sky/20 flex items-center justify-center flex-shrink-0">
                                      <MapPin className="h-5 w-5 text-primary" />
                                    </div>
                                    <div className="min-w-0">
                                      <h4 className="font-bold text-base text-primary mb-1.5">{sector.nombre}</h4>
                                      <p className="text-xs text-muted-foreground mb-0.5">
                                        <span className="font-semibold">Líder:</span> {sector.lider}
                                      </p>
                                      <p className="text-xs text-muted-foreground">
                                        <span className="font-semibold">Ubicación:</span> {sector.direccion}
                                      </p>
                                    </div>
                                  </div>
                                </CardContent>
                              </Card>
                            ))}
                          </div>
                          <div className="bg-muted/50 p-4 rounded-xl">
                            <p className="text-xs md:text-sm text-muted-foreground text-center">
                              <strong>Nota:</strong> Para conocer la dirección exacta del grupo en tu sector, 
                              comunícate con nosotros o pregunta en la iglesia el próximo domingo.
                            </p>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Ofrenda y Manos de Amor */}
      <section id="ofrenda" className="py-32 bg-muted/30 transition-colors duration-300">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-gold to-primary bg-clip-text text-transparent">
              Ofrenda y Manos de Amor
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-primary via-gold to-primary mx-auto mb-8 rounded-full"></div>
            <p className="text-muted-foreground text-xl max-w-3xl mx-auto">
              Tu generosidad transforma vidas y fortalece el ministerio de nuestra iglesia
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 max-w-6xl mx-auto mb-16">
            <Card className="border-2 border-primary/30 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-2 rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-sky/5"></div>
              <CardContent className="p-10 relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-sky/20 flex items-center justify-center">
                    <DollarSign className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-3xl font-bold">Ofrenda</h3>
                </div>
                <p className="text-muted-foreground mb-8 leading-relaxed text-lg">
                  Tus ofrendas y diezmos sostienen la obra del Señor, permitiendo que la iglesia continúe 
                  predicando el evangelio, sirviendo a la comunidad y glorificando el nombre de Dios.
                </p>
                <div className="space-y-6 mb-8">
                  <div className="p-6 bg-card rounded-2xl border border-primary/20">
                    <h4 className="font-semibold mb-4 text-primary text-lg">Formas de Ofrendar:</h4>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <span className="text-primary">•</span>
                        Durante los servicios dominicales
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-primary">•</span>
                        Transferencia bancaria
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-primary">•</span>
                        En línea a través de nuestra página web
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-primary">•</span>
                        En la oficina de la iglesia
                      </li>
                    </ul>
                  </div>
                </div>
                <Button 
                  onClick={handleDonationClick}
                  className="w-full bg-gradient-to-r from-primary to-sky hover:scale-105 transition-all duration-300 text-lg py-6 rounded-full" 
                  size="lg"
                >
                  <DollarSign className="h-6 w-6 mr-2" />
                  Ofrendar Ahora
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-gold/30 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-2 rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-primary/5"></div>
              <CardContent className="p-10 relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gold/20 to-primary/20 flex items-center justify-center">
                    <HandHeart className="h-8 w-8 text-gold" />
                  </div>
                  <h3 className="text-3xl font-bold">Manos de Amor</h3>
                </div>
                <p className="text-muted-foreground mb-8 leading-relaxed text-lg">
                  Ministerio dedicado a servir a los necesitados en nuestra comunidad a través de actos 
                  concretos de amor, compartiendo el evangelio mediante acciones prácticas de servicio.
                </p>
                <div className="space-y-6 mb-8">
                  <div className="p-6 bg-card rounded-2xl border border-gold/20">
                    <h4 className="font-semibold mb-4 text-gold text-lg">Cómo Participar:</h4>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <span className="text-gold">•</span>
                        Donación de alimentos y ropa
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-gold">•</span>
                        Voluntariado en eventos comunitarios
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-gold">•</span>
                        Apoyo a familias necesitadas
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-gold">•</span>
                        Visitas a enfermos y ancianos
                      </li>
                    </ul>
                  </div>
                </div>
                <Dialog open={openManosDialog} onOpenChange={setOpenManosDialog}>
                  <DialogTrigger asChild>
                    <Button className="w-full bg-gradient-to-r from-gold to-primary hover:scale-105 transition-all duration-300 text-lg py-6 rounded-full" size="lg">
                      <Heart className="h-6 w-6 mr-2" />
                      Unirme al Ministerio
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle className="text-2xl md:text-3xl mb-4">Ministerio Manos de Amor</DialogTitle>
                      <DialogDescription className="text-base md:text-lg leading-relaxed">
                        Gracias por tu disposición a servir. El ministerio Manos de Amor abre sus puertas a quienes desean reflejar el amor de Cristo a través de acciones. Tu aporte, grande o pequeño, es una bendición que transforma vidas.
                      </DialogDescription>
                    </DialogHeader>
                    
                    <div className="mt-6 space-y-6">
                      <div className="bg-gradient-to-br from-gold/10 to-primary/10 p-6 rounded-2xl border-2 border-gold/30">
                        <h4 className="text-xl font-bold mb-4 text-gold flex items-center gap-2">
                          <HandHeart className="h-6 w-6" />
                          Artículos que Puedes Donar
                        </h4>
                        <p className="text-sm text-muted-foreground mb-4">
                          Recibidos los domingos después del culto general:
                        </p>
                        <div className="grid sm:grid-cols-2 gap-3">
                          {donationItems.map((item, idx) => (
                            <div key={idx} className="flex items-center gap-3 bg-white p-3 rounded-xl border border-primary/20 hover:border-gold transition-all duration-300 hover:shadow-md">
                              <div className="w-2 h-2 rounded-full bg-gold flex-shrink-0" />
                              <span className="text-sm font-medium text-foreground">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="bg-muted/50 p-6 rounded-2xl">
                        <h4 className="font-bold text-lg mb-3 text-primary">Información Adicional</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li className="flex items-start gap-2">
                            <span className="text-primary font-bold">•</span>
                            <span>Las donaciones se reciben después del culto general cada domingo</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary font-bold">•</span>
                            <span>Puedes traer tus artículos a la entrada de la iglesia</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary font-bold">•</span>
                            <span>Para más información, contacta a los líderes del ministerio</span>
                          </li>
                        </ul>
                      </div>

                      <Button 
                        onClick={() => {
                          setOpenManosDialog(false);
                          toast.success("¡Gracias por tu interés! Nos vemos el próximo domingo para recibir tu donación.");
                        }}
                        className="w-full bg-gradient-to-r from-gold to-primary hover:scale-105 transition-all duration-300 text-lg py-6 rounded-full"
                      >
                        Confirmar Participación
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          </div>

          <Card className="max-w-4xl mx-auto border-2 border-primary/20 bg-card shadow-xl rounded-3xl">
            <CardContent className="p-10 text-center">
              <p className="text-xl md:text-2xl italic text-muted-foreground mb-6 leading-relaxed">
                "Cada uno dé como propuso en su corazón: no con tristeza, ni por necesidad, 
                porque Dios ama al dador alegre."
              </p>
              <p className="font-bold text-primary text-xl">2 Corintios 9:7</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contáctanos */}
      <section id="contacto" className="py-32 bg-background transition-colors duration-300">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-sky to-gold bg-clip-text text-transparent">
              Contáctanos
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-primary via-sky to-gold mx-auto mb-8 rounded-full"></div>
            <p className="text-muted-foreground text-xl max-w-3xl mx-auto">
              Envíanos un mensaje o petición de oración
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <Card className="border-2 border-primary/20 shadow-2xl rounded-3xl">
              <CardContent className="p-10">
                <h3 className="text-3xl font-bold mb-8">Envíanos un Mensaje</h3>
                <form className="space-y-6">
                  <div>
                    <label className="text-base font-medium mb-3 block">Nombre</label>
                    <Input placeholder="Tu nombre completo" className="h-14 text-base rounded-xl" />
                  </div>
                  <div>
                    <label className="text-base font-medium mb-3 block">Correo Electrónico</label>
                    <Input type="email" placeholder="tu@email.com" className="h-14 text-base rounded-xl" />
                  </div>
                  <div>
                    <label className="text-base font-medium mb-3 block">Teléfono</label>
                    <Input type="tel" placeholder="(505) 1234-5678" className="h-14 text-base rounded-xl" />
                  </div>
                  <div>
                    <label className="text-base font-medium mb-3 block">Mensaje / Petición de Oración</label>
                    <Textarea placeholder="Escribe tu mensaje o petición de oración aquí..." className="min-h-40 text-base rounded-xl" />
                  </div>
                  <Button type="submit" className="w-full h-14 text-lg bg-gradient-to-r from-primary to-sky hover:scale-105 transition-all duration-300 rounded-full">
                    <Send className="h-5 w-5 mr-2" />
                    Enviar Mensaje
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card className="border-2 border-border hover:shadow-xl hover:border-primary transition-all duration-300 rounded-2xl">
                <CardContent className="p-8">
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/10 to-sky/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="h-7 w-7 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl mb-3">Teléfono</h3>
                      <p className="text-muted-foreground text-lg">
                        +505 1234-5678<br />
                        +505 8765-4321
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-border hover:shadow-xl hover:border-primary transition-all duration-300 rounded-2xl">
                <CardContent className="p-8">
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/10 to-sky/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="h-7 w-7 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl mb-3">Email</h3>
                      <p className="text-muted-foreground text-lg">
                        info@ibdelremanente.org<br />
                        pastores@ibdelremanente.org
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-border hover:shadow-xl hover:border-primary transition-all duration-300 rounded-2xl">
                <CardContent className="p-8">
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/10 to-sky/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="h-7 w-7 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl mb-3">Horarios de Oficina</h3>
                      <p className="text-muted-foreground text-lg">
                        Lunes a Viernes: 9:00 AM - 5:00 PM<br />
                        Sábado: 9:00 AM - 12:00 PM
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary/30 bg-gradient-to-br from-primary/5 to-sky/5 rounded-2xl">
                <CardContent className="p-8">
                  <h3 className="font-bold text-xl mb-6 text-center">Síguenos en Redes Sociales</h3>
                  <div className="flex justify-center gap-6">
                    <Button size="lg" variant="outline" className="w-16 h-16 rounded-full p-0 hover:scale-110 hover:bg-primary hover:text-white transition-all duration-300">
                      <Facebook className="h-7 w-7" />
                    </Button>
                    <Button size="lg" variant="outline" className="w-16 h-16 rounded-full p-0 hover:scale-110 hover:bg-primary hover:text-white transition-all duration-300">
                      <Instagram className="h-7 w-7" />
                    </Button>
                    <Button size="lg" variant="outline" className="w-16 h-16 rounded-full p-0 hover:scale-110 hover:bg-primary hover:text-white transition-all duration-300">
                      <Youtube className="h-7 w-7" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Visítanos */}
      <section id="visitanos" className="py-32 bg-muted/30 transition-colors duration-300">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-gold to-primary bg-clip-text text-transparent">
              Visítanos
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-primary via-gold to-primary mx-auto mb-8 rounded-full"></div>
            <p className="text-muted-foreground text-xl max-w-3xl mx-auto">
              Te esperamos con los brazos abiertos en nuestra iglesia
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-10">
            <Card className="border-2 border-primary/20 shadow-2xl rounded-3xl">
              <CardContent className="p-10">
                <div className="flex items-start gap-5 mb-8">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/10 to-sky/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-10 w-10 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-3xl mb-3">Nuestra Ubicación</h3>
                    <p className="text-xl text-muted-foreground">
                      📍 WW7G+34Q, Catarina, Masaya, Nicaragua<br />
                      <span className="text-primary font-semibold">(Iglesia Bautista del Remanente)</span>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/20 shadow-2xl overflow-hidden rounded-3xl">
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
                    title="Ubicación Iglesia Bautista del Remanente"
                  />
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-2 border-border hover:border-primary text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 rounded-2xl">
                <CardContent className="pt-12 pb-10">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary/20 to-sky/20 flex items-center justify-center">
                    <Heart className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="font-bold text-2xl mb-3">Todos Bienvenidos</h3>
                  <p className="text-muted-foreground text-lg">
                    Ven como eres, te recibiremos con amor
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-border hover:border-sky text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 rounded-2xl">
                <CardContent className="pt-12 pb-10">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-sky/20 to-gold/20 flex items-center justify-center">
                    <Clock className="h-10 w-10 text-sky" />
                  </div>
                  <h3 className="font-bold text-2xl mb-3">Llega Temprano</h3>
                  <p className="text-muted-foreground text-lg">
                    15 minutos antes para conocernos mejor
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-border hover:border-gold text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 rounded-2xl">
                <CardContent className="pt-12 pb-10">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-gold/20 to-primary/20 flex items-center justify-center">
                    <Users className="h-10 w-10 text-gold" />
                  </div>
                  <h3 className="font-bold text-2xl mb-3">Familias</h3>
                  <p className="text-muted-foreground text-lg">
                    Programas para todas las edades
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}