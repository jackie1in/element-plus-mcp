# 发布指南

本文档说明如何将 Element Plus MCP Server 发布到 npm，以便可以通过 `npx` 或 `pnpx` 从任何地方使用。

## 发布前准备

### 1. 更新 package.json 信息

在 `package.json` 中更新以下字段：

```json
{
  "name": "element-plus-mcp",
  "version": "1.0.0",
  "description": "Element Plus MCP Server - Generate Vue components with Element Plus through Model Context Protocol",
  "repository": {
    "type": "git",
    "url": "https://github.com/yourusername/element-plus-mcp.git"
  },
  "author": "Your Name <your.email@example.com>",
  "keywords": [
    "mcp",
    "model-context-protocol",
    "element-plus",
    "vue",
    "component-generator"
  ]
}
```

### 2. 确保代码构建成功

```bash
npm run build
```

确保看到以下成功消息：
```
✅ 已设置 start-mcp.js 执行权限
✅ 已复制 data 目录到 dist
🎉 构建后处理完成
```

### 3. 测试本地安装

```bash
# 在本地测试安装
npm pack

# 这会创建一个 .tgz 文件
# 在另一个目录测试安装
npm install -g /path/to/element-plus-mcp-1.0.0.tgz

# 测试运行
element-plus-mcp
```

## 发布到 npm

### 首次发布

1. **登录 npm**

```bash
npm login
```

2. **检查包内容**

```bash
npm pack --dry-run
```

这会显示将要发布的所有文件。确保：
- ✅ `dist/` 目录包含所有编译后的文件
- ✅ `data/` 目录包含组件数据
- ✅ `README.md` 和 `MCP_SETUP.md` 包含在内
- ❌ `src/`、`tests/`、`node_modules/` 等不包含

3. **发布**

```bash
npm publish
```

### 更新版本

```bash
# 更新补丁版本 (1.0.0 -> 1.0.1)
npm version patch

# 更新次要版本 (1.0.0 -> 1.1.0)
npm version minor

# 更新主要版本 (1.0.0 -> 2.0.0)
npm version major

# 然后发布
npm publish
```

## 发布到 GitHub

### 1. 创建 GitHub 仓库

在 GitHub 上创建一个新仓库（如果还没有）。

### 2. 推送代码

```bash
git add .
git commit -m "feat: initial release"
git remote add origin https://github.com/yourusername/element-plus-mcp.git
git push -u origin main
```

### 3. 创建 Release Tag

```bash
git tag v1.0.0
git push origin v1.0.0
```

### 4. 在 GitHub 上创建 Release

1. 访问 GitHub 仓库页面
2. 点击 "Releases" → "Create a new release"
3. 选择刚才创建的 tag
4. 填写 Release 标题和描述
5. 发布

## 使用已发布的包

### 从 npm 使用

```json
{
  "mcpServers": {
    "element-plus-mcp": {
      "command": "npx",
      "args": ["-y", "element-plus-mcp"],
      "env": {
        "DEEPSEEK_API_KEY": "your_api_key"
      }
    }
  }
}
```

### 从 GitHub 使用

```json
{
  "mcpServers": {
    "element-plus-mcp": {
      "command": "npx",
      "args": ["-y", "github:yourusername/element-plus-mcp"],
      "env": {
        "DEEPSEEK_API_KEY": "your_api_key"
      }
    }
  }
}
```

### 使用特定版本

```json
{
  "mcpServers": {
    "element-plus-mcp": {
      "command": "npx",
      "args": ["-y", "element-plus-mcp@1.0.0"],
      "env": {
        "DEEPSEEK_API_KEY": "your_api_key"
      }
    }
  }
}
```

## 验证发布

### 测试 npm 包

```bash
# 在临时目录测试
npx element-plus-mcp@latest
```

### 测试 GitHub 包

```bash
npx github:yourusername/element-plus-mcp
```

## 常见问题

### Q: 如何撤销已发布的版本？

```bash
npm unpublish element-plus-mcp@1.0.0
```

注意：npm 有 72 小时撤销政策，超过后无法撤销。

### Q: 如何发布 beta 版本？

```bash
npm version prerelease --preid=beta
npm publish --tag beta
```

### Q: 如何更新包但不发布新版本？

只需更新 npm 上的描述等信息：

```bash
npm publish --dry-run
```

## 持续集成（可选）

可以设置 GitHub Actions 自动发布：

创建 `.github/workflows/publish.yml`：

```yaml
name: Publish to npm

on:
  release:
    types: [created]

jobs:
  publish:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
          registry-url: 'https://registry.npmjs.org'
      - run: npm ci
      - run: npm run build
      - run: npm publish
        env:
          NODE_AUTH_TOKEN: ${{ secrets.NPM_TOKEN }}
```

## 检查清单

发布前确认：

- [ ] 版本号已更新
- [ ] README.md 已更新
- [ ] 所有测试通过
- [ ] 代码已构建成功
- [ ] repository URL 正确
- [ ] 许可证信息正确
- [ ] .npmignore 或 files 字段配置正确
- [ ] 环境变量文档完整

## 支持

如有问题，请在 GitHub Issues 中报告。
