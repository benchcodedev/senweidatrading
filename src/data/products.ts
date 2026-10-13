export type ProductCategory = 'all' | 'film-faced' | 'hardwood-specialty' | 'timber-beams';

export interface LocalizedText {
  en: string;
  zh: string;
}

export interface ProductSpecRow {
  key: string;
  label: LocalizedText;
  value: LocalizedText;
}

export interface Product {
  id: string;
  slug: string;
  code: string;
  category: Exclude<ProductCategory, 'all'>;
  featured: boolean;
  name: LocalizedText;
  subtitle: LocalizedText;
  shortDescription: LocalizedText;
  fullDescription: LocalizedText;
  applications: {
    en: string[];
    zh: string[];
  };
  highlights: {
    en: string[];
    zh: string[];
  };
  images: string[];
  specs: ProductSpecRow[];
}

export const productCategories: {
  id: ProductCategory;
  label: LocalizedText;
  count?: number;
}[] = [
  {
    id: 'all',
    label: {
      en: 'All Specifications',
      zh: '全部产品规格',
    },
  },
  {
    id: 'film-faced',
    label: {
      en: 'Film Faced Plywood',
      zh: '建筑覆膜模板',
    },
  },
  {
    id: 'hardwood-specialty',
    label: {
      en: 'Hardwood & Specialty Plywood',
      zh: '硬木及特种胶合板',
    },
  },
  {
    id: 'timber-beams',
    label: {
      en: 'H20 Timber Beams & LVL',
      zh: 'H20 木工字梁与工程木',
    },
  },
];

