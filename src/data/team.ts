/**
 * 师资团队数据源
 * 创始人 + 团队事实，用于 Person JSON-LD 与 /team 页面。
 */
export const founder = {
  name: '程伟',
  jobTitle: '创始人',
  alumni: '安徽中医药大学',
  bio: [
    '安徽中医药大学毕业，医学专业出身，深耕健康行业多年。',
    '担任多个省市营养学会、中西医结合学会相关职务，多家健康管理中心特批顾问。',
    '主持创办合肥中世健职业技能培训学校，构建"职业考证、技能提升、实习见习、就业创业支持"四位一体平台。',
  ],
  affiliations: ['安徽省营养学会', '安徽省中西医结合学会'],
};

export const teamFacts = {
  totalStaff: '50 余人',
  mastersCount: '7 名全日制硕士研究生',
  expertiseAreas: ['营养学', '中西医临床医学', '心理学', '药学/中药学', '健康管理学', '妇幼保健学'],
  studentBackground: '学历涵盖专科至博士，职称涵盖初级至高级',
  alumniCount: '累计学员超 5.0 万人',
  partnerNetwork: '全国加盟合作伙伴 100 余家，安徽多地设有分校',
};

export const teamMembers = [
  { field: '营养学', description: '硕士及本科师资，承担营养健康类课程教学与膳食指导服务。' },
  { field: '中西医临床医学', description: '硕士师资，承担中医适宜技术、康复理疗、药学相关课程。' },
  { field: '心理学', description: '硕士师资，承担心理基础理论、心理咨询技能与案例督导。' },
  { field: '健康管理学', description: '面向健康管理师课程，含慢病管理、企业健康管理、社区健康干预。' },
];
