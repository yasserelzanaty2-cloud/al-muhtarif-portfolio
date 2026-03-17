import React, { createContext, useContext, useState, useEffect } from 'react';
import { SiteContent, Project } from '../types';

type Language = 'ar' | 'en';
export type Theme = 'light' | 'dark';

const translations = {
  ar: {
    nav_home: "الرئيسية",
    nav_about: "من أنا",
    nav_skills: "المهارات",
    nav_projects: "المشاريع",
    nav_experience: "الخبرات",
    nav_certificates: "الشهادات",
    nav_contact: "تواصل",
    admin_login: "دخول المدير",
    admin_logout: "خروج",
    admin_panel: "لوحة التحكم",
    password: "كلمة المرور",
    enter: "دخول",
    change_bg: "تغيير الخلفية",
    change_img: "تغيير الصورة",
    edit_mode: "وضع التعديل مفعل",
    name_label: "الاسم",
    role_label: "المسمى الوظيفي",
    bio_edit_hint: "يمكنك تعديل النص هنا",
    latest_work: "أحدث أعمالي",
    projects_subtitle: "مشاريع نظم المعلومات الجغرافية والتحليل المكاني",
    add_project: "إضافة مشروع جديد",
    project_title: "عنوان المشروع",
    project_category: "التصنيف",
    project_desc: "الوصف",
    details: "التفاصيل",
    contact_title: "تواصل معي",
    contact_subtitle: "خلينا نتواصل",
    whatsapp: "WhatsApp",
    linkedin: "LinkedIn",
    github: "GitHub",
    email_label: "Email",
    phone: "الهاتف",
    send_message_title: "أرسل رسالة مباشرة",
    your_name: "الاسم",
    your_email: "البريد الإلكتروني",
    your_message: "الرسالة",
    send_btn: "إرسال",
    copyright: "جميع الحقوق محفوظة",
    password_error: "كلمة المرور غير صحيحة",
    reset_content: "استعادة المحتوى الافتراضي",
    download_cv: "تحميل السيرة الذاتية",
    placeholders: {
        name: "اسمك الكريم",
        email: "example@mail.com",
        message: "كيف يمكنني مساعدتك؟"
    },
    education_title: "التعليم",
    location_title: "الموقع",
    skills_title: "المهارات التقنية",
    experience_title: "خبرات عملية",
    certificates_title: "الدورات والشهادات",
    projects_title: "أبرز المشاريع"
  },
  en: {
    nav_home: "Home",
    nav_about: "About",
    nav_skills: "Skills",
    nav_projects: "Projects",
    nav_experience: "Experience",
    nav_certificates: "Certificates",
    nav_contact: "Contact",
    admin_login: "Admin Login",
    admin_logout: "Logout",
    admin_panel: "Control Panel",
    password: "Password",
    enter: "Login",
    change_bg: "Change Background",
    change_img: "Change Photo",
    edit_mode: "Edit Mode Active",
    name_label: "Name",
    role_label: "Job Title",
    bio_edit_hint: "You can edit text here",
    latest_work: "Latest Work",
    projects_subtitle: "GIS Projects and Spatial Analysis",
    add_project: "Add New Project",
    project_title: "Project Title",
    project_category: "Category",
    project_desc: "Description",
    details: "Details",
    contact_title: "Get in Touch",
    contact_subtitle: "Let's Connect",
    whatsapp: "WhatsApp",
    linkedin: "LinkedIn",
    github: "GitHub",
    email_label: "Email",
    phone: "Phone",
    send_message_title: "Send Direct Message",
    your_name: "Name",
    your_email: "Email",
    your_message: "Message",
    send_btn: "Send",
    copyright: "All rights reserved",
    password_error: "Incorrect Password",
    reset_content: "Reset Default Content",
    download_cv: "Download CV",
    placeholders: {
        name: "Your Name",
        email: "example@mail.com",
        message: "How can I help you?"
    },
    education_title: "Education",
    location_title: "Location",
    skills_title: "Technical Skills",
    experience_title: "Experience",
    certificates_title: "Certificates",
    projects_title: "Featured Projects"
  }
};

