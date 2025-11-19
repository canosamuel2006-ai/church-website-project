import Link from "next/link"
import { Church, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-muted mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Church Info */}
          <div>
            <div className="flex items-center gap-2 font-semibold text-xl mb-4">
              <Church className="h-6 w-6" />
              <span>Primera Iglesia Bautista El Remanente</span>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Una comunidad acogedora de fe, esperanza y amor.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contacto</h3>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5" />
                <span>Calle Principal 123<br />Ciudad, Estado 12345</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>info@elremanente.org</span>
              </div>
            </div>
          </div>

          {/* Service Times */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Horarios de Servicio</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div>
                <p className="font-medium text-foreground">Culto Dominical</p>
                <p>9:00 AM & 11:00 AM</p>
              </div>
              <div>
                <p className="font-medium text-foreground">Estudio Bíblico Miércoles</p>
                <p>7:00 PM</p>
              </div>
              <div>
                <p className="font-medium text-foreground">Grupo de Jóvenes</p>
                <p>Viernes 6:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Primera Iglesia Bautista El Remanente. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}