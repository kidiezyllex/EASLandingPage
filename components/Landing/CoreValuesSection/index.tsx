"use client"

import Image from "next/image"
import { Icon } from "@/components/ui/mdi-icon"
import {
    mdiMapMarker,
    mdiCalendar,
    mdiAccountGroup,
    mdiTrendingUp,
    mdiChartBar,
    mdiFlash,
    mdiShieldCheck,
    mdiLightbulbOn,
    mdiHandshakeOutline,
} from "@mdi/js"
import { motion } from "framer-motion"

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] },
    }),
}

const scaleIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: (i: number) => ({
        opacity: 1,
        scale: 1,
        transition: { duration: 0.6, delay: i * 0.15, ease: [0.25, 0.46, 0.45, 0.94] },
    }),
}

const coreValues = [
    {
        icon: mdiShieldCheck,
        title: "Chất lượng",
        description: "Phương châm 'An toàn – Hiệu quả' dẫn lối mọi hoạt động, khẳng định uy tín qua từng dự án.",
        accent: "text-primary",
        bg: "bg-primary",
    },
    {
        icon: mdiAccountGroup,
        title: "Chuyên nghiệp",
        description: "Đội ngũ kỹ thuật trình độ cao, dày dạn kinh nghiệm thi công lưới điện đến 220kV.",
        accent: "text-primary",
        bg: "bg-primary",
    },
    {
        icon: mdiFlash,
        title: "Tiến độ",
        description: "Cam kết thi công đúng thời hạn, đảm bảo vận hành ổn định cho hệ thống điện khách hàng.",
        accent: "text-primary",
        bg: "bg-primary",
    },
]

const technicalServices = [
    {
        icon: mdiLightbulbOn,
        title: "Tư vấn & Thiết kế",
        description: "Thiết kế trọn gói hệ thống điện nhà máy, hệ thống tự động hóa công nghiệp chuyên sâu.",
    },
    {
        icon: mdiFlash,
        title: "Lắp đặt & Hiệu chỉnh",
        description: "Lắp đặt và cài đặt thiết bị với độ chính xác cao, đảm bảo tính đồng bộ của hệ thống.",
    },
    {
        icon: mdiHandshakeOutline,
        title: "Nâng cấp & Bảo trì",
        description: "Dịch vụ bảo trì định kỳ, nâng cấp hệ thống giúp kéo dài tuổi thọ thiết bị.",
    },
]

const testingServices = [
    {
        icon: mdiShieldCheck,
        title: "Thí nghiệm định kỳ",
        description: "Thí nghiệm bảo dưỡng định kỳ các thiết bị điện cao áp nhằm phát hiện sớm hư hỏng.",
    },
    {
        icon: mdiChartBar,
        title: "Kiểm định trạm biến áp",
        description: "Kiểm định, thí nghiệm lắp mới trạm biến áp đến 220kV theo tiêu chuẩn ngành điện.",
    },
    {
        icon: mdiTrendingUp,
        title: "Tối ưu vận hành",
        description: "Giải pháp giám sát và điều khiển giúp tối ưu hóa hiệu suất và giảm thiểu rủi ro.",
    },
]

