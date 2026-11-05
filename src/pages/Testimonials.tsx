import { motion } from "motion/react";
import { Quote, Star } from "lucide-react";
import { testimonials } from "../data/content";
import CTASection from "./Home/components/CTASection";
import { useTranslation } from "react-i18next";
import { IslamicPattern } from "../components/IslamicPattern";

export function Testimonials() {
  const { t } = useTranslation();
  return (
    <>
      <section
        id="testimonials"
        className="py-24 pt-32 bg-(--color-1) relative overflow-hidden min-h-screen"
      >
        <IslamicPattern className="absolute inset-0 opacity-[0.03] pointer-events-none text-(--primary)" />

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-(--secondary) mb-3 block">
              {t("testimonialsSection.subtitle", "آراء أولياء الأمور والطلاب")}
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-(--primary) mb-6 leading-[1.3]">
              {t("testimonialsSection.titlePart1", "ماذا يقول طلابنا وأولياء أمورهم عن")}{" "}
              <span className="text-(--secondary)">
                {t("testimonialsSection.titleHighlight", "دار المقامة")}
              </span>
              {t("testimonialsSection.titlePart2", "؟")}
            </h1>
            <p className="text-(--muted) text-base sm:text-lg leading-relaxed">
              {t(
                "testimonialsSection.desc",
                "تجارب حقيقية لآباء وطلاب وثقوا بنا واختاروا دار المقامة لتكون شريكهم في رحلة حفظ وتدبر القرآن الكريم وتعلّم اللغة العربية."
              )}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.nameKey}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-white rounded-3xl p-8 md:p-10 shadow-lg border border-(--color-4)/40 relative hover:-translate-y-1 transition-all flex flex-col justify-between"
              >
                <div className="absolute top-8 right-8 text-slate-100 pointer-events-none">
                  <Quote className="w-12 h-12 rotate-180" />
                </div>

                <div>
                  <div className="flex gap-1 mb-6 relative z-10">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-(--accent) text-(--accent)"
                      />
                    ))}
                  </div>

                  <p className="text-(--dark) text-base md:text-lg leading-relaxed mb-8 relative z-10 font-medium">
                    "{t(testimonial.commentKey)}"
                  </p>
                </div>

                <div className="flex items-center gap-4 relative z-10 pt-4 border-t border-slate-100">
                  <div className="w-12 h-12 bg-(--color-4)/40 rounded-full flex items-center justify-center text-(--primary) font-bold text-lg">
                    {t(testimonial.nameKey).charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-(--dark)">
                      {t(testimonial.nameKey)}
                    </h4>
                    <span className="text-xs sm:text-sm text-(--muted) font-medium">
                      {t(testimonial.roleKey)}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
