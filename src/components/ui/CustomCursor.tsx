"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

function getIsDesktop() {
    if (typeof window === "undefined") return false;
    return !("ontouchstart" in window) && navigator.maxTouchPoints === 0;
}

function subscribeToNothing() {
    return () => { };
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
            {/* Glow trail (slowest, largest) */}
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
                    className="rounded-full bg-purple-500/10 blur-xl"
                    animate={{
                        width: isHovering ? 120 : 60,
                        height: isHovering ? 120 : 60,
                    }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                />
            </motion.div>

            {/* Outer ring (trails behind cursor) */}
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
                    className="rounded-full border border-purple-400/40"
                    animate={{
                        width: isHovering ? 50 : isClicking ? 24 : 32,
                        height: isHovering ? 50 : isClicking ? 24 : 32,
                        borderColor: isHovering
                            ? "rgba(192, 132, 252, 0.6)"
                            : "rgba(192, 132, 252, 0.3)",
                    }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                />
            </motion.div>

            {/* Inner dot (follows cursor exactly) */}
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
                    className="rounded-full bg-gradient-to-r from-purple-400 to-pink-400"
                    animate={{
                        width: isHovering ? 8 : isClicking ? 12 : 6,
                        height: isHovering ? 8 : isClicking ? 12 : 6,
                        opacity: isClicking ? 1 : 0.9,
                    }}
                    transition={{ duration: 0.15, ease: "easeOut" }}
                />
            </motion.div>
        </>
    );
}