const defaultContentAr: SiteContent = {
  hero: {
    title: "ياسر الزناتي",
    subtitle: "أخصائي نظم معلومات جغرافية | تحويل البيانات المكانية إلى قرارات ذكية",
    ctaText: "تواصل معي",
    backgroundImage: ""
  },
  about: {
    name: "ياسر الزناتي",
    role: "أخصائي نظم معلومات جغرافية (GIS)",
    image: "https://drive.google.com/uc?export=view&id=14sRBWLGy9qpGsjc350ZR7IGCuwJtGcWc",
    bio: "أخصائي نظم معلومات جغرافية واستشعار عن بعد يتمتع بخبرة قوية في التحليل المكاني، والمراقبة البيئية، ورسم خرائط الطاقة المتجددة. ماهر في استخدام ArcGIS و QGIS و Google Earth Engine، مع قدرة مثبتة على تقديم مجموعات بيانات دقيقة وتصورات وأدوات دعم القرار.\n\nمعروف بالقيادة القوية والتواصل الفعال والقدرة على توجيه وتحفيز الزملاء نحو تحقيق أهداف المشروع. بارع في العمل الجماعي وحل المشكلات والقدرة على التكيف وإدارة الوقت، مع عقلية تعاونية تعزز الابتكار والإنتاجية. أسعى للمساهمة بالتميز التقني والحلول المبتكرة والعمل الجماعي المؤثر في المؤسسات التي تركز على التنمية المستدامة والتخطيط البيئي واتخاذ القرارات المكانية.",
    education: {
      degree: "درجة البكالوريوس، برنامج الجيوماتكس",
      institution: "جامعة الزقازيق – كلية الآداب",
      year: "سنة التخرج: 2026 (التقدير العام: جيد جداً مرتفع)"
    },
    location: "ميت غمر، الدقهلية، مصر"
  },
  contact: {
    email: "yasserelzanaty2@gmail.com",
    phone: "01559332262",
    whatsapp: "01559332262",
    linkedin: "https://www.linkedin.com/in/yasser-elzanaty-7a6084233",
    github: "",
    location: "ميت غمر، الدقهلية، مصر",
    cvUrl: "https://drive.google.com/file/d/11VXG_xeGUneusJCn4VrVuqGSQ-JLTXX5/view?usp=sharing"
  },
  projects: [
    {
      id: 1,
      title: "تحليل ملاءمة الهيدروجين الأخضر",
      category: "تحليل مكاني",
      image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=1000&auto=format&fit=crop",
      description: "دراسة تحليلية لتحديد أفضل المواقع لإنشاء محطات إنتاج الهيدروجين الأخضر في مصر بناءً على معايير مكانية وبيئية دقيقة.",
      tags: ["ArcGIS Pro", "Spatial Analysis"],
      features: ["تحليل المعايير المتعددة", "نمذجة مكانية", "تقييم الأثر البيئي"]
    },
    {
      id: 2,
      title: "تطبيقات ولوحات تحكم GIS",
      category: "تطبيقات الويب",
      image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=600&q=80",
      description: "تطوير تطبيقات ولوحات تحكم GIS باستخدام ArcGIS Online، وجمع بيانات ميدانية وخرائط موضوعية لدعم رؤى الأعمال.",
      tags: ["ArcGIS Online", "Dashboards", "Field Maps"],
      features: ["تطبيقات ويب ولوحات تفاعلية", "جمع بيانات ميدانية ودمجها", "خرائط موضوعية"]
    },
    {
      id: 3,
      title: "تحليل مكاني وأتمتة سير العمل",
      category: "تحليل مكاني",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
      description: "تحليل مكاني وخرائط وتصورات، دمج الاستشعار عن بعد، وسكربتات Python لأتمتة GIS وتحسين التكاليف.",
      tags: ["ArcGIS Pro", "QGIS", "Python"],
      features: ["تحسين مكاني وتقليل التكاليف", "مراقبة استخدام الأراضي والبيئة", "أتمتة العمليات"]
    },
    {
      id: 4,
      title: "تحدي تطبيقات الفضاء من ناسا (NASA Space Apps)",
      category: "مسابقات",
      image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=600&q=80",
      description: "المشاركة مرتين في تحدي تطبيقات الفضاء من ناسا (القاهرة وبورسعيد).",
      tags: ["NASA", "Space Apps", "Innovation"],
      features: ["مشروع القاهرة صُنف ضمن أفضل 10% من المشاريع المقدمة.", "مشروع بورسعيد حقق المركز الخامس على مستوى التحدي."]
    },
    {
      id: 5,
      title: "مسابقة الطالب المثالي",
      category: "جوائز",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&q=80",
      description: "المنافسة في مسابقة الطالب المثالي بكلية الآداب، جامعة الزقازيق.",
      tags: ["جامعة الزقازيق", "جوائز", "تفوق"],
      features: ["الحصول على المركز الثاني."]
    },
    {
      id: 6,
      title: "عرض يوم نظم المعلومات الجغرافية العالمي",
      category: "عروض تقديمية",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80",
      description: "تقديم مشروع نظم معلومات جغرافية خلال يوم نظم المعلومات الجغرافية العالمي بالجمعية الجغرافية المصرية.",
      tags: ["World GIS Day", "Presentation", "GIS"],
      features: ["تم التقديم في 7 فبراير 2026.", "الجمعية الجغرافية المصرية."]
    },
    {
      id: 7,
      title: "الفعاليات العلمية والمهنية",
      category: "فعاليات",
      image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=600&q=80",
      description: "الحضور والمساهمة في العديد من الفعاليات العلمية والمهنية.",
      tags: ["IWWI 2025", "AI in GIS", "ندوات"],
      features: ["معرض IWWI 2025.", "ندوات حول دور الذكاء الاصطناعي في نظم المعلومات الجغرافية."]
    }
  ],
  skills: [
    {
      category: "المهارات التقنية",
      items: [
        { name: "ArcGIS Pro, QGIS", percentage: 95 },
        { name: "AutoCAD, Civil 3D", percentage: 85 },
        { name: "Google Earth Pro, Google Earth Engine", percentage: 90 },
        { name: "برمجة Python للتحليل المكاني", percentage: 85 },
        { name: "SQL (Structured Query Language)", percentage: 80 },
        { name: "تطبيق نماذج الذكاء الاصطناعي في GIS والاستشعار عن بعد", percentage: 80 },
        { name: "التحليل المكاني، المراقبة البيئية، ورسم خرائط الطاقة المتجددة", percentage: 95 }
      ]
    },
    {
      category: "المهارات اللغوية",
      items: [
        { name: "العربية: اللغة الأم (بطلاقة)", percentage: 100 },
        { name: "الإنجليزية: B1", percentage: 70 }
      ]
    }
  ],
  experience: [
    {
      id: 1,
      role: "محلل نظم معلومات جغرافية / عالم بيانات مكانية",
      company: "FlueroGen",
      period: "2024 – 2025",
      description: "• إجراء التحليل المكاني لتحديد الأنماط ودعم اتخاذ القرارات القائمة على الموقع\n• استخدام ArcGIS Pro و QGIS لإنشاء خرائط تفصيلية وتصورات جغرافية مكانية\n• دمج بيانات الاستشعار عن بعد لاستخدام الأراضي والمراقبة البيئية\n• تطوير نصوص Python لأتمتة سير عمل نظم المعلومات الجغرافية وتحسين كفاءة معالجة البيانات\n• المساهمة في تقليل التكاليف التشغيلية من خلال تطبيق تقنيات التحسين المكاني"
    },
    {
      id: 2,
      role: "أخصائي نظم معلومات جغرافية مبتدئ",
      company: "Pantheros Labs",
      period: "2023 – 2024",
      description: "• تنظيف وتحويل وترميز مجموعات البيانات المكانية من مصادر مختلفة\n• المساعدة في تطوير تطبيقات الويب ولوحات المعلومات لنظم المعلومات الجغرافية باستخدام ArcGIS Online\n• دعم جمع البيانات الميدانية وضمان التكامل الدقيق في أنظمة نظم المعلومات الجغرافية\n• إجراء الإحصاءات المكانية وإنشاء خرائط موضوعية لدعم رؤى الأعمال\n• التعاون مع فرق متعددة التخصصات لتقديم حلول قائمة على نظم المعلومات الجغرافية للمشاريع الجارية"
    }
  ],
  certificates: [
    {
      id: 1,
      title: "دورة متقدمة في الاستشعار عن بعد ونظم المعلومات الجغرافية (GIS)",
      issuer: "الهيئة القومية للاستشعار عن بعد",
      date: "",
      description: "",
      type: "course"
    },
    {
      id: 2,
      title: "شهادة في تطبيقات نظم المعلومات الجغرافية",
      issuer: "Esri",
      date: "",
      description: "",
      type: "certification"
    },
    {
      id: 3,
      title: "برنامج تدريبي في أنظمة إمداد المياه والصرف الصحي",
      issuer: "شركة مياه الشرب والصرف الصحي بالشرقية",
      date: "",
      description: "",
      type: "workshop"
    },
    {
      id: 4,
      title: "دورة تدريبية في نظم المعلومات الجغرافية",
      issuer: "كلية الآداب، جامعة الزقازيق",
      date: "",
      description: "",
      type: "course"
    },
    {
      id: 5,
      title: "برنامج متخصص في تقنيات نظم المعلومات الجغرافية والتحليل المكاني",
      issuer: "مركز GIS Navigator UHD",
      date: "",
      description: "",
      type: "course"
    },
    {
      id: 6,
      title: "(DEPI) – الذكاء الاصطناعي، هندسة البيانات وعلوم البيانات",
      issuer: "DEPI",
      date: "",
      description: "",
      type: "course"
    }
  ]
};

