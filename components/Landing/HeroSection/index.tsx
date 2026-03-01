"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Icon } from "@/components/ui/mdi-icon"
import { mdiArrowRight, mdiPlay, mdiTrendingUp, mdiTools, mdiFlask, mdiLightningBolt } from "@mdi/js"
import { motion } from "framer-motion"
import Link from "next/link"

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, delay: i * 0.15, ease: [0.25, 0.46, 0.45, 0.94] },
    }),
}

const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.8, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
    },
}

const statsStagger = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay: 0.8 + i * 0.1, ease: "easeOut" },
    }),
}

export function HeroSection() {
    return (
        <section className="relative min-h-screen overflow-hidden">
            {/* Background image */}
            <Image
                src="/images/automation-hero.png"
                alt="Electrical Automation Hero"
                fill
                className="object-cover"
                priority
                aria-hidden="true"
            />
            {/* Light glassmorphism overlay for text contrast */}
            <div className="absolute inset-0 bg-[#E6E6E6]/40 backdrop-blur-[2px]" />
            {/* Subtle blue/teal tint overlay matching brand */}
            <div className="absolute inset-0 bg-primary/5" />

            {/* SVG decorative elements */}
            <svg className="pointer-events-none absolute inset-0 h-full w-full" aria-hidden="true">
                <defs>
                    <pattern id="hero-grid" width="60" height="60" patternUnits="userSpaceOnUse">
                        <path d="M 60 0 L 0 0 0 60" fill="none" className="stroke-accent/10" strokeWidth="1" />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#hero-grid)" />
            </svg>

            {/* Bottom fade to white */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />

            <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-4 py-16 lg:px-8">
                <div className="w-full flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:gap-8">
                    {/* Left: text content */}
                    <motion.div
                        className="flex flex-1 flex-col items-center text-center lg:items-start lg:text-left"
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.div custom={0} variants={fadeUp}>
                            <Badge variant="outline" className="mb-6 border-primary/20 bg-primary/5 text-primary font-bold tracking-wider px-4 py-1.5 uppercase">
                                Giải Pháp Tự Động Điện EAS
                            </Badge>
                        </motion.div>

                        <motion.h1
                            custom={1}
                            variants={fadeUp}
                            className="max-w-3xl text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-7xl flex flex-col gap-2"
                        >
                            <span className="leading-tight">
                                An Toàn – Hiệu Quả
                            </span>
                            <p className="text-primary lg:text-5xl">
                                TRONG TỰ ĐỘNG HÓA & THÍ NGHIỆM
                            </p>
                        </motion.h1>

                        <motion.p
                            custom={2}
                            variants={fadeUp}
                            className="mt-8 max-w-2xl text-lg leading-relaxed text-slate-700 lg:text-xl font-medium"
                        >
                            Cung cấp thiết bị điện công nghiệp, giải pháp tự động hóa và dịch vụ thí nghiệm trạm biến áp đến 220kV.
                            Đối tác chính thức của Carlo Gavazzi, Shinko, RTA, DK & Sheler.
                        </motion.p>

                        <motion.div
                            custom={3}
                            variants={fadeUp}
                            className="mt-10 flex flex-col items-center gap-5 sm:flex-row"
                        >
                            <Button size="xl" className="shadow-xl shadow-primary/20 px-8" asChild>
                                <Link href="#equipment">
                                    <Icon path={mdiTools} size={0.8} />
                                    Xem Thiết Bị
                                </Link>
                            </Button>
                            <Button variant="outline" size="xl" asChild className="border-slate-200 bg-[#E6E6E6]/50 text-slate-900 hover:bg-[#E6E6E6] hover:text-primary backdrop-blur-md shadow-lg px-8">
                                <Link href="#lab-work">
                                    <Icon path={mdiFlask} size={0.8} />
                                    Dịch Vụ Thí Nghiệm
                                </Link>
                            </Button>
                        </motion.div>
                    </motion.div>

                    {/* Right: floating stat card */}
                    <motion.div
                        className="relative"
                        variants={scaleIn}
                        initial="hidden"
                        animate="visible"
                    >
                        <div className="relative overflow-hidden rounded-2xl border border-white/40 bg-[#E6E6E6]/60 p-6 shadow-2xl backdrop-blur-xl w-full max-w-[450px]">
                            <div className="mb-6 flex items-center gap-4">
                                <div className="flex h-14 w-14 text-white items-center justify-center rounded-2xl bg-primary shadow-lg shadow-primary/30">
                                    <Icon path={mdiLightningBolt} size={1.4} />
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-slate-500 uppercase tracking-widest">Năng năng thí nghiệm</p>
                                    <p className="text-3xl font-bold text-slate-900">Lên đến 220kV</p>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                                    <motion.div
                                        className="h-full bg-primary"
                                        initial={{ width: 0 }}
                                        animate={{ width: "95%" }}
                                        transition={{ duration: 1.5, delay: 1 }}
                                    />
                                </div>
                                <p className="text-xs text-slate-400 font-medium italic">Thí nghiệm định kỳ & kiểm định thiết bị điện cao thế chuyên nghiệp.</p>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Stats strip */}
                <motion.div
                    className="mt-20 grid w-full grid-cols-2 gap-8 lg:grid-cols-4"
                    initial="hidden"
                    animate="visible"
                >
                    {[
                        { value: "220kV", label: "Năng lực thí nghiệm" },
                        { value: "500+", label: "Công trình" },
                        { value: "10+", label: "Năm kinh nghiệm" },
                        { value: "100%", label: "An toàn - Hiệu quả" },
                    ].map((stat, i) => (
                        <motion.div key={stat.label} custom={i} variants={statsStagger} className="flex flex-col items-center justify-center rounded-2xl border border-white/20 bg-[#E6E6E6]/40 p-6 shadow-xl backdrop-blur-md hover:bg-[#E6E6E6]/60 transition-colors">
                            <span className="text-3xl font-extrabold text-primary lg:text-4xl">
                                {stat.value}
                            </span>
                            <span className="mt-1 text-sm text-slate-600 font-bold uppercase tracking-wider">{stat.label}</span>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
