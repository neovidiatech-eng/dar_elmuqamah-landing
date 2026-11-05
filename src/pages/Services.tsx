import { motion } from "motion/react";
import { ServiceCard } from "../components/ServiceCard";
import { services } from "../data/content";
import CTASection from "./Home/components/CTASection";
import { IslamicPattern } from "../components/IslamicPattern";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export function Services() {
  const { t, i18n } = useTranslation();
  return (
    <>
      <section id="services" className="py-24 pt-32 bg-(--color-1) relative overflow-hidden min-h-screen">
        <IslamicPattern className="absolute inset-0 opacity-[0.03] pointer-events-none text-(--primary)" />
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-(--secondary) block mb-3">
              {t("programs.badge", "مسارات متخصصة")}
            </span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl md:text-5xl font-black text-(--primary) mb-6"
            >
              {t("programs.title", "برامجنا")}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-(--muted) text-base sm:text-lg max-w-3xl mx-auto leading-relaxed"
            >
              {t("programs.description")}
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 xl:gap-8 mb-16">
            {services.map((service, index) => (
              <div key={service.id} className="w-full">
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

          <div className="text-center">
            <Link
              to="/plans"
              className="inline-flex items-center gap-2 px-8 py-4 bg-(--primary) hover:bg-(--primary-hover) text-white font-bold rounded-2xl shadow-lg transition-all"
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

      {/* Call to action at the bottom of the page */}
      <CTASection />
    </>
  );
}
