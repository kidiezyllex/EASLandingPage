"use client"

import { Icon } from "@/components/ui/mdi-icon"
import { mdiAccountPlus, mdiMagnify, mdiCheckCircle, mdiArrowRight, mdiListBoxOutline, mdiLightbulbOn } from "@mdi/js"
import { motion } from "framer-motion"

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, delay: i * 0.15, ease: [0.25, 0.46, 0.45, 0.94] },
    }),
}

const steps = [
    {
        step: 1,
        icon: mdiMagnify,
        title: "Khảo sát & Tư vấn",
        description: "Phân tích nhu cầu kỹ thuật, khảo sát thực địa để đưa ra giải pháp tối ưu và tiết kiệm nhất.",
        color: "accent",
        details: ["Khảo sát thực địa", "Phân tích kỹ thuật", "Tư vấn tối ưu"],
    },
    {
        step: 2,
        icon: mdiLightbulbOn,
        title: "Giải pháp & Thiết kế",
        description: "Lên phương án kỹ thuật chi tiết, lựa chọn thiết bị từ các thương hiệu hàng đầu thế giới.",
        color: "secondary",
        details: ["Thiết kế trọn gói", "Lựa chọn thiết bị", "Phương án tối ưu"],
    },
    {
        step: 3,
        icon: mdiCheckCircle,
        title: "Thi công & Bảo trì",
        description: "Thi công lắp đặt chuyên nghiệp, thí nghiệm kiểm định và bảo trì định kỳ trọn vòng đời.",
        color: "primary",
        details: ["Lắp đặt an toàn", "Thí nghiệm 220kV", "Bảo trì trọn đời"],
    },
]

