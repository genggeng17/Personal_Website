# CYG 个人网站

基于 **Next.js 14 + Tailwind CSS** 的极简个人站点，支持暗色主题。内容与外观均由 `site.config.ts` 配置。

## 本地开发

```bash
# 1) 安装依赖（需要 Node.js >= 18）
npm install

# 2) 启动开发服务器
npm run dev
# open http://localhost:3000
```

## 自定义内容

- 站点文字、主题色与个人信息：编辑根目录的 `site.config.ts`
- 头像：将你的头像文件替换为 `public/avatar.png`，或在 `site.config.ts` 中设置远程 URL
- 首页文案：基于 `site.config.ts` 动态渲染，无需改代码

> `tagline` 为 "NONE" 时，首页副标题将自动使用 `profile.bio_short`。

## 部署到 Vercel（推荐）

### 方式 A：连接 GitHub 仓库
1. 在 GitHub 新建仓库（例如 `yourname/personal-site`），把本项目推上去：
   ```bash
   git init
   git add .
   git commit -m "init"
   git branch -M main
   git remote add origin https://github.com/<yourname>/personal-site.git
   git push -u origin main
   ```
2. 打开 https://vercel.com/import 选择 **Add New… → Project**，导入该仓库。
3. 框架选择 **Next.js**，保持默认构建命令与输出目录，点击 **Deploy**。
4. 完成后你会得到 `https://<project>.vercel.app` 访问地址。

### 方式 B：使用 Vercel CLI
```bash
npm i -g vercel
vercel
# 依向导选择 "Create a new project"、框架 Next.js、环境默认
vercel --prod
```

## 自定义域名（可选）
- 在 Vercel 项目中打开 **Settings → Domains** 添加你的域名。
- 将域名 DNS 解析的 A/ALIAS/CNAME 指向 Vercel 提供的记录，等待生效即可。

## 目录结构
```
app/            # App Router 页面
components/     # 站点组件（导航、底部、社交链接、主题切换）
public/         # 静态资源（头像、favicon、OG 图）
site.config.ts  # 内容与主题配置
tailwind.config.ts
next.config.ts
```

## 许可证
MIT
