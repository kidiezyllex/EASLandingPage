"use client";

import React, { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion, useSpring } from "framer-motion";
import { Icon } from "@/components/ui/mdi-icon";
import { mdiPhone } from "@mdi/js";

const FRAME_COUNT = 120;
const IMAGE_PATH = "/images/ezgif-frame-";

export const ScrollSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Snappier physics for more responsive scrolling
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 110,
    damping: 32,
    restDelta: 0.001
  });

  // Preload images
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;

    for (let i = 1; i <= FRAME_COUNT; i++) {
      const img = new Image();
      const frameIndex = i.toString().padStart(3, "0");
      img.src = `${IMAGE_PATH}${frameIndex}.jpg`;
      img.onload = () => {
        loadedCount++;
        setProgress((loadedCount / FRAME_COUNT) * 100);
        if (loadedCount === FRAME_COUNT) {
          setImages(loadedImages);
          setIsLoading(false);
        }
      };
      loadedImages[i - 1] = img;
    }
  }, []);

  // Update canvas when smoothProgress changes
  useEffect(() => {
    if (images.length === 0 || !canvasRef.current) return;

    const unsubscribe = smoothProgress.on("change", (latest) => {
      const frameIndex = Math.min(
        FRAME_COUNT - 1,
        Math.floor(latest * FRAME_COUNT)
      );
      renderFrame(frameIndex);
    });

    // Initial render
    renderFrame(0);

    return () => unsubscribe();
  }, [images, smoothProgress]);

  const renderFrame = (index: number) => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    const img = images[index];

    if (canvas && ctx && img) {
      const dpr = window.devicePixelRatio || 1;

      // Clear canvas using the high-res dimensions
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Enable high-quality smoothing
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = "high";

      // Draw image with "cover" logic (filling the screen)
      const canvasRatio = canvas.width / canvas.height;
      const imgRatio = img.width / img.height;
      let drawWidth, drawHeight, drawX, drawY;

      if (canvasRatio < imgRatio) {
        // Height is the constraint
        drawHeight = canvas.height + 4; // Add slight bleed to prevent gaps
        drawWidth = Math.ceil(img.width * (drawHeight / img.height));
        drawX = Math.floor((canvas.width - drawWidth) / 2);
        drawY = -2; // Offset bleed
      } else {
        // Width is the constraint
        drawWidth = canvas.width + 4; // Add slight bleed to prevent gaps
        drawHeight = Math.ceil(img.height * (drawWidth / img.width));
        drawX = -2; // Offset bleed
        // Align to BOTTOM instead of centering vertically
        drawY = Math.floor(canvas.height - drawHeight) + 2;
      }

      ctx.drawImage(img, drawX, drawY, drawWidth, drawHeight);
    }
  };

  // Resize canvas to window size with DPR scaling
  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        const dpr = window.devicePixelRatio || 1;
        const width = window.innerWidth;
        const height = window.innerHeight;

        // Set the internal buffer size to match viewport pixels * dpr
        canvasRef.current.width = width * dpr;
        canvasRef.current.height = height * dpr;

        // Re-render current frame after resize
        const currentProgress = smoothProgress.get();
        const frameIndex = Math.min(
          FRAME_COUNT - 1,
          Math.floor(currentProgress * FRAME_COUNT)
        );
        renderFrame(frameIndex);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, [images]);

  // Text overlay transforms
  const titleOpacity = useTransform(smoothProgress, [0, 0.06, 0.1], [1, 1, 0]);
  const titleY = useTransform(smoothProgress, [0, 0.1], [0, -50]);

  const engineeringOpacity = useTransform(smoothProgress, [0.12, 0.2, 0.4, 0.48], [0, 1, 1, 0]);
  const engineeringY = useTransform(smoothProgress, [0.12, 0.2, 0.4, 0.48], [40, 0, 0, -40]);

  const driversOpacity = useTransform(smoothProgress, [0.52, 0.6, 0.8, 0.88], [0, 1, 1, 0]);
  const driversY = useTransform(smoothProgress, [0.52, 0.6, 0.8, 0.88], [40, 0, 0, -40]);

  const ctaOpacity = useTransform(smoothProgress, [0.92, 0.98], [0, 1]);
  const ctaScale = useTransform(smoothProgress, [0.92, 0.98], [0.8, 1]);
  const ctaY = useTransform(smoothProgress, [0.92, 0.98], [30, 0]);

  return (
    <div ref={containerRef} className="relative h-[400vh] bg-[#E6E6E6]">
      {/* Loading Screen Overlay */}
      {isLoading && (
        <div className="fixed inset-0 w-full h-screen flex flex-col items-center justify-center bg-[#E6E6E6] text-teal-950 z-[100]">
          <div className="w-64 h-2 bg-zinc-100 rounded-full overflow-hidden mb-4 border border-zinc-200">
            <motion.div
              className="h-full bg-zinc-900"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-sm font-normal tracking-widest uppercase text-teal-950">Đang tải... {Math.round(progress)}%</p>
        </div>
      )}

      <section className="sticky top-20 h-screen w-full flex items-center justify-center overflow-hidden">
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full block z-0"
        />

        {/* Dark Overlay - Higher opacity for better text contrast */}
        <div className="absolute inset-0 bg-black/10 z-[5] pointer-events-none" />

        {/* Text Overlays */}
        <motion.div
          style={{ opacity: titleOpacity, y: titleY }}
          className="absolute inset-0 -top-20 flex flex-col items-center justify-center pointer-events-none z-10"
        >
          <h1 className="text-5xl md:text-8xl font-bold text-primary tracking-tighter text-center px-4">GIẢI PHÁP TỰ ĐỘNG ĐIỆN</h1>
        </motion.div>

        <motion.div
          style={{ opacity: engineeringOpacity, y: engineeringY }}
          className="absolute inset-x-6 md:inset-x-12 top-1/2 -translate-y-1/2 flex justify-start pointer-events-none z-10"
        >
          <div className="max-w-md">
            <h2 className="text-4xl md:text-6xl font-bold text-primary leading-tight">Thiết Bị Điều Khiển & Giám Sát.</h2>
            <p className="text-lg text-teal-950 max-w-[320px] mt-2 font-normal">Cung cấp Rơle trung gian, bộ chuyển đổi tín hiệu và thiết bị bảo vệ từ các thương hiệu hàng đầu: Carlo Gavazzi, Schneider, Phoenix Contact.</p>
          </div>
        </motion.div>

        <motion.div
          style={{ opacity: driversOpacity, y: driversY }}
          className="absolute inset-x-6 md:inset-x-12 top-1/2 -translate-y-1/2 flex justify-end pointer-events-none text-right z-10"
        >
          <div className="max-w-md flex flex-col items-end">
            <h2 className="text-4xl md:text-6xl font-bold text-primary leading-tight">Thí Nghiệm &<br />Kiểm Định.</h2>
            <p className="text-lg text-teal-950 max-w-[320px] mt-2 font-normal text-right">Dịch vụ thí nghiệm định kỳ, bảo dưỡng thiết bị điện cao áp và kiểm định trạm biến áp lên đến 220kV.</p>
          </div>
        </motion.div>

        <motion.div
          style={{ opacity: ctaOpacity, scale: ctaScale, y: ctaY }}
          className="absolute inset-0 -top-20 flex flex-col items-center justify-center pointer-events-none px-4 z-10"
        >
          <h2 className="text-5xl md:text-8xl font-bold text-primary tracking-tighter text-center mb-8 uppercase">An Toàn & Hiệu Quả.</h2>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="pointer-events-auto px-8 py-3 bg-primary text-secondary font-medium tracking-widest rounded-full text-lg cursor-pointer hover:bg-primary/90 transition-colors shadow-2xl flex items-center gap-2"
          >
            <Icon path={mdiPhone} size={0.8} />
            <span>Liên Hệ Ngay</span>
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
};
