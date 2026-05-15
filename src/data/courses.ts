/**
 * 课程项目数据源
 * priceMin/priceMax 留空表示"详情咨询"，公开值时会输出 Course/Offer JSON-LD。
 */
export type Course = {
  slug: string;
  name: string;
  category: '营养健康' | '心理健康' | '中医母婴' | '医药护类' | '能力提升';
  description: string;
  highlights: string[];
  audience: string;
  duration?: string;
  mode: 'blended' | 'online' | 'onsite';
  modeText: string;
  priceMin?: number;
  priceMax?: number;
  priceText: string;
  certIssuer?: string;
};

export const courseCategories = [
  { key: '营养健康', desc: '健康管理师、公共营养师、注册营养师等营养健康类职业证书与技能培训' },
  { key: '心理健康', desc: '心理咨询师、家庭教育指导师、社会工作者等心理健康类培训' },
  { key: '中医母婴', desc: '中医小儿推拿、康复理疗、催乳师、产后恢复、育婴师等中医母婴类技能' },
  { key: '医药护类', desc: '执业医师、执业药师、执业护师等医药护类考前辅导' },
] as const;

export const courses: Course[] = [
  {
    slug: 'registered-dietitian',
    name: '注册营养师培训',
    category: '营养健康',
    description: '中国营养学会注册营养师/营养技师考试培训，系统覆盖临床营养、公共营养、食品营养等核心模块，助力学员获取行业高含金量认证。',
    highlights: ['中国营养学会官方认证方向', '系统课程+案例实训', '论文指导与考务服务', '不对考试结果作保证'],
    audience: '营养相关专业毕业生、在职营养从业者、希望获取高阶认证的健康管理师',
    duration: '约 100–150 学时',
    mode: 'blended',
    modeText: '线上直播 + 录播 + 面授辅导',
    priceText: '详情请咨询课程顾问',
    certIssuer: '中国营养学会',
  },
  {
    slug: 'health-manager',
    name: '健康管理师培训',
    category: '营养健康',
    description: '面向健康行业从业者及转行人群的健康管理师职业技能等级证书学习服务，提供系统课程、模考、答疑与考务组织。',
    highlights: ['卫健委授权培训点', '线上直播+录播+面授', '模考题库与一对一答疑', '不对考试结果作保证'],
    audience: '健康行业从业者、社区卫生工作者、保险/健身/月嫂相关行业人员、健康专业转行人群',
    duration: '约 80–120 学时',
    mode: 'blended',
    modeText: '线上直播 + 录播 + 周末面授',
    priceText: '详情请咨询课程顾问，价格按班型公开区间',
    certIssuer: '卫生健康委员会能力建设和继续教育中心',
  },
  {
    slug: 'public-nutritionist',
    name: '公共营养师培训',
    category: '营养健康',
    description: '公共营养师职业技能等级证书课程，覆盖膳食指导、营养评估、慢病营养干预等核心内容。',
    highlights: ['人社部门技能等级证书方向', '配套实操训练', '模考与答疑'],
    audience: '营养相关从业者、对营养健康感兴趣的转行人群',
    duration: '约 80–100 学时',
    mode: 'blended',
    modeText: '线上 + 周末面授',
    priceText: '详情请咨询课程顾问',
  },
  {
    slug: 'psychological-counselor',
    name: '心理咨询师基础培训',
    category: '心理健康',
    description: '中科院心理研究所《心理基础理论培训考核》课程，含基础心理学、咨询心理学、咨询技能模块。',
    highlights: ['中科院心理所安徽省授权招生点/培训点', '理论 + 案例督导', '系统模考'],
    audience: '心理学爱好者、教育/医务/HR 从业者、相关行业转岗',
    mode: 'blended',
    modeText: '线上直播 + 面授案例课',
    priceText: '详情请咨询课程顾问',
    certIssuer: '中国科学院心理研究所',
  },
  {
    slug: 'maternal-child-care',
    name: '妇幼保健员培训',
    category: '中医母婴',
    description: '中国妇幼保健协会、卫健委《妇幼保健员》安徽省授权招生点的考前辅导与技能训练。',
    highlights: ['官方授权招生点', '理论 + 实操', '考场就近安排'],
    audience: '月嫂、育婴师、社区妇幼保健人员、相关从业者',
    mode: 'blended',
    modeText: '线上 + 实操',
    priceText: '详情请咨询课程顾问',
    certIssuer: '中国妇幼保健协会 / 卫健委',
  },
  {
    slug: 'community-rehab',
    name: '社区康复理疗技能培训',
    category: '中医母婴',
    description: '卫健委社区康复理疗技能培训点的实操技能课程，含中医适宜技术与康复手法。',
    highlights: ['卫健委实操培训点', '小班实训', '安徽中医药大学合作'],
    audience: '康复治疗师、社区医务人员、中医爱好者',
    mode: 'onsite',
    modeText: '面授实操为主',
    priceText: '详情请咨询课程顾问',
  },
  {
    slug: 'infant-care',
    name: '育婴师培训',
    category: '中医母婴',
    description: '面向 0-3 岁婴幼儿照护从业者的职业技能培训，含生活照料、保健护理、教育引导三大模块。',
    highlights: ['职业技能等级方向', '理论 + 实操', '就业推荐'],
    audience: '从事或计划从事婴幼儿照护行业的人员',
    mode: 'blended',
    modeText: '线上 + 实操',
    priceText: '详情请咨询课程顾问',
  },
  {
    slug: 'licensed-pharmacist',
    name: '执业药师培训',
    category: '医药护类',
    description: '执业药师（西药/中药）考前辅导课程，覆盖药学专业知识、药事管理与法规等核心科目，助力学员备考国家执业药师资格考试。',
    highlights: ['西药师/中药师双方向', '系统精讲+冲刺串讲', '历年真题解析与模考', '不对考试结果作保证'],
    audience: '药学相关专业毕业生、药店/医院药房从业者、计划取得执业药师资格的人员',
    duration: '约 120–180 学时',
    mode: 'blended',
    modeText: '线上直播 + 录播 + 考前面授',
    priceText: '详情请咨询课程顾问',
    certIssuer: '国家药品监督管理局',
  },
];

export const featuredCourseSlugs = [
  'registered-dietitian', 'health-manager', 'public-nutritionist', 'psychological-counselor',
];
