"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Play, Calendar, ExternalLink } from "lucide-react"

interface Video {
  id: string
  title: string
  date: string
  youtubeId: string
}

const videos: Video[] = [
  {
    id: "1",
    title: "El Poder de la Oración",
    date: "15 de Noviembre, 2024",
    youtubeId: "dQw4w9WgXcQ"
  },
  {
    id: "2",
    title: "Viviendo en Fe",
    date: "8 de Noviembre, 2024",
    youtubeId: "dQw4w9WgXcQ"
  },
  {
    id: "3",
    title: "El Amor de Cristo",
    date: "1 de Noviembre, 2024",
    youtubeId: "dQw4w9WgXcQ"
  }
]

export default function VideoSection() {
  const [showMore, setShowMore] = useState(false)
  const displayedVideos = showMore ? videos : videos.slice(0, 3)

  return (
    <section id="mensajes" className="py-20 bg-gradient-to-br from-muted/30 to-accent/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-sky bg-clip-text text-transparent">
            Mensajes y Predicaciones
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explora nuestros mensajes inspiradores y llenos del Espíritu Santo
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {displayedVideos.map((video) => (
            <Card key={video.id} className="overflow-hidden group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50">
              <div className="relative aspect-video bg-gradient-to-br from-primary/10 to-sky/10">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${video.youtubeId}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <Calendar className="h-4 w-4" />
                  <span>{video.date}</span>
                </div>
                <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors">
                  {video.title}
                </h3>
                <Button
                  asChild
                  variant="outline"
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all"
                >
                  <a
                    href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Ver en YouTube
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            asChild
            size="lg"
            variant="outline"
            className="group"
          >
            <a
              href="https://www.youtube.com/@elremanentecatarina/videos"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Play className="h-4 w-4 mr-2 group-hover:text-primary" />
              Ver todos los videos en YouTube
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}