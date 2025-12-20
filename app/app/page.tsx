import { Instagram, Youtube, Send, Mail, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function BioLinkPage() {
  const links = [
    {
      title: "Instagram",
      icon: Instagram,
      url: "#",
      primary: true,
    },
    {
      title: "YouTube",
      icon: Youtube,
      url: "#",
      primary: true,
    },
    {
      title: "Telegram",
      icon: Send,
      url: "#",
      primary: false,
    },
    {
      title: "Портфолио",
      icon: null,
      url: "#",
      primary: false,
    },
    {
      title: "Связаться со мной",
      icon: Mail,
      url: "#",
      primary: false,
    },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted/20 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Profile Section */}
        <div className="flex flex-col items-center text-center mb-8">
          <Avatar className="h-24 w-24 mb-4 ring-4 ring-primary/20">
            <AvatarImage src="/yanimontagenik.ru/assets/profile_image.jpg" alt="Yani_Montagenik" />
            <AvatarFallback className="text-2xl bg-primary text-primary-foreground">YM</AvatarFallback>
          </Avatar>

          <h1 className="text-2xl font-bold mb-2 text-balance">Yani_Montagenik</h1>

          <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
            сноуборд как способ жить
          </p>
        </div>

        {/* Links Section */}
        <div className="space-y-3">
          {links.map((link, index) => (
            <Button
              key={index}
              variant={link.primary ? "default" : "outline"}
              size="lg"
              className="w-full h-auto py-4 text-base font-medium hover:scale-[1.02] transition-transform"
              asChild
            >
              <a href={link.url} className="flex items-center justify-center gap-3">
                {link.icon && <link.icon className="h-5 w-5" />}
                {link.title}
              </a>
            </Button>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-8 flex justify-center gap-4">
          <Button variant="ghost" size="icon" className="h-10 w-10 rounded-full" asChild>
            <a href="mailto:contact@example.com" aria-label="Email">
              <Mail className="h-5 w-5" />
            </a>
          </Button>

          <Button variant="ghost" size="icon" className="h-10 w-10 rounded-full" asChild>
            <a href="tel:+1234567890" aria-label="Phone">
              <Phone className="h-5 w-5" />
            </a>
          </Button>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center">
          <p className="text-xs text-muted-foreground">© 2025 Все права защищены</p>
        </div>
      </div>
    </main>
  )
}
