# 📓QYouz的笔记 · Quartz v5

笔记保存在 `content/`，站点配置和组件布局保存在 `quartz.config.yaml`。

使用 Node.js 24（具体版本见 `.node-version`）：

```sh
npm ci
npx quartz plugin install --from-config
npx quartz build --serve
```

运行 `npm run check` 检查代码和配置，运行 `npm test` 执行 Quartz 测试。
格式化检查跳过 `content/`，保留 Obsidian 笔记的原始格式。

推送到 `main` 会通过 `.github/workflows/deploy.yml` 部署到 GitHub Pages。
迁移说明见 [MIGRATION.md](MIGRATION.md)。

> “[One] who works with the door open gets all kinds of interruptions, but [they] also occasionally gets clues as to what the world is and what might be important.” — Richard Hamming

Quartz is a set of tools that helps you publish your [digital garden](https://jzhao.xyz/posts/networked-thought) and notes as a website for free.

🔗 Read the documentation and get started: https://quartz.jzhao.xyz/

[Join the Discord Community](https://discord.gg/cRFFHYye7t)

## Sponsors

<p align="center">
  <a href="https://github.com/sponsors/jackyzha0">
    <img src="https://cdn.jsdelivr.net/gh/jackyzha0/jackyzha0/sponsorkit/sponsors.svg" />
  </a>
</p>
