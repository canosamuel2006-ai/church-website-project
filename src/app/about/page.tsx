"use client"

import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Heart, Target, Book, Users, Eye } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-primary/5 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Acerca de Nosotros
          </h1>
          <p className="text-xl text-muted-foreground text-center max-w-3xl mx-auto">
            Conoce nuestra misión, visión y el equipo pastoral de Primera Iglesia Bautista El Remanente
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestra Misión</h2>
            </div>
            
            <Card>
              <CardContent className="pt-8 text-center">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Glorificar a Dios haciendo discípulos de Jesucristo que amen a Dios, 
                  amen a los demás y sirvan al mundo. Existimos para ayudar a las personas 
                  a descubrir y profundizar su relación con Jesús, crecer en su fe y hacer 
                  un impacto positivo en nuestra comunidad y más allá.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <Eye className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestra Visión</h2>
            </div>
            
            <Card>
              <CardContent className="pt-8 text-center">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Ser una comunidad de fe vibrante y en crecimiento donde cada persona 
                  experimente el amor transformador de Cristo, crezca espiritualmente, 
                  y se convierta en un agente de cambio en su familia, vecindario y el mundo.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Lo Que Creemos
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card>
              <CardContent className="pt-8">
                <div className="flex items-start gap-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 shrink-0">
                    <Book className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">La Biblia</h3>
                    <p className="text-muted-foreground">
                      Creemos que la Biblia es la Palabra inspirada de Dios, autoritativa y 
                      suficiente para la fe y la vida.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-8">
                <div className="flex items-start gap-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 shrink-0">
                    <Heart className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">La Salvación</h3>
                    <p className="text-muted-foreground">
                      Creemos que la salvación es un regalo de gracia a través de la fe en 
                      Jesucristo, disponible para todos los que creen.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-8">
                <div className="flex items-start gap-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 shrink-0">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">La Iglesia</h3>
                    <p className="text-muted-foreground">
                      Creemos que la iglesia es el cuerpo de Cristo, llamada a adorar, 
                      confraternizar y servir juntos.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-8">
                <div className="flex items-start gap-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 shrink-0">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">La Gran Comisión</h3>
                    <p className="text-muted-foreground">
                      Creemos que somos llamados a compartir el Evangelio y hacer discípulos 
                      de todas las naciones.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pastoral Staff */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Nuestros Pastores
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card>
              <CardContent className="pt-8 text-center">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Pastor Principal</h3>
                <p className="text-primary font-medium mb-3">Pastor Senior</p>
                <p className="text-sm text-muted-foreground">
                  Liderando nuestra congregación con sabiduría, compasión y un corazón 
                  dedicado al discipulado y la enseñanza de la Palabra de Dios.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-8 text-center">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Pastor Asociado</h3>
                <p className="text-primary font-medium mb-3">Ministerios y Comunidad</p>
                <p className="text-sm text-muted-foreground">
                  Supervisando los ministerios de la iglesia y grupos pequeños, creando 
                  espacios para la comunidad auténtica y el crecimiento espiritual.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-8 text-center">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Pastor de Jóvenes</h3>
                <p className="text-primary font-medium mb-3">Ministerio Juvenil</p>
                <p className="text-sm text-muted-foreground">
                  Liderando nuestro ministerio juvenil con energía y dedicación, ayudando 
                  a los jóvenes a crecer en su fe y desarrollar su identidad en Cristo.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ¿Listo Para Unirte a Nosotros?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Nos encantaría darte la bienvenida a nuestra comunidad de fe.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/events">Ver Eventos</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/contact">Contáctanos</Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link href="/">Volver al Inicio</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}