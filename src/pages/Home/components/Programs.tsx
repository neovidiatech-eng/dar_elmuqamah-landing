import { motion } from "motion/react";
import { services } from "../../../data/content";
import { ServiceCard } from "../../../components/ServiceCard";
import { IslamicPattern } from "../../../components/IslamicPattern";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function Programs() {
  const { t, i18n } = useTranslation();
  return (
    <section className="py-24 bg-(--color-1) relative overflow-hidden" id="programs">
      <IslamicPattern className="absolute inset-0 opacity-[0.03] pointer-events-none text-(--primary)" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs sm:text-sm font-bold tracking-widest uppercase text-(--secondary) block mb-3"
          >
            {t("programs.badge", "مسارات متخصصة")}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl md:text-6xl font-black text-(--primary) mb-6"
          >
            {t("programs.title", "برامجنا")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-(--muted) text-lg sm:text-xl leading-relaxed"
          >
            {t(
              "programs.description",
              "من أول حرف عربي إلى تلاوة القرآن بثقة وفهم أعمق للإسلام، تجمع برامجنا كل شيء في مكان واحد، وهي مصممة خصيصًا للناطقين بغير العربية."
            )}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 xl:gap-8">
          {services.map((service, index) => (
            <div key={service.id}>
              <ServiceCard
                id={service.id}
                title={t(service.titleKey)}
                desc={t(service.descKey)}
                image={service.image}
                isPrimary={service.isPrimary}
                index={index}
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/plans"
            className="inline-flex items-center gap-2 px-8 py-4 bg-(--primary) hover:bg-(--primary-hover) text-white text-base font-bold rounded-2xl shadow-lg transition-all"
          >
            <span>{t("programs.viewPlans", "شاهد الباقات والأسعار")}</span>
            <ArrowLeft
              className={`w-4 h-4 ${
                i18n.language.startsWith("en") ? "rotate-180" : ""
              }`}
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
