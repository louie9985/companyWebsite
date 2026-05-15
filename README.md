# 中世健教育官网

中世健教育（安徽省中世健职业培训学校）官方网站，基于 Astro 构建的静态站点。

## 技术栈

- [Astro](https://astro.build/) v4 — 静态站点生成
- TypeScript
- SEO 优化：JSON-LD 结构化数据、sitemap、llms.txt

## 本地开发

```bash
npm install
npm run dev        # 启动开发服务器 http://localhost:4321
npm run build      # 构建生产版本到 dist/
npm run preview    # 预览构建结果
```

## 项目结构

```
src/
├── components/    # 通用组件（Header、Footer、SEO 等）
├── data/          # 课程、资质、团队、FAQ 数据
├── layouts/       # 页面布局
├── lib/           # 站点配置、JSON-LD 工具
├── pages/         # 页面路由
└── styles/        # 全局样式
public/            # 静态资源（图片、robots.txt、llms.txt）
```

## 部署

### 服务器信息

| 项目 | 值 |
|------|-----|
| 云服务 | 腾讯云轻量应用服务器（Ubuntu） |
| IP | 129.211.215.38 |
| 用户 | ubuntu |
| Web 服务 | Nginx 1.24 |
| 域名 | zhongshijian.top |
| HTTPS | Let's Encrypt（certbot 自动续期） |
| 网站目录 | /var/www/zhongshijian |
| Nginx 配置 | /etc/nginx/conf.d/zhongshijian.conf |
| SSL 证书 | Let's Encrypt，certbot 自动续期（到期 2026-08-13） |

### 部署流程

```bash
# 1. 构建
npm run build

# 2. 上传到服务器
scp -r dist/* ubuntu@129.211.215.38:/var/www/zhongshijian/
```

### 首次部署（已完成）

```bash
# 安装 certbot 并配置 HTTPS
ssh ubuntu@129.211.215.38 "sudo apt install -y certbot python3-certbot-nginx"
ssh ubuntu@129.211.215.38 "sudo certbot --nginx -d zhongshijian.top -d www.zhongshijian.top"
```

## 代码仓库

- GitHub：https://github.com/louie9985/companyWebsite

## 联系方式

- 电话：15705694597
- 邮箱：qiao@zsjedc.com
- 微信：hello-hello-666
