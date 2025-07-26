"use client"

import { useState, useEffect, useContext, createContext } from "react"
import { NavLink, Outlet, useLocation } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Moon, Sun, Home, Calendar, User } from "lucide-react"

// Theme Context for Light/Dark Mode
const ThemeContext = createContext({
  theme: "light",
  toggleTheme: () => {},
})

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light")

  useEffect(() => {
    document.documentElement.classList.remove("light", "dark")
    document.documentElement.classList.add(theme)
    localStorage.setItem("theme", theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default function DashboardLayout() {
  const { theme, toggleTheme } = useContext(ThemeContext)
  const location = useLocation()

  const navItems = [
    { path: "/teacher-panel", label: "Dashboard", icon: Home },
    { path: "/teacher-panel/schedule", label: "Dars Jadvali", icon: Calendar },
    { path: "/teacher-panel/profile", label: "Profil", icon: User },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Sidebar */}
      <aside className="fixed top-0 left-0 w-64 h-full bg-card border-r">
        <div className="p-4">
          <h1 className="text-2xl font-bold">Teacher Panel</h1>
        </div>
        <nav className="mt-4">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center p-4 hover:bg-accent ${
                  isActive ? "bg-accent font-semibold" : ""
                }`
              }
            >
              <item.icon className="w-5 h-5 mr-2" />
              {item.label}
            </NavLink>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <div className="ml-64">
        {/* Header */}
        <header className="bg-card border-b p-4 flex justify-between items-center">
          <h2 className="text-xl font-semibold">
            {navItems.find((item) => item.path === location.pathname)?.label ||
              "Dashboard"}
          </h2>
          <Button variant="ghost" size="icon" onClick={toggleTheme}>
            {theme === "light" ? (
              <Moon className="h-5 w-5" />
            ) : (
              <Sun className="h-5 w-5" />
            )}
          </Button>
        </header>

        {/* Content */}
        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </div>
  )
}