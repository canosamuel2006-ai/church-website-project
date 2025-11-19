"use client"

import Link from "next/link"
import { Church, MapPin, Phone, Mail, Facebook, Instagram, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-primary via-primary to-sky text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo y Descripción */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white/10 backdrop-blur">
                <Church className="h-6 w-6" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl leading-tight font-bold">Iglesia Bautista</span>
                <span className="text-sm leading-tight text-gold">del Remanente</span>
              </div>
            </Link>
            <p className="text-primary-foreground/80 mb-4 max-w-md">
              Firmes en la fe, creciendo en Cristo. Una comunidad dedicada a iluminar Catarina con el amor de Cristo.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Enlaces Rápidos */}
          <div>
            <h3 className="font-bold text-lg mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#sobre-nosotros" className="text-primary-foreground/80 hover:text-white transition-colors">
                  Quiénes Somos
                </Link>
              </li>
              <li>
                <Link href="#vision-mision" className="text-primary-foreground/80 hover:text-white transition-colors">
                  Visión y Misión
                </Link>
              </li>
              <li>
                <Link href="#mensajes" className="text-primary-foreground/80 hover:text-white transition-colors">
                  Mensajes
                </Link>
              </li>
              <li>
                <Link href="#ministerios" className="text-primary-foreground/80 hover:text-white transition-colors">
                  Ministerios
                </Link>
              </li>
              <li>
                <Link href="#contacto" className="text-primary-foreground/80 hover:text-white transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Información de Contacto */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-primary-foreground/80">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span>Catarina, Masaya, Nicaragua</span>
              </li>
              <li className="flex items-start gap-2 text-primary-foreground/80">
                <Phone className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span>+505 1234-5678</span>
              </li>
              <li className="flex items-start gap-2 text-primary-foreground/80">
                <Mail className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span>info@ibdelremanente.org</span>
              </li>
            </ul>
            
            <div className="mt-6 p-4 bg-white/10 backdrop-blur rounded-lg">
              <p className="font-semibold mb-1">Horarios de Culto</p>
              <p className="text-sm text-primary-foreground/80">Domingos: 9:00 AM y 11:00 AM</p>
              <p className="text-sm text-primary-foreground/80">Miércoles: 7:00 PM</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © {new Date().getFullYear()} Iglesia Bautista del Remanente. Todos los derechos reservados.
          </p>
          <p className="text-primary-foreground/60 text-sm mt-2">
            "Porque donde están dos o tres congregados en mi nombre, allí estoy yo en medio de ellos." - Mateo 18:20
          </p>
        </div>
      </div>
    </footer>
  )
}