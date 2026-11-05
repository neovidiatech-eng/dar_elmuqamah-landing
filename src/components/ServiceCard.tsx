import { motion } from "motion/react";
import { Link } from "react-router-dom";

type ServiceCardProps = {
  id: string;
  title: string;
  desc: string;
  image: string;
  isPrimary?: boolean;
  index: number;
};

export function ServiceCard({ id, title, desc, image, isPrimary, index }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className={`relative group rounded-[30px] shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col h-full ${
        isPrimary
          ? "bg-(--primary) text-white border border-(--primary-hover) hover:shadow-(--primary)/20"
          : "bg-white text-(--dark) border border-(--color-4)/50 hover:border-(--primary) hover:shadow-lg"
      }`}
    >
      <Link to={`/subjects/${id}`} className="flex flex-col grow">
        <div className="h-56 overflow-hidden relative">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
        </div>

        <div className="p-7 grow flex flex-col hover:bg-(--primary) group/content transition-colors duration-300">
          <h3
            className={`text-xl md:text-2xl font-black mb-3 transition-colors duration-300 group-hover/content:text-white ${
              isPrimary ? "text-(--accent)" : "text-(--primary)"
            }`}
          >
            {title}
          </h3>
          <p
            className={`leading-relaxed text-sm md:text-base grow transition-colors duration-300 group-hover/content:text-white/90 ${
              isPrimary ? "text-white/90" : "text-(--muted)"
            }`}
          >
            {desc}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}
