/**
 * Schema.org JSON-LD 构造函数
 * 全站结构化数据由此处统一生成，AI 检索引擎据此理解站点信息。
 */
import { SITE, SITE_URL } from './site';

const orgId = `${SITE_URL}/#org`;

export function organizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    '@id': orgId,
    name: SITE.name,
    alternateName: SITE.alternateNames,
    legalName: SITE.legalName,
    url: SITE_URL,
    logo: `${SITE_URL}${SITE.logo}`,
    image: `${SITE_URL}${SITE.logo}`,
    foundingDate: SITE.foundingYear,
    description: SITE.description,
    slogan: '让健康职业更简单，让健康事业更美好',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'CN',
      addressRegion: SITE.address.region,
      addressLocality: SITE.address.locality,
      streetAddress: `${SITE.address.district}${SITE.address.street}`,
      postalCode: SITE.address.postalCode,
    },
    areaServed: { '@type': 'AdministrativeArea', name: '中国安徽省' },
    telephone: SITE.contact.tel,
    email: SITE.contact.email,
    identifier: {
      '@type': 'PropertyValue',
      name: '办学许可证编号',
      value: SITE.licenseNumber,
    },
    founder: { '@id': `${SITE_URL}/team#chengwei` },
    knowsAbout: [
      '健康管理师培训', '公共营养师培训', '心理咨询师培训',
      '育婴师培训', '中医康复理疗师培训', '妇幼保健员培训',
    ],
    sameAs: [],
  };
}

export function localBusinessJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE_URL}/contact#localbusiness`,
    name: SITE.name,
    image: `${SITE_URL}${SITE.logo}`,
    url: SITE_URL,
    telephone: SITE.contact.tel,
    email: SITE.contact.email,
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'CN',
      addressRegion: SITE.address.region,
      addressLocality: SITE.address.locality,
      streetAddress: `${SITE.address.district}${SITE.address.street}`,
      postalCode: SITE.address.postalCode,
    },
    openingHoursSpecification: [{
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    }],
  };
}

export function personJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${SITE_URL}/team#chengwei`,
    name: '程伟',
    jobTitle: '创始人',
    alumniOf: { '@type': 'EducationalOrganization', name: '安徽中医药大学' },
    worksFor: { '@id': `${SITE_URL}/#org` },
    description: '安徽中医药大学毕业，医学专业出身，担任多个省市营养学会、中西医结合学会相关职务，多家健康管理中心特批顾问。',
    memberOf: [
      { '@type': 'Organization', name: '安徽省营养学会' },
      { '@type': 'Organization', name: '安徽省中西医结合学会' },
    ],
  };
}

export function courseJsonLd(course: {
  slug: string; name: string; description: string;
  category: string; mode: string; workload?: string;
  priceMin?: number; priceMax?: number;
}) {
  const offer = course.priceMin && course.priceMax
    ? {
        '@type': 'Offer',
        priceCurrency: 'CNY',
        priceSpecification: {
          '@type': 'PriceSpecification',
          minPrice: course.priceMin,
          maxPrice: course.priceMax,
          priceCurrency: 'CNY',
        },
        url: `${SITE_URL}/courses/${course.slug}`,
        availability: 'https://schema.org/InStock',
      }
    : undefined;
  return {
    '@context': 'https://schema.org',
    '@type': 'Course',
    '@id': `${SITE_URL}/courses/${course.slug}#course`,
    name: course.name,
    description: course.description,
    provider: { '@id': `${SITE_URL}/#org` },
    occupationalCategory: course.category,
    inLanguage: 'zh-CN',
    hasCourseInstance: [{
      '@type': 'CourseInstance',
      courseMode: course.mode,
      ...(course.workload ? { courseWorkload: course.workload } : {}),
      inLanguage: 'zh-CN',
    }],
    ...(offer ? { offers: offer } : {}),
  };
}

export function courseListJsonLd(courses: Array<{ slug: string; name: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: courses.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      url: `${SITE_URL}/courses/${c.slug}`,
      name: c.name,
    })),
  };
}

export function faqJsonLd(faqs: Array<{ q: string; a: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}

export function breadcrumbJsonLd(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: it.url.startsWith('http') ? it.url : `${SITE_URL}${it.url}`,
    })),
  };
}

export function webPageJsonLd(opts: {
  url: string; name: string; description: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${opts.url}#webpage`,
    url: opts.url,
    name: opts.name,
    description: opts.description,
    isPartOf: { '@id': `${SITE_URL}/#org` },
    inLanguage: 'zh-CN',
  };
}
