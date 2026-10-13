export interface CompanyConfig {
  name: {
    en: string;
    zh: string;
  };
  shortName: {
    en: string;
    zh: string;
  };
  tagline: {
    en: string;
    zh: string;
  };
  contact: {
    email: string; // Placeholder in config
    phone: string; // Placeholder in config
    whatsappNumber: string; // E.164 without +, e.g. "8618000000000"
    whatsappDisplay: string; // Display formatted, e.g. "+86 180 0000 0000"
    wechatId: string; // WeChat ID
    wechatQrCodePath: string;
    address: {
      en: string;
      zh: string;
    };
    factoryAddress: {
      en: string;
      zh: string;
    };
    instagramUsername: string;
    instagramUrl: string;
  };
  certifications: {
    fscCertificateNumber: string; // Placeholder in config
    iso9001: string; // Placeholder
    ceDeclaration: string; // Placeholder
  };
  stats: {
    exportCountriesCount: number;
    annualCapacityM3: string; // Placeholder clearly marked
    establishedYear: string; // Placeholder clearly marked
  };
}

export const companyConfig: CompanyConfig = {
  name: {
    en: "Senweida Trading Co., Ltd.",
    zh: "徐州森炜达贸易有限公司",
  },
  shortName: {
    en: "Senweida",
    zh: "森炜达",
  },
  tagline: {
    en: "Premium plywood & film faced construction formwork. Durable & waterproof for construction projects.",
    zh: "专业高品质胶合板与建筑覆膜模板制造出口商 · 耐用防水 · 专为工程筑造",
  },
  contact: {
    email: "export@senweidatrading.com", // [EDITABLE PLACEHOLDER: Update with your official email]
    phone: "+86 (0) 516 8888 8888", // [EDITABLE PLACEHOLDER: Update with your company phone]
    whatsappNumber: "8618000000000", // [EDITABLE PLACEHOLDER: Format 86XXXXXXXXXXX for wa.me link]
    whatsappDisplay: "+86 180 0000 0000", // [EDITABLE PLACEHOLDER: Format for user display]
    wechatId: "senweidaplywood", // [EDITABLE PLACEHOLDER: Update with your WeChat ID]
    wechatQrCodePath: "/images/wechat-qr.png",
    address: {
      en: "Industrial Park, Pizhou City, Xuzhou, Jiangsu Province, China", // [EDITABLE PLACEHOLDER]
      zh: "中国江苏省徐州市邳州林产工业园", // [EDITABLE PLACEHOLDER]
    },
    factoryAddress: {
      en: "Senweida Plywood Manufacturing Base, Timber Processing Zone, Jiangsu, China", // [EDITABLE PLACEHOLDER]
      zh: "江苏徐州森炜达胶合板制造基地 · 木业加工聚集区", // [EDITABLE PLACEHOLDER]
    },
    instagramUsername: "@senweidatradingc",
    instagramUrl: "https://www.instagram.com/senweidatradingc",
  },
  certifications: {
    fscCertificateNumber: "FSC-C000000 / FSC-STD-40-004", // [EDITABLE PLACEHOLDER: Insert official FSC Certificate Code]
    iso9001: "ISO 9001:2015 Quality Management System",
    ceDeclaration: "EN 13986:2004+A1:2015 CE Marking for Construction",
  },
  stats: {
    exportCountriesCount: 40,
    annualCapacityM3: "120,000 m³", // [EDITABLE PLACEHOLDER: Verified factory capacity]
    establishedYear: "Direct Source Factory", // [EDITABLE PLACEHOLDER: Set year if desired or leave as direct source]
  },
};
