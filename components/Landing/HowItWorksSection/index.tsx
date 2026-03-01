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
            <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
                <motion.div
                    className="mx-auto max-w-3xl text-center flex flex-col gap-2"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
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
                <div className="relative mt-20">
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
