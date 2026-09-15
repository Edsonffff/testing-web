"use client";

import { useRef, type ReactNode, type MouseEvent } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface TiltCardProps {
    children: ReactNode;
    className?: string;
    tiltAmount?: number;
    glareEnabled?: boolean;
}

export function TiltCard({
    children,
    className = "",
    tiltAmount = 10,
    glareEnabled = true,
}: TiltCardProps) {
    const ref = useRef<HTMLDivElement>(null);

    const mouseX = useMotionValue(0.5);
    const mouseY = useMotionValue(0.5);

    const springConfig = { damping: 20, stiffness: 200 };
    const smoothX = useSpring(mouseX, springConfig);
    const smoothY = useSpring(mouseY, springConfig);

    const rotateX = useTransform(smoothY, [0, 1], [tiltAmount, -tiltAmount]);
    const rotateY = useTransform(smoothX, [0, 1], [-tiltAmount, tiltAmount]);

    // Glare position
    const glareX = useTransform(smoothX, [0, 1], [0, 100]);
    const glareY = useTransform(smoothY, [0, 1], [0, 100]);
    const glareOpacity = useMotionValue(0);
    const smoothGlareOpacity = useSpring(glareOpacity, { damping: 30, stiffness: 200 });

    // Pre-compute the glare background as a motion value
    const glareBackground = useTransform(
        [glareX, glareY],
        ([x, y]) =>
            `radial-gradient(circle at ${x}% ${y}%, rgba(255,255,255,0.15), transparent 60%)`
    );

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;
        mouseX.set(x);
        mouseY.set(y);
        glareOpacity.set(0.15);
    };

    const handleMouseLeave = () => {
        mouseX.set(0.5);
        mouseY.set(0.5);
        glareOpacity.set(0);
    };

    return (
        <motion.div
            ref={ref}
            className={`relative ${className}`}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
                perspective: "1000px",
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            {children}
            {glareEnabled && (
                <motion.div
                    className="absolute inset-0 rounded-2xl pointer-events-none"
                    style={{
                        background: glareBackground,
                        opacity: smoothGlareOpacity,
                    }}
                />
            )}
        </motion.div>
    );
}
