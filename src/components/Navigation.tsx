"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { href: "/", label: "Inicio" },
    { href: "#sobre-nosotros", label: "Quiénes Somos" },
    { href: "#vision-mision", label: "Visión y Misión" },
    { href: "#mensajes", label: "Mensajes" },
    { href: "#ministerios", label: "Ministerios" },
    { href: "#contacto", label: "Contacto" },
  ]

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/90 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-3 font-semibold">
            <div className="flex flex-col">
              <span className="text-lg leading-tight text-primary font-bold">Iglesia Bautista</span>
              <span className="text-sm leading-tight text-gold font-semibold">del Remanente</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium transition-colors hover:text-primary text-foreground/80"
              >
                {link.label}
              </Link>
            ))}
            <Button asChild className="bg-gradient-to-r from-primary to-sky">
              <Link href="#contacto">Visítanos</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 space-y-3 border-t">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-2 text-sm font-medium transition-colors hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button asChild className="w-full bg-gradient-to-r from-primary to-sky">
              <Link href="#contacto" onClick={() => setIsOpen(false)}>
                Visítanos
              </Link>
            </Button>
          </div>
        )}
      </div>
    </nav>
  )
}