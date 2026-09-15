"use client";

/**
 * Iridescent/holographic sewing-needle cursor with silky pink-purple thread.
 * Holographic gradients are built from conic/linear combinations of purple,
 * pink, lavender and cream to evoke a hologram/foil look, with a soft
 * animated shimmer across the needle surface.
 */

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";

function getIsDesktop() {
  if (typeof window === "undefined") return false;
  return !("ontouchstart" in window) && navigator.maxTouchPoints === 0;
}
function noop() {
  return () => {};
}

// Length of the thread (number of discrete trail points).
const THREAD_LEN = 18;

// Needle geometry (in SVG units, drawn pointing DOWN, then rotated 38deg via CSS)
const NEEDLE_LENGTH = 52;
const NEEDLE_WIDTH = 4;
const EYE_Y_FROM_TIP = NEEDLE_LENGTH - 10;
const EYE_SIZE_X = 2.2;
const EYE_SIZE_Y = 5;

// Rotation so the needle points down-right (0deg = straight down; positive = rotate clockwise)
const NEEDLE_ANGLE_DEG = 42;

function threadSpring(i: number) {
  return {
    stiffness: Math.max(80, 700 - i * 32),
    damping: Math.max(14, 32 - i * 0.8),
    mass: 0.25 + i * 0.05,
  };
}

