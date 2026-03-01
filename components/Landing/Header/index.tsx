"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Icon } from "@/components/ui/mdi-icon"
import { mdiMenu, mdiClose, mdiEmail, mdiClock, mdiPhone, mdiTools, mdiFlask, mdiForum } from "@mdi/js"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import Image from "next/image"

const navLinks = [
    { label: "Thiết bị", href: "#equipment", icon: mdiTools },
    { label: "Công việc thí nghiệm", href: "#lab-work", icon: mdiFlask },
    { label: "Trao đổi công việc", href: "#work-discussion", icon: mdiForum },
]

const topContactLinks = [
    { icon: mdiEmail, label: "LIÊN HỆ" },
    { icon: mdiClock, label: "08:00 - 17:00" },
    { icon: mdiPhone, label: "+84 963.968.079" },
]

export function Header() {
    const [mobileOpen, setMobileOpen] = useState(false)

    return (
        <motion.header
            className="fixed top-0 z-50 w-full"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
            {/* Top Bar */}
            <div className="bg-primary text-white/90 py-2 border-b border-white/5 hidden md:block">
                <div className="mx-auto flex max-w-8xl items-center justify-end px-4 lg:px-8">
                    <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.1em]">
                        {topContactLinks.map((item, idx) => (
                            <React.Fragment key={idx}>
                                <div className="flex items-center gap-1 group cursor-pointer hover:text-white transition-colors transition-duration-100">
                                    <Icon path={item.icon} size={0.8} className="text-white/70 group-hover:text-secondary" />
                                    <span>
                                        {item.label}
                                    </span>
                                </div>
                                {idx < topContactLinks.length - 1 && (
                                    <div className="h-3.5 w-[1px] bg-secondary/50" />
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </div>

            {/* Main Navigation */}
            <div className="border-b border-border/40 bg-background/80 backdrop-blur-xl">
                <div className="mx-auto flex h-16 max-w-8xl items-center justify-between px-4 lg:px-8">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <Image
                            src="/images/logo.webp"
                            alt="Logo"
                            width={500}
                            height={500}
                            className="h-12 w-auto object-contain"
                        />
                        <Image
                            src="/images/primary-logo.svg"
                            alt="Logo"
                            width={500}
                            height={500}
                            className="h-8 w-auto object-contain"
                        />
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden items-center gap-1 md:flex">
                        {navLinks.map((link) => (
                            <Button key={link.href} variant="ghost" asChild className="gap-2 !bg-transparent">
                                <Link href={link.href}>
                                    <Icon path={link.icon} size={0.8} />
                                    <span>{link.label}</span>
                                </Link>
                            </Button>
                        ))}
                    </nav>

                    {/* CTA + Mobile toggle */}
                    <div className="flex items-center gap-3">
                        <Button variant="default" asChild>
                            <Link href="#cta">Đăng nhập</Link>
                        </Button>
                        <Button
                            variant="ghost-badminton"
                            size="sm"
                            className="md:hidden"
                            onClick={() => setMobileOpen(!mobileOpen)}
                            aria-label={mobileOpen ? "Đóng menu" : "Mở menu"}
                        >
                            {mobileOpen ? <Icon path={mdiClose} size={0.8} /> : <Icon path={mdiMenu} size={0.8} />}
                        </Button>
                    </div>
                </div>

                {/* Mobile Nav */}
                <AnimatePresence>
                    {mobileOpen && (
                        <motion.nav
                            className="border-t border-border/40 bg-background px-4 py-4 md:hidden"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                            <div className="flex flex-col gap-1">
                                {navLinks.map((link) => (
                                    <Button
                                        key={link.href}
                                        variant="ghost-badminton"
                                        className="justify-start hover:text-primary gap-2"
                                        asChild
                                        onClick={() => setMobileOpen(false)}
                                    >
                                        <Link href={link.href}>
                                            <Icon path={link.icon} size={0.8} />
                                            <span>{link.label}</span>
                                        </Link>
                                    </Button>
                                ))}
                                <Button variant="badminton" className="mt-2 bg-primary hover:bg-secondary text-secondary" asChild>
                                    <Link href="#cta" onClick={() => setMobileOpen(false)}>Bắt đầu ngay</Link>
                                </Button>
                            </div>
                        </motion.nav>
                    )}
                </AnimatePresence>
            </div>
        </motion.header>
    )
}
