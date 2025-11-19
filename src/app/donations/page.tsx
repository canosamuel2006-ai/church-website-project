"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import { Heart, Church, Users, BookOpen, Handshake, Baby, ArrowLeft, CreditCard } from "lucide-react"
import { toast } from "sonner"

export default function DonationsPage() {
  const [donationType, setDonationType] = useState<"general" | "program">("general")
  const [selectedProgram, setSelectedProgram] = useState("")
  const [amount, setAmount] = useState("")
  const [customAmount, setCustomAmount] = useState("")
  const [frequency, setFrequency] = useState("once")

  const programs = [
    {
      id: "youth",
      name: "Ministerio de Jóvenes",
      description: "Programas y actividades para jóvenes de 12-25 años",
      icon: Users,
      goal: 5000,
      raised: 3200
    },
    {
      id: "children",
      name: "Ministerio Infantil",
      description: "Educación y actividades para niños",
      icon: Baby,
      goal: 3000,
      raised: 1800
    },
    {
      id: "missions",
      name: "Misiones",
      description: "Apoyo a misioneros y proyectos misioneros",
      icon: Church,
      goal: 10000,
      raised: 6500
    },
    {
      id: "community",
      name: "Alcance Comunitario",
      description: "Servicios y ayuda a la comunidad local",
      icon: Handshake,
      goal: 4000,
      raised: 2100
    },
    {
      id: "education",
      name: "Educación Bíblica",
      description: "Materiales y recursos para estudio bíblico",
      icon: BookOpen,
      goal: 2000,
      raised: 1500
    }
  ]

  const suggestedAmounts = ["25", "50", "100", "250", "500"]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    const finalAmount = amount === "custom" ? customAmount : amount
    
    if (!finalAmount || parseFloat(finalAmount) <= 0) {
      toast.error("Por favor ingrese un monto válido")
      return
    }

    if (donationType === "program" && !selectedProgram) {
      toast.error("Por favor seleccione un programa")
      return
    }

    // Aquí iría la integración con el procesador de pagos
    toast.success(`Procesando donación de $${finalAmount}`, {
      description: donationType === "general" 
        ? "Donación general a la iglesia" 
        : `Donación al programa: ${programs.find(p => p.id === selectedProgram)?.name}`
    })
  }

  const getProgressPercentage = (raised: number, goal: number) => {
    return Math.min((raised / goal) * 100, 100)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-primary/5 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
              <Heart className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Haz una Donación
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              Tu generosidad ayuda a cumplir nuestra misión y bendecir a nuestra comunidad
            </p>
            <p className="text-sm text-muted-foreground italic">
              "Cada uno dé como propuso en su corazón: no con tristeza, ni por necesidad, 
              porque Dios ama al dador alegre." - 2 Corintios 9:7
            </p>
          </div>
        </div>
      </section>

      {/* Donation Panel */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="donate" className="max-w-5xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="donate">Realizar Donación</TabsTrigger>
              <TabsTrigger value="programs">Ver Programas</TabsTrigger>
            </TabsList>

            {/* Donate Tab */}
            <TabsContent value="donate">
              <Card>
                <CardHeader>
                  <CardTitle>Selecciona el Tipo de Donación</CardTitle>
                  <CardDescription>
                    Elige si deseas hacer una donación general o apoyar un programa específico
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Donation Type Selection */}
                    <div className="space-y-4">
                      <Label>Tipo de Donación</Label>
                      <div className="grid md:grid-cols-2 gap-4">
                        <Card 
                          className={`cursor-pointer transition-all hover:border-primary ${
                            donationType === "general" ? "border-primary ring-2 ring-primary/20" : ""
                          }`}
                          onClick={() => {
                            setDonationType("general")
                            setSelectedProgram("")
                          }}
                        >
                          <CardContent className="pt-6 text-center">
                            <Church className="h-10 w-10 mx-auto mb-3 text-primary" />
                            <h3 className="font-semibold mb-2">Donación General</h3>
                            <p className="text-sm text-muted-foreground">
                              Apoya las necesidades generales de la iglesia
                            </p>
                          </CardContent>
                        </Card>

                        <Card 
                          className={`cursor-pointer transition-all hover:border-primary ${
                            donationType === "program" ? "border-primary ring-2 ring-primary/20" : ""
                          }`}
                          onClick={() => setDonationType("program")}
                        >
                          <CardContent className="pt-6 text-center">
                            <Heart className="h-10 w-10 mx-auto mb-3 text-primary" />
                            <h3 className="font-semibold mb-2">Programa Específico</h3>
                            <p className="text-sm text-muted-foreground">
                              Dona a un ministerio o programa específico
                            </p>
                          </CardContent>
                        </Card>
                      </div>
                    </div>

                    {/* Program Selection */}
                    {donationType === "program" && (
                      <div className="space-y-3">
                        <Label>Selecciona un Programa</Label>
                        <RadioGroup value={selectedProgram} onValueChange={setSelectedProgram}>
                          {programs.map((program) => {
                            const Icon = program.icon
                            const progressPercent = getProgressPercentage(program.raised, program.goal)
                            
                            return (
                              <Card key={program.id} className="overflow-hidden">
                                <CardContent className="p-4">
                                  <div className="flex items-start gap-3">
                                    <RadioGroupItem value={program.id} id={program.id} className="mt-1" />
                                    <div className="flex-1">
                                      <Label htmlFor={program.id} className="flex items-center gap-2 cursor-pointer mb-1">
                                        <Icon className="h-4 w-4 text-primary" />
                                        <span className="font-semibold">{program.name}</span>
                                      </Label>
                                      <p className="text-sm text-muted-foreground mb-2">
                                        {program.description}
                                      </p>
                                      <div className="space-y-1">
                                        <div className="flex justify-between text-xs text-muted-foreground">
                                          <span>${program.raised.toLocaleString()} recaudado</span>
                                          <span>Meta: ${program.goal.toLocaleString()}</span>
                                        </div>
                                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                                          <div 
                                            className="h-full bg-primary transition-all duration-300"
                                            style={{ width: `${progressPercent}%` }}
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </CardContent>
                              </Card>
                            )
                          })}
                        </RadioGroup>
                      </div>
                    )}

                    {/* Amount Selection */}
                    <div className="space-y-3">
                      <Label>Selecciona el Monto</Label>
                      <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
                        {suggestedAmounts.map((amt) => (
                          <Button
                            key={amt}
                            type="button"
                            variant={amount === amt ? "default" : "outline"}
                            onClick={() => {
                              setAmount(amt)
                              setCustomAmount("")
                            }}
                            className="h-12"
                          >
                            ${amt}
                          </Button>
                        ))}
                        <Button
                          type="button"
                          variant={amount === "custom" ? "default" : "outline"}
                          onClick={() => setAmount("custom")}
                          className="h-12"
                        >
                          Otro
                        </Button>
                      </div>
                      
                      {amount === "custom" && (
                        <div className="space-y-2">
                          <Label htmlFor="customAmount">Monto Personalizado</Label>
                          <div className="relative">
                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                              $
                            </span>
                            <Input
                              id="customAmount"
                              type="number"
                              placeholder="0.00"
                              value={customAmount}
                              onChange={(e) => setCustomAmount(e.target.value)}
                              className="pl-7"
                              min="1"
                              step="0.01"
                            />
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Frequency Selection */}
                    <div className="space-y-3">
                      <Label>Frecuencia</Label>
                      <RadioGroup value={frequency} onValueChange={setFrequency}>
                        <div className="grid md:grid-cols-3 gap-3">
                          <Card className={frequency === "once" ? "border-primary ring-2 ring-primary/20" : ""}>
                            <CardContent className="p-4">
                              <div className="flex items-center gap-2">
                                <RadioGroupItem value="once" id="once" />
                                <Label htmlFor="once" className="cursor-pointer font-normal">
                                  Una Vez
                                </Label>
                              </div>
                            </CardContent>
                          </Card>

                          <Card className={frequency === "monthly" ? "border-primary ring-2 ring-primary/20" : ""}>
                            <CardContent className="p-4">
                              <div className="flex items-center gap-2">
                                <RadioGroupItem value="monthly" id="monthly" />
                                <Label htmlFor="monthly" className="cursor-pointer font-normal">
                                  Mensual
                                </Label>
                              </div>
                            </CardContent>
                          </Card>

                          <Card className={frequency === "yearly" ? "border-primary ring-2 ring-primary/20" : ""}>
                            <CardContent className="p-4">
                              <div className="flex items-center gap-2">
                                <RadioGroupItem value="yearly" id="yearly" />
                                <Label htmlFor="yearly" className="cursor-pointer font-normal">
                                  Anual
                                </Label>
                              </div>
                            </CardContent>
                          </Card>
                        </div>
                      </RadioGroup>
                    </div>

                    {/* Submit Button */}
                    <div className="flex gap-3 pt-4">
                      <Button type="submit" size="lg" className="flex-1">
                        <CreditCard className="h-4 w-4 mr-2" />
                        Proceder al Pago
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Programs Overview Tab */}
            <TabsContent value="programs">
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold mb-2">Nuestros Programas</h2>
                  <p className="text-muted-foreground">
                    Conoce los diferentes ministerios que puedes apoyar con tu donación
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {programs.map((program) => {
                    const Icon = program.icon
                    const progressPercent = getProgressPercentage(program.raised, program.goal)
                    
                    return (
                      <Card key={program.id} className="overflow-hidden">
                        <CardHeader>
                          <div className="flex items-start gap-3">
                            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                              <Icon className="h-6 w-6 text-primary" />
                            </div>
                            <div className="flex-1">
                              <CardTitle className="text-xl">{program.name}</CardTitle>
                              <CardDescription className="mt-1">
                                {program.description}
                              </CardDescription>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-3">
                            <div className="space-y-1">
                              <div className="flex justify-between text-sm">
                                <span className="text-muted-foreground">Recaudado</span>
                                <span className="font-semibold">
                                  ${program.raised.toLocaleString()} de ${program.goal.toLocaleString()}
                                </span>
                              </div>
                              <div className="h-3 bg-muted rounded-full overflow-hidden">
                                <div 
                                  className="h-full bg-primary transition-all duration-300"
                                  style={{ width: `${progressPercent}%` }}
                                />
                              </div>
                              <p className="text-xs text-muted-foreground text-right">
                                {progressPercent.toFixed(0)}% completado
                              </p>
                            </div>
                            <Button 
                              className="w-full" 
                              onClick={() => {
                                setDonationType("program")
                                setSelectedProgram(program.id)
                                // Switch to donate tab
                                const donateTab = document.querySelector('[value="donate"]') as HTMLButtonElement
                                donateTab?.click()
                              }}
                            >
                              Donar a este Programa
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    )
                  })}
                </div>
              </div>
            </TabsContent>
          </Tabs>

          {/* Additional Information */}
          <Card className="max-w-5xl mx-auto mt-8">
            <CardContent className="pt-6">
              <h3 className="font-semibold mb-3">Información Importante</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>• Todas las donaciones son deducibles de impuestos según la ley aplicable</p>
                <p>• Recibirás un recibo oficial por correo electrónico para tus registros</p>
                <p>• Tus datos de pago están protegidos y encriptados</p>
                <p>• Para preguntas sobre donaciones, contacta a nuestra oficina al (123) 456-7890</p>
              </div>
            </CardContent>
          </Card>

          {/* Back to Home */}
          <div className="text-center mt-8">
            <Button variant="outline" asChild>
              <Link href="/">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Volver al Inicio
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
