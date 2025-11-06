# CYG 个人网站（Vercel 修正版）

- 把 `next.config.ts` 改为 **`next.config.mjs`**
- 把 `tailwind.config.ts` 改为 **`tailwind.config.js`**，且不再从 TS 文件导入配置
- 其他保持不变，适配 Vercel 自动构建

## 本地开发
```bash
npm install
npm run dev
```

## 构建（本地验证）
```bash
npm run build
```

## 部署到 Vercel
- 直接 push 到 GitHub，Vercel 自动检测 Next.js 并构建
- 或使用 `vercel` CLI 交互式部署
```bash
npm i -g vercel
vercel && vercel --prod
```
