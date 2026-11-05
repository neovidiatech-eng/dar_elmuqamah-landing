import { motion } from "motion/react";
import { ArrowLeft, Phone, TrendingUp, CheckCircle, Award } from "lucide-react";
import { IslamicPattern } from "../../components/IslamicPattern";
import { Counter } from "../../components/Counter";
import { stats, whyUsSteps, whatsappChatLink } from "../../data/content";
import Hero from "./components/Hero";
import { Step } from "@/src/components/Step";
import { Link } from "react-router-dom";

// Components
import AboutPreview from "./components/AboutPreview";
import Programs from "./components/Programs";
import TestimonialsSection from "./components/TestimonialsSection";
import CTASection from "./components/CTASection";
import { useTranslation, Trans } from "react-i18next";

export function Home() {
  const { t, i18n } = useTranslation();

  return (
    <>
      {/* --- Hero Section --- */}
      <Hero />

      {/* --- About Preview Section --- */}
      <AboutPreview />

      {/* --- Programs Section --- */}
      <Programs />

      {/* --- Why Us Section (First 6 items for Home) --- */}
      <section id="why-us" className="py-24 bg-white relative overflow-hidden">
        {/* Glow effects */}
        <div className="absolute top-1/2 left-0 w-125 h-125 bg-(--color-4)/20 blur-[150px] -translate-y-1/2 -translate-x-1/2 pointer-events-none" />
        <div className="absolute top-1/2 right-0 w-100 h-100 bg-(--accent-light)/30 blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <IslamicPattern className="absolute inset-0 opacity-5 pointer-events-none text-(--primary)" />

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/3">
              <div className="sticky top-32">
                <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-(--secondary) mb-3 block">
                  {t("home.features", "لماذا تختارنا العائلات")}
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-(--dark) mb-6 leading-[1.3]">
                  <Trans
                    i18nKey="home.whyParentsChoose"
                    components={{ highlight: <span className="text-(--primary)" /> }}
                  />
                </h2>
                <p className="text-(--muted) text-base sm:text-lg leading-relaxed mb-8">
                  {t("home.whyParentsChooseDesc")}
                </p>

                <Link
                  to="/why-us"
                  className="inline-flex items-center gap-2 mb-8 px-6 py-3 bg-(--color-4)/30 hover:bg-(--primary) text-(--primary) hover:text-white rounded-xl font-bold transition-all text-sm group"
                >
                  <span>{t("whyUs.viewAll", "اطّلع على كل الأسباب")}</span>
                  <ArrowLeft
                    className={`w-4 h-4 transition-transform group-hover:-translate-x-1 ${
                      i18n.language.startsWith("en") ? "rotate-180" : ""
                    }`}
                  />
                </Link>

                <div className="p-8 rounded-3xl bg-(--color-1) border border-(--color-4)/40 overflow-hidden group relative">
                  <div className="relative z-10">
                    <span className="text-(--dark) font-bold block mb-2">
                      {t("home.haveQuestion", "هل لديك استفسار؟")}
                    </span>
                    <a
                      href={whatsappChatLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-(--primary) font-bold hover:underline flex items-center gap-2"
                    >
                      {t("home.contactWhatsapp", "تواصل معنا عبر واتساب")}
                      <ArrowLeft
                        className={`w-4 h-4 ${
                          i18n.language.startsWith("en") ? "rotate-180" : ""
                        }`}
                      />
                    </a>
                  </div>
                  <div className="absolute right-0 bottom-0 opacity-10 blur-xl">
                    <Phone className="w-24 h-24 text-(--primary)" />
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-2/3">
              <div className="space-y-4">
                {whyUsSteps.slice(0, 6).map((step, index) => (
                  <div key={step.titleKey}>
                    <Step
                      title={t(step.titleKey)}
                      desc={t(step.descKey)}
                      index={index}
                      isLast={index === 5}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Section 5: Dedicated Progress Monitoring --- */}
      <section className="py-20 bg-(--color-1) relative overflow-hidden">
        <IslamicPattern className="absolute inset-0 opacity-[0.03] pointer-events-none text-(--primary)" />
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-4xl mx-auto bg-white rounded-[36px] p-8 md:p-12 shadow-xl border border-(--color-4)/50 flex flex-col md:flex-row items-center gap-8">
            <div className="w-20 h-20 shrink-0 rounded-3xl bg-(--primary) text-(--accent) flex items-center justify-center shadow-lg">
              <TrendingUp className="w-10 h-10" />
            </div>
            <div className="flex flex-col gap-3 text-center md:text-start">
              <span className="text-xs font-bold tracking-widest uppercase text-(--secondary)">
                {t("progress.badge", "متابعة دقيقة ومستمرة")}
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-(--dark)">
                {t("progress.title", "تقدّم تراه بعينك")}
              </h3>
              <p className="text-(--muted) text-base sm:text-lg leading-relaxed">
                {t(
                  "progress.desc",
                  "لن تحتاج إلى التخمين في مستوى طفلك. تقاريرنا اليومية المنظمة وتقييماتنا الشهرية المفصلة تعطيك صورة واضحة عن طلاقته وحفظه وإنجازه العام."
                )}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- Achievements/Stats Section --- */}
      <section className="py-20 bg-gradient-to-l from-(--primary) to-(--primary-hover) relative overflow-hidden text-white">
        <IslamicPattern className="absolute inset-0 opacity-10 pointer-events-none" />
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.labelKey}>
                <Counter value={stat.value} label={t(stat.labelKey)} icon={stat.icon} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Testimonials Section --- */}
      <TestimonialsSection />

      {/* --- CTA Section --- */}
      <CTASection />
    </>
  );
}
