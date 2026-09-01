"use client"
import { useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Switch } from "@/components/ui/switch"

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  const isDark = mounted && resolvedTheme === "dark"

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark")
  }

  return (
    <div className="flex items-center space-x-2 rounded-full bg-white/70 px-2.5 py-1.5 shadow-sm backdrop-blur dark:bg-white/10">
      <Sun
        className={`h-[1.1rem] w-[1.1rem] transition-all ${
          isDark ? "scale-75 text-[#A1A1AA]" : "scale-100 text-[#405862]"
        }`}
        aria-hidden="true"
      />
      <Switch
        checked={isDark}
        onCheckedChange={toggleTheme}
        aria-label="Toggle dark mode"
        className="hover:scale-110"
      />
      <Moon
        className={`h-[1.1rem] w-[1.1rem] transition-all ${
          isDark ? "scale-100 text-[#e8eef0]" : "scale-75 text-[#A1A1AA]"
        }`}
        aria-hidden="true"
      />
    </div>
  )
}
