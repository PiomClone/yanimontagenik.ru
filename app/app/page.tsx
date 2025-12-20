import { Star, Snowflake, Send, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function BioLinkPage() {
  const links = [
    {
      title: "Мой Telegram>>>",
      icon: Star,
      url: "https://t.me/yani_montagenik",
      primary: true,
      subtitle: null,
    },
    {
      title: "Мой ВКонтакте>>>",
      icon: Users,
      url: "https://vk.ru/club234696491",
      primary: true,
      subtitle: null,
    },
    {
      title: "Мой Instagram>>>",
      icon: null,
      url: "https://instagram.com/yani_montagenik/",
      primary: true,
      subtitle: null,
    },
    {
      title: "FBSL.RU",
      icon: Snowflake,
      url: "http://fbsl.ru",
      primary: false,
      subtitle: "FunBoardSchool",
    },
    {
      title: "TELEGRAM FBSL",
      icon: Send,
      url: "https://t.me/funboardschool",
      primary: false,
      subtitle: null,
    },
    {
      title: "ФЕДЕРАЦИЯ СНОУБОРДА САНКТ ПЕТЕРБУРГА",
      icon: Send,
      url: "https://t.me/spbrsf",
      primary: false,
      subtitle: null,
    },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted/20 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Profile Section */}
        <div className="flex flex-col items-center text-center mb-8">
          <Avatar className="h-24 w-24 mb-4 ring-4 ring-primary/20">
            <AvatarImage src="/assets/profile_image.jpg" alt="Yani_Montagenik" />
            <AvatarFallback className="text-2xl bg-primary text-primary-foreground">YM</AvatarFallback>
          </Avatar>

          <h1 className="text-2xl font-bold mb-2 text-balance">Yani_Montagenik</h1>

          <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
            сноуборд как способ жить
          </p>
        </div>

        {/* Divider */}
        <div className="my-6 flex items-center justify-center">
          <svg role="none" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" className="text-muted-foreground opacity-40">
            <path fill="currentColor" d="M29.952 15.584h0c-3.616-.224-7.2-.48-10.848-1.408-.064 0-.064-.032-.032-.096l3.168-4.992c.032-.064.032-.064 0-.032-1.408 1.44-2.784 2.816-4.384 4-.032.032-.096.032-.096-.032-1.024-3.616-1.344-7.296-1.632-10.944 0-.064 0-.064 0 0-.256 3.616-.608 7.232-1.536 10.784-.032.064-.064.064-.128.032-1.6-1.152-2.976-2.528-4.384-3.872-.032-.032-.032-.032 0 0 1.152 1.6 2.272 3.168 3.232 4.928.032.064.032.096-.032.128-3.712.992-7.456 1.312-11.232 1.568-.064 0-.064 0 0 0 3.776.32 7.552.64 11.36 1.76.032 0 .064.064.032.096l-3.616 4.48c-.032.032 0 .032.032 0 1.408-1.184 2.816-2.368 4.416-3.392.032 0 .096 0 .096.064 1.152 3.712 1.568 7.488 1.888 11.264 0 .064 0 .064.032 0 .192-3.808.448-7.616 1.44-11.392 0-.064.064-.064.096-.032l2.592 1.6c.832.512 1.632 1.088 2.432 1.664.032.032.032.032 0-.032-1.344-1.344-2.688-2.72-3.904-4.32-.032-.064-.032-.096.032-.096 1.28-.288 2.464-.608 3.648-.832 1.248-.224 2.496-.384 3.744-.544 1.184-.16 2.4-.224 3.584-.352z"></path>
          </svg>
        </div>

        {/* Text Block */}
        <div className="mb-6 text-center">
          <p className="text-sm text-muted-foreground">
            <strong>моя команда и сборная</strong> ‌может быть интересно)
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
              <a href={link.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3">
                <div className="flex flex-col items-center justify-center flex-1">
                  <div className="flex items-center gap-3">
                    {link.icon && <link.icon className="h-5 w-5" />}
                    <span>{link.title}</span>
                  </div>
                  {link.subtitle && (
                    <span className="text-sm opacity-80 mt-1">{link.subtitle}</span>
                  )}
                </div>
              </a>
            </Button>
          ))}
        </div>
      </div>
    </main>
  )
}
