"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, useMotionValue, useTransform, AnimatePresence } from "framer-motion";

type BeforeAfter3DProps = {
    before: string;
    after: string;
    width?: string;
    height?: string;
    onClick?: () => void;
};

export default function BeforeAfter3D({ before, after, width = "w-full", height = "h-96", onClick }: BeforeAfter3DProps) {
    const [hovered, setHovered] = useState(false);
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateY = useTransform(x, [-100, 100], [15, -15]);
    const rotateX = useTransform(y, [-100, 100], [-15, 15]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const posX = e.clientX - rect.left - rect.width / 2;
        const posY = e.clientY - rect.top - rect.height / 2;
        x.set(posX);
        y.set(posY);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
        setHovered(false);
    };

    return (
        <motion.div
            className={`relative ${width} ${height} overflow-hidden rounded-xl shadow-2xl cursor-pointer perspective-1000`}
            onMouseEnter={() => setHovered(true)}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onClick={onClick}
            style={{ rotateY, rotateX }}
        >

            <Image src={before} alt="Before" fill className="object-cover rounded-xl" />

            <motion.div
                className="absolute top-0 left-0 h-full overflow-hidden"
                style={{ width: hovered ? "100%" : "50%", transition: "width 0.5s ease-in-out" }}
            >
                <Image src={after} alt="After" fill className="object-cover rounded-xl" />
            </motion.div>

            <div className="absolute bottom-4 left-4 text-white font-bold bg-black bg-opacity-50 px-3 py-1 rounded">
                Hover to see after
            </div>
        </motion.div>
    );
}
