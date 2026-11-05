import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";
import { testimonials } from "../../../data/content";
import { useTranslation } from "react-i18next";
import { IslamicPattern } from "../../../components/IslamicPattern";

export default function TestimonialsSection() {
  const { t } = useTranslation();
  return (
    <section className="py-24 bg-(--color-1) relative overflow-hidden" id="testimonials">
      <IslamicPattern className="absolute inset-0 opacity-[0.03] pointer-events-none text-(--primary)" />
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-(--secondary) mb-3 block">
            {t("testimonialsSection.subtitle", "آراء أولياء الأمور والطلاب")}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-(--dark) mb-6 leading-[1.3]">
            {t("testimonialsSection.titlePart1")}{" "}
            <span className="text-(--primary)">
              {t("testimonialsSection.titleHighlight")}
            </span>
            {t("testimonialsSection.titlePart2")}
          </h2>
          <p className="text-(--muted) text-base sm:text-lg leading-relaxed">
            {t("testimonialsSection.desc")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-3xl p-8 border border-(--color-4)/40 shadow-sm hover:shadow-xl transition-all relative flex flex-col justify-between"
            >
              <Quote className="absolute top-6 left-6 w-12 h-12 text-slate-100 rotate-180 pointer-events-none" />

              <div>
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-(--accent) text-(--accent)" />
                  ))}
                </div>

                <p className="text-(--dark) leading-relaxed mb-8 relative z-10 font-medium text-sm sm:text-base">
                  "{t(testimonial.commentKey)}"
                </p>
              </div>

              <div className="flex items-center gap-4 mt-auto pt-4 border-t border-slate-100">
                <div className="w-12 h-12 rounded-full bg-(--color-4)/40 flex items-center justify-center text-(--primary) font-bold text-lg">
                  {t(testimonial.nameKey).charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-(--dark)">{t(testimonial.nameKey)}</h4>
                  <span className="text-xs sm:text-sm text-(--muted)">{t(testimonial.roleKey)}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
