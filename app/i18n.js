
"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { services, experience, education } from "./data";

const en = {
  nav: ["Services", "Work", "Tools", "Journey"],
  contact: "Contact",
  status: "Available for freelance and agency work",
  h1: "Backend, data and WordPress developer.",
  lead: "I build fast websites, web and mobile apps, and reliable data pipelines for agencies and brands in France and across the Maghreb. Based in Annaba, finishing a Master's in Data Engineering.",
  cta: ["View projects", "Get in touch"],
  stats: ["projects delivered", "years of freelance work"],
  svcH: "What I do",
  svcP: "From a brand site to a data dashboard, I handle the build end to end.",
  workH: "Selected work",
  workP: "Live sites, repositories and notebooks. Each card opens the project.",
  toolsH: "Toolbox",
  toolsP: "The languages, frameworks and tools I use every week.",
  jH: "Experience and education",
  jP: "Work in solid pink, studies in outline.",
  ctaH: "Have a project in mind?",
  ctaP: "Tell me what you need and I'll reply with a plan and a timeline.",
  visit: "Visit site",
  code: "View code",
  work: "Work",
  edu: "Education",
  groups: ["Web", "Mobile", "Data"],
  cats: {
    All: "All",
    WordPress: "WordPress",
    "Web development": "Web development",
    Applications: "Applications",
    "Big Data": "Big Data",
  },
  loc: "Annaba, Algeria",
  svc: services,

  exp: experience.map((e) => [e[1], e[3]]),
  eduL: education.map((e) => [e[1], e[3]]),
};

const fr = {
  nav: ["Services", "Projets", "Outils", "Parcours"],
  contact: "Contact",
  status: "Disponible pour des missions freelance et agences",
  h1: "Développeuse backend, data et WordPress.",
  lead: "Je crée des sites rapides, des applications web et mobiles et des pipelines de données fiables pour des agences et des marques en France et au Maghreb. Basée à Annaba, je termine un Master en ingénierie des données.",
  cta: ["Voir les projets", "Me contacter"],
  stats: ["projets livrés", "ans de freelance", "/20 en licence"],
  svcH: "Ce que je fais",
  svcP: "D'un site de marque à un tableau de bord de données, je m'occupe de tout, de A à Z.",
  workH: "Projets sélectionnés",
  workP: "Sites en ligne, dépôts et notebooks. Chaque carte ouvre le projet.",
  toolsH: "Boîte à outils",
  toolsP: "Les langages, frameworks et outils que j'utilise chaque semaine.",
  jH: "Expérience et formation",
  jP: "Travail en rose plein, études en contour.",
  ctaH: "Un projet en tête ?",
  ctaP: "Dites-moi ce dont vous avez besoin, je vous réponds avec un plan et un calendrier.",
  visit: "Voir le site",
  code: "Voir le code",
  work: "Travail",
  edu: "Formation",
  groups: ["Web", "Mobile", "Données"],
  cats: {
    All: "Tous",
    WordPress: "WordPress",
    "Web development": "Développement web",
    Applications: "Applications",
    "Big Data": "Big Data",
  },
  loc: "Annaba, Algérie",

  svc: [
    [
      "Sites WordPress",
      "Thèmes et plugins sur mesure, constructions Elementor et Divi, boutiques WooCommerce rapides et agréables sur tous les écrans.",
    ],
    [
      "Applications web",
      "Back-ends Laravel et PHP avec des front-ends JavaScript propres, conçus pour de vrais utilisateurs et de vraies données.",
    ],
    [
      "Applications mobiles",
      "Applications Flutter et React Native pour iOS et Android, avec Bloc et Provider pour une gestion d'état prévisible.",
    ],
    [
      "Ingénierie des données",
      "Pipelines Python, SQL et R, et tableaux de bord Power BI qui transforment des données brutes en décisions.",
    ],
  ],

  exp: [
    [
      "Développeuse web",
      "Sites et applications WordPress et Laravel : personnalisation de thèmes, développement de plugins et solutions back-end sur mesure, optimisés pour tous les appareils.",
    ],
    [
      "Ingénieure data",
      "Analyse de données avec Python (NumPy, Pandas, Seaborn, Matplotlib) et R, requêtes SQL, tableaux de bord interactifs Power BI et Excel.",
    ],
    [
      "Développeuse d'applications",
      "Applications Flutter et React Native, avec Bloc pour les états complexes et Provider pour l'injection de dépendances.",
    ],
    [
      "Designer WordPress",
      "Sites WordPress responsives, sécurisés et évolutifs, avec thèmes et plugins sur mesure.",
    ],
    [
      "Designer WordPress",
      "Sites avec WordPress, Elementor et Divi, avec des mises en page adaptées à toutes les tailles d'écran.",
    ],
    [
      "Développeuse web",
      "HTML, CSS, JavaScript, PHP et Laravel : des interfaces responsives appuyées sur une logique applicative solide.",
    ],
    [
      "Stagiaire Data Analyst",
      "Collecte, nettoyage et analyse de données d’assurance. Création de requêtes SQL et automatisation du traitement des données avec Python.",
    ],
    [
      "Stagiaire Data Analyst",
      "Préparation des jeux de données, analyse exploratoire (EDA) et développement de modèles prédictifs avec Python.",
    ],
  ],

  eduL: [
    [
      "Master en ingénierie des données",
      "Big data, architecture de données, machine learning, systèmes distribués et cloud.",
    ],
    [
      "Licence en informatique",
      "Programmation, algorithmes, structures de données et développement logiciel.",
    ],
  ],
};