export function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const mountedRef = useRef(false);

  const isDesktop = useSyncExternalStore(noop, getIsDesktop, () => false);

  // Needle tip follows mouse with a tight spring (snappy but not jittery).
  const tipX = useMotionValue(-1000);
  const tipY = useMotionValue(-1000);
  const tipSX = useSpring(tipX, { stiffness: 1500, damping: 80, mass: 0.15 });
  const tipSY = useSpring(tipY, { stiffness: 1500, damping: 80, mass: 0.15 });

  // Eye of the needle — when the SVG is rotated, (0,-NEEDLE_LENGTH) in local
  // coords maps to a point offset up-and-left from the tip at 42deg.
  // Compute screen coordinates of the eye for the thread origin.
  const rad = (NEEDLE_ANGLE_DEG * Math.PI) / 180;
  // Rotating point (0,-NEEDLE_LENGTH) around origin by angle A:
  //   x' = 0*cos - (-L)*sin = L*sin
  //   y' = 0*sin + (-L)*cos = -L*cos
  // But since we rotate by NEEDLE_ANGLE_DEG clockwise (CSS rotates clockwise),
  // the eye ends up offset by:
  const eyeDX = Math.sin(rad) * EYE_Y_FROM_TIP;
  const eyeDY = -Math.cos(rad) * EYE_Y_FROM_TIP;
  const eyeX = useTransform(tipSX, (v) => v + eyeDX);
  const eyeY = useTransform(tipSY, (v) => v + eyeDY);

  // Thread trail chain: point 0 is the eye; each later point follows the prior one.
  const refsX = useRef(
    Array.from({ length: THREAD_LEN }, () => useMotionValue(-1000)),
  ).current;
  const refsY = useRef(
    Array.from({ length: THREAD_LEN }, () => useMotionValue(-1000)),
  ).current;
  const springsX = refsX.map((mv, i) => useSpring(mv, threadSpring(i)));
  const springsY = refsY.map((mv, i) => useSpring(mv, threadSpring(i)));

  // Wire the eye position into thread-point-0.
  useMotionValueEvent(eyeX, "change", (v) => refsX[0].set(v));
  useMotionValueEvent(eyeY, "change", (v) => refsY[0].set(v));

  // Wire each thread point to follow the one before it.
  useEffect(() => {
    const unsubs: Array<() => void> = [];
    for (let i = 1; i < THREAD_LEN; i++) {
      unsubs.push(springsX[i - 1].on("change", (v) => refsX[i].set(v)));
      unsubs.push(springsY[i - 1].on("change", (v) => refsY[i].set(v)));
    }
    return () => unsubs.forEach((u) => u());
  }, [springsX, springsY, refsX, refsY]);

  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
    };
  }, []);

  useEffect(() => {
    if (!isDesktop) return;
    const move = (e: MouseEvent) => {
      tipX.set(e.clientX);
      tipY.set(e.clientY);
    };
    const down = () => mountedRef.current && setIsClicking(true);
    const up = () => mountedRef.current && setIsClicking(false);
    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (
        t.tagName === "A" ||
        t.tagName === "BUTTON" ||
        t.closest("a") ||
        t.closest("button") ||
        t.classList.contains("cursor-pointer")
      ) {
        if (mountedRef.current) setIsHovering(true);
      }
    };
    const out = () => mountedRef.current && setIsHovering(false);

    window.addEventListener("mousemove", move);
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);
    document.addEventListener("mouseover", over);
    document.addEventListener("mouseout", out);

    refsX.forEach((mv) => mv.set(-1000));
    refsY.forEach((mv) => mv.set(-1000));

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
      document.removeEventListener("mouseover", over);
      document.removeEventListener("mouseout", out);
    };
  }, [isDesktop, tipX, tipY, refsX, refsY]);

  if (!isDesktop) return null;

  return (
    <>
      {/* Iridescent glow behind the needle */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9997] mix-blend-screen"
        style={{ x: tipSX, y: tipSY, translateX: "-50%", translateY: "-50%" }}
      >
        <motion.div
          className="rounded-full"
          animate={{
            width: isHovering ? 80 : 50,
            height: isHovering ? 80 : 50,
            opacity: isHovering ? 0.55 : 0.3,
          }}
          transition={{ duration: 0.3 }}
          style={{
            background:
              "radial-gradient(circle, rgba(236,72,153,0.65) 0%, rgba(168,85,247,0.4) 40%, rgba(217,70,239,0.2) 65%, transparent 80%)",
            filter: "blur(14px)",
          }}
        />
      </motion.div>

      {/* Thread tail — holographic pink→purple gradient, tapers along the spring chain. */}
      {springsX.map((sx, i) => {
        const t = i / (THREAD_LEN - 1);
        const thickness = 5.5 - t * 4.8;
        const opacity = 0.95 - t * 0.75;
        // Pink near needle -> purple towards tip
        const hue = 320 - t * 60; // 320 (pink) -> 260 (purple)
        return (
          <motion.div
            key={`thr-${i}`}
            className="fixed top-0 left-0 pointer-events-none z-[9998]"
            style={{
              x: sx,
              y: springsY[i],
              translateX: "-50%",
              translateY: "-50%",
              willChange: "transform",
            }}
          >
            <motion.div
              className="rounded-full"
              animate={{
                width: isHovering ? thickness * 1.3 : thickness,
                height: isHovering ? thickness * 1.3 : thickness,
                opacity,
              }}
              transition={{ duration: 0.2 }}
              style={{
                background: `radial-gradient(circle, hsl(${hue+20},100%,82%) 0%, hsl(${hue},90%,65%) 50%, hsla(${hue-10},85%,55%,${opacity}) 100%)`,
                boxShadow:
                  i < 3 ? "0 0 8px rgba(217,70,239,0.6)" : "none",
              }}
            />
          </motion.div>
        );
      })}

      {/* The Needle */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{
          x: tipSX,
          y: tipSY,
          translateX: "-2%",
          translateY: "0%",
          rotate: NEEDLE_ANGLE_DEG,
          willChange: "transform",
        }}
        animate={{
          scale: isClicking ? 0.88 : 1,
          rotate: isClicking
            ? NEEDLE_ANGLE_DEG - 8
            : isHovering
              ? NEEDLE_ANGLE_DEG + 5
              : NEEDLE_ANGLE_DEG,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 22 }}
      >
        <svg
          width={80}
          height={NEEDLE_LENGTH + 30}
          viewBox={`-20 -5 50 ${NEEDLE_LENGTH + 30}`}
          overflow="visible"
        >
          <defs>
            {/* Iridescent holographic gradient — deep purple → magenta → pink → lavender → cream */}
            <linearGradient id="holoGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#a855f7" />
              <stop offset="20%" stopColor="#d946ef" />
              <stop offset="45%" stopColor="#ec4899" />
              <stop offset="65%" stopColor="#f0abfc" />
              <stop offset="82%" stopColor="#fbcfe8" />
              <stop offset="100%" stopColor="#fef3c7" />
            </linearGradient>
            {/* Moving shimmer band — animated horizontally for foil/hologram effect */}
            <linearGradient id="holoSheen" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="rgba(255,255,255,0)" />
              <stop offset="45%" stopColor="rgba(255,255,255,0.75)" />
              <stop offset="55%" stopColor="rgba(255,255,255,0.85)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0)" />
            </linearGradient>
            {/* Darker edge gradient to give the needle 3D bevel */}
            <linearGradient id="holoEdge" x1="1" y1="0" x2="0" y2="0">
              <stop offset="0%" stopColor="rgba(88,28,135,0.55)" />
              <stop offset="100%" stopColor="rgba(190,24,93,0)" />
            </linearGradient>
            <filter id="holoShadow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur in="SourceAlpha" stdDeviation="1.2" />
              <feOffset dx="0.5" dy="1.5" result="off" />
              <feComponentTransfer>
                <feFuncA type="linear" slope="0.45" />
              </feComponentTransfer>
              <feMerge>
                <feMergeNode />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <g filter="url(#holoShadow)">
            {/* Main tapered shaft filled with holographic gradient */}
            <path
              d={`
                M 0 0
                L ${NEEDLE_WIDTH / 2} 10
                L ${NEEDLE_WIDTH / 2} ${EYE_Y_FROM_TIP - EYE_SIZE_Y - 2}
                Q ${NEEDLE_WIDTH / 2 + 0.8} ${EYE_Y_FROM_TIP - 1}, ${NEEDLE_WIDTH / 2} ${EYE_Y_FROM_TIP + EYE_SIZE_Y + 2}
                L ${NEEDLE_WIDTH / 2} ${NEEDLE_LENGTH}
                L 0 ${NEEDLE_LENGTH + 6}
                L -${NEEDLE_WIDTH / 2} ${NEEDLE_LENGTH}
                L -${NEEDLE_WIDTH / 2} ${EYE_Y_FROM_TIP + EYE_SIZE_Y + 2}
                Q -${NEEDLE_WIDTH / 2 - 0.8} ${EYE_Y_FROM_TIP - 1}, -${NEEDLE_WIDTH / 2} ${EYE_Y_FROM_TIP - EYE_SIZE_Y - 2}
                L -${NEEDLE_WIDTH / 2} 10
                Z
              `}
              fill="url(#holoGrad)"
            />

            {/* Dark bevel edge on the right side for 3D depth */}
            <path
              d={`
                M ${NEEDLE_WIDTH / 2 - 0.2} 10
                L ${NEEDLE_WIDTH / 2 - 0.2} ${EYE_Y_FROM_TIP - EYE_SIZE_Y - 2}
                Q ${NEEDLE_WIDTH / 2 + 0.6} ${EYE_Y_FROM_TIP - 1}, ${NEEDLE_WIDTH / 2 - 0.2} ${EYE_Y_FROM_TIP + EYE_SIZE_Y + 2}
                L ${NEEDLE_WIDTH / 2 - 0.2} ${NEEDLE_LENGTH}
                L ${NEEDLE_WIDTH / 2 - 0.8} ${NEEDLE_LENGTH + 2}
                Z
              `}
              fill="url(#holoEdge)"
            />

            {/* Animated shimmer band */}
            <clipPath id="needleClip">
              <path d={`
                M 0 0
                L ${NEEDLE_WIDTH / 2} 10
                L ${NEEDLE_WIDTH / 2} ${NEEDLE_LENGTH}
                L 0 ${NEEDLE_LENGTH + 6}
                L -${NEEDLE_WIDTH / 2} ${NEEDLE_LENGTH}
                L -${NEEDLE_WIDTH / 2} 10
                Z
              `} />
            </clipPath>
            <g clipPath="url(#needleClip)">
              <rect
                x={-NEEDLE_WIDTH}
                y={0}
                width={NEEDLE_WIDTH * 2}
                height={NEEDLE_LENGTH + 10}
                fill="url(#holoSheen)"
              >
                <animate
                  attributeName="x"
                  from={-NEEDLE_WIDTH * 2}
                  to={NEEDLE_WIDTH}
                  dur="2.4s"
                  repeatCount="indefinite"
                />
              </rect>
            </g>

            {/* Tip highlight — bright iridescent glint */}
            <path d="M 0 0 L 1.4 5 L -1.4 5 Z" fill="rgba(255,255,255,0.95)" />
            <path d="M 0 0 L 0.6 3 L -0.3 3 Z" fill="#fef3c7" />

            {/* Eye hole — dark with purple tint */}
            <ellipse cx={0} cy={EYE_Y_FROM_TIP} rx={EYE_SIZE_X} ry={EYE_SIZE_Y} fill="#2a0a3a" />
            <ellipse cx={0} cy={EYE_Y_FROM_TIP} rx={EYE_SIZE_X - 0.7} ry={EYE_SIZE_Y - 1.2} fill="#6b21a8" />
            {/* Pink-magenta thread through the eye (matches trail) */}
            <ellipse cx={0} cy={EYE_Y_FROM_TIP} rx={EYE_SIZE_X - 1} ry={EYE_SIZE_Y - 2.2} fill="#ec4899" />
            <ellipse cx={-0.3} cy={EYE_Y_FROM_TIP - 0.5} rx={EYE_SIZE_X - 1.4} ry={EYE_SIZE_Y - 3} fill="#fbcfe8" opacity="0.8" />
          </g>
        </svg>
      </motion.div>

      {/* Tip glint when hovering interactive elements */}
      {isHovering && (
        <motion.div
          className="fixed top-0 left-0 pointer-events-none z-[10000]"
          style={{ x: tipSX, y: tipSY, translateX: "-50%", translateY: "-50%" }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: [0, 1.3, 0.7], opacity: [0, 1, 0.5] }}
          transition={{ duration: 0.7, repeat: Infinity, repeatDelay: 0.3 }}
        >
          <div
            className="w-4 h-4 rounded-full"
            style={{
              background:
                "radial-gradient(circle, #fffbe5 0%, #f0abfc 40%, transparent 70%)",
            }}
          />
        </motion.div>
      )}
    </>
  );
}