export function HowItWorksSection() {
    return (
        <section className="relative overflow-hidden bg-teal-950 py-20">
            {/* SVG Background */}
            <div className="absolute inset-0 pointer-events-none opacity-10">
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 1440 560">
                    <g fill="none">
                        <path d="M787.5 237.5L1262.5 237.5" strokeWidth="4.17" stroke="rgba(172, 206, 166, 1)"></path>
                        <path d="M781.25 237.5 a6.25 6.25 0 1 0 12.5 0 a6.25 6.25 0 1 0 -12.5 0zM1256.25 237.5 a6.25 6.25 0 1 0 12.5 0 a6.25 6.25 0 1 0 -12.5 0z" fill="rgba(172, 206, 166, 1)"></path>
                        <path d="M312.5 212.5L662.5 562.5L787.5 562.5" strokeWidth="4.17" stroke="rgba(172, 206, 166, 1)"></path>
                        <path d="M306.25 212.5 a6.25 6.25 0 1 0 12.5 0 a6.25 6.25 0 1 0 -12.5 0zM781.25 562.5 a6.25 6.25 0 1 0 12.5 0 a6.25 6.25 0 1 0 -12.5 0z" fill="rgba(172, 206, 166, 1)"></path>
                        <path d="M787.5 487.5L837.5 487.5L912.5 562.5L1012.5 562.5L1112.5 462.5L1112.5 312.5" strokeWidth="4.17" stroke="rgba(172, 206, 166, 1)"></path>
                        <path d="M781.25 487.5 a6.25 6.25 0 1 0 12.5 0 a6.25 6.25 0 1 0 -12.5 0zM1106.25 312.5 a6.25 6.25 0 1 0 12.5 0 a6.25 6.25 0 1 0 -12.5 0z" fill="rgba(172, 206, 166, 1)"></path>
                        <path d="M162.5 437.5L162.5 337.5L12.5 187.5L12.5 12.5" strokeWidth="4.17" stroke="rgba(172, 206, 166, 1)"></path>
                        <path d="M156.25 437.5 a6.25 6.25 0 1 0 12.5 0 a6.25 6.25 0 1 0 -12.5 0zM6.25 12.5 a6.25 6.25 0 1 0 12.5 0 a6.25 6.25 0 1 0 -12.5 0z" fill="rgba(172, 206, 166, 1)"></path>
                        <path d="M787.5 162.5L862.5 87.5L962.5 87.5L1037.5 12.5L1262.5 12.5" strokeWidth="4.17" stroke="rgba(172, 206, 166, 1)"></path>
                        <path d="M781.25 162.5 a6.25 6.25 0 1 0 12.5 0 a6.25 6.25 0 1 0 -12.5 0zM1256.25 12.5 a6.25 6.25 0 1 0 12.5 0 a6.25 6.25 0 1 0 -12.5 0z" fill="rgba(172, 206, 166, 1)"></path>
                        <path d="M212.5 87.5L162.5 37.5L137.5 37.5L112.5 12.5L37.5 12.5" strokeWidth="4.17" stroke="rgba(172, 206, 166, 1)"></path>
                        <path d="M206.25 87.5 a6.25 6.25 0 1 0 12.5 0 a6.25 6.25 0 1 0 -12.5 0zM31.25 12.5 a6.25 6.25 0 1 0 12.5 0 a6.25 6.25 0 1 0 -12.5 0z" fill="rgba(172, 206, 166, 1)"></path>
                        <path d="M1187.5 562.5L1262.5 487.5L1262.5 337.5L1187.5 262.5L1012.5 262.5" strokeWidth="4.17" stroke="rgba(172, 206, 166, 1)"></path>
                        <path d="M1181.25 562.5 a6.25 6.25 0 1 0 12.5 0 a6.25 6.25 0 1 0 -12.5 0zM1006.25 262.5 a6.25 6.25 0 1 0 12.5 0 a6.25 6.25 0 1 0 -12.5 0z" fill="rgba(172, 206, 166, 1)"></path>
                        <path d="M1212.5 387.5L1112.5 287.5L937.5 287.5L912.5 262.5L762.5 262.5L737.5 287.5" strokeWidth="4.17" stroke="rgba(172, 206, 166, 1)"></path>
                        <path d="M1206.25 387.5 a6.25 6.25 0 1 0 12.5 0 a6.25 6.25 0 1 0 -12.5 0zM731.25 287.5 a6.25 6.25 0 1 0 12.5 0 a6.25 6.25 0 1 0 -12.5 0z" fill="rgba(172, 206, 166, 1)"></path>
                        <path d="M887.5 162.5L887.5 212.5" strokeWidth="4.17" stroke="rgba(172, 206, 166, 1)"></path>
                        <path d="M881.25 162.5 a6.25 6.25 0 1 0 12.5 0 a6.25 6.25 0 1 0 -12.5 0zM881.25 212.5 a6.25 6.25 0 1 0 12.5 0 a6.25 6.25 0 1 0 -12.5 0z" fill="rgba(172, 206, 166, 1)"></path>
                        <path d="M212.5 187.5L262.5 137.5L412.5 137.5L687.5 412.5" strokeWidth="4.17" stroke="rgba(172, 206, 166, 1)"></path>
                        <path d="M206.25 187.5 a6.25 6.25 0 1 0 12.5 0 a6.25 6.25 0 1 0 -12.5 0zM681.25 412.5 a6.25 6.25 0 1 0 12.5 0 a6.25 6.25 0 1 0 -12.5 0z" fill="rgba(172, 206, 166, 1)"></path>
                        <path d="M812.5 212.5L862.5 212.5" strokeWidth="4.17" stroke="rgba(172, 206, 166, 1)"></path>
                        <path d="M806.25 212.5 a6.25 6.25 0 1 0 12.5 0 a6.25 6.25 0 1 0 -12.5 0zM856.25 212.5 a6.25 6.25 0 1 0 12.5 0 a6.25 6.25 0 1 0 -12.5 0z" fill="rgba(172, 206, 166, 1)"></path>
                        <path d="M462.5 387.5L262.5 387.5L37.5 162.5L37.5 112.5" strokeWidth="4.17" stroke="rgba(172, 206, 166, 1)"></path>
                        <path d="M456.25 387.5 a6.25 6.25 0 1 0 12.5 0 a6.25 6.25 0 1 0 -12.5 0zM31.25 112.5 a6.25 6.25 0 1 0 12.5 0 a6.25 6.25 0 1 0 -12.5 0z" fill="rgba(172, 206, 166, 1)"></path>
                        <path d="M37.5 437.5L62.5 437.5L87.5 412.5L87.5 312.5L37.5 262.5L12.5 262.5" strokeWidth="4.17" stroke="rgba(172, 206, 166, 1)"></path>
                        <path d="M31.25 437.5 a6.25 6.25 0 1 0 12.5 0 a6.25 6.25 0 1 0 -12.5 0zM6.25 262.5 a6.25 6.25 0 1 0 12.5 0 a6.25 6.25 0 1 0 -12.5 0z" fill="rgba(172, 206, 166, 1)"></path>
                        <path d="M587.5 187.5L487.5 187.5L412.5 112.5L387.5 112.5L287.5 12.5L137.5 12.5" strokeWidth="4.17" stroke="rgba(172, 206, 166, 1)"></path>
                        <path d="M581.25 187.5 a6.25 6.25 0 1 0 12.5 0 a6.25 6.25 0 1 0 -12.5 0zM131.25 12.5 a6.25 6.25 0 1 0 12.5 0 a6.25 6.25 0 1 0 -12.5 0z" fill="rgba(172, 206, 166, 1)"></path>
                        <path d="M437.5 237.5L412.5 262.5L412.5 287.5L662.5 537.5L837.5 537.5" strokeWidth="4.17" stroke="rgba(172, 206, 166, 1)"></path>
                        <path d="M431.25 237.5 a6.25 6.25 0 1 0 12.5 0 a6.25 6.25 0 1 0 -12.5 0zM831.25 537.5 a6.25 6.25 0 1 0 12.5 0 a6.25 6.25 0 1 0 -12.5 0z" fill="rgba(172, 206, 166, 1)"></path>
                        <path d="M837.5 37.5L787.5 87.5L387.5 87.5L362.5 62.5" strokeWidth="4.17" stroke="rgba(172, 206, 166, 1)"></path>
                        <path d="M831.25 37.5 a6.25 6.25 0 1 0 12.5 0 a6.25 6.25 0 1 0 -12.5 0zM356.25 62.5 a6.25 6.25 0 1 0 12.5 0 a6.25 6.25 0 1 0 -12.5 0z" fill="rgba(172, 206, 166, 1)"></path>
                        <path d="M1237.5 87.5L1037.5 87.5L937.5 187.5L912.5 187.5" strokeWidth="4.17" stroke="rgba(172, 206, 166, 1)"></path>
                        <path d="M1231.25 87.5 a6.25 6.25 0 1 0 12.5 0 a6.25 6.25 0 1 0 -12.5 0zM906.25 187.5 a6.25 6.25 0 1 0 12.5 0 a6.25 6.25 0 1 0 -12.5 0z" fill="rgba(172, 206, 166, 1)"></path>
                        <path d="M87.5 462.5L337.5 462.5L437.5 562.5L562.5 562.5" strokeWidth="4.17" stroke="rgba(172, 206, 166, 1)"></path>
                        <path d="M81.25 462.5 a6.25 6.25 0 1 0 12.5 0 a6.25 6.25 0 1 0 -12.5 0zM556.25 562.5 a6.25 6.25 0 1 0 12.5 0 a6.25 6.25 0 1 0 -12.5 0z" fill="rgba(172, 206, 166, 1)"></path>
                        <path d="M237.5 212.5L187.5 262.5L187.5 287.5L262.5 362.5L287.5 362.5L362.5 287.5" strokeWidth="4.17" stroke="rgba(172, 206, 166, 1)"></path>
                        <path d="M231.25 212.5 a6.25 6.25 0 1 0 12.5 0 a6.25 6.25 0 1 0 -12.5 0zM356.25 287.5 a6.25 6.25 0 1 0 12.5 0 a6.25 6.25 0 1 0 -12.5 0z" fill="rgba(172, 206, 166, 1)"></path>
                        <path d="M587.5 137.5L762.5 137.5" strokeWidth="4.17" stroke="rgba(172, 206, 166, 1)"></path>
                        <path d="M581.25 137.5 a6.25 6.25 0 1 0 12.5 0 a6.25 6.25 0 1 0 -12.5 0zM756.25 137.5 a6.25 6.25 0 1 0 12.5 0 a6.25 6.25 0 1 0 -12.5 0z" fill="rgba(172, 206, 166, 1)"></path>
                        <path d="M62.5 537.5L12.5 487.5L12.5 287.5" strokeWidth="4.17" stroke="rgba(172, 206, 166, 1)"></path>
                        <path d="M56.25 537.5 a6.25 6.25 0 1 0 12.5 0 a6.25 6.25 0 1 0 -12.5 0zM6.25 287.5 a6.25 6.25 0 1 0 12.5 0 a6.25 6.25 0 1 0 -12.5 0z" fill="rgba(172, 206, 166, 1)"></path>
                        <path d="M887.5 37.5L812.5 112.5L787.5 112.5" strokeWidth="4.17" stroke="rgba(172, 206, 166, 1)"></path>
                        <path d="M881.25 37.5 a6.25 6.25 0 1 0 12.5 0 a6.25 6.26 0 1 0 -12.5 0zM781.25 112.5 a6.25 6.25 0 1 0 12.5 0 a6.25 6.25 0 1 0 -12.5 0z" fill="rgba(172, 206, 166, 1)"></path>
                    </g>
                </svg>
            </div>
            <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
                <motion.div
                    className="mx-auto max-w-3xl text-center flex flex-col gap-2"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-60px" }}
                >
                    <motion.div custom={0} variants={fadeUp} className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-primary shadow-lg shadow-secobg-secondary/25">
                        <Icon path={mdiListBoxOutline} size={1} />
                    </motion.div>
                    <motion.p custom={1} variants={fadeUp} className="text-xl font-semibold uppercase tracking-widest text-secondary/80">
                        Cách thức hoạt động
                    </motion.p>
                    <motion.h2 custom={2} variants={fadeUp} className="text-balance text-3xl font-bold tracking-tight text-secondary/90 sm:text-4xl lg:text-5xl">
                        3 bước đơn giản để bắt đầu
                    </motion.h2>
                    <motion.p custom={3} variants={fadeUp} className="text-xl leading-relaxed text-secondary/80">
                        Trải nghiệm mượt mà từ lúc đăng ký đến khi bước vào sân.
                    </motion.p>
                </motion.div>

                {/* Steps - horizontal timeline */}
                <div className="relative mt-16">
                    {/* Connecting line - desktop only */}
                    <div className="absolute left-[16.67%] right-[16.67%] top-[52px] hidden h-px lg:block">
                        <div className="h-full w-full bg-gradient-to-r from-accent/40 via-secondary/40 to-primary/40" />
                        <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/40" />
                    </div>

                    <motion.div
                        className="grid gap-8 lg:grid-cols-3"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                    >
                        {steps.map((step, i) => (
                            <motion.div
                                key={step.step}
                                custom={i}
                                variants={fadeUp}
                                className="group relative flex h-full flex-col items-center text-center"
                            >
                                {/* Step number circle */}
                                <div className="relative mb-8">
                                    {/* Outer ring */}
                                    <div
                                        className={`flex h-[104px] w-[104px] items-center justify-center rounded-full transition-transform duration-500 group-hover:scale-105 bg-accent/10 border-2 border-accent/30`}
                                    >
                                        {/* Inner circle */}
                                        <div
                                            className={`flex h-20 w-20 flex-col items-center justify-center rounded-full text-secondary shadow-lg transition-transform duration-300 group-hover:scale-110 bg-accent shadow-accent/40`}
                                        >
                                            <span className="text-sm font-semibold uppercase tracking-wider">
                                                Bước
                                            </span>
                                            <span className="text-2xl font-bold leading-none">
                                                {step.step}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Content card */}
                                <div className="flex w-full flex-1 flex-col rounded-2xl border bg-card p-4 transition-all duration-300 border-accent/40 shadow-2xl shadow-accent/40">
                                    <div className="mb-3 flex items-center justify-center gap-2">
                                        <Icon path={step.icon} size={0.8} className="text-primary" />
                                        <h3 className="text-xl font-semibold text-primary">
                                            {step.title}
                                        </h3>
                                    </div>

                                    <p className="text-base leading-relaxed text-teal-950">
                                        {step.description}
                                    </p>

                                    {/* Detail chips */}
                                    <div className="mt-4 flex flex-wrap justify-center gap-2">
                                        {step.details.map((detail) => (
                                            <span
                                                key={detail}
                                                className="inline-flex items-center gap-1 rounded-full bg-accent/20 px-2.5 py-0.5 text-sm font-medium text-primary"
                                            >
                                                <Icon path={mdiCheckCircle} size={0.6} />
                                                {detail}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
