import { ArrowLeft, Users } from "lucide-react";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const heroImage = "/images/hero_quran_learning.jpg";

export default function Hero() {
  const { t, i18n } = useTranslation();
  return (
    <section className="relative min-h-[calc(100vh-80px)] pt-30 pb-20 flex items-center mesh-gradient overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 relative z-10 w-full text-start">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-12 lg:gap-16">
          <div className="lg:col-span-7 flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 bg-(--color-4)/25 border border-(--color-4)/50 px-4 py-1.5 rounded-full w-fit"
            >
              <span className="w-2.5 h-2.5 bg-(--secondary) rounded-full animate-pulse" />
              <span className="text-sm font-bold text-(--primary)">
                {t("hero.badge", "أكاديمية دار المقامة أونلاين")}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight text-(--dark)"
            >
              {t("hero.titlePart1", "تعلّم القرآن والعربية بثقة،")}{" "}
              <span className="text-(--primary) block mt-2">
                {t("hero.titleHighlight", "من أي مكان في العالم")}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-(--muted) leading-relaxed max-w-xl"
            >
              {t(
                "hero.description",
                "دار المقامة منصة تعليمية أونلاين تجعل القرآن الكريم واللغة العربية وتعاليم الإسلام في متناول المتعلمين حول العالم، وخاصة الناطقين بغير العربية."
              )}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap gap-4 mt-2"
            >
              <Link
                to="/contact"
                className="px-8 py-4 bg-(--primary) hover:bg-(--primary-hover) text-white text-lg font-bold rounded-2xl flex items-center gap-3 shadow-xl hover:-translate-y-0.5 transition-all"
              >
                <span>{t("hero.ctaPrimary", "تواصل معنا")}</span>
                <ArrowLeft
                  className={`w-5 h-5 ${
                    i18n.language.startsWith("en") ? "rotate-180" : ""
                  }`}
                />
              </Link>
              <Link
                to="/programs"
                className="px-8 py-4 bg-white border-2 border-(--color-4)/50 text-(--primary) hover:border-(--primary) text-lg font-bold rounded-2xl hover:bg-slate-50 transition-all shadow-sm"
              >
                {t("hero.ctaSecondary", "استكشف برامجنا")}
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-6 flex flex-col sm:flex-row items-center text-center sm:text-start gap-4 sm:gap-6"
            >
              <div
                className={`flex ${
                  i18n.language.startsWith("ar")
                    ? "-space-x-3 space-x-reverse"
                    : "-space-x-3"
                }`}
              >
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-12 h-12 rounded-full border-4 border-white bg-(--color-4)/30 overflow-hidden flex items-center justify-center text-(--primary)"
                  >
                    <Users className="w-6 h-6" />
                  </div>
                ))}
              </div>
              <div className="text-sm">
                <span className="block font-bold text-(--dark)">
                  {t("hero.statsTitle", "+500 طالب وطالبة")}
                </span>
                <span className="text-(--muted)">
                  {t(
                    "hero.statsSubtitle",
                    "في دار المقامة لتعلّم القرآن والعربية"
                  )}
                </span>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-5 relative w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative z-20 overflow-hidden rounded-[40px] shadow-2xl border-4 border-white"
            >
              <img
                src={heroImage}
                alt="دار المقامة | Dar Al-Muqamah"
                className="w-full h-auto object-cover rounded-[36px]"
              />
            </motion.div>

            {/* Decorative Blobs */}
            <div className="absolute -top-10 -inset-e-10 w-64 h-64 bg-(--primary) opacity-15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-10 -inset-s-10 w-48 h-48 bg-(--accent) opacity-20 rounded-full blur-3xl pointer-events-none" />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 border-2 border-(--primary) opacity-10 rounded-full pointer-events-none"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
