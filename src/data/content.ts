import {
  Award,
  BookOpen,
  Clock,
  Facebook,
  GraduationCap,
  HeartHandshake,
  Instagram,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Users,
  CheckCircle,
  Sparkles,
  Layers,
  Globe,
  UserCheck,
  Smile,
  BarChart3,
} from "lucide-react";

export const whatsappChannelLink = "https://whatsapp.com/channel/0029VaHXdBh2Jl87tbvdTJ3l";
export const whatsappChatLink = "https://wa.me/201080724226";

export const navLinks = [
  { name: "الرئيسية", nameKey: "nav.home", href: "/" },
  { name: "من نحن", nameKey: "nav.about", href: "/about" },
  { name: "البرامج", nameKey: "nav.programs", href: "/programs" },
  { name: "لماذا تختارنا", nameKey: "nav.whyUs", href: "/why-us" },
  { name: "الباقات والأسعار", nameKey: "nav.plans", href: "/plans" },
  { name: "آراء العملاء", nameKey: "nav.testimonials", href: "/testimonials" },
  { name: "تواصل معنا", nameKey: "nav.contact", href: "/contact" },
];

export const services = [
  {
    id: "quran-memorization",
    titleKey: "services.quran_memorization.title",
    descKey: "services.quran_memorization.desc",
    image: "/images/program_quran_memorization.jpg",
    isPrimary: true,
  },
  {
    id: "quran-revision",
    titleKey: "services.quran_revision.title",
    descKey: "services.quran_revision.desc",
    image: "/images/quran_child_2.png",
    isPrimary: false,
  },
  {
    id: "quran-recitation",
    titleKey: "services.quran_recitation.title",
    descKey: "services.quran_recitation.desc",
    image: "/images/quran_child_3.png",
    isPrimary: false,
  },
  {
    id: "noor-albayan",
    titleKey: "services.noor_albayan.title",
    descKey: "services.noor_albayan.desc",
    image: "/images/quran_child_4.png",
    isPrimary: false,
  },
  {
    id: "tajweed",
    titleKey: "services.tajweed.title",
    descKey: "services.tajweed.desc",
    image: "/images/quran_child_1.png",
    isPrimary: false,
  },
  {
    id: "arabic-language",
    titleKey: "services.arabic_language.title",
    descKey: "services.arabic_language.desc",
    image: "/images/quran_child_2.png",
    isPrimary: false,
  },
  {
    id: "islamic-studies",
    titleKey: "services.islamic_studies.title",
    descKey: "services.islamic_studies.desc",
    image: "/images/quran_child_3.png",
    isPrimary: false,
    topics: [
      "services.islamic_studies.topics.aqeedah",
      "services.islamic_studies.topics.fiqh",
      "services.islamic_studies.topics.hadith",
      "services.islamic_studies.topics.quranStories",
      "services.islamic_studies.topics.prophetsStories",
    ],
  },
];

export const whyUsSteps = [
  {
    titleKey: "whyUs.comprehensive.title",
    descKey: "whyUs.comprehensive.desc",
    icon: Layers,
  },
  {
    titleKey: "whyUs.nonArabic.title",
    descKey: "whyUs.nonArabic.desc",
    icon: Globe,
  },
  {
    titleKey: "whyUs.personalized.title",
    descKey: "whyUs.personalized.desc",
    icon: UserCheck,
  },
  {
    titleKey: "whyUs.teachers.title",
    descKey: "whyUs.teachers.desc",
    icon: GraduationCap,
  },
  {
    titleKey: "whyUs.fullExperience.title",
    descKey: "whyUs.fullExperience.desc",
    icon: BookOpen,
  },
  {
    titleKey: "whyUs.flexible.title",
    descKey: "whyUs.flexible.desc",
    icon: Clock,
  },
  {
    titleKey: "whyUs.interactive.title",
    descKey: "whyUs.interactive.desc",
    icon: Smile,
  },
  {
    titleKey: "whyUs.parentsPartnership.title",
    descKey: "whyUs.parentsPartnership.desc",
    icon: HeartHandshake,
  },
  {
    titleKey: "whyUs.progressTracking.title",
    descKey: "whyUs.progressTracking.desc",
    icon: BarChart3,
  },
];

export const stats = [
  { value: 500, labelKey: "stats.students", icon: Users },
  { value: 40, labelKey: "stats.teachers", icon: GraduationCap },
  { value: 3000, labelKey: "stats.hours", icon: Clock },
  { value: 5, labelKey: "stats.experience", icon: Award },
];

export const testimonials = [
  {
    nameKey: "testimonials.t1.name",
    roleKey: "testimonials.t1.role",
    commentKey: "testimonials.t1.comment",
    rating: 5,
  },
  {
    nameKey: "testimonials.t2.name",
    roleKey: "testimonials.t2.role",
    commentKey: "testimonials.t2.comment",
    rating: 5,
  },
  {
    nameKey: "testimonials.t3.name",
    roleKey: "testimonials.t3.role",
    commentKey: "testimonials.t3.comment",
    rating: 5,
  },
];

export const contactMethods = [
  {
    icon: Phone,
    labelKey: "contact.phone1",
    value: "+20 108 072 4226",
    link: "tel:+201080724226",
    color: "bg-(--color-4)/20 text-(--primary)",
  },
  {
    icon: Phone,
    labelKey: "contact.phone2",
    value: "+20 106 682 9578",
    link: "tel:+201066829578",
    color: "bg-(--color-4)/20 text-(--primary)",
  },
  {
    icon: MessageSquare,
    labelKey: "contact.whatsappChannel",
    valueKey: "contact.joinWhatsappChannel",
    link: whatsappChannelLink,
    color: "bg-emerald-50 text-emerald-700",
  },
];

export const socialLinks = [
  { icon: MessageSquare, href: whatsappChannelLink, label: "قناة واتساب" },
];
