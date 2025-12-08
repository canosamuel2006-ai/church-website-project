"use client"

import Link from "next/link"
import { Church, MapPin, Phone, Mail, Facebook, Instagram, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-primary via-sky to-primary border-t border-border/50 transition-colors duration-300">
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-sky/90 to-primary/90" />
      
      <div className="container mx-auto px-6 md:px-8 py-16 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Logo y Descripción */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-4 mb-6 group">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white/20 backdrop-blur group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Church className="h-8 w-8 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl leading-tight font-bold text-white">Iglesia Bautista</span>
                <span className="text-lg leading-tight text-gold font-semibold">del Remanente</span>
              </div>
            </Link>
            <p className="text-white/90 mb-6 max-w-md text-lg leading-relaxed">
              Firmes en la fe, creciendo en Cristo. Una comunidad dedicada a iluminar Catarina con el amor de Cristo.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-14 h-14 rounded-full bg-white/20 hover:bg-white/30 transition-all duration-300 flex items-center justify-center hover:scale-110 shadow-lg">
                <Facebook className="h-6 w-6 text-white" />
              </a>
              <a href="#" className="w-14 h-14 rounded-full bg-white/20 hover:bg-white/30 transition-all duration-300 flex items-center justify-center hover:scale-110 shadow-lg">
                <Instagram className="h-6 w-6 text-white" />
              </a>
              <a href="#" className="w-14 h-14 rounded-full bg-white/20 hover:bg-white/30 transition-all duration-300 flex items-center justify-center hover:scale-110 shadow-lg">
                <Youtube className="h-6 w-6 text-white" />
              </a>
            </div>
          </div>

          {/* Enlaces Rápidos */}
          <div>
            <h3 className="font-bold text-xl mb-6 text-white">Enlaces Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#sobre-nosotros" className="text-white/80 hover:text-gold transition-colors text-lg flex items-center gap-2 group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-gold transition-all duration-300"></span>
                  Quiénes Somos
                </Link>
              </li>
              <li>
                <Link href="#vision-mision" className="text-white/80 hover:text-gold transition-colors text-lg flex items-center gap-2 group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-gold transition-all duration-300"></span>
                  Visión y Misión
                </Link>
              </li>
              <li>
                <Link href="#mensajes" className="text-white/80 hover:text-gold transition-colors text-lg flex items-center gap-2 group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-gold transition-all duration-300"></span>
                  Mensajes
                </Link>
              </li>
              <li>
                <Link href="#ministerios" className="text-white/80 hover:text-gold transition-colors text-lg flex items-center gap-2 group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-gold transition-all duration-300"></span>
                  Ministerios
                </Link>
              </li>
              <li>
                <Link href="#contacto" className="text-white/80 hover:text-gold transition-colors text-lg flex items-center gap-2 group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-gold transition-all duration-300"></span>
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Información de Contacto */}
          <div>
            <h3 className="font-bold text-xl mb-6 text-white">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-white/90 hover:text-gold transition-colors group">
                <MapPin className="h-6 w-6 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-lg">Catarina, Masaya, Nicaragua</span>
              </li>
              <li className="flex items-start gap-3 text-white/90 hover:text-gold transition-colors group">
                <Phone className="h-6 w-6 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-lg">+505 1234-5678</span>
              </li>
              <li className="flex items-start gap-3 text-white/90 hover:text-gold transition-colors group">
                <Mail className="h-6 w-6 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-lg">info@ibdelremanente.org</span>
              </li>
            </ul>
            
            <div className="mt-8 p-6 bg-white/20 backdrop-blur rounded-2xl border border-white/30 shadow-xl">
              <p className="font-bold mb-3 text-white text-lg">Horarios de Culto</p>
              <p className="text-white/90 mb-1">Domingos: 9:00 AM y 11:00 AM</p>
              <p className="text-white/90">Miércoles: 7:00 PM</p>
            </div>
          </div>
        </div>

        {/* Versículo Bíblico */}
        <div className="mb-12 p-8 bg-white/10 backdrop-blur rounded-2xl border border-white/20 shadow-xl max-w-4xl mx-auto">
          <p className="text-white/95 text-xl md:text-2xl italic text-center leading-relaxed">
            "Porque donde están dos o tres congregados en mi nombre, allí estoy yo en medio de ellos."
          </p>
          <p className="text-gold font-bold text-center mt-4 text-lg">Mateo 18:20</p>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-white/80 text-base mb-2">
            © {new Date().getFullYear()} Iglesia Bautista del Remanente. Todos los derechos reservados.
          </p>
          <p className="text-white/60 text-sm">
            Desarrollado con amor para la gloria de Dios
          </p>
        </div>
      </div>
    </footer>
  )
}