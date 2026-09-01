"use client"

import type React from "react"
import { useState } from "react"
import Image from "next/image"
import { motion, useReducedMotion } from "framer-motion"
import {
  BookOpen,
  Calendar,
  Check,
  Copy,
  ExternalLink,
  FileText,
  Globe,
  Instagram,
  Linkedin,
  Mail,
  Music,
  Newspaper,
  Share2,
  ShoppingBag,
  Users,
  Youtube,
} from "lucide-react"
import DiscordIcon from "@/components/icons/discord-icon"
import { ThemeToggle } from "@/components/theme-toggle"
import { LINKS, POLICY_LINKS, SITE_TAGLINE, SITE_URL, type LinkItem } from "@/lib/site"

function SpotifyIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
    </svg>
  )
}

const ICONS: Record<LinkItem["icon"], (p: { className?: string }) => React.ReactNode> = {
  globe: (p) => <Globe {...p} aria-hidden="true" />,
  discord: (p) => <DiscordIcon className={p.className} title="" aria-hidden="true" />,
  instagram: (p) => <Instagram {...p} aria-hidden="true" />,
  linkedin: (p) => <Linkedin {...p} aria-hidden="true" />,
  youtube: (p) => <Youtube {...p} aria-hidden="true" />,
  music: (p) => <Music {...p} aria-hidden="true" />,
  spotify: (p) => <SpotifyIcon className={p.className} />,
  "shopping-bag": (p) => <ShoppingBag {...p} aria-hidden="true" />,
  calendar: (p) => <Calendar {...p} aria-hidden="true" />,
  "book-open": (p) => <BookOpen {...p} aria-hidden="true" />,
  users: (p) => <Users {...p} aria-hidden="true" />,
  mail: (p) => <Mail {...p} aria-hidden="true" />,
  "file-text": (p) => <FileText {...p} aria-hidden="true" />,
  newspaper: (p) => <Newspaper {...p} aria-hidden="true" />,
}

export default function LinksClient() {
  const prefersReducedMotion = useReducedMotion()
  const [copied, setCopied] = useState(false)

  const shareUrl = SITE_URL
  const displayUrl = "link.drinterested.org"

  const handleShare = async () => {
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({ title: "Dr. Interested", url: shareUrl })
        return
      } catch {
        /* user cancelled — fall through to copy */
      }
    }
    copyLink()
  }

  const copyLink = () => {
    if (typeof navigator === "undefined" || !navigator.clipboard) return
    navigator.clipboard.writeText(shareUrl).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  const fadeIn = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
  }
  const stagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: prefersReducedMotion ? 0 : 0.06 } },
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f5f1eb] to-white px-4 py-10 text-[#405862] dark:from-[#1c282d] dark:to-[#121619] dark:text-[#e8eef0]">
      <div className="fixed right-4 top-4 z-10">
        <ThemeToggle />
      </div>

      <main className="mx-auto max-w-md">
        <motion.header
          className="mb-8 flex flex-col items-center text-center"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <div className="relative mb-4 h-24 w-24">
            <Image
              src="/android-chrome-512x512.png"
              alt="Dr. Interested logo"
              fill
              sizes="96px"
              className="rounded-full border-2 border-[#4ecdc4] bg-white object-contain p-1 dark:bg-[#1c282d]"
              priority
            />
          </div>
          <h1 className="text-2xl font-bold">
            Dr. <span className="text-[#4ecdc4]">Interested</span>
          </h1>
          <p className="mt-2 max-w-xs text-sm text-[#405862]/80 dark:text-[#e8eef0]/70">{SITE_TAGLINE}</p>

          <div className="mt-3 flex items-center gap-2 rounded-full bg-[#f0ebe3] px-3 py-1.5 text-sm dark:bg-white/10">
            <span className="text-[#405862]/70 dark:text-[#e8eef0]/70">{displayUrl}</span>
            <button
              onClick={copyLink}
              className="rounded text-[#4ecdc4] transition-colors hover:text-[#3dbdb5] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4ecdc4]"
              aria-label={copied ? "Link copied" : "Copy link to clipboard"}
            >
              {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
            </button>
            <button
              onClick={handleShare}
              className="rounded text-[#4ecdc4] transition-colors hover:text-[#3dbdb5] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4ecdc4]"
              aria-label="Share Dr. Interested"
            >
              <Share2 className="h-4 w-4" />
            </button>
          </div>
        </motion.header>

        <motion.nav
          aria-label="Dr. Interested links"
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          <ul className="space-y-3">
            {LINKS.map((link) => {
              const Icon = ICONS[link.icon]
              const external = link.url.startsWith("http")
              return (
                <motion.li key={link.url} variants={fadeIn}>
                  <a
                    href={link.url}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                    className={`flex w-full items-center gap-3 rounded-lg px-4 py-3 text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#405862] motion-reduce:transform-none dark:focus-visible:outline-white ${link.color}`}
                  >
                    <Icon className="h-5 w-5 shrink-0" />
                    <span className="flex-1">
                      <span className="block font-medium leading-tight">{link.title}</span>
                      {link.description && (
                        <span className="block text-xs leading-tight text-white/80">{link.description}</span>
                      )}
                    </span>
                    {external && <ExternalLink className="h-4 w-4 shrink-0 opacity-70" aria-hidden="true" />}
                  </a>
                </motion.li>
              )
            })}
          </ul>
        </motion.nav>

        <motion.footer
          className="mt-10 text-center text-sm text-[#405862]/60 dark:text-[#e8eef0]/50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: prefersReducedMotion ? 0 : 0.6, duration: 0.5 }}
        >
          <p>© {new Date().getFullYear()} Dr. Interested</p>
          <ul className="mt-2 flex flex-wrap justify-center gap-x-3 gap-y-1">
            {POLICY_LINKS.map((p) => (
              <li key={p.url}>
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded transition-colors hover:text-[#4ecdc4] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4ecdc4]"
                >
                  {p.label}
                </a>
              </li>
            ))}
          </ul>
        </motion.footer>
      </main>
    </div>
  )
}
