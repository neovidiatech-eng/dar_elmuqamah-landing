import { Link } from "react-router-dom";
import { IslamicPattern } from "../IslamicPattern";
import { useTranslation } from "react-i18next";
import { navLinks, whatsappChannelLink } from "../../data/content";
import { Phone, MessageSquare } from "lucide-react";
import logoImage from "../../../assets/logo1.png";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-(--dark) text-white pt-16 pb-8 relative overflow-hidden mt-auto border-t border-white/10">
      <IslamicPattern className="absolute inset-0 opacity-5 pointer-events-none text-white" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Logo & Description */}
          <div className="flex flex-col gap-4">
            <Link to="/" className="flex items-center gap-3">
              <img
                src={logoImage}
                alt="دار المقامة | Dar Al-Muqamah"
                className="w-16 h-16 object-contain bg-white rounded-2xl p-1 shadow-md"
              />
              <span className="text-xl font-bold text-white">دار المقامة</span>
            </Link>
            <p className="text-slate-300 text-sm leading-relaxed">
              {t("footer.description", "دار المقامة أكاديمية أونلاين لتعلّم القرآن واللغة العربية والعلوم الإسلامية.")}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base font-bold text-(--accent) mb-4">
              {t("footer.quickLinks", "روابط سريعة")}
            </h4>
            <ul className="space-y-2 text-sm text-slate-300">
              {navLinks.map((link) => (
                <li key={link.nameKey}>
                  <Link
                    to={link.href}
                    className="hover:text-(--accent) transition-colors inline-block"
                  >
                    {t(link.nameKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Numbers */}
          <div>
            <h4 className="text-base font-bold text-(--accent) mb-4">
              {t("footer.contactTitle", "أرقام التواصل")}
            </h4>
            <div className="space-y-3 text-sm text-slate-300">
     
              <a
                href="tel:+201080724226"
                dir="ltr"
                className="flex items-center text-end  gap-2 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-(--accent)" />
                <span>+20 108 072 4226</span>
              </a> 
              <a
                href="tel:+201066829578"
                dir="ltr"
                className="flex items-center gap-2 text-end hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-(--accent)" />
                <span>+20 106 682 9578</span>
              </a>
            </div>
          </div>

          {/* WhatsApp Channel */}
          <div>
            <h4 className="text-base font-bold text-(--accent) mb-4">
              {t("footer.channelTitle", "قناة واتساب")}
            </h4>
            <p className="text-xs text-slate-300 mb-4 leading-relaxed">
              {t("footer.channelDesc", "تابع قناة دار المقامة أونلاين على واتساب للاطلاع على كل جديد والدروس المجانية.")}
            </p>
            <a
              href={whatsappChannelLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold transition-all shadow-md"
            >
              <MessageSquare className="w-4 h-4" />
              <span>{t("footer.joinChannel", "انضم إلى قناة واتساب")}</span>
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-400">
          <p>
            {t("footer.rights", {
              year: new Date().getFullYear(),
              defaultValue: `© ${new Date().getFullYear()} مدرسة دار المقامة أونلاين لتعلّم القرآن والعربية. جميع الحقوق محفوظة.`,
            })}
          </p>
          <div className="flex gap-6">
            <Link to="/about" className="hover:text-white transition-colors">
              {t("nav.about", "من نحن")}
            </Link>
            <Link to="/contact" className="hover:text-white transition-colors">
              {t("nav.contact", "تواصل معنا")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