export const products: Product[] = [
  {
    id: 'swd-ffp-01',
    slug: 'phenolic-film-faced-plywood',
    code: 'SWD-FFP-101',
    category: 'film-faced',
    featured: true,
    name: {
      en: 'Phenolic Film Faced Construction Formwork (Whole Core)',
      zh: '全整芯酚醛建筑覆膜模板（黑膜/棕膜）',
    },
    subtitle: {
      en: 'High-density waterproof concrete shuttering panel with phenolic WBP bonding',
      zh: '高密度防水混凝土浇筑模板 · 酚醛WBP耐水胶合工艺',
    },
    shortDescription: {
      en: 'Engineered for high-rise concrete pouring and civil infrastructure. Two-time hot-pressed whole poplar or combi core bonded with WBP phenolic glue and high-grammage imported or domestic film.',
      zh: '专为高层建筑混凝土浇筑及大型市政基建工程研发。采用二次热压定厚砂光工艺，全整芯杨木或杨桉复合芯材，配以酚醛WBP防水胶及高克重耐磨覆膜纸。',
    },
    fullDescription: {
      en: 'Our flagship Phenolic Film Faced Plywood is manufactured on calibrated multi-daylight hot presses to ensure uniform thickness tolerance (±0.3mm to ±0.5mm) and void-free internal laminations. Each sheet undergoes double-sided calibration sanding prior to film lamination, yielding a mirror-smooth architectural concrete finish without plastering. All four edges are triple-sealed with waterproof acrylic paint in custom brand colors.',
      zh: '森炜达主打全整芯酚醛建筑覆膜模板，由高精度多层热压机压制成型，确保板材厚度公差严格控制在 ±0.3mm 至 ±0.5mm 之间，内部层压密实无空洞。每张基板在覆膜前均经过双面定厚砂光处理，拆模后混凝土表面平整光洁，可达清水混凝土效果。板材四周均经三道防水丙烯酸封边漆密封处理，支持客户专属颜色及LOGO丝印定制。',
    },
    applications: {
      en: [
        'High-rise shear wall & slab concrete formwork',
        'Bridge piers, tunnels & highway culverts',
        'Industrial plant foundations & water treatment tanks',
        'Modular aluminum/steel frame formwork infill panels',
      ],
      zh: [
        '高层建筑剪力墙与楼板混凝土浇筑系统',
        '桥梁墩柱、隧道衬砌及高速公路涵洞工程',
        '大型工业厂房基础与水处理池体支模',
        '模块化铝合金/钢框体系配套镶嵌面板',
      ],
    },
    highlights: {
      en: [
        '72-hour boiling water test passed without delamination',
        'Calibrated twice-hot-press process for uniform thickness',
        'Custom logo screen-printing & waterproof edge sealing',
        'FSC certified sustainable core veneer available',
      ],
      zh: [
        '通过72小时沸水煮测试，胶层不开裂、不脱胶',
        '二次成型定厚砂光热压工艺，板面平整度极佳',
        '支持定制LOGO丝网印刷及多重防水封边喷涂',
        '可选配FSC认证可持续森林管理原木芯材',
      ],
    },
    images: [
      '/images/formwork-1.jpg',
      '/images/formwork-2.jpg',
      '/images/factory-1.jpg',
    ],
    specs: [
      {
        key: 'thickness',
        label: { en: 'Standard Thickness', zh: '标准厚度' },
        value: {
          en: '9mm, 12mm, 15mm, 18mm, 21mm, 25mm (Custom available)',
          zh: '9mm, 12mm, 15mm, 18mm, 21mm, 25mm（支持定制特殊厚度）',
        },
      },
      {
        key: 'size',
        label: { en: 'Standard Dimensions', zh: '标准幅面尺寸' },
        value: {
          en: '1220 × 2440mm (4×8ft), 1250 × 2500mm, 915 × 1830mm (3×6ft)',
          zh: '1220 × 2440mm (4×8尺), 1250 × 2500mm, 915 × 1830mm (3×6尺)',
        },
      },
      {
        key: 'face',
        label: { en: 'Film Face / Back', zh: '覆膜表面材质' },
        value: {
          en: 'Black / Dark Brown / Red Phenolic Film (120g/m² – 240g/m², Dynea option)',
          zh: '黑膜 / 棕膜 / 红膜（120g/m² – 240g/m²，可选配芬兰太尔Dynea进口膜纸）',
        },
      },
      {
        key: 'core',
        label: { en: 'Core Material', zh: '芯板材质结构' },
        value: {
          en: 'AA-Grade Whole Poplar, Eucalyptus, or Poplar-Eucalyptus Combi Core',
          zh: 'AA级全整芯杨木、全桉木或杨桉复合整芯结构',
        },
      },
      {
        key: 'glue',
        label: { en: 'Adhesive / Glue Type', zh: '胶水环保及耐水等级' },
        value: {
          en: 'Phenolic WBP (Water Boiled Proof) / Melamine WBP',
          zh: '酚醛 WBP 防水胶 / 三聚氰胺 WBP 耐水胶',
        },
      },
      {
        key: 'reuseCycles',
        label: { en: 'Expected Reuse Cycles', zh: '理论周转使用次数' },
        value: {
          en: '10–25+ pours depending on core & film specification (To be confirmed per order)',
          zh: '10–25+ 次以上，视芯材等级与膜纸规格而定（按具体订单规格确认）',
        },
      },
      {
        key: 'moisture',
        label: { en: 'Moisture Content', zh: '出厂含水率' },
        value: {
          en: '8% – 12% at time of shipment',
          zh: '出厂控制于 8% – 12%',
        },
      },
      {
        key: 'tolerance',
        label: { en: 'Thickness Tolerance', zh: '厚度公差控制' },
        value: {
          en: '±0.3mm to ±0.5mm (Twice Hot Pressed)',
          zh: '±0.3mm 至 ±0.5mm（二次热压定厚砂光）',
        },
      },
    ],
  },
  {
    id: 'swd-ffp-02',
    slug: 'eucalyptus-hardwood-formwork',
    code: 'SWD-FFP-108',
    category: 'film-faced',
    featured: true,
    name: {
      en: 'Eucalyptus Hardwood Core Heavy-Duty Formwork',
      zh: '全桉木硬木高强建筑覆膜模板',
    },
    subtitle: {
      en: 'High modulus of elasticity for heavy civil engineering and multi-cycle slab systems',
      zh: '高弹性模量与高静曲强度 · 适用于重载土木工程与高频周转体系',
    },
    shortDescription: {
      en: 'Constructed with high-density eucalyptus hardwood veneers (~600–650 kg/m³) to resist deflection under heavy wet-concrete loads and deliver superior screw-holding strength.',
      zh: '精选高密度全桉木硬木单板组坯（密度约 600–650 kg/m³），在重载湿混凝土浇筑压力下抗弯变形能力极强，握钉力与抗冲击性能优异。',
    },
    fullDescription: {
      en: 'When construction schedules demand repeated stripping and re-erection under tropical humidity or heavy structural loads, our Eucalyptus Hardwood Core Formwork provides extra mechanical rigidity. Tightlyscarfed and machine-stitched core veneers eliminate core overlaps and gaps, ensuring clean saw cuts on site without splintering.',
      zh: '针对热带高湿气候及大型承重结构施工中高频拆装的需求，森炜达全桉木硬木覆膜模板具备卓越的力学刚度。芯板经精密斜磨对接与机械连芯，彻底消除传统叠芯与离缝缺陷，施工现场裁切边缘齐整不劈裂。',
    },
    applications: {
      en: [
        'Heavy transfer slabs & commercial podium decks',
        'Infrastructure bridges, viaducts & metro stations',
        'System formwork panel replacement',
        'High-humidity coastal construction projects',
      ],
      zh: [
        '大型商业综合体转换层及厚板浇筑',
        '跨海大桥、高架桥墩及地铁车站主体工程',
        '框式体系模板面板更新替换',
        '沿海高湿度地区建筑施工项目',
      ],
    },
    highlights: {
      en: [
        'High density (~620 kg/m³) & superior static bending strength',
        'Zero internal core voids on cross-cut inspection',
        'Available with 180g/m² imported phenolic film',
        'Sealed edges against tropical moisture ingress',
      ],
      zh: [
        '约 620 kg/m³ 高密度板芯，静曲强度与弹性模量优异',
        '横截切面密实平整，无内部空洞与叠芯',
        '可搭配 180g/m² 高克重进口酚醛浸渍膜纸',
        '四周强效防潮封边，抵御沿海及热带湿气侵蚀',
      ],
    },
    images: [
      '/images/formwork-2.jpg',
      '/images/formwork-1.jpg',
      '/images/qc-1.jpg',
    ],
    specs: [
      {
        key: 'thickness',
        label: { en: 'Standard Thickness', zh: '标准厚度' },
        value: {
          en: '12mm, 15mm, 18mm, 21mm (Custom thicknesses upon request)',
          zh: '12mm, 15mm, 18mm, 21mm（可按工程图纸定制）',
        },
      },
      {
        key: 'size',
        label: { en: 'Standard Dimensions', zh: '标准幅面尺寸' },
        value: {
          en: '1220 × 2440mm, 1250 × 2500mm',
          zh: '1220 × 2440mm, 1250 × 2500mm',
        },
      },
      {
        key: 'face',
        label: { en: 'Film Face / Back', zh: '覆膜表面材质' },
        value: {
          en: 'Phenolic Brown / Black Film (135g/m² – 220g/m²)',
          zh: '酚醛棕膜 / 黑膜（135g/m² – 220g/m²）',
        },
      },
      {
        key: 'core',
        label: { en: 'Core Material', zh: '芯板材质结构' },
        value: {
          en: '100% Selected Eucalyptus Hardwood Veneers (9 to 13 plies)',
          zh: '100% 优选全桉木硬木整芯单板（9层至13层结构）',
        },
      },
      {
        key: 'glue',
        label: { en: 'Adhesive / Glue Type', zh: '胶水环保及耐水等级' },
        value: {
          en: '100% Phenolic WBP Glue (72h Boiling Test)',
          zh: '纯酚醛 WBP 防水胶（通过72小时沸水测试）',
        },
      },
      {
        key: 'reuseCycles',
        label: { en: 'Expected Reuse Cycles', zh: '理论周转使用次数' },
        value: {
          en: '15–30+ cycles depending on site maintenance (To be confirmed)',
          zh: '15–30+ 次以上，视工地脱模养护情况而定（待按订单确认）',
        },
      },
      {
        key: 'density',
        label: { en: 'Average Density', zh: '平均密度' },
        value: {
          en: '600 – 650 kg/m³',
          zh: '600 – 650 kg/m³',
        },
      },
      {
        key: 'moisture',
        label: { en: 'Moisture Content', zh: '出厂含水率' },
        value: {
          en: '8% – 12%',
          zh: '8% – 12%',
        },
      },
    ],
  },
  {
    id: 'swd-ffp-03',
    slug: 'finger-joint-film-faced-plywood',
    code: 'SWD-FFP-115',
    category: 'film-faced',
    featured: false,
    name: {
      en: 'Finger-Joint Core Film Faced Plywood',
      zh: '指接芯经济型建筑覆膜模板',
    },
    subtitle: {
      en: 'Cost-effective concrete shuttering for standard residential and commercial projects',
      zh: '高性价比工程支模方案 · 适用于常规住宅及商业建筑项目',
    },
    shortDescription: {
      en: 'Precision-milled finger-joint core strips hydraulically pressed and calibrated with fresh poplar face veneers and water-resistant film for reliable budget-conscious construction.',
      zh: '采用精密铣齿指接木芯，表面铺装新杨木面皮与防水覆膜纸，经高压定厚砂光制成，为注重成本控制的住宅及中小型项目提供稳定可靠的支模选择。',
    },
    fullDescription: {
      en: 'Designed for contractors seeking an economical balance between cost per square meter and reliable concrete finish for 5–10 pour cycles. Every finger-joint core slab is double-sanded to eliminate telegraphing before applying fresh top/bottom veneers and phenolic film.',
      zh: '专为追求单方综合成本优势、周转需求在 5–10 次的标准房建工程打造。每张指接芯板均经过双面强力定厚砂光，消除接缝痕迹后再复合全新整张杨木面皮与酚醛膜纸，保证板面平整度与浇筑质量。',
    },
    applications: {
      en: [
        'Low-to-mid-rise residential concrete construction',
        'Foundation footings, beams & secondary structural pours',
        'Wholesale distribution for local building material yards',
      ],
      zh: [
        '多层及中高层住宅混凝土结构施工',
        '基础承台、圈梁构造柱及二次结构支模',
        '海外建材批发商及工程集采常备库存规格',
      ],
    },
    highlights: {
      en: [
        'Highly competitive container landed cost',
        'Double-sanded smooth surface with fresh wood face veneers',
        'Melamine or phenolic WBP glue options',
        'High container loading volume efficiency',
      ],
      zh: [
        '极具竞争力的整柜到港成本优势',
        '双面砂光加铺全新木皮，板面光洁无透底',
        '提供三聚氰胺耐水胶与酚醛胶多种配比方案',
        '标准托盘或散装高装柜量优化方案',
      ],
    },
    images: [
      '/images/formwork-1.jpg',
      '/images/process-pressing.jpg',
      '/images/loading-1.jpg',
    ],
    specs: [
      {
        key: 'thickness',
        label: { en: 'Standard Thickness', zh: '标准厚度' },
        value: {
          en: '12mm, 15mm, 17mm, 18mm',
          zh: '12mm, 15mm, 17mm, 18mm',
        },
      },
      {
        key: 'size',
        label: { en: 'Standard Dimensions', zh: '标准幅面尺寸' },
        value: {
          en: '1220 × 2440mm (4×8ft)',
          zh: '1220 × 2440mm (4×8尺)',
        },
      },
      {
        key: 'face',
        label: { en: 'Film Face / Back', zh: '覆膜表面材质' },
        value: {
          en: 'Black / Brown Film, Custom Printed Logo Film',
          zh: '黑膜 / 棕膜 / 定制印字LOGO膜纸',
        },
      },
      {
        key: 'core',
        label: { en: 'Core Material', zh: '芯板材质结构' },
        value: {
          en: 'Calibrated Poplar Finger-Joint Core + 2 Fresh Face Plies',
          zh: '精密砂光杨木指接芯 + 上下两层全新整张面皮',
        },
      },
      {
        key: 'glue',
        label: { en: 'Adhesive / Glue Type', zh: '胶水环保及耐水等级' },
        value: {
          en: 'Melamine WBP / Phenolic WBP',
          zh: '三聚氰胺 WBP 耐水胶 / 酚醛 WBP 防水胶',
        },
      },
      {
        key: 'reuseCycles',
        label: { en: 'Expected Reuse Cycles', zh: '理论周转使用次数' },
        value: {
          en: '5–10 pours depending on glue grade (To be confirmed)',
          zh: '5–10 次，视胶水配置等级而定（按订单确认）',
        },
      },
    ],
  },
  {
    id: 'swd-hsp-01',
    slug: 'structural-hardwood-commercial-plywood',
    code: 'SWD-HSP-201',
    category: 'hardwood-specialty',
    featured: true,
    name: {
      en: 'Hardwood & Specialty Structural Plywood (Birch / Okoume / Poplar)',
      zh: '硬木及特种结构胶合板（桦木 / 奥古曼 / 杨桉多层板）',
    },
    subtitle: {
      en: 'Precision-calibrated multi-ply panels for industrial packaging, flooring, furniture & structural decking',
      zh: '精密定厚多层结构板材 · 适用于工业包装、车船底板、家具制造及建筑结构铺板',
    },
    shortDescription: {
      en: 'Available in Birch, Okoume, Bintangor, Pine, and Bleached Poplar faces with E1/E0/CARB P2 or exterior WBP adhesive systems. Sanded to fine grit tolerances for industrial and structural applications.',
      zh: '提供桦木、奥古曼、冰糖果、松木及漂白杨木等多种高等级表面单板，搭配 E1/E0/CARB P2 环保胶或户外级 WBP 防水胶，经高目数精密砂光，满足工业制造与结构工程严苛要求。',
    },
    fullDescription: {
      en: 'Senweida manufactures a full range of Hardwood & Specialty Plywood engineered for importers, timber distributors, and industrial manufacturers. Whether you require multi-ply birch-faced structural panels for CNC machining and die-boards, Okoume commercial plywood for joinery, or CDX structural sheathing for roofing and subfloors, our production lines calibrate thickness, moisture, and formaldehyde emission to international destination standards.',
      zh: '森炜达为全球木材进口商、分销商及工业制造企业生产全系列硬木及特种胶合板。无论是用于CNC精雕加工与刀模板的多层桦木结构板、用于高端木作家具的奥古曼商业胶合板，还是用于屋面与地板基层铺装的CDX结构板，我们均可按目的国标准严格控制厚度公差、含水率及环保甲醛释放量。',
    },
    applications: {
      en: [
        'Structural subflooring, roof sheathing & wall bracing',
        'Cabinetry, commercial joinery & architectural millwork',
        'Heavy-duty export crating, laser die-boards & vehicle flooring',
        'Container flooring & industrial shelving',
      ],
      zh: [
        '建筑结构基层铺板、屋面面板及墙体承重衬板',
        '高端定制橱柜、商业木作展柜及室内装饰基层',
        '重型机械出口包装箱、激光刀模板及车厢底板',
        '集装箱底板修复与重型工业货架层板',
      ],
    },
    highlights: {
      en: [
        'Wide thickness range from 3.6mm up to 40mm multi-ply',
        'Low formaldehyde emission (E0 / E1 / CARB Phase 2 compliant options)',
        'BB/BB, BB/CC, CP/CP, and C+/C grading available',
        'Custom CNC cut-to-size & anti-slip wire-mesh embossing options',
      ],
      zh: [
        '覆盖 3.6mm 至 40mm 全厚度区间多层结构压制',
        '支持 E0 / E1 / 美标 CARB P2 等低甲醛环保胶水定制',
        '提供 BB/BB, BB/CC, CP/CP 及 C+/C 等多种国际表面等级',
        '支持定制尺寸裁切及防滑网纹压花等特种加工',
      ],
    },
    images: [
      '/images/hardwood-1.jpg',
      '/images/factory-2.jpg',
      '/images/process-sanding.jpg',
    ],
    specs: [
      {
        key: 'thickness',
        label: { en: 'Standard Thickness', zh: '标准厚度' },
        value: {
          en: '3.6mm, 5.2mm, 9mm, 12mm, 15mm, 18mm, 21mm, 25mm, 30mm (Custom available)',
          zh: '3.6mm, 5.2mm, 9mm, 12mm, 15mm, 18mm, 21mm, 25mm, 30mm（支持定制）',
        },
      },
      {
        key: 'size',
        label: { en: 'Standard Dimensions', zh: '标准幅面尺寸' },
        value: {
          en: '1220 × 2440mm, 1250 × 2500mm, 1525 × 3050mm',
          zh: '1220 × 2440mm, 1250 × 2500mm, 1525 × 3050mm',
        },
      },
      {
        key: 'face',
        label: { en: 'Face / Back Veneer', zh: '表背板单板树种' },
        value: {
          en: 'Birch, Okoume, Bintangor, Radiata Pine, Bleached Poplar',
          zh: '桦木、奥古曼、冰糖果、辐射松、漂白杨木',
        },
      },
      {
        key: 'core',
        label: { en: 'Core Material', zh: '芯板材质结构' },
        value: {
          en: 'Full Eucalyptus, Full Birch, Poplar, or Combi Hardwood Core',
          zh: '全桉木、全桦木、全杨木或杨桉复合整芯',
        },
      },
      {
        key: 'glue',
        label: { en: 'Adhesive / Emission Grade', zh: '胶水及环保等级' },
        value: {
          en: 'E0 / E1 / MR / Melamine WBP / Phenolic Exterior WBP',
          zh: 'E0 / E1 环保胶 / MR 防潮胶 / 酚醛户外 WBP 防水胶',
        },
      },
      {
        key: 'grade',
        label: { en: 'Surface Grade', zh: '面板质量等级' },
        value: {
          en: 'B/BB, BB/BB, BB/CC, C+/C, CDX (To be confirmed per inquiry)',
          zh: 'B/BB, BB/BB, BB/CC, C+/C, CDX（按询盘具体用途确认）',
        },
      },
      {
        key: 'sanding',
        label: { en: 'Surface Finish', zh: '表面砂光处理' },
        value: {
          en: 'Double-side calibrated & fine sanded (180# / 240# grit)',
          zh: '双面定厚加精细砂光（180目 / 240目砂带）',
        },
      },
    ],
  },
  {
    id: 'swd-hsp-02',
    slug: 'wire-mesh-anti-slip-plywood',
    code: 'SWD-HSP-209',
    category: 'hardwood-specialty',
    featured: false,
    name: {
      en: 'Wire-Mesh & Hexa Anti-Slip Phenolic Plywood',
      zh: '防滑网纹 / 六角花纹重型酚醛胶合板',
    },
    subtitle: {
      en: 'Wear-resistant embossed phenolic surface for scaffolding platforms, truck decks & stages',
      zh: '高耐磨防滑压花酚醛表面 · 专为脚手架踏板、车厢底板及舞台看台设计',
    },
    shortDescription: {
      en: 'High-density eucalyptus or birch core laminated with heavy 220g/m²–240g/m² phenolic film and hot-embossed with wire-mesh or hexagonal anti-slip texture.',
      zh: '采用高密度全桉木或桦木多层板芯，表面压贴 220g/m²–240g/m² 加厚酚醛覆膜纸，经高温压花模具一次成型防滑网纹或六角防滑纹路。',
    },
    fullDescription: {
      en: 'Built for industrial environments where slip resistance, mechanical load bearing, and weather durability are critical. The embossed wire-mesh or hexagonal pattern provides high friction even in wet or muddy site conditions, while the smooth reverse side mounts cleanly onto steel or aluminum frames.',
      zh: '专为对防滑安全、机械承重及全天候耐候性要求极高的工业场景打造。正面压制的钢丝网纹或六角凸起花纹在雨水、泥泞等恶劣工况下依然提供可靠的摩擦防滑性能，背面平滑覆膜便于与钢架或铝框紧密贴合固定。',
    },
    applications: {
      en: [
        'Construction walkways, scaffolding platforms & loading ramps',
        'Commercial trailer flooring & utility van decking',
        'Event staging, grandstand seating & cold-storage floors',
      ],
      zh: [
        '建筑工地安全通道、脚手架踏板及装卸登车桥面板',
        '重型厢式货车底板、拖车平板及特种车辆铺板',
        '大型演出舞台台面、体育场看台及冷库防滑地面',
      ],
    },
    highlights: {
      en: [
        'R10–R12 slip-resistance embossed surface pattern',
        'High Taber abrasion resistance for heavy foot & wheel traffic',
        '100% Exterior WBP phenolic bonding throughout',
        'Available in custom cut sizes and CNC edge profiling',
      ],
      zh: [
        '高摩擦防滑压花表面，适应潮湿泥泞作业环境',
        '高耐磨转数，承受高频人员走动与推车碾压',
        '全板采用户外级纯酚醛 WBP 防水胶压制',
        '支持按车厢或脚手架尺寸定制裁切与封边',
      ],
    },
    images: [
      '/images/hardwood-1.jpg',
      '/images/formwork-2.jpg',
      '/images/qc-1.jpg',
    ],
    specs: [
      {
        key: 'thickness',
        label: { en: 'Standard Thickness', zh: '标准厚度' },
        value: {
          en: '12mm, 15mm, 18mm, 21mm, 24mm, 27mm, 30mm',
          zh: '12mm, 15mm, 18mm, 21mm, 24mm, 27mm, 30mm',
        },
      },
      {
        key: 'size',
        label: { en: 'Standard Dimensions', zh: '标准幅面尺寸' },
        value: {
          en: '1220 × 2440mm, 1250 × 2500mm, 1500 × 3000mm',
          zh: '1220 × 2440mm, 1250 × 2500mm, 1500 × 3000mm',
        },
      },
      {
        key: 'face',
        label: { en: 'Surface Pattern', zh: '表面防滑纹理' },
        value: {
          en: 'Wire-Mesh / Hexagonal Embossed Face + Smooth Film Back (220–240g/m²)',
          zh: '正面钢丝网纹 / 六角防滑花纹 + 背面光面酚醛膜（220–240g/m²）',
        },
      },
      {
        key: 'core',
        label: { en: 'Core Material', zh: '芯板材质结构' },
        value: {
          en: 'Full Eucalyptus Hardwood or Full Birch Multi-Ply Core',
          zh: '全桉木硬木整芯 或 全桦木多层高强芯',
        },
      },
      {
        key: 'glue',
        label: { en: 'Adhesive / Glue Type', zh: '胶水环保及耐水等级' },
        value: {
          en: 'Phenolic WBP (72h Boiling Water Proof)',
          zh: '纯酚醛 WBP 防水胶（72小时沸水煮不开胶）',
        },
      },
      {
        key: 'reuseCycles',
        label: { en: 'Service Life / Cycles', zh: '使用寿命 / 周转周期' },
        value: {
          en: 'Long-term structural installation / 25+ cycles in modular staging (To be confirmed)',
          zh: '长期结构铺装使用 / 模块化系统可周转 25+ 次（按应用场景确认）',
        },
      },
    ],
  },
  {
    id: 'swd-tb-01',
    slug: 'h20-timber-formwork-beam',
    code: 'SWD-HTB-301',
    category: 'timber-beams',
    featured: true,
    name: {
      en: 'H20 Timber Formwork Beam (EN 13377 Standard)',
      zh: 'H20 木工字梁（欧标 EN 13377 建筑模板支撑梁）',
    },
    subtitle: {
      en: 'Structural spruce flanges finger-jointed to three-ply solid web or LVL web with protective end caps',
      zh: '优选云杉实木翼缘配三层实木腹板/LVL腹板 · 高承载低自重模板支撑主次梁',
    },
    shortDescription: {
      en: 'Standard 200 × 80mm H20 timber girders for slab tables, wall formwork, and bridge falsework. Finger-jointed solid spruce/pine flanges bonded with exterior phenolic glue and finished with waterproof yellow polyurethane paint.',
      zh: '标准 200 × 80mm 截面 H20 建筑木工字梁，广泛用于楼板台模、大面积墙模及桥梁支架体系。采用全自动指接云杉/松木实木翼缘与高强腹板，户外酚醛胶高压粘合，通体喷涂黄色防水聚氨酯保护漆。',
    },
    fullDescription: {
      en: 'Our H20 Timber Formwork Beams are engineered to carry high bending moments and shear forces while weighing only ~4.5–4.8 kg per linear meter—allowing rapid manual handling on construction sites. Machine-sorted kiln-dried northern spruce flanges (80 × 40mm) with chamfered edges are precision finger-jointed to a 3-layer solid wood or multi-ply birch/poplar web. Optional heavy-duty plastic or galvanized steel end caps protect beam ends from drop impact and site wear.',
      zh: '森炜达 H20 木工字梁兼具极高的抗弯矩、抗剪承载力与轻量化优势（每延米自重仅约 4.5–4.8 kg），大幅提升施工现场人工搬运与组装效率。上下翼缘采用窑干精选北方云杉/樟子松实木（截面 80 × 40mm），经导角处理与精密铣齿指接后，与三层实木拼板或高强多层胶合腹板高压复合。两端可选配高强工程塑料护角套，有效防止高空跌落劈裂与端头受潮。',
    },
    applications: {
      en: [
        'Slab formwork primary & secondary girders',
        'Large-panel wall & column timber-beam formwork systems',
        'Cantilevered climbing brackets & bridge deck falsework',
        'Tunnel & infrastructure temporary shoring systems',
      ],
      zh: [
        '现浇楼板早拆体系及台模系统主梁与次梁',
        '大面积墙体模板及柱模木梁刚性背楞体系',
        '悬挑爬架平台及桥梁悬臂挂篮翼缘支撑',
        '隧道及地下管廊工程临时支撑桁架系统',
      ],
    },
    highlights: {
      en: [
        'Standard 200mm height × 80mm flange width compatible with all global formwork clamps',
        'High bending moment capacity (M = 5.0 kNm) & shear capacity (Q = 11.0 kN)',
        'Waterproof UV-resistant yellow polyurethane coating across entire beam',
        'Protective plastic end-caps installed upon request',
      ],
      zh: [
        '标准 200mm 梁高 × 80mm 翼宽，完美适配全球各类通用模板卡具与支撑头',
        '高抗弯承载力（允许弯矩 M = 5.0 kNm）与抗剪强度（允许剪力 Q = 11.0 kN）',
        '通体浸涂耐候防水黄色环保聚氨酯漆，防潮抗紫外线老化',
        '可按需加装两端防撞工程塑料护套及客户品牌喷码',
      ],
    },
    images: [
      '/images/h20-beam-1.jpg',
      '/images/factory-3.jpg',
      '/images/loading-1.jpg',
    ],
    specs: [
      {
        key: 'thickness',
        label: { en: 'Cross-Section Dimensions', zh: '标准截面尺寸' },
        value: {
          en: 'Height: 200mm | Flange Width: 80mm | Flange Thickness: 40mm | Web Thickness: 27–30mm',
          zh: '梁高：200mm | 翼缘宽：80mm | 翼缘厚：40mm | 腹板厚：27–30mm',
        },
      },
      {
        key: 'size',
        label: { en: 'Standard Lengths', zh: '标准供应长度' },
        value: {
          en: '1.90m, 2.45m, 2.65m, 2.90m, 3.30m, 3.60m, 3.90m, 4.50m, 4.90m, 5.90m (Custom lengths available)',
          zh: '1.90m, 2.45m, 2.65m, 2.90m, 3.30m, 3.60m, 3.90m, 4.50m, 4.90m, 5.90m（支持定制长度）',
        },
      },
      {
        key: 'face',
        label: { en: 'Flange Material', zh: '上下翼缘材质' },
        value: {
          en: 'Kiln-Dried Selected Spruce / Pine Solid Timber (Machine Stress Graded)',
          zh: '窑干精选欧洲云杉 / 樟子松实木方料（机械应力分级）',
        },
      },
      {
        key: 'core',
        label: { en: 'Web Material', zh: '中间腹板材质' },
        value: {
          en: '3-Ply Cross-Laminated Solid Spruce Web or Multi-Ply Birch/Poplar LVL Web',
          zh: '三层纵横交错实木云杉腹板 或 高强桦木/杨木多层腹板',
        },
      },
      {
        key: 'glue',
        label: { en: 'Structural Adhesive', zh: '结构粘合胶水' },
        value: {
          en: 'Exterior WBP Phenolic / Melamine Resin (EN 301 Type I)',
          zh: '户外级 WBP 酚醛 / 三聚氰胺结构树脂胶（符合 EN 301 标准）',
        },
      },
      {
        key: 'reuseCycles',
        label: { en: 'Expected Reuse Cycles', zh: '周转使用寿命' },
        value: {
          en: '50+ pours across multiple projects with proper storage (To be confirmed)',
          zh: '规范施工与仓储条件下可跨项目周转 50+ 次以上（按配置确认）',
        },
      },
      {
        key: 'weight',
        label: { en: 'Unit Weight', zh: '单位延米重量' },
        value: {
          en: 'Approx. 4.5 – 4.8 kg / linear meter',
          zh: '约 4.5 – 4.8 kg / 延米',
        },
      },
    ],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getRelatedProducts(currentSlug: string, limit = 2): Product[] {
  const current = getProductBySlug(currentSlug);
  const others = products.filter((p) => p.slug !== currentSlug);
  if (!current) return others.slice(0, limit);

  const sameCategory = others.filter((p) => p.category === current.category);
  const diffCategory = others.filter((p) => p.category !== current.category);
  return [...sameCategory, ...diffCategory].slice(0, limit);
}
