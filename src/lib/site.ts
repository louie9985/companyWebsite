/**
 * 站点全局常量
 *
 * 占位符（__前缀）由用户后续提供真实值后一次性替换：
 * __DOMAIN__ / __ICP__ / __POLICE_ICP__ / __TEL__ / __EMAIL__ / __WECHAT_ID__
 */

export const SITE_URL = 'https://www.zsjedc.com';

export const SITE = {
  name: '中世健教育',
  legalName: '合肥中世健职业技能培训学校',
  shortName: '中世健教育',
  alternateNames: ['中世健', '中世健教育集团', '合肥中世健职业技能培训学校'],
  tagline: '健康职业教育平台',
  description:
    '中世健教育是 2011 年成立、合肥市人社局批准（办学许可证 3401043102205）的健康类职业教育平台，提供注册营养师、健康管理师、公共营养师、心理咨询师、执业药师等职业考证、技能提升与就业服务，累计培养学员超 5.0 万人。',
  foundingYear: '2011',
  licenseNumber: '3401043102205',
  licenseAuthority: '合肥市人力资源和社会保障局',
  address: {
    full: '安徽省合肥市蜀山区潜山路绿地蓝海国际大厦 C 座 2413 室',
    region: '安徽省',
    locality: '合肥市',
    district: '蜀山区',
    street: '潜山路绿地蓝海国际大厦 C 座 2413 室',
    postalCode: '230031',
  },
  contact: {
    tel: '15705694597',
    email: 'qiao@zsjedc.com',
    wechat: 'hello-hello-666',
    wechatQrCode: '/contact-wechat.jpg',
    publicQrCode: '/qrcode-wechat.jpg',
    hours: '周一至周五 09:00-18:00',
  },
  beian: {
    icp: '皖ICP备18005256号',
    police: '__POLICE_ICP__',
    icpUrl: 'https://beian.miit.gov.cn/',
  },
  logo: '/logo.png',
  ogImage: '/og-default.png',
} as const;
