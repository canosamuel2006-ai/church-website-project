"use client"

import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Calendar, Clock, MapPin, Users, UserPlus } from "lucide-react"

export default function EventsPage() {
  const events = [
    {
      title: "Culto Dominical",
      category: "Servicio Semanal",
      date: "Todos los Domingos",
      time: "9:00 AM & 11:00 AM",
      location: "Santuario Principal",
      description: "Únete a nosotros para adoración inspiradora, enseñanza bíblica y compañerismo.",
      recurring: true,
      registrationDeadline: null
    },
    {
      title: "Estudio Bíblico Semanal",
      category: "Estudio Bíblico",
      date: "Todos los Miércoles",
      time: "7:00 PM",
      location: "Salón de Compañerismo",
      description: "Profundiza en las Escrituras con discusión y aplicación práctica.",
      recurring: true,
      registrationDeadline: null
    },
    {
      title: "Celebración de Semana Santa",
      category: "Evento Especial",
      date: "20 de Abril, 2025",
      time: "9:00 AM & 11:00 AM",
      location: "Santuario Principal",
      description: "Celebra la resurrección de Jesús con música especial y un poderoso mensaje de esperanza.",
      recurring: false,
      registrationDeadline: "15 de Abril, 2025"
    },
    {
      title: "Grupo de Jóvenes",
      category: "Ministerio Juvenil",
      date: "Todos los Viernes",
      time: "6:00 PM - 8:00 PM",
      location: "Centro Juvenil",
      description: "Diversión, compañerismo y actividades de fortalecimiento de fe para estudiantes de 12-18 años.",
      recurring: true,
      registrationDeadline: null
    },
    {
      title: "Café y Conexión de Mujeres",
      category: "Ministerio de Mujeres",
      date: "Segundo Sábado del Mes",
      time: "10:00 AM",
      location: "Cafetería de la Iglesia",
      description: "Un tiempo informal para que las mujeres se conecten, compartan y se animen mutuamente.",
      recurring: true,
      registrationDeadline: null
    },
    {
      title: "Desayuno de Oración de Hombres",
      category: "Ministerio de Hombres",
      date: "Primer Sábado del Mes",
      time: "8:00 AM",
      location: "Salón de Compañerismo",
      description: "Comienza tu mes bien con compañerismo, comida y oración enfocada.",
      recurring: true,
      registrationDeadline: null
    },
    {
      title: "Día de Alcance Comunitario",
      category: "Alcance",
      date: "Todos los Sábados",
      time: "10:00 AM - 2:00 PM",
      location: "Centro de la Ciudad",
      description: "Sirve a nuestra comunidad proporcionando comidas, ropa y apoyo a quienes lo necesitan.",
      recurring: true,
      registrationDeadline: null
    },
    {
      title: "Escuela Bíblica de Vacaciones",
      category: "Ministerio Infantil",
      date: "16-20 de Junio, 2025",
      time: "9:00 AM - 12:00 PM",
      location: "Campus de la Iglesia",
      description: "Una semana de lecciones bíblicas divertidas, juegos, manualidades y música para niños de 5-12 años.",
      recurring: false,
      registrationDeadline: "10 de Junio, 2025"
    },
    {
      title: "Campamento de Verano para Jóvenes",
      category: "Ministerio Juvenil",
      date: "15-20 de Julio, 2025",
      time: "Toda la Semana",
      location: "Centro de Retiro en la Montaña",
      description: "Una semana transformadora para estudiantes con adoración, enseñanza, actividades al aire libre y comunidad.",
      recurring: false,
      registrationDeadline: "1 de Julio, 2025"
    },
    {
      title: "Conexión de Grupos Pequeños",
      category: "Comunidad",
      date: "Horarios Variados",
      time: "Ver Detalles",
      location: "Varios Hogares",
      description: "Únete a un grupo pequeño para construir relaciones significativas y crecer juntos en la fe.",
      recurring: true,
      registrationDeadline: null
    },
    {
      title: "Noche de Adoración",
      category: "Evento Especial",
      date: "Último Viernes del Mes",
      time: "7:00 PM",
      location: "Santuario Principal",
      description: "Una tarde dedicada a la adoración y oración, con nuestro equipo de alabanza e invitados especiales.",
      recurring: true,
      registrationDeadline: null
    },
    {
      title: "Servicio de Nochebuena",
      category: "Evento Especial",
      date: "24 de Diciembre, 2025",
      time: "5:00 PM & 7:00 PM",
      location: "Santuario Principal",
      description: "Celebra el nacimiento de Jesús con velas, villancicos y la historia de Navidad.",
      recurring: false,
      registrationDeadline: "20 de Diciembre, 2025"
    }
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-primary/5 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Eventos y Actividades
          </h1>
          <p className="text-xl text-muted-foreground text-center max-w-3xl mx-auto">
            Únete a nosotros para adoración, compañerismo y oportunidades de crecer en la fe
          </p>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between mb-4">
                    <Badge variant={event.recurring ? "secondary" : "default"}>
                      {event.category}
                    </Badge>
                    {event.recurring && (
                      <Badge variant="outline" className="text-xs">
                        Recurrente
                      </Badge>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3">{event.title}</h3>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mt-0.5 shrink-0" />
                      <span>{event.date}</span>
                    </div>
                    
                    <div className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 mt-0.5 shrink-0" />
                      <span>{event.time}</span>
                    </div>
                    
                    <div className="flex items-start gap-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                      <span>{event.location}</span>
                    </div>

                    {event.registrationDeadline && (
                      <div className="flex items-start gap-2 text-sm text-primary font-medium">
                        <UserPlus className="h-4 w-4 mt-0.5 shrink-0" />
                        <span>Inscripción hasta: {event.registrationDeadline}</span>
                      </div>
                    )}
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-4">
                    {event.description}
                  </p>

                  {event.registrationDeadline && (
                    <Button className="w-full" size="sm" asChild>
                      <Link href="/contact">Inscribirse Ahora</Link>
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
            <Users className="h-8 w-8 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Participa Con Nosotros
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Ya sea que busques adoración, estudio bíblico o formas de servir, 
            hay un lugar para ti en Primera Iglesia Bautista El Remanente.
          </p>
          <Button asChild size="lg">
            <Link href="/">Volver al Inicio</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}