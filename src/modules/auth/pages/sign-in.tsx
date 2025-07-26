// sign-in.tsx
"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import { useGetSignIn } from "@/modules/teacher-panel/hooks/queries"
import { LogIn } from "lucide-react"

export default function SignInPage() {
    const urlParams = new URLSearchParams(window.location.search);

    console.log(urlParams,"hfgfjkg")
// const code = urlParams.get('code');
  const handleHemisLogin = () => {
    // Token mavjudligini tekshirish (agar foydalanuvchi allaqachon login qilgan bo'lsa)
    const existingToken = localStorage.getItem("access_token")
    if (existingToken) {
      console.log("Existing token found, redirecting to dashboard")
      window.location.href = "/teacher-panel"
      return
    }

    
    
    // HEMIS login URL'ini to'g'ri sozlash
    const callbackUrl = `${window.location.origin}/auth/callback`
    const hemisUrl = `https://edu.asianuniversity.uz/teacher/hemis/login?callback=${encodeURIComponent(callbackUrl)}`

    console.log("Redirecting to HEMIS login:", hemisUrl)
    
    // HEMIS sahifasiga yo'naltirish
    window.location.href = hemisUrl
  }

  
    // const {data} = useGetSignIn({code})
    
    // console.log(data,"fdatatatata")
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold">Tizimga kirish</CardTitle>
          <CardDescription>HEMIS hisobingiz orqali tizimga kiring</CardDescription>
        </CardHeader>
        <CardContent>
          <Button onClick={handleHemisLogin} className="w-full" size="lg">
            <LogIn className="mr-2 h-4 w-4" />
            HEMIS orqali kirish
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}