"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

function getIsDesktop() {
    if (typeof window === "undefined") return false;
    return !("ontouchstart" in window) && navigator.maxTouchPoints === 0;
}

function subscribeToNothing() {
    return () => {};
}

export function CustomCursor() {
    const [isHovering, setIsHovering] = useState(false);
    const [isClicking, setIsClicking] = useState(false);
    const mountedRef = useRef(false);

    const isDesktop = useSyncExternalStore(
        subscribeToNothing,
        getIsDesktop,
        () => false
    );

    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
    const ringX = useSpring(cursorX, springConfig);
    const ringY = useSpring(cursorY, springConfig);

    const trailConfig = { damping: 20, stiffness: 100, mass: 1 };
    const trailX = useSpring(cursorX, trailConfig);
    const trailY = useSpring(cursorY, trailConfig);

    useEffect(() => {
        mountedRef.current = true;
        return () => {
            mountedRef.current = false;
        };
    }, []);

    useEffect(() => {
        if (!isDesktop) return;

        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
        };
        const handleMouseDown = () => {
            if (mountedRef.current) setIsClicking(true);
        };
        const handleMouseUp = () => {
            if (mountedRef.current) setIsClicking(false);
        };
        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (
                target.tagName === "A" ||
                target.tagName === "BUTTON" ||
                target.closest("a") ||
                target.closest("button") ||
                target.classList.contains("cursor-pointer")
            ) {
                if (mountedRef.current) setIsHovering(true);
            }
        };
        const handleMouseOut = () => {
            if (mountedRef.current) setIsHovering(false);
        };

        window.addEventListener("mousemove", moveCursor);
        window.addEventListener("mousedown", handleMouseDown);
        window.addEventListener("mouseup", handleMouseUp);
        document.addEventListener("mouseover", handleMouseOver);
        document.addEventListener("mouseout", handleMouseOut);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            window.removeEventListener("mousedown", handleMouseDown);
            window.removeEventListener("mouseup", handleMouseUp);
            document.removeEventListener("mouseover", handleMouseOver);
            document.removeEventListener("mouseout", handleMouseOut);
        };
    }, [isDesktop, cursorX, cursorY]);

    if (!isDesktop) return null;

    return (
        <>
            {/* Glow trail */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-screen"
                style={{
                    x: trailX,
                    y: trailY,
                    translateX: "-50%",
                    translateY: "-50%",
                    willChange: "transform",
                }}
            >
                <motion.div
                    className="rounded-full bg-orange-500/20 blur-xl"
                    animate={{
                        width: isHovering ? 120 : 70,
                        height: isHovering ? 120 : 70,
                    }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                />
            </motion.div>

            {/* Outer ring */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[9999]"
                style={{
                    x: ringX,
                    y: ringY,
                    translateX: "-50%",
                    translateY: "-50%",
                    willChange: "transform",
                }}
            >
                <motion.div
                    className="rounded-full border border-amber-200/60"
                    animate={{
                        width: isHovering ? 50 : isClicking ? 24 : 34,
                        height: isHovering ? 50 : isClicking ? 24 : 34,
                        borderColor: isHovering
                            ? "rgba(255,255,255,0.9)"
                            : "rgba(255,220,150,0.5)",
                    }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                />
            </motion.div>

            {/* Inner dot */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[9999]"
                style={{
                    x: cursorX,
                    y: cursorY,
                    translateX: "-50%",
                    translateY: "-50%",
                    willChange: "transform",
                }}
            >
                <motion.div
                    className="rounded-full bg-gradient-to-r from-amber-200 to-orange-400 shadow-[0_0_12px_rgba(255,160,50,0.8)]"
                    animate={{
                        width: isHovering ? 8 : isClicking ? 12 : 7,
                        height: isHovering ? 8 : isClicking ? 12 : 7,
                    }}
                    transition={{ duration: 0.15, ease: "easeOut" }}
                />
            </motion.div>
        </>
    );
}
