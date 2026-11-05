import { usePlans } from "../hooks/usePlans";
import { IslamicPattern } from "../components/IslamicPattern";
import CTASection from "./Home/components/CTASection";
import { Check, Star } from "lucide-react";
import { Plan } from "../types";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const defaultPackages = [
  {
    id: "pkg-1",
    name_ar: "باقة التأسيس",
    name_en: "Foundation Plan",
    desc_ar: "مثالية للمبتدئين في نور البيان والقراءة وأحكام التجويد الأساسية.",
    desc_en: "Ideal for beginners in Noor Al-Bayan and basic reading.",
    sessions: "2 حصص أسبوعياً (8 شهرياً)",
    sessions_en: "2 Sessions / week (8 monthly)",
    duration: "30 دقيقة للحصة",
    duration_en: "30 mins / session",
    bestSeller: false,
    features: [
      "متابعة فردية 1-on-1 مع المعلم",
      "تقارير تقدم دورية",
      "مواعيد مرنة تناسب جدولك",
    ],
    features_en: [
      "1-on-1 personal mentorship",
      "Regular progress reports",
      "Flexible schedules",
    ],
  },
  {
    id: "pkg-2",
    name_ar: "باقة الإتقان",
    name_en: "Mastery Plan",
    desc_ar: "الباقة الأكثر اختياراً لحفظ وتلاوة القرآن وتعلم اللغة العربية.",
    desc_en: "Our most popular package for memorization and fluent recitation.",
    sessions: "3 حصص أسبوعياً (12 شهرياً)",
    sessions_en: "3 Sessions / week (12 monthly)",
    duration: "45 دقيقة للحصة",
    duration_en: "45 mins / session",
    bestSeller: true,
    features: [
      "حفظ وتلاوة مع تصحيح التجويد",
      "تقارير يومية وتقييمات شهرية",
      "متابعة مستمرة مع ولي الأمر",
      "اختبارات مرحلية وشهادات تشجيعية",
    ],
    features_en: [
      "Memorization & Tajweed correction",
      "Daily reports & monthly evaluations",
      "Direct parent communication",
      "Periodic tests & certificates",
    ],
  },
  {
    id: "pkg-3",
    name_ar: "باقة التميز المكثف",
    name_en: "Excellence Plan",
    desc_ar: "للراغبين في إنجاز سريع في الحفظ واللغة العربية والعلوم الإسلامية.",
    desc_en: "For intensive progress in memorization, Arabic, and Islamic studies.",
    sessions: "4 حصص أسبوعياً (16 شهرياً)",
    sessions_en: "4 Sessions / week (16 monthly)",
    duration: "60 دقيقة للحصة",
    duration_en: "60 mins / session",
    bestSeller: false,
    features: [
      "مسار مكثف للحفظ والمراجعة",
      "دمج العلوم الإسلامية واللغة العربية",
      "أولوية في اختيار المواعيد والمعلمين",
      "متابعة أسبوعية دقيقة وشاملة",
    ],
    features_en: [
      "Intensive memorization & revision",
      "Integrated Arabic & Islamic studies",
      "Priority scheduling with top tutors",
      "Comprehensive weekly assessment",
    ],
  },
];

