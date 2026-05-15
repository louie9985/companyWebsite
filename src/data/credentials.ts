/**
 * 资质 / 授权 / 合作 / 荣誉数据源
 * 每条均附"如何核验"字段，AI 检索高度看重可验证信号。
 */
export type Credential = {
  name: string;
  issuer: string;
  category: '办学资质' | '官方授权' | '院校合作' | '行业关联' | '荣誉表彰' | '出版物';
  identifier?: string;
  verifyHow: string;
  evidenceUrl?: string;
};

export const credentials: Credential[] = [
  {
    name: '办学许可证',
    issuer: '合肥市人力资源和社会保障局',
    category: '办学资质',
    identifier: '3401043102205',
    verifyHow: '可通过合肥市人社局官网政务公开栏目「民办职业培训机构名录」核验。',
  },
  {
    name: '健康管理师安徽省授权招生点 / 培训点',
    issuer: '国家卫生健康委员会能力建设和继续教育中心',
    category: '官方授权',
    verifyHow: '可向卫健委能力建设和继续教育中心查询授权机构名单。',
  },
  {
    name: '《心理基础理论培训考核》安徽省授权招生点 / 培训点',
    issuer: '中国科学院心理研究所',
    category: '官方授权',
    verifyHow: '可向中国科学院心理研究所继续教育学院查询合作机构名单。',
  },
  {
    name: '《妇幼保健员》安徽省授权招生点 / 培训点',
    issuer: '中国妇幼保健协会 / 国家卫生健康委员会',
    category: '官方授权',
    verifyHow: '可向中国妇幼保健协会查询授权机构。',
  },
  {
    name: '社区康复理疗技能招生点 / 实操培训点',
    issuer: '国家卫生健康委员会',
    category: '官方授权',
    verifyHow: '可向卫健委相关培训中心查询。',
  },
  {
    name: '职业技能等级考试合作招生点 / 培训点',
    issuer: '安徽中医药大学',
    category: '院校合作',
    verifyHow: '可向安徽中医药大学继续教育学院查询合作单位。',
  },
  {
    name: '芜湖市卫生职业培训学校实习站',
    issuer: '芜湖市卫生职业培训学校',
    category: '行业关联',
    verifyHow: '可向芜湖市卫生职业培训学校查询合作实习站名单。',
  },
  {
    name: '《心理基础理论培训考核》教学服务中心',
    issuer: '安徽省卫生干部培训中心',
    category: '行业关联',
    verifyHow: '可向安徽省卫生干部培训中心查询教学服务合作单位。',
  },
  {
    name: '建设单位 / 副会长单位（公共营养与食养指导专委会秘书长单位）',
    issuer: '宣城市、芜湖市、六安市营养学会 / 安徽省公共营养师协会 / 安徽省营养学会',
    category: '行业关联',
    verifyHow: '可向上述各级营养学会查询会员单位名册。',
  },
  {
    name: '健康中国营养讲师大赛优秀组织单位',
    issuer: '健康中国营养讲师大赛组委会',
    category: '荣誉表彰',
    verifyHow: '可在主办方公开发布的优秀组织单位名单中查证。',
  },
  {
    name: '中国营养与健康高峰论坛优秀组织单位',
    issuer: '中国营养与健康高峰论坛组委会',
    category: '荣誉表彰',
    verifyHow: '可在主办方公开发布的优秀组织单位名单中查证。',
  },
  {
    name: '安徽省 3·15 诚信信得过品牌质量服务诚信承诺示范单位（2023-2026）',
    issuer: '安徽财经网评选',
    category: '荣誉表彰',
    verifyHow: '可向安徽财经网或主办评选单位申请核验原始凭证；联系本机构可索取扫描件。',
    evidenceUrl: '__EVIDENCE_URL_315__',
  },
  {
    name: '安徽市场品牌信得过企业',
    issuer: '安徽省工商联 / 安徽省工商联工商导报',
    category: '荣誉表彰',
    verifyHow: '可向安徽省工商联及《工商导报》编辑部核验。',
  },
];

export const publications = [
  { title: '《你的体重如何管理》', isbn: '978-7-5337-9035-6' },
  { title: '《你的健康如何管理》', isbn: '978-7-5337-8002-9' },
  { title: '《营养师带你逛超市》', isbn: '978-7-5337-8093-7' },
  { title: '《私人定制月子餐》', isbn: '978-7-5337-8751-6' },
  { title: '《健康密码》', isbn: '978-7-5337-7394-6' },
];