const defaultContentEn: SiteContent = {
  hero: {
    title: "Yasser Elzanaty",
    subtitle: "GIS Specialist | Transforming Spatial Data into Smart Decisions",
    ctaText: "Contact Me",
    backgroundImage: ""
  },
  about: {
    name: "Yasser Elzanaty",
    role: "GIS Specialist",
    image: "https://drive.google.com/uc?export=view&id=14sRBWLGy9qpGsjc350ZR7IGCuwJtGcWc",
    bio: "GIS and Remote Sensing specialist with strong expertise in spatial analysis, environmental monitoring, and renewable energy mapping. Skilled in ArcGIS, QGIS, and Google Earth Engine, with proven ability to deliver accurate datasets, visualizations, and decision-support tools.\n\nRecognized for strong leadership, effective communication, and the ability to guide and motivate colleagues toward achieving project goals. Adept at teamwork, problem-solving, adaptability, and time management, with a collaborative mindset that fosters innovation and productivity. Seeking to contribute technical excellence, innovative solutions, and impactful teamwork to organizations focused on sustainable development, environmental planning, and geospatial decision-making.",
    education: {
      degree: "Bachelor’s Degree, Geomatics Program",
      institution: "Zagazig University – Faculty of Arts",
      year: "Graduation Year: 2026 (Overall Grade: Very Good High)"
    },
    location: "Met Gamer, Daqahliya, EG"
  },
  contact: {
    email: "yasserelzanaty2@gmail.com",
    phone: "+201559332262",
    whatsapp: "01559332262",
    linkedin: "https://www.linkedin.com/in/yasser-elzanaty-7a6084233",
    github: "",
    location: "Met Gamer, Daqahliya, EG",
    cvUrl: "https://drive.google.com/file/d/11VXG_xeGUneusJCn4VrVuqGSQ-JLTXX5/view?usp=sharing"
  },
  projects: [
    {
      id: 1,
      title: "Green Hydrogen Suitability Analysis",
      category: "Spatial Analysis",
      image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=1000&auto=format&fit=crop",
      description: "Analytical study to determine the best locations for establishing green hydrogen production stations in Egypt based on precise spatial and environmental criteria.",
      tags: ["ArcGIS Pro", "Spatial Analysis"],
      features: ["Multi-criteria Analysis", "Spatial Modeling", "Environmental Impact Assessment"]
    },
    {
      id: 2,
      title: "GIS Web Applications & Dashboards",
      category: "Web Applications",
      image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=600&q=80",
      description: "Developed GIS web applications and dashboards using ArcGIS Online; field data collection and thematic maps for business insights.",
      tags: ["ArcGIS Online", "Dashboards", "Field Maps"],
      features: ["Web apps and interactive dashboards", "Field data collection and integration", "Thematic maps"]
    },
    {
      id: 3,
      title: "Spatial Analysis & Workflow Automation",
      category: "Spatial Analysis",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
      description: "Spatial analysis, maps and visualizations, remote sensing integration, Python scripts for GIS automation and cost optimization.",
      tags: ["ArcGIS Pro", "QGIS", "Python"],
      features: ["Spatial optimization and cost reduction", "Land use and environmental monitoring", "Workflow automation"]
    },
    {
      id: 4,
      title: "NASA Space Apps Challenge",
      category: "Competition",
      image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=600&q=80",
      description: "Participated twice in the NASA Space Apps Challenge (Cairo and Port Said).",
      tags: ["NASA", "Space Apps", "Innovation"],
      features: ["Cairo project ranked among the top 10% of submitted projects.", "Port Said project achieved 5th place overall."]
    },
    {
      id: 5,
      title: "Ideal Student Competition",
      category: "Award",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&q=80",
      description: "Competed in the Ideal Student Competition at the Faculty of Arts, Zagazig University.",
      tags: ["Zagazig University", "Award", "Excellence"],
      features: ["Won 2nd place overall."]
    },
    {
      id: 6,
      title: "World GIS Day Presentation",
      category: "Presentation",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80",
      description: "Presented a GIS project during the World GIS Day at the Egyptian Geographical Society.",
      tags: ["World GIS Day", "Presentation", "GIS"],
      features: ["Presented on February 7, 2026.", "Egyptian Geographical Society"]
    },
    {
      id: 7,
      title: "Scientific and Professional Events",
      category: "Events",
      image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=600&q=80",
      description: "Attended and contributed to multiple scientific and professional events.",
      tags: ["IWWI 2025", "AI in GIS", "Seminars"],
      features: ["IWWI Exhibition 2025.", "Seminars on the role of Artificial Intelligence in Geographic Information Systems."]
    }
  ],
  skills: [
    {
      category: "Technical Skills",
      items: [
        { name: "ArcGIS Pro, QGIS", percentage: 95 },
        { name: "AutoCAD, Civil 3D", percentage: 85 },
        { name: "Google Earth Pro, Google Earth Engine", percentage: 90 },
        { name: "Python programming for geospatial analysis", percentage: 85 },
        { name: "SQL (Structured Query Language)", percentage: 80 },
        { name: "Application of Artificial Intelligence models in GIS and Remote Sensing", percentage: 80 },
        { name: "Spatial analysis, environmental monitoring, and renewable energy mapping", percentage: 95 }
      ]
    },
    {
      category: "Language Skills",
      items: [
        { name: "Arabic: Native (fluent)", percentage: 100 },
        { name: "English: B1", percentage: 70 }
      ]
    }
  ],
  experience: [
    {
      id: 1,
      role: "GIS Analyst / Spatial Data Scientist",
      company: "FlueroGen",
      period: "2024 – 2025",
      description: "• Conducted spatial analysis to identify patterns and support location-based decision-making\n• Utilized ArcGIS Pro and QGIS to create detailed maps and geospatial visualizations\n• Integrated remote sensing data for land use and environmental monitoring\n• Developed Python scripts for automating GIS workflows and improving data processing efficiency\n• Contributed to reducing operational costs by applying spatial optimization techniques"
    },
    {
      id: 2,
      role: "Junior GIS Specialist",
      company: "Pantheros Labs",
      period: "2023 – 2024",
      description: "• Cleaned, transformed, and geocoded spatial datasets from various sources\n• Assisted in developing GIS web applications and dashboards using ArcGIS Online\n• Supported field data collection and ensured accurate integration into GIS systems\n• Conducted spatial statistics and created thematic maps to support business insights\n• Collaborated with cross-functional teams to deliver GIS-based solutions for ongoing projects"
    }
  ],
  certificates: [
    {
      id: 1,
      title: "Advanced Course in Remote Sensing and Geographic Information Systems (GIS)",
      issuer: "National Authority for Remote Sensing",
      date: "",
      description: "",
      type: "course"
    },
    {
      id: 2,
      title: "Certificate in GIS Applications",
      issuer: "Esri",
      date: "",
      description: "",
      type: "certification"
    },
    {
      id: 3,
      title: "Training Program in Water Supply and Wastewater Management Systems",
      issuer: "Sharqia Drinking Water and Wastewater Company",
      date: "",
      description: "",
      type: "workshop"
    },
    {
      id: 4,
      title: "Training Course in Geographic Information Systems",
      issuer: "Faculty of Arts, Zagazig University",
      date: "",
      description: "",
      type: "course"
    },
    {
      id: 5,
      title: "Specialized Program in GIS and Spatial Analysis Techniques",
      issuer: "GIS Navigator UHD Center",
      date: "",
      description: "",
      type: "course"
    },
    {
      id: 6,
      title: "(DEPI) – AI, Data Engineering and Data Science",
      issuer: "DEPI",
      date: "",
      description: "",
      type: "course"
    }
  ]
};

