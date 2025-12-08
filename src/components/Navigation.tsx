"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, LogIn, UserPlus, LogOut, User } from "lucide-react"
import { authClient, useSession } from "@/lib/auth-client"
import { useRouter } from "next/navigation"
import { toast } from "sonner"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const { data: session, isPending, refetch } = useSession()
  const router = useRouter()

  const handleSignOut = async () => {
    const token = localStorage.getItem("bearer_token")

    const { error } = await authClient.signOut({
      fetchOptions: {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    })
    
    if (error?.code) {
      toast.error("Error al cerrar sesión")
    } else {
      localStorage.removeItem("bearer_token")
      refetch()
      toast.success("Sesión cerrada exitosamente")
      router.push("/")
    }
  }

  const navLinks = [
    { href: "#sobre-nosotros", label: "Nosotros" },
    { href: "#visitanos", label: "Ubicación" },
    { href: "#mensajes", label: "Eventos" },
    { href: "#ministerios", label: "Iglesia" },
    { href: "#ofrenda", label: "Ofrenda" },
  ]

  return (
    <nav className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur-xl supports-[backdrop-filter]:bg-background/90 border-b border-border/50 transition-all duration-300">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-20 items-center justify-between gap-6">
          {/* Logo - Left Side */}
          <Link href="/" className="flex items-center gap-3 font-semibold group flex-shrink-0">
            <div className="relative h-10 w-10 md:h-12 md:w-12 flex-shrink-0 transition-all duration-300 group-hover:opacity-80">
              <Image
                src="/logo.png"
                alt="Iglesia Bautista del Remanente Logo"
                fill
                className="object-contain drop-shadow-md"
                priority
              />
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="text-base md:text-lg leading-tight text-foreground font-bold group-hover:scale-105 transition-transform">
                Iglesia Bautista
              </span>
              <span className="text-sm md:text-base leading-tight text-gold font-semibold">
                del Remanente
              </span>
            </div>
          </Link>

          {/* Desktop Navigation - Center/Right */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8 ml-auto">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm xl:text-base font-medium text-gray-800 transition-all duration-300 hover:text-primary relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-sky group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}

            {/* Auth Section */}
            {isPending ? (
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-muted animate-pulse" />
              </div>
            ) : session?.user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="gap-2 hover:scale-105 transition-all">
                    <User className="h-4 w-4" />
                    <span className="hidden xl:inline">{session.user.name}</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <div className="px-2 py-1.5">
                    <p className="text-sm font-medium">{session.user.name}</p>
                    <p className="text-xs text-muted-foreground">{session.user.email}</p>
                  </div>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleSignOut} className="cursor-pointer text-destructive">
                    <LogOut className="h-4 w-4 mr-2" />
                    Cerrar Sesión
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <div className="flex items-center gap-3">
                <Button variant="outline" asChild className="hover:scale-105 transition-all">
                  <Link href="/login">
                    <LogIn className="h-4 w-4 mr-2" />
                    <span className="hidden xl:inline">Iniciar Sesión</span>
                    <span className="xl:hidden">Entrar</span>
                  </Link>
                </Button>
                <Button asChild className="bg-gradient-to-r from-primary to-sky hover:scale-105 transition-all">
                  <Link href="/register">
                    <UserPlus className="h-4 w-4 mr-2" />
                    <span className="hidden xl:inline">Registrarse</span>
                    <span className="xl:hidden">Registro</span>
                  </Link>
                </Button>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-3 lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              className="p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-6 space-y-4 border-t border-border/50 animate-fade-in-up">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-3 text-base font-medium text-gray-800 transition-all duration-300 hover:text-primary hover:pl-2"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            
            {/* Mobile Auth Section */}
            <div className="pt-4 border-t border-border/50 space-y-3">
              {isPending ? (
                <div className="w-full h-10 bg-muted animate-pulse rounded-lg" />
              ) : session?.user ? (
                <>
                  <div className="px-4 py-3 bg-muted/50 rounded-lg">
                    <p className="text-sm font-medium">{session.user.name}</p>
                    <p className="text-xs text-muted-foreground">{session.user.email}</p>
                  </div>
                  <Button 
                    onClick={handleSignOut} 
                    variant="outline" 
                    className="w-full text-destructive"
                  >
                    <LogOut className="h-4 w-4 mr-2" />
                    Cerrar Sesión
                  </Button>
                </>
              ) : (
                <>
                  <Button variant="outline" asChild className="w-full">
                    <Link href="/login" onClick={() => setIsOpen(false)}>
                      <LogIn className="h-4 w-4 mr-2" />
                      Iniciar Sesión
                    </Link>
                  </Button>
                  <Button asChild className="w-full bg-gradient-to-r from-primary to-sky">
                    <Link href="/register" onClick={() => setIsOpen(false)}>
                      <UserPlus className="h-4 w-4 mr-2" />
                      Registrarse
                    </Link>
                  </Button>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}