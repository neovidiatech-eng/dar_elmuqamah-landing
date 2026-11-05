import { motion } from "motion/react";
import { Target, Compass, Sparkles, BookOpen, ArrowLeft } from "lucide-react";
import { IslamicPattern } from "../components/IslamicPattern";
import CTASection from "./Home/components/CTASection";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export function About() {
  const { t, i18n } = useTranslation();

  return (
    <>
      <section className="py-20 pt-32 bg-(--color-1) relative overflow-hidden min-h-screen">
        {/* Glow effects */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-(--color-4)/20 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-(--accent-light)/30 rounded-full blur-[100px] pointer-events-none" />
        <IslamicPattern className="absolute inset-0 opacity-[0.03] pointer-events-none text-(--primary)" />

        <div className="container mx-auto px-6 lg:px-12 relative z-10 max-w-6xl">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-(--secondary) block mb-3">
              {t("about.badge", "عن أكاديميتنا")}
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-(--primary) mb-6">
              {t("about.title", "دار المقامة أونلاين")}
            </h1>
            <p className="text-(--muted) text-lg sm:text-xl leading-relaxed">
              {t(
                "about.subtitle",
                "منصة تعليمية متخصصة تسعى إلى أن يصل جمال القرآن الكريم وثراء اللغة العربية إلى المتعلمين حول العالم."
              )}
            </p>
          </div>

          {/* Section 1: About Us Main Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-[36px] p-8 md:p-14 shadow-xl border border-(--color-4)/50 mb-16"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-(--color-4)/30 text-(--primary) flex items-center justify-center">
                <BookOpen className="w-7 h-7" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-(--dark)">
                {t("about.whoAreWeTitle", "من نحن؟")}
              </h2>
            </div>
            <div className="space-y-4 text-(--muted) text-base sm:text-lg leading-relaxed">
              <p>
                {t(
                  "about.whoAreWeP1",
                  "أكاديميتنا منصة تعليمية أونلاين متخصصة، تسعى إلى أن يصل جمال القرآن الكريم، وثراء اللغة العربية، وتعاليم الإسلام إلى المتعلمين في كل أنحاء العالم."
                )}
              </p>
              <p>
                {t(
                  "about.whoAreWeP2",
                  "نقدّم تجربة تعليمية شاملة وممتعة، مصممة خصيصًا للناطقين بغير العربية، تجمع بين العلم الإسلامي الأصيل وأساليب التدريس المنظمة والتوجيه الشخصي."
                )}
              </p>
              <p>
                {t(
                  "about.whoAreWeP3",
                  "تشمل برامجنا حفظ القرآن وتلاوته ومراجعته، ونور البيان ومهارات القراءة العربية الأساسية، واللغة العربية الفصحى الحديثة، وأحكام التجويد، ومجموعة واسعة من العلوم الإسلامية، منها العقيدة والفقه والحديث وقصص القرآن وقصص الأنبياء."
                )}
              </p>
              <p>
                {t(
                  "about.whoAreWeP4",
                  "نؤمن بأن لكل متعلم الحق في بناء صلة حقيقية بالقرآن والإسلام، أيًّا كان عمره أو خلفيته أو مستواه. ومن خلال معلمين متفانين، وبيئات تعليمية داعمة، وحصص أونلاين مرنة، نسعى لأن تكون كل حصة خطوة نحو مزيد من العلم والثقة والنمو الروحي."
                )}
              </p>
              <p className="font-bold text-(--primary) pt-2">
                {t(
                  "about.whoAreWeP5",
                  "أكاديميتنا أكثر من مكان للتعلّم؛ إنها مكان للنمو والتواصل وبناء علاقة تدوم مدى الحياة مع القرآن واللغة العربية."
                )}
              </p>
            </div>
          </motion.div>

          {/* Section 2 & 3: Mission & Vision Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-[32px] p-8 md:p-10 shadow-lg border border-(--color-4)/40 flex flex-col justify-between"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-(--secondary)/15 text-(--secondary) flex items-center justify-center mb-6">
                  <Compass className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-black text-(--dark) mb-4">
                  {t("about.missionTitle", "رسالتنا")}
                </h3>
                <div className="space-y-3 text-(--muted) text-sm sm:text-base leading-relaxed">
                  <p>
                    {t(
                      "about.missionP1",
                      "رسالتنا أن نجعل التعليم القرآني والإسلامي الأصيل في متناول المتعلمين حول العالم، وأن نمكّن الناطقين بغير العربية من قراءة القرآن الكريم بدقة وطلاقة وثقة، وفهم لغته، وتعميق صلتهم برسالته."
                    )}
                  </p>
                  <p>
                    {t(
                      "about.missionP2",
                      "نلتزم بتقديم تعليم أونلاين عالي الجودة ومخصص لكل طالب، يجمع بين التلاوة الصحيحة للقرآن وفق أحكام التجويد، وتعليم اللغة العربية بفعالية، وفهم شامل لتعاليم الإسلام."
                    )}
                  </p>
                  <p>
                    {t(
                      "about.missionP3",
                      "من خلال معلمين مؤهلين، ومسارات تعلّم منظمة، وبيئة تعليمية راعية، نسعى إلى غرس حب التعلّم الحقيقي، وترسيخ القيم الإسلامية القوية، ومساعدة كل طالب على التقدم بالسرعة التي تناسبه."
                    )}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Vision / Main Goal */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-[32px] p-8 md:p-10 shadow-lg border border-(--color-4)/40 flex flex-col justify-between"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-(--accent)/20 text-(--accent) flex items-center justify-center mb-6">
                  <Target className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-black text-(--dark) mb-4">
                  {t("about.goalTitle", "هدفنا الرئيسي")}
                </h3>
                <div className="space-y-3 text-(--muted) text-sm sm:text-base leading-relaxed">
                  <p>
                    {t(
                      "about.goalP1",
                      "هدفنا الرئيسي أن نمكّن المتعلمين حول العالم من بناء علاقة واثقة ودقيقة وذات معنى مع القرآن الكريم واللغة العربية وتعاليم الإسلام."
                    )}
                  </p>
                  <p>
                    {t(
                      "about.goalP2",
                      "نطمح إلى أن ننتقل بكل طالب من مجرد التعرّف على الحروف العربية أو حفظ الآيات إلى إتقان تلاوة القرآن، وتطبيق أحكام التجويد تطبيقًا صحيحًا، وتنمية مهارات القراءة واللغة العربية، واكتساب فهم سليم للعقيدة الإسلامية والعبادات والقيم."
                    )}
                  </p>
                  <p>
                    {t(
                      "about.goalP3",
                      "رؤيتنا أن نصنع جيلًا من المتعلمين يتلون القرآن بثقة، ويفهمون اللغة التي نزل بها، ويقدّرون هدايته، ويحملون علم الإسلام وقيمه إلى حياتهم اليومية."
                    )}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Section 4: Action Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-20">
            <Link
              to="/programs"
              className="px-8 py-4 bg-(--primary) hover:bg-(--primary-hover) text-white font-bold rounded-2xl shadow-xl transition-all flex items-center gap-2"
            >
              <span>{t("about.ctaPrograms", "شاهد برامجنا")}</span>
              <ArrowLeft
                className={`w-4 h-4 ${
                  i18n.language.startsWith("en") ? "rotate-180" : ""
                }`}
              />
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 bg-white border-2 border-(--color-4) text-(--primary) font-bold rounded-2xl shadow-sm hover:bg-slate-50 transition-all"
            >
              {t("about.ctaContact", "تواصل معنا")}
            </Link>
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <CTASection />
    </>
  );
}
