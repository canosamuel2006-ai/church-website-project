"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Radio, ExternalLink } from "lucide-react"

export default function LiveStreamSection() {
  const [isLive, setIsLive] = useState(false)
  const liveVideoId = "jfKfPfyJRdk" // Reemplazar con el ID del video en vivo actual

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-sky/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className={`w-3 h-3 rounded-full ${isLive ? 'bg-red-500 animate-pulse' : 'bg-muted'}`} />
            <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
              {isLive ? "En vivo ahora" : "Transmisión en vivo"}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-sky bg-clip-text text-transparent">
            Servicios en Directo
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Únete a nuestros servicios desde donde estés
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Card className="overflow-hidden border-2 shadow-2xl">
            <CardContent className="p-0">
              {isLive ? (
                <div className="relative aspect-video bg-black">
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${liveVideoId}?autoplay=1`}
                    title="Transmisión en Vivo"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              ) : (
                <div className="relative aspect-video bg-gradient-to-br from-primary/10 via-sky/10 to-accent/10 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white shadow-lg mb-6">
                      <Radio className="h-10 w-10 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3">
                      Aún no hay transmisión en vivo
                    </h3>
                    <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                      Vuelve pronto para unirte a nuestros servicios en directo.
                      Transmitimos cada domingo a las 9:00 AM y 11:00 AM.
                    </p>
                    <div className="bg-white/80 backdrop-blur rounded-lg p-4 inline-block">
                      <p className="text-sm font-semibold text-foreground mb-1">Próximo servicio:</p>
                      <p className="text-lg font-bold text-primary">Domingo 9:00 AM</p>
                    </div>
                  </div>
                </div>
              )}
              
              <div className="p-6 bg-gradient-to-r from-muted/50 to-accent/20">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <p className="font-semibold text-lg mb-1">¿No puedes verlo aquí?</p>
                    <p className="text-sm text-muted-foreground">
                      Visita nuestro canal de YouTube para más opciones
                    </p>
                  </div>
                  <Button
                    asChild
                    size="lg"
                    className="bg-gradient-to-r from-primary to-sky whitespace-nowrap"
                  >
                    <a
                      href="https://www.youtube.com/@elremanentecatarina"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Ir al Canal de YouTube
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}