interface ContentContextType {
  content: SiteContent;
  language: Language;
  setLanguage: (lang: Language) => void;
  theme: Theme;
  toggleTheme: () => void;
  t: typeof translations.ar;
  isAdmin: boolean;
  login: (password: string) => boolean;
  logout: () => void;
  updateContent: (section: keyof SiteContent, data: any) => void;
  updateProject: (id: number, data: Partial<Project>) => void;
  addProject: () => void;
  deleteProject: (id: number) => void;
  resetContent: () => void;
}

const ContentContext = createContext<ContentContextType | undefined>(undefined);

export const ContentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');
  const [theme, setTheme] = useState<Theme>('dark');
  const [contentAr, setContentAr] = useState<SiteContent>(defaultContentAr);
  const [contentEn, setContentEn] = useState<SiteContent>(defaultContentEn);
  const [isAdmin, setIsAdmin] = useState(false);

  // Load from local storage on mount
  useEffect(() => {
    const savedAr = localStorage.getItem('site_content_ar');
    const savedEn = localStorage.getItem('site_content_en');
    const savedLang = localStorage.getItem('portfolio_site_language') as Language;
    const savedTheme = localStorage.getItem('portfolio_site_theme') as Theme;
    
    if (savedAr) {
      try { setContentAr(JSON.parse(savedAr)); } catch (e) { console.error("Failed parse AR"); }
    }
    if (savedEn) {
      try { setContentEn(JSON.parse(savedEn)); } catch (e) { console.error("Failed parse EN"); }
    }
    if (savedLang && (savedLang === 'ar' || savedLang === 'en')) {
      setLanguage(savedLang);
    }
    if (savedTheme && (savedTheme === 'light' || savedTheme === 'dark')) {
      setTheme(savedTheme);
    }
  }, []);

  // Update document direction and language
  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    localStorage.setItem('portfolio_site_language', language);
  }, [language]);

  // Update theme
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('portfolio_site_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  // Save to local storage on change
  useEffect(() => {
    localStorage.setItem('site_content_ar', JSON.stringify(contentAr));
  }, [contentAr]);

  useEffect(() => {
    localStorage.setItem('site_content_en', JSON.stringify(contentEn));
  }, [contentEn]);

  const content = language === 'ar' ? contentAr : contentEn;
  const setContent = language === 'ar' ? setContentAr : setContentEn;

  const login = (password: string) => {
    if (password === '371920') {
      setIsAdmin(true);
      return true;
    }
    return false;
  };

  const logout = () => setIsAdmin(false);

  const updateContent = (section: keyof SiteContent, data: any) => {
    setContent(prev => ({
      ...prev,
      [section]: { ...prev[section], ...data }
    }));
  };

  const updateProject = (id: number, data: Partial<Project>) => {
    setContent(prev => ({
      ...prev,
      projects: prev.projects.map(p => p.id === id ? { ...p, ...data } : p)
    }));
  };

  const addProject = () => {
    const newProject: Project = {
      id: Date.now(),
      title: language === 'ar' ? "مشروع جديد" : "New Project",
      category: language === 'ar' ? "تصنيف" : "Category",
      description: language === 'ar' ? "وصف المشروع..." : "Project Description...",
      image: "https://placehold.co/600x400?text=New+Project"
    };
    setContent(prev => ({
      ...prev,
      projects: [newProject, ...prev.projects]
    }));
  };

  const deleteProject = (id: number) => {
    setContent(prev => ({
      ...prev,
      projects: prev.projects.filter(p => p.id !== id)
    }));
  };

  const resetContent = () => {
    if(confirm(translations[language].reset_content + "?")) {
      if (language === 'ar') setContentAr(defaultContentAr);
      else setContentEn(defaultContentEn);
    }
  }

  return (
    <ContentContext.Provider value={{ 
      content, 
      language,
      setLanguage,
      theme,
      toggleTheme,
      t: translations[language],
      isAdmin, 
      login, 
      logout, 
      updateContent,
      updateProject,
      addProject,
      deleteProject,
      resetContent
    }}>
      {children}
    </ContentContext.Provider>
  );
};

export const useContent = () => {
  const context = useContext(ContentContext);
  if (!context) throw new Error("useContent must be used within ContentProvider");
  return context;
};