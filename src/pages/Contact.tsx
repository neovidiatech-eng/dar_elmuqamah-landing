import { motion } from "motion/react";
import { MessageSquare, Check, Phone, Send, ChevronDown } from "lucide-react";
import { contactMethods, socialLinks, whatsappChatLink } from "../data/content";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useTranslation } from "react-i18next";
import { useMemo } from "react";
import { IslamicPattern } from "../components/IslamicPattern";

export function Contact() {
  const { t, i18n } = useTranslation();

  const contactSchema = useMemo(
    () =>
      z.object({
        name: z.string().min(1, t("contact.validation.nameRequired")),
        email: z
          .string()
          .min(1, t("contact.validation.emailRequired"))
          .email(t("contact.validation.emailInvalid")),
        phone: z.string().min(1, t("contact.validation.phoneRequired")),
        country: z.string().min(1, t("contact.validation.countryRequired")),
        program: z.string().min(1, t("contact.validation.programRequired")),
        message: z.string().min(1, t("contact.validation.messageRequired")),
      }),
    [t]
  );

  type ContactFormValues = z.infer<typeof contactSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    console.log("Form data submitted:", data);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    alert(t("contact.form.success"));
    reset();
  };

  return (
    <section
      id="contact"
      className="pt-32 pb-24 bg-(--color-1) relative overflow-hidden min-h-[70vh]"
    >
      <IslamicPattern className="absolute inset-0 opacity-[0.03] pointer-events-none text-(--primary)" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Top Header Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-(--secondary) block mb-3">
              {t("contact.badge", "تواصل معنا")}
            </span>
            <h1 className="text-3xl md:text-5xl font-black text-(--primary) mb-6">
              {t("contact.needHelp", "هل لديك سؤال أو أنت مستعد للبدء؟")}
            </h1>
            <p className="text-lg text-(--muted) mb-8 leading-relaxed max-w-3xl mx-auto">
              {t(
                "contact.helpDesc",
                "تواصل معنا وسنسعد بمساعدتك في اختيار البرنامج المناسب والإجابة على جميع استفساراتك."
              )}
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 sm:gap-8 mb-8">
              {(
                t("contact.features", { returnObjects: true }) as string[]
              ).map((text, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 text-(--primary) font-bold text-sm sm:text-base"
                >
                  <span className="bg-(--color-4)/40 p-1 rounded-full text-(--primary)">
                    <Check className="w-4 h-4" />
                  </span>
                  <span>{text}</span>
                </div>
              ))}
            </div>

            <a
              href={whatsappChatLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-3.5 rounded-2xl font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 transform duration-300"
            >
              <MessageSquare className="w-5 h-5" />
              <span>{t("contact.whatsappBtn", "تواصل معنا عبر واتساب")}</span>
            </a>
          </motion.div>
        </div>

        {/* Contact Grid Section */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Right Column: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center md:items-start text-center md:text-start pt-4"
          >
            <h2 className="text-3xl lg:text-4xl font-black text-(--primary) mb-4">
              {t("contact.contactUs", "بيانات التواصل")}
            </h2>
            <div className="w-20 h-1.5 rounded-full bg-(--accent) mb-8"></div>

            <div className="space-y-4 w-full flex flex-col items-center md:items-start">
              {contactMethods.map((method, idx) => (
                <a
                  key={idx}
                  href={method.link || "#"}
                  target={method.link?.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-5 w-full justify-center md:justify-start group p-4 rounded-2xl bg-white hover:shadow-lg transition-all duration-300 border border-(--color-4)/30 hover:border-(--primary)"
                >
                  <div className="w-14 h-14 rounded-2xl bg-(--color-4)/30 text-(--primary) flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-(--primary) group-hover:text-white transition-all duration-300 shadow-sm">
                    <method.icon className="w-6 h-6" />
                  </div>
                  <div className="flex flex-col text-start">
                    <span className="text-(--muted) text-xs font-bold mb-1">
                      {t(method.labelKey || "")}
                    </span>
                    <span
                      className="text-(--dark) font-black text-base md:text-lg tracking-wide group-hover:text-(--primary) transition-colors"
                      dir="ltr"
                    >
                      {method.value || t(method.valueKey || "")}
                    </span>
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-8 flex items-center justify-center md:justify-start gap-4 w-full">
              {socialLinks.map(({ icon: Icon, href, label }, idx) => (
                <a
                  key={idx}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="px-6 py-3 rounded-2xl bg-white border border-(--color-4)/40 text-(--primary) font-bold flex items-center gap-2 hover:bg-(--primary) hover:text-white transition-all duration-300 shadow-sm"
                >
                  <Icon className="w-5 h-5" />
                  <span>{label}</span>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Left Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-(--primary) to-(--primary-mid) rounded-3xl p-8 md:p-10 shadow-2xl relative overflow-hidden text-white"
          >
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none" />

            <h3 className="text-2xl font-black text-(--accent) mb-6 text-center relative z-10">
              {t("contact.leaveMessage", "إترك رسالتك وسنعاود الاتصال بك")}
            </h3>

            <form
              className="relative z-10 space-y-4 flex flex-col h-full"
              onSubmit={handleSubmit(onSubmit)}
              noValidate
            >
              {/* Row 1: Full Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="block text-xs font-bold text-slate-100">
                    {t("contact.form.name", "الاسم الكامل")} *
                  </label>
                  <input
                    type="text"
                    placeholder={t("contact.form.name", "الاسم الكامل")}
                    {...register("name")}
                    className={`w-full bg-white text-(--dark) px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-(--accent) transition-colors ${
                      errors.name ? "border-2 border-rose-400" : ""
                    }`}
                  />
                  <p className="text-rose-200 text-xs min-h-4">
                    {errors.name?.message}
                  </p>
                </div>

                <div className="space-y-1">
                  <label className="block text-xs font-bold text-slate-100">
                    {t("contact.form.email", "البريد الإلكتروني")} *
                  </label>
                  <input
                    type="email"
                    placeholder={t("contact.form.email", "البريد الإلكتروني")}
                    {...register("email")}
                    className={`w-full bg-white text-(--dark) px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-(--accent) transition-colors ${
                      errors.email ? "border-2 border-rose-400" : ""
                    }`}
                  />
                  <p className="text-rose-200 text-xs min-h-4">
                    {errors.email?.message}
                  </p>
                </div>
              </div>

              {/* Row 2: Phone/WhatsApp & Country */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="block text-xs font-bold text-slate-100">
                    {t("contact.form.phone", "رقم الهاتف أو واتساب")} *
                  </label>
                  <input
                    type="tel"
                    placeholder={t("contact.form.phone", "رقم الهاتف أو واتساب")}
                    {...register("phone")}
                    className={`w-full bg-white text-(--dark) px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-(--accent) transition-colors ${
                      errors.phone ? "border-2 border-rose-400" : ""
                    }`}
                  />
                  <p className="text-rose-200 text-xs min-h-4">
                    {errors.phone?.message}
                  </p>
                </div>

                <div className="space-y-1">
                  <label className="block text-xs font-bold text-slate-100">
                    {t("contact.form.country", "الدولة")} *
                  </label>
                  <input
                    type="text"
                    placeholder={t("contact.form.countryPlaceholder", "مثال: مصر، بريطانيا، كندا...")}
                    {...register("country")}
                    className={`w-full bg-white text-(--dark) px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-(--accent) transition-colors ${
                      errors.country ? "border-2 border-rose-400" : ""
                    }`}
                  />
                  <p className="text-rose-200 text-xs min-h-4">
                    {errors.country?.message}
                  </p>
                </div>
              </div>

              {/* Row 3: Interested Program (Dropdown) */}
              <div className="space-y-1">
                <label className="block text-xs font-bold text-slate-100">
                  {t("contact.form.program", "البرنامج المهتم به")} *
                </label>
                <div className="relative">
                  <select
                    defaultValue=""
                    {...register("program")}
                    className={`w-full bg-white text-(--dark) px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-(--accent) appearance-none cursor-pointer transition-colors ${
                      errors.program ? "border-2 border-rose-400" : ""
                    }`}
                  >
                    <option value="" disabled>
                      {t("contact.form.selectProgram", "اختر البرنامج المهتم به...")}
                    </option>
                    <option value="quranMemorization">
                      {t("contact.form.programsList.quranMemorization", "حفظ القرآن الكريم")}
                    </option>
                    <option value="quranRevision">
                      {t("contact.form.programsList.quranRevision", "مراجعة القرآن الكريم")}
                    </option>
                    <option value="quranRecitation">
                      {t("contact.form.programsList.quranRecitation", "تلاوة القرآن الكريم")}
                    </option>
                    <option value="noorAlbayan">
                      {t("contact.form.programsList.noorAlbayan", "نور البيان (القاعدة)")}
                    </option>
                    <option value="tajweed">
                      {t("contact.form.programsList.tajweed", "أحكام التجويد")}
                    </option>
                    <option value="arabicLanguage">
                      {t("contact.form.programsList.arabicLanguage", "اللغة العربية")}
                    </option>
                    <option value="islamicStudies">
                      {t("contact.form.programsList.islamicStudies", "العلوم الإسلامية")}
                    </option>
                    <option value="generalInquiry">
                      {t("contact.form.programsList.generalInquiry", "استفسار عام / غير محدد")}
                    </option>
                  </select>
                  <div
                    className={`absolute top-1/2 -translate-y-1/2 pointer-events-none text-slate-500 ${
                      i18n.language.startsWith("ar") ? "left-4" : "right-4"
                    }`}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </div>
                <p className="text-rose-200 text-xs min-h-4">
                  {errors.program?.message}
                </p>
              </div>

              {/* Row 4: Message */}
              <div className="space-y-1">
                <label className="block text-xs font-bold text-slate-100">
                  {t("contact.form.message", "الرسالة")} *
                </label>
                <textarea
                  rows={4}
                  placeholder={t(
                    "contact.form.messagePlaceholder",
                    "اكتب رسالتك أو أي تفاصيل أو استفسار تود مشاركته..."
                  )}
                  {...register("message")}
                  className={`w-full bg-white text-(--dark) px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-(--accent) resize-none transition-colors ${
                    errors.message ? "border-2 border-rose-400" : ""
                  }`}
                />
                <p className="text-rose-200 text-xs min-h-4">
                  {errors.message?.message}
                </p>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-(--accent) hover:bg-(--accent)/90 text-white font-bold rounded-xl transition-all shadow-lg mt-2 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed hover:-translate-y-0.5 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>
                  {isSubmitting
                    ? t("contact.form.submitting", "جاري الإرسال...")
                    : t("contact.form.submit", "إرسال الرسالة")}
                </span>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
