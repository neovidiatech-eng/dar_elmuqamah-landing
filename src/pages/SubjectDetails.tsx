import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { services, whatsappChatLink } from "../data/content";
import { motion } from "motion/react";
import { IslamicPattern } from "../components/IslamicPattern";
import { ServiceCard } from "../components/ServiceCard";
import { useTranslation, Trans } from "react-i18next";
import { ArrowLeft, CheckCircle2, MessageSquare } from "lucide-react";

export function SubjectDetails() {
  const { id } = useParams<{ id: string }>();
  const { t, i18n } = useTranslation();

  const subject = services.find((s) => s.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!subject) {
    return (
      <div className="py-32 text-center min-h-[60vh] flex flex-col justify-center items-center bg-(--color-1)">
        <h2 className="text-3xl font-bold text-(--primary) mb-4">
          {t("subjectDetails.notFound", "البرنامج غير موجود")}
        </h2>
        <Link
          to="/programs"
          className="bg-(--primary) text-white px-8 py-3 rounded-full hover:bg-(--primary-hover) transition-colors"
        >
          {t("subjectDetails.back", "العودة للبرامج")}
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white pb-24">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-(--primary) to-(--primary-mid) min-h-100 flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={subject.image}
            alt={t(subject.titleKey)}
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-(--dark)/80 to-(--dark)/40" />
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10 flex flex-col md:flex-row items-center py-24">
          <div className="w-full md:w-2/3 md:pe-12 text-center md:text-start">
            <span className="inline-block px-4 py-1.5 rounded-full bg-(--accent)/20 text-(--accent) text-sm font-bold mb-4">
              {t("programs.badge", "مسار تعليمي متكامل")}
            </span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-5xl font-black text-white mb-6"
            >
              {t(subject.titleKey)}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-slate-200 text-base md:text-lg leading-relaxed mb-8 max-w-2xl"
            >
              {t(subject.descKey)}
            </motion.p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <Link
                to="/contact"
                className="px-8 py-3.5 bg-(--accent) hover:bg-(--accent)/90 text-white font-bold rounded-2xl shadow-lg transition-all"
              >
                {t("nav.contact", "تواصل للتسجيل")}
              </Link>
              <a
                href={whatsappChatLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white font-bold rounded-2xl border border-white/20 transition-all flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>واتساب</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Topics if Islamic Studies */}
      {subject.topics && subject.topics.length > 0 && (
        <section className="container mx-auto px-6 lg:px-12 py-16">
          <div className="max-w-4xl mx-auto bg-(--color-1) rounded-3xl p-8 border border-(--color-4)/50">
            <h3 className="text-2xl font-black text-(--primary) mb-6 text-center">
              {t("services.islamic_studies.title", "المحاور والعلوم المشمولة")}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {subject.topics.map((topicKey) => (
                <div
                  key={topicKey}
                  className="flex items-center gap-3 p-4 bg-white rounded-2xl border border-(--color-4)/40 shadow-sm"
                >
                  <CheckCircle2 className="w-5 h-5 text-(--secondary) shrink-0" />
                  <span className="font-bold text-(--dark)">
                    {t(topicKey)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Registration CTA Section */}
      <section className="container mx-auto px-6 lg:px-12 py-16">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-(--primary) to-(--primary-mid) text-center rounded-3xl p-8 md:p-12 text-white shadow-xl relative overflow-hidden">
          <IslamicPattern className="absolute inset-0 opacity-10 pointer-events-none" />
          <h2 className="text-2xl sm:text-3xl font-black mb-4 relative z-10">
            {t("subjectDetails.registerTitle", {
              title: t(subject.titleKey),
              defaultValue: `ابدأ الآن في ${t(subject.titleKey)}`,
            })}
          </h2>
          <p className="text-slate-200 text-base sm:text-lg leading-relaxed mb-8 max-w-xl mx-auto relative z-10">
            {t(
              "subjectDetails.registerDesc",
              "حصص فردية وجماعية ممتعة وتفاعلية يقودها نخبة من المعلمين المعتمدين والمؤهلين."
            )}
          </p>
          <div className="flex flex-wrap justify-center gap-4 relative z-10">
            <Link
              to="/contact"
              className="bg-(--accent) hover:bg-(--accent)/90 text-white font-bold py-3.5 px-10 rounded-2xl transition-all shadow-lg hover:-translate-y-0.5"
            >
              {t("nav.contact", "تواصل معنا للبدء")}
            </Link>
            <Link
              to="/programs"
              className="bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold py-3.5 px-8 rounded-2xl transition-all"
            >
              {t("programs.title", "جميع البرامج")}
            </Link>
          </div>
        </div>
      </section>

      {/* Other Materials Section */}
      <section className="container mx-auto px-6 lg:px-12 py-8">
        <div className="text-center mb-12">
          <span className="text-xs font-bold tracking-widest uppercase text-(--secondary) block mb-2">
            {t("subjectDetails.exploreMore", "استكشف أيضاً")}
          </span>
          <h2 className="text-3xl font-black text-(--primary)">
            {t("subjectDetails.otherSubjects", "برامج تعليمية أخرى")}
          </h2>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
          {services
            .filter((svc) => svc.id !== id)
            .slice(0, 3)
            .map((svc, index) => (
              <div key={svc.id}>
                <ServiceCard
                  id={svc.id}
                  title={t(svc.titleKey)}
                  desc={t(svc.descKey)}
                  image={svc.image}
                  isPrimary={svc.isPrimary}
                  index={index}
                />
              </div>
            ))}
        </div>
      </section>
    </div>
  );
}
