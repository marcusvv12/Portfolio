"use client";
import { motion } from "framer-motion"
import { Badge } from "../../src/components/ui/badge";


interface TechBadgeProps {
    tech: string;
    key: string;
}

export default function TechBadge({ tech, key }: TechBadgeProps) {

    return (
        <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            key={key}
        >
            <Badge className="hover:cursor-default hover:select-none">{tech}</Badge>
        </motion.div>
    )
}