const ar = {
  nav: ["الخدمات", "المشاريع", "الأدوات", "المسيرة"],
  contact: "تواصل",
  status: "متاحة للعمل الحر ومع الوكالات",
  h1: "مطورة باكند وبيانات وووردبريس.",
  lead: "أبني مواقع سريعة وتطبيقات ويب وجوال ومسارات بيانات موثوقة للوكالات والعلامات التجارية في فرنسا والمغرب العربي. مقيمة في عنابة، وأنهي ماجستير هندسة البيانات.",
  cta: ["شاهد المشاريع", "تواصل معي"],
  stats: ["مشروعًا منجزًا", "سنوات من العمل الحر", "/20 معدل الليسانس"],
  svcH: "ماذا أقدّم",
  svcP: "من موقع لعلامة تجارية إلى لوحة بيانات، أتولى البناء من البداية إلى النهاية.",
  workH: "أعمال مختارة",
  workP: "مواقع حية ومستودعات ودفاتر تحليل. كل بطاقة تفتح المشروع.",
  toolsH: "الأدوات",
  toolsP: "اللغات والأطر والأدوات التي أستخدمها كل أسبوع.",
  jH: "الخبرة والتعليم",
  jP: "العمل بالوردي الممتلئ والدراسة بالإطار.",
  ctaH: "هل لديك مشروع؟",
  ctaP: "أخبرني بما تحتاجه وسأرد عليك بخطة وجدول زمني.",
  visit: "زيارة الموقع",
  code: "عرض الكود",
  work: "عمل",
  edu: "تعليم",
  groups: ["الويب", "الجوال", "البيانات"],
  cats: {
    All: "الكل",
    WordPress: "ووردبريس",
    "Web development": "تطوير الويب",
    Applications: "تطبيقات",
    "Big Data": "البيانات الضخمة",
  },
  loc: "عنابة، الجزائر",

  svc: [
    [
      "مواقع ووردبريس",
      "قوالب وإضافات مخصصة، وتصاميم بـ Elementor وDivi، ومتاجر WooCommerce سريعة وواضحة على جميع الشاشات.",
    ],
    [
      "تطبيقات الويب",
      "واجهات خلفية بـ Laravel وPHP مع واجهات أمامية بـ JavaScript نظيفة، مبنية لمستخدمين وبيانات حقيقية.",
    ],
    [
      "تطبيقات الجوال",
      "تطبيقات Flutter وReact Native لنظامي iOS وAndroid، مع Bloc وProvider لإدارة حالة يمكن التنبؤ بها.",
    ],
    [
      "هندسة البيانات",
      "مسارات بيانات بـ Python وSQL وR، ولوحات Power BI تحوّل البيانات إلى قرارات.",
    ],
  ],

  exp: [
    [
      "مطورة ويب",
      "مواقع وتطبيقات ويب بـ WordPress وLaravel: تخصيص القوالب، وتطوير الإضافات، وحلول خلفية مخصصة، مع أداء ممتاز على كل الأجهزة.",
    ],
    [
      "مهندسة بيانات",
      "تحليل البيانات بـ Python (NumPy وPandas وSeaborn وMatplotlib) وR، واستعلامات SQL، ولوحات تفاعلية بـ Power BI وExcel.",
    ],
    [
      "مطورة تطبيقات",
      "تطبيقات Flutter وReact Native، مع Bloc للحالات المعقدة وProvider لحقن الاعتماديات.",
    ],
    [
      "مصممة ووردبريس",
      "مواقع WordPress متجاوبة وآمنة وقابلة للتوسع، بقوالب وإضافات مخصصة.",
    ],
    [
      "مصممة ووردبريس",
      "مواقع بـ WordPress وElementor وDivi، بتخطيطات مناسبة لكل أحجام الشاشات.",
    ],
    [
      "مطورة ويب",
      "HTML وCSS وJavaScript وPHP وLaravel: واجهات متجاوبة مدعومة بمنطق تطبيق متين.",
    ],
    [
      "متدربة في تحليل البيانات",
      "جمع بيانات التأمين وتنظيفها وتحليلها، وإنشاء استعلامات SQL وأتمتة معالجة البيانات باستخدام Python.",
    ],
    [
      "متدربة في تحليل البيانات",
      "إعداد مجموعات البيانات، وإجراء التحليل الاستكشافي (EDA)، وتطوير نماذج تنبؤية باستخدام Python.",
    ],
  ],

  eduL: [
    [
      "ماجستير في هندسة البيانات",
      "البيانات الضخمة، وهندسة البيانات، والتعلم الآلي، والأنظمة الموزعة، والحوسبة السحابية.",
    ],
    [
      "ليسانس في علوم الحاسوب",
      "البرمجة، والخوارزميات، وهياكل البيانات، وتطوير البرمجيات.",
    ],
  ],
};

