# Quartz v5 迁移记录

本站从 Quartz 4.5.2 迁移到官方 `v5` 分支的 Quartz 5.0.0（`97a2d05`）。

- `content/` 中的 68 篇 Markdown 笔记和 7 个附件保持原样。
- `quartz.config.ts`、`quartz.layout.ts` 合并为 `quartz.config.yaml`。
- 保留站点名称、`qyouz.github.io`、中文界面、Noto Sans SC 字体、配色、MathJax、搜索、关系图谱、目录、反向链接、RSS 和站点地图。
- 首页隐藏关系图谱；文件夹和标签页保留原来的精简布局。
- 官方插件和本地插件统一通过 npm 依赖锁定；本地插件使用指向 `plugins/` 的相对路径，方便在其他电脑或 CI 中安装。
- “回到顶部”迁为 `plugins/back-to-top` 本地组件，无须修改官方页脚和翻译文件。
- 中文段落间距和文章宽度保留在 `quartz/styles/custom.scss`。
- GitHub Pages 继续从 `main` 部署，新增插件安装步骤，并使用 `.node-version` 指定的 Node.js 24。

## 网址兼容

v5 将英文网址转换为小写。官方 `alias-redirects` 插件已开启大小写重定向。
在 Windows 的大小写不敏感文件系统上，它会跳过只改变大小写的重定向，避免覆盖正文；GitHub Actions 在 Linux 上构建时会生成这些重定向。

v5 还将 `Mathematics/Mathematics.md` 这样的同名目录笔记变为目录首页 `/mathematics/`。
本地插件 `plugins/legacy-folder-urls` 额外生成 `/Mathematics/Mathematics` 和 `/mathematics/mathematics` 的跳转，并保留查询参数和标题锚点。

## 本地运行

```sh
npm ci
npx quartz plugin install --from-config
npx quartz build --serve
```

只生成静态网站时使用 `npx quartz build`，结果在 `public/`。
Windows 如遇到 `npx` 的链接权限问题，可直接运行 `node quartz/bootstrap-cli.mjs` 加同样的参数。

## 验证和回退

代码和配置检查：`npm run check`。官方测试：`npm test`。
`content/` 不参与 Prettier 检查和格式化，避免改写笔记。

迁移验证已核对全部笔记和附件的 SHA-256、页面输出、搜索索引、MathJax、RSS、站点地图和旧网址跳转。
`npm ci` 后的完整构建通过，`npm run check` 通过，官方 163 项测试通过；核对了 3,815 个本地链接和资源引用，并模拟 Linux 文件系统验证旧网址重定向。
`幂级数的运算.md` 原有的 `../../Inbox/柯西乘积(Cauchy).md` 链接目标不在当前仓库中；迁移保留了原笔记，未补写缺失内容。

迁移前的 `main` 分支和提交 `63195c6` 保留原版本；本次升级在 `codex/migrate-quartz-v5` 分支进行。
本地备份位于 `.quartz-cache/v4-migration-backup/`，包含笔记、原配置、样式和内容 SHA-256 清单，该缓存不提交到 Git。
需要回退时，可切换到升级前的分支或提交，并重新执行 `npm ci`。
