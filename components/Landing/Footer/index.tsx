"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "@/components/ui/mdi-icon";
import { mdiPhone, mdiHeadset, mdiEmail, mdiOfficeBuilding, mdiCellphoneDock } from "@mdi/js";

export function Footer() {
    return (
        <footer id="footer" className="relative bg-[#E6E6E6] text-teal-950 pt-12">
            {/* Top Contact Bar */}
            <div className="mx-auto max-w-7xl px-4 lg:px-8 mb-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                    {/* Hotline */}
                    <div className="flex flex-col md:flex-row items-center gap-4 justify-center md:justify-start">
                        <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-primary/30 text-primary bg-secondary">
                            <Icon path={mdiPhone} size={1.2} />
                        </div>
                        <div>
                            <p className="text-sm font-bold uppercase tracking-wide">HOTLINE 24/7</p>
                            <p className="text-xl font-normal text-primary">(+84) 963.968.079</p>
                        </div>
                    </div>

                    {/* Feedback */}
                    <div className="flex flex-col md:flex-row items-center gap-4 justify-center md:justify-start">
                        <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-primary/30 text-primary bg-secondary">
                            <Icon path={mdiHeadset} size={1.2} />
                        </div>
                        <div>
                            <p className="text-sm font-bold uppercase tracking-wide">FEEDBACK</p>
                            <p className="text-xl font-normal text-primary">(+84) 963.968.079</p>
                        </div>
                    </div>

                    {/* Email Support */}
                    <div className="flex flex-col md:flex-row items-center gap-4 justify-center md:justify-start">
                        <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-primary/30 text-primary bg-secondary">
                            <Icon path={mdiEmail} size={1.2} />
                        </div>
                        <div>
                            <p className="text-sm font-bold uppercase tracking-wide">EMAIL SUPPORT</p>
                            <p className="text-xl font-normal text-primary">electricautomation.info@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="pb-16">
                <div className="mx-auto max-w-7xl px-4 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Brand & Info Column */}
                        <div className="space-y-6">
                            {/* Logo */}
                            <Link href="/" className="flex items-center gap-2">
                                <Image
                                    src="/images/logo.webp"
                                    alt="BadmintonHub Logo"
                                    width={500}
                                    height={500}
                                    className="h-12 w-auto object-contain"
                                />
                                <Image
                                    src="/images/primary-logo.svg"
                                    alt="BadmintonHub Logo"
                                    width={500}
                                    height={500}
                                    className="h-8 w-auto object-contain"
                                />
                            </Link>

                            <div className="space-y-3">
                                <div className="flex gap-3 items-start text-teal-950">
                                    <Icon path={mdiOfficeBuilding} size={0.8} className="shrink-0 mt-1" />
                                    <p className="text-base leading-relaxed text-teal-950">
                                        <span className="font-bold text-teal-950">Trụ sở chính:</span> 452 Tôn Đức Thắng, Phường Hòa Khánh, Thành phố Đà Nẵng
                                    </p>
                                </div>
                                <div className="flex gap-3 items-start text-teal-950">
                                    <Icon path={mdiCellphoneDock} size={0.8} className="shrink-0 mt-1" />
                                    <p className="text-base">
                                        <span className="font-bold text-teal-950">Điện thoại/Zalo:</span> 0963.968.079
                                    </p>
                                </div>
                                <div className="flex gap-3 items-start text-teal-950">
                                    <Icon path={mdiEmail} size={0.8} className="shrink-0 mt-1" />
                                    <p className="text-base">
                                        <span className="font-bold text-teal-950">Email:</span> electricautomation.info@gmail.com
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Visitors Column */}
                        <div>
                            <div className="relative mb-6">
                                <h3 className="text-lg font-bold text-primary uppercase">LƯỢT TRUY CẬP</h3>
                                <div className="absolute -bottom-1 left-0 h-0.5 w-full bg-zinc-100">
                                    <div className="h-full w-24 bg-primary" />
                                </div>
                            </div>
                            {/* Placeholder for real counter if needed */}
                            <div className="flex gap-1">
                                <span className="flex items-center justify-center font-normaltext-teal-950">145.329 + lượt truy cập</span>
                            </div>
                        </div>

                        {/* Address/Map Column */}
                        <div>
                            <div className="relative mb-6">
                                <h3 className="text-lg font-bold text-primary uppercase">ĐỊA CHỈ</h3>
                                <div className="absolute -bottom-1 left-0 h-0.5 w-full bg-zinc-100">
                                    <div className="h-full w-24 bg-primary" />
                                </div>
                            </div>
                            <div className="overflow-hidden rounded-lg border border-zinc-200">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3834.0245089201!2d108.1528434!3d16.0642738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31421916327b9c9b%3A0x6d11b5e5264b485d!2s452%20T%C3%B4n%20%C4%90%E1%BB%A9c%20Th%E1%BA%AFng%2C%20H%C3%B2a%20Kh%C3%A1nh%20B%E1%BA%AFc%2C%20Li%C3%AAn%20Chi%E1%BB%83u%2C%20%C4%90%C3%A0%20N%E1%BA%B5ng!5e0!3m2!1svi!2s!4v1709280000000!5m2!1svi!2s"
                                    width="100%"
                                    height="160"
                                    style={{ border: 0 }}
                                    allowFullScreen={true}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Copyright Bar */}
            <div className="bg-primary py-2 text-center">
                <p className="text-base text-secondary">
                    © Copyright 2026 thuộc về giaiphaptudongdien.com
                </p>
            </div>

            {/* Scroll to top fab - visual placeholder */}
            <button className="fixed bottom-6 right-6 h-10 w-10 bg-black/80 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-black transition-colors md:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6" /></svg>
            </button>
        </footer>
    );
}