export const T = { en, fr, ar };

/* Dates et lieux */
const EN = "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" ");

const M = {
  fr: [
    "janv.", "févr.", "mars", "avr.", "mai", "juin",
    "juil.", "août", "sept.", "oct.", "nov.", "déc.",
  ],
  ar: [
    "يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو",
    "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر",
  ],
};

const W = {
  fr: [
    ["Badji Mokhtar University", "Université Badji Mokhtar"],
    ["(remote)", "(à distance)"],
    ["Annaba", "Annaba"],
    ["Freelance", "Freelance"],
  ],
  ar: [
    ["Badji Mokhtar University", "جامعة باجي مختار"],
    ["Annaba", "عنابة"],
    ["(remote)", "(عن بعد)"],
    ["France", "فرنسا"],
    ["Freelance", "عمل حر"],
  ],
};

const dt = (s = "", l = "en") => {
  if (l === "en") return s;

  return s
    .replace(/[A-Z][a-z]{2}/g, (m) => {
      const index = EN.indexOf(m);
      return index >= 0 ? M[l]?.[index] ?? m : m;
    })
    .replace("now", l === "fr" ? "auj." : "الآن")
    .replace("Present", l === "fr" ? "Aujourd'hui" : "حتى الآن");
};

const tw = (s = "", l = "en") => {
  if (l === "en") return s;

  return (W[l] ?? []).reduce(
    (result, [from, to]) => result.replaceAll(from, to),
    s
  );
};

/* Traduction sécurisée de la timeline */
export const loc = (kind, idx, e, lang = "en") => {
  if (!e) return ["", "", "", ""];

  const currentLang = T[lang] ? lang : "en";
  const isWork = kind === "Work";

  const translations = isWork
    ? T[currentLang].exp
    : T[currentLang].eduL;

  const x = translations?.[idx];

  return [
    dt(e[0] ?? "", currentLang),
    x?.[0] ?? e[1] ?? "",
    tw(e[2] ?? "", currentLang),
    x?.[1] ?? e[3] ?? "",
  ];
};

/* Contexte de langue */
const Ctx = createContext({
  lang: "en",
  t: en,
  setLang: () => {},
});

export const useLang = () => useContext(Ctx);

export function LangProvider({ children }) {
  const [lang, set] = useState("en");

  const apply = (l) => {
    const safeLang = T[l] ? l : "en";

    set(safeLang);

    if (typeof document !== "undefined") {
      document.documentElement.lang = safeLang;
      document.documentElement.dir = safeLang === "ar" ? "rtl" : "ltr";
    }

    try {
      localStorage.setItem("lang", safeLang);
    } catch (e) {
      // localStorage peut être indisponible.
    }
  };

  useEffect(() => {
    try {
      const savedLang = localStorage.getItem("lang");

      if (savedLang && T[savedLang]) {
        apply(savedLang);
      }
    } catch (e) {
      // La langue anglaise reste la langue par défaut.
    }
  }, []);

  return (
    <Ctx.Provider value={{ lang, t: T[lang], setLang: apply }}>
      {children}
    </Ctx.Provider>
  );
}
