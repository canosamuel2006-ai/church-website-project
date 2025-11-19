"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import VideoSection from "@/components/VideoSection"
import LiveStreamSection from "@/components/LiveStreamSection"
import { Heart, Users, Handshake, Shield, BookOpen, Sparkles, HandHeart, Youtube, MapPin, Phone, Mail, Clock, Facebook, Instagram, Send } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Home() {
  const valores = [
    { icon: Heart, title: "Amor", description: "Amamos a Dios y a nuestro prójimo como a nosotros mismos" },
    { icon: Users, title: "Unidad", description: "Unidos en Cristo, formamos una familia espiritual" },
    { icon: Handshake, title: "Servicio", description: "Servimos con alegría y dedicación al Señor" },
    { icon: Shield, title: "Fe", description: "Confiamos plenamente en las promesas de Dios" },
    { icon: BookOpen, title: "Fidelidad", description: "Fieles a la Palabra de Dios y sus enseñanzas" },
    { icon: Sparkles, title: "Fraternidad", description: "Cultivamos relaciones genuinas y duraderas" },
    { icon: HandHeart, title: "Humildad", description: "Servimos con un corazón humilde y agradecido" },
  ]

  const ministerios = [
    {
      title: "Culto Dominical",
      schedule: "Domingos 9:00 AM y 11:00 AM",
      description: "Adoración, alabanza y mensaje de la Palabra"
    },
    {
      title: "Estudio Bíblico",
      schedule: "Miércoles 7:00 PM",
      description: "Profundizamos en las Escrituras juntos"
    },
    {
      title: "Ministerio de Jóvenes",
      schedule: "Viernes 6:00 PM",
      description: "Actividades y enseñanza para adolescentes"
    },
    {
      title: "Escuela Dominical",
      schedule: "Domingos 10:00 AM",
      description: "Educación bíblica para todas las edades"
    },
    {
      title: "Grupos de Oración",
      schedule: "Martes 6:00 PM",
      description: "Intercesión y comunión en oración"
    },
    {
      title: "Ministerio de Niños",
      schedule: "Domingos durante el culto",
      description: "Enseñanza bíblica adaptada para niños"
    }
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/10 via-sky/10 to-accent/10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItaDJ2LTJoLTJ6bTAgNGgtMnYyaDJ2LTJ6bTAtOGgydi0yaC0ydjJ6bTQgNHYtMmgydjJoLTJ6bS00IDB2Mmgydi0yaC0yem0wLTR2LTJoLTJ2Mmgyem00IDB2Mmgydi0yaC0yem0yLTJ2LTJoLTJ2Mmgyem0wIDR2Mmgydi0yaC0yem0wIDRoLTJ2Mmgydi0yem00LTR2LTJoMnYyaC0yem0wIDR2Mmgydi0yaC0yem0wLThoMnYtMmgtMnYyem0wIDRoLTJ2Mmgydi0yeiIvPjwvZz48L2c+PC9zdmc+')] opacity-40" />
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-block mb-6 animate-fade-in-up">
            <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-primary to-sky flex items-center justify-center shadow-2xl">
              <div className="text-4xl text-primary-foreground">✟</div>
            </div>
          </div>
          
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
            {valores.map((valor, index) => (
              <Card 
                key={valor.title} 
                className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/50 cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
              >
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
            ))}
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
            {ministerios.map((ministerio, index) => (
              <Card 
                key={ministerio.title}
                className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50"
              >
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/10 to-sky/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl mb-1">{ministerio.title}</h3>
                      <p className="text-sm text-primary font-semibold">{ministerio.schedule}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">{ministerio.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="py-20 bg-gradient-to-br from-muted/30 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-sky bg-clip-text text-transparent">
              Contáctanos
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Nos encantaría saber de ti. Escríbenos o visítanos
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Formulario */}
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
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Dirección</h3>
                      <p className="text-muted-foreground">
                        Catarina, Masaya<br />
                        Nicaragua
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

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

      <Footer />
    </div>
  )
}