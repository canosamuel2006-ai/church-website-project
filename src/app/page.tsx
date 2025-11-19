"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import { Calendar, Users, Heart, BookOpen, Clock, MapPin } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-primary/5 py-20 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Bienvenidos a Primera Iglesia Bautista El Remanente
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Un lugar donde la fe, esperanza y amor se unen
          </p>
          
          {/* Service Times Card */}
          <Card className="max-w-2xl mx-auto mb-8">
            <CardContent className="pt-6">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Clock className="h-5 w-5 text-primary" />
                <h2 className="text-2xl font-semibold">Únete a Nuestros Servicios</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-4 text-left">
                <div className="p-4 bg-muted rounded-lg">
                  <p className="font-semibold text-lg">Servicios Dominicales</p>
                  <p className="text-muted-foreground">9:00 AM - Tradicional</p>
                  <p className="text-muted-foreground">11:00 AM - Contemporáneo</p>
                </div>
                <div className="p-4 bg-muted rounded-lg">
                  <p className="font-semibold text-lg">Miércoles por la Noche</p>
                  <p className="text-muted-foreground">7:00 PM - Estudio Bíblico</p>
                  <p className="text-muted-foreground">Oración y Compañerismo</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/contact">Planea Tu Visita</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/about">Conócenos</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Lo Que Ofrecemos
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="pt-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <BookOpen className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Enseñanza Bíblica</h3>
                <p className="text-muted-foreground">
                  Mensajes profundos y relevantes de las Escrituras que se aplican a la vida cotidiana
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Comunidad</h3>
                <p className="text-muted-foreground">
                  Conéctate con otros a través de grupos pequeños y eventos de compañerismo
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Alcance</h3>
                <p className="text-muted-foreground">
                  Sirve a nuestra comunidad y marca una diferencia en la vida de otros
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Donations CTA Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 overflow-hidden">
              <CardContent className="p-8 md:p-12">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                    <Heart className="h-8 w-8 text-primary" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Apoya Nuestra Misión
                  </h2>
                  <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                    Tu generosidad nos ayuda a cumplir nuestra misión de servir a Dios y bendecir a nuestra comunidad. 
                    Puedes donar a la iglesia en general o a programas específicos.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4 mb-8">
                    <div className="p-4 bg-background rounded-lg">
                      <p className="text-2xl font-bold text-primary mb-1">5+</p>
                      <p className="text-sm text-muted-foreground">Programas Activos</p>
                    </div>
                    <div className="p-4 bg-background rounded-lg">
                      <p className="text-2xl font-bold text-primary mb-1">$24,600</p>
                      <p className="text-sm text-muted-foreground">Recaudado este Año</p>
                    </div>
                    <div className="p-4 bg-background rounded-lg">
                      <p className="text-2xl font-bold text-primary mb-1">100%</p>
                      <p className="text-sm text-muted-foreground">Transparente</p>
                    </div>
                  </div>
                  <p className="text-sm italic text-muted-foreground mb-6">
                    "Cada uno dé como propuso en su corazón: no con tristeza, ni por necesidad, 
                    porque Dios ama al dador alegre." - 2 Corintios 9:7
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Button size="lg" asChild>
                      <Link href="/donations">
                        <Heart className="h-4 w-4 mr-2" />
                        Hacer una Donación
                      </Link>
                    </Button>
                    <Button size="lg" variant="outline" asChild>
                      <Link href="/donations">Ver Programas</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Upcoming Events Preview */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Próximos Eventos</h2>
            <p className="text-muted-foreground text-lg">
              Únete a nosotros en estas reuniones especiales
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-3 mb-3">
                  <Calendar className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <p className="font-semibold">Celebración de Semana Santa</p>
                    <p className="text-sm text-muted-foreground">20 de Abril, 2025 - 9:00 AM</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Celebra la resurrección con música especial y mensaje
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-3 mb-3">
                  <Calendar className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <p className="font-semibold">Alcance Comunitario</p>
                    <p className="text-sm text-muted-foreground">Todos los Sábados - 10:00 AM</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Sirve comidas y comparte esperanza con nuestra comunidad
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-3 mb-3">
                  <Calendar className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <p className="font-semibold">Campamento de Verano para Jóvenes</p>
                    <p className="text-sm text-muted-foreground">15-20 de Julio, 2025</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Una semana de diversión, fe y compañerismo para jóvenes de 12-18 años
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button asChild variant="outline">
              <Link href="/events">Ver Todos los Eventos</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Location CTA */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
            <MapPin className="h-8 w-8 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Nos Encantaría Verte
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Ya seas nuevo en la fe o hayas estado caminando con Dios por años, hay un lugar para ti aquí.
          </p>
          <Button size="lg" asChild>
            <Link href="/contact">Obtén Direcciones</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}