export function CoreValuesSection() {
    return (
        <section id="features" className="relative overflow-hidden bg-[#E6E6E6] py-16">
            <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
                {/* Section header */}
                <motion.div
                    className="mx-auto max-w-3xl text-center flex flex-col gap-2"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <motion.div custom={0} variants={fadeUp} className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-secondary shadow-lg shadow-primary/25">
                        <Icon path={mdiLightbulbOn} size={1} />
                    </motion.div>
                    <motion.p custom={1} variants={fadeUp} className="text-xl font-semibold uppercase tracking-widest text-primary">
                        Giá trị cốt lõi
                    </motion.p>
                    <motion.h2 custom={2} variants={fadeUp} className="text-balance text-3xl font-bold tracking-tight text-primary sm:text-4xl lg:text-5xl">
                        Giải pháp tối ưu cho mọi hệ thống
                    </motion.h2>
                    <motion.p custom={3} variants={fadeUp} className="text-xl leading-relaxed text-muted-foreground">
                        EAS cung cấp hệ sinh thái dịch vụ kỹ thuật và thí nghiệm điện chuyên sâu, giúp doanh nghiệp vận hành an toàn và hiệu quả.
                    </motion.p>
                </motion.div>

                {/* Core values - horizontal cards */}
                <motion.div
                    className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    {coreValues.map((value, i) => (
                        <motion.div
                            key={value.title}
                            custom={i}
                            variants={scaleIn}
                            className="group relative overflow-hidden rounded-2xl border border-primary/15 bg-card p-4 transition-all duration-500 hover:-translate-y-1 hover:border-secondary/30 hover:shadow-xl hover:shadow-primary/10"
                        >
                            {/* Decorative SVG Background */}
                            <div className="absolute inset-0 z-0 opacity-100 group-hover:scale-105 transition-transform duration-700 pointer-events-none">
                                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 1440 560">
                                    <g fill="none">
                                        <rect width="1440" height="560" fill="rgba(228, 239, 226, 1)"></rect>
                                        <path d="M0,666.192C125.336,674.063,250.295,619.946,346.67,539.43C437.466,463.575,479.95,348.278,515.577,235.456C547.787,133.453,562.594,27.018,541.601,-77.87C521.335,-179.127,471.251,-271.932,399.215,-345.922C329.785,-417.236,238.893,-460.34,143.062,-487.223C48.122,-513.856,-48.297,-507.652,-146.523,-499.012C-267.621,-488.36,-409.442,-514.936,-497.283,-430.899C-585.119,-346.866,-574.96,-204.929,-580.83,-83.511C-586.242,28.442,-575.743,139.716,-529.811,241.956C-483.684,344.632,-407.639,427.224,-319.775,497.579C-223.768,574.455,-122.751,658.484,0,666.192" fill="#accea6"></path>
                                        <path d="M1440 1028.478C1550.048 1022.135 1663.2640000000001 1109.908 1762.305 1061.516 1861.715 1012.944 1897.6019999999999 890.245 1935.594 786.33 1971.28 688.725 1979.3980000000001 587.031 1973.722 483.262 1967.571 370.805 1960.204 256.262 1901.348 160.24 1836.587 54.584 1749.182-54.22000000000003 1628.1-80.60900000000004 1508.099-106.76300000000003 1390.086-34.74800000000005 1283.052 25.484000000000037 1193.408 75.93 1140.287 164.80399999999997 1065.846 235.793 981.565 316.166 841.017 356.5 816.543 470.36 792.182 583.691 901.263 678.611 947.845 784.76 995.3 892.899 987.069 1047.696 1092.897 1100.103 1200.954 1153.614 1319.619 1035.417 1440 1028.478" fill="#ffffff"></path>
                                    </g>
                                </svg>
                            </div>

                            {/* Hover glow */}
                            <div className={`pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100 z-10 ${value.bg}/20`} />

                            <div className="relative z-10">
                                <div
                                    className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110 bg-secondary ${value.accent}`}
                                >
                                    <Icon path={value.icon} size={1} />
                                </div>
                                <h3 className="text-xl font-semibold text-teal-950">
                                    {value.title}
                                </h3>
                                <p className="mt-2 text-lg font-normal leading-relaxed text-teal-950">
                                    {value.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Two-column benefits */}
                <div className="mt-24 grid gap-8 lg:grid-cols-2">
                    {/* Player column */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                    >
                        <motion.div custom={0} variants={fadeUp} className="relative mb-8 overflow-hidden rounded-2xl">
                            <Image
                                src="/images/industrial-4.jpg"
                                alt="Hệ thống tủ điện công nghiệp"
                                width={600}
                                height={340}
                                className="h-56 w-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                            <div className="absolute bottom-0 left-0 right-0 p-4">
                                <div className="flex items-center gap-3">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-primary backdrop-blur-sm">
                                        <Icon path={mdiLightbulbOn} size={0.8} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-secondary">
                                            Dịch vụ Kỹ thuật
                                        </h3>
                                        <p className="text-lg text-secondary/80">Tư vấn, thiết kế & lắp đặt</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <div className="flex flex-col gap-4">
                            {technicalServices.map((benefit, i) => (
                                <motion.div
                                    key={benefit.title}
                                    custom={i + 1}
                                    variants={fadeUp}
                                    className="group flex gap-4 rounded-xl border-2 border-primary bg-secondary p-4 transition-all duration-300"
                                >
                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary text-secondary shadow-md shadow-primary/20 transition-transform duration-300 group-hover:scale-110">
                                        <Icon path={benefit.icon} size={0.8} />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-semibold text-primary">
                                            {benefit.title}
                                        </h4>
                                        <p className="text-lg leading-relaxed text-muted-foreground">
                                            {benefit.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Owner column */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                    >
                        <motion.div custom={0} variants={fadeUp} className="relative mb-8 overflow-hidden rounded-2xl">
                            <Image
                                src="/images/industrial-5.jpg"
                                alt="Thí nghiệm trạm biến áp"
                                width={600}
                                height={340}
                                className="h-56 w-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                            <div className="absolute bottom-0 left-0 right-0 p-4">
                                <div className="flex items-center gap-3">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-primary backdrop-blur-sm">
                                        <Icon path={mdiChartBar} size={0.8} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-secondary">
                                            Thí nghiệm & Kiểm định
                                        </h3>
                                        <p className="text-lg text-secondary/80">An toàn & Đúng tiêu chuẩn</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <div className="flex flex-col gap-4">
                            {testingServices.map((benefit, i) => (
                                <motion.div
                                    key={benefit.title}
                                    custom={i + 1}
                                    variants={fadeUp}
                                    className="group flex gap-4 rounded-xl border-2 border-primary bg-secondary p-4 transition-all duration-300"
                                >
                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary text-secondary shadow-md shadow-primary/20 transition-transform duration-300 group-hover:scale-110">
                                        <Icon path={benefit.icon} size={0.8} />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-semibold text-primary">
                                            {benefit.title}
                                        </h4>
                                        <p className="text-lg leading-relaxed text-muted-foreground">
                                            {benefit.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