export function Plans() {
  const { t, i18n } = useTranslation();
  const isAr = i18n.language.startsWith("ar");

  const { data: response, isLoading } = usePlans();
  const apiPlans = response?.data || [];
  const displayPlans = apiPlans.length > 0 ? apiPlans : null;

  return (
    <>
      <section className="pt-32 pb-24 bg-(--color-1) relative min-h-[70vh]">
        <IslamicPattern className="absolute inset-0 opacity-[0.03] pointer-events-none text-(--primary)" />

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-(--secondary) block mb-3">
              {t("plans.badge", "خطط مرنة")}
            </span>
            <h1 className="text-3xl md:text-5xl font-black text-(--primary) mb-6">
              {t("plans.title", "الباقات والأسعار")}
            </h1>
            <p className="text-lg text-(--muted) leading-relaxed">
              {t(
                "plans.subtitle",
                "نقدم باقات تعليمية مرنة تناسب مختلف الجداول والأعمار. تواصل معنا لاختيار الباقة الأنسب لك."
              )}
            </p>
          </div>

          {isLoading ? (
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-4 border-(--primary) border-t-transparent"></div>
            </div>
          ) : displayPlans ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {displayPlans.map((plan: Plan) => (
                <div
                  key={plan.id}
                  className={`bg-white rounded-3xl p-8 shadow-xl border flex flex-col hover:shadow-2xl transition-all relative overflow-hidden group ${
                    plan.bestSeller
                      ? "border-(--accent) ring-2 ring-(--accent)/30"
                      : "border-(--color-4)/50"
                  }`}
                >
                  {plan.bestSeller && (
                    <div className="absolute top-0 right-0 bg-(--accent) text-white text-xs font-bold px-4 py-1.5 rounded-bl-xl shadow-md flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 fill-current" />
                      <span>{t("plans.bestSeller", "الأكثر طلباً")}</span>
                    </div>
                  )}

                  <div className="relative z-10 flex flex-col h-full">
                    <h3 className="text-2xl font-black text-(--primary) mb-2">
                      {isAr ? plan.name_ar : plan.name_en || plan.name_ar}
                    </h3>
                    <p className="text-(--muted) mb-6 min-h-12 text-sm leading-relaxed whitespace-pre-line">
                      {plan.description}
                    </p>

                    <div className="mb-6 border-b border-slate-100 pb-6">
                      <span className="text-4xl font-black text-(--accent)">
                        {plan.price}
                      </span>
                      <span className="text-(--muted) text-sm mx-2">
                        {isAr
                          ? plan.currency?.name_ar || t("plans.currencyFallback")
                          : plan.currency?.name_en || t("plans.currencyFallback")}{" "}
                        / {t("plans.perMonth", "شهر")}
                      </span>
                    </div>

                    <ul className="space-y-3 mb-8 grow text-sm text-slate-700">
                      <li className="flex items-start gap-3">
                        <span className="bg-(--color-4)/40 text-(--primary) rounded-full p-1 mt-0.5 shrink-0">
                          <Check className="w-3.5 h-3.5" />
                        </span>
                        <span>
                          {t("plans.sessionsCount", {
                            count: plan.sessionsCount,
                          })}
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="bg-(--color-4)/40 text-(--primary) rounded-full p-1 mt-0.5 shrink-0">
                          <Check className="w-3.5 h-3.5" />
                        </span>
                        <span>
                          {t("plans.sessionTime", { time: plan.sessionTime })}
                        </span>
                      </li>
                      {plan.features?.map((feature: string, idx: number) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="bg-(--color-4)/40 text-(--primary) rounded-full p-1 mt-0.5 shrink-0">
                            <Check className="w-3.5 h-3.5" />
                          </span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      to="/contact"
                      className="w-full py-4 rounded-2xl font-bold transition-all bg-(--primary) text-white hover:bg-(--primary-hover) shadow-md text-center"
                    >
                      {t("plans.subscribe", "تواصل للاشتراك")}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* Default Beautiful Sample Packages as requested in Docx */
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {defaultPackages.map((pkg) => (
                <div
                  key={pkg.id}
                  className={`bg-white rounded-3xl p-8 shadow-xl border flex flex-col hover:shadow-2xl transition-all relative overflow-hidden ${
                    pkg.bestSeller
                      ? "border-(--accent) ring-2 ring-(--accent)/30 scale-105"
                      : "border-(--color-4)/50"
                  }`}
                >
                  {pkg.bestSeller && (
                    <div className="absolute top-0 right-0 bg-(--accent) text-white text-xs font-bold px-4 py-1.5 rounded-bl-xl shadow-md flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 fill-current" />
                      <span>{t("plans.bestSeller", "الأكثر طلباً")}</span>
                    </div>
                  )}

                  <div className="flex flex-col h-full">
                    <h3 className="text-2xl font-black text-(--primary) mb-2">
                      {isAr ? pkg.name_ar : pkg.name_en}
                    </h3>
                    <p className="text-(--muted) mb-6 text-sm leading-relaxed min-h-12">
                      {isAr ? pkg.desc_ar : pkg.desc_en}
                    </p>

                    <div className="mb-6 border-b border-slate-100 pb-6 space-y-1">
                      <div className="text-(--secondary) font-bold text-base">
                        {isAr ? pkg.sessions : pkg.sessions_en}
                      </div>
                      <div className="text-(--muted) text-xs">
                        {isAr ? pkg.duration : pkg.duration_en}
                      </div>
                    </div>

                    <ul className="space-y-3 mb-8 grow text-sm text-slate-700">
                      {(isAr ? pkg.features : pkg.features_en).map(
                        (feat, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <span className="bg-(--color-4)/40 text-(--primary) rounded-full p-1 mt-0.5 shrink-0">
                              <Check className="w-3.5 h-3.5" />
                            </span>
                            <span>{feat}</span>
                          </li>
                        )
                      )}
                    </ul>

                    <Link
                      to="/contact"
                      className={`w-full py-4 rounded-2xl font-bold transition-all text-center shadow-md ${
                        pkg.bestSeller
                          ? "bg-(--accent) hover:bg-(--accent)/90 text-white"
                          : "bg-(--primary) hover:bg-(--primary-hover) text-white"
                      }`}
                    >
                      {t("plans.subscribe", "تواصل للاشتراك")}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <CTASection />
    </>
  );
}
