# 标准 MCP 配置（无需 API Key）

## 📌 说明

这是一个**标准 MCP 服务器**，只提供工具、资源和提示词。MCP 客户端（如 Cursor、Claude Desktop）会使用**它们自己的 LLM** 来调用这些功能。

**因此不需要配置任何 API Key！**

## 🚀 快速配置

### Cursor

**本地开发模式：**

```json
{
  "mcpServers": {
    "element-plus-mcp": {
      "command": "node",
      "args": [
        "/Users/linhai/element-plus-mcp/dist/start-mcp.js"
      ]
    }
  }
}
```

**从 npm 运行（发布后）：**

```json
{
  "mcpServers": {
    "element-plus-mcp": {
      "command": "npx",
      "args": ["-y", "element-plus-mcp"]
    }
  }
}
```

**从 GitHub 运行：**

```json
{
  "mcpServers": {
    "element-plus-mcp": {
      "command": "npx",
      "args": ["-y", "github:yourusername/element-plus-mcp"]
    }
  }
}
```

### Claude Desktop

路径：`~/Library/Application Support/Claude/claude_desktop_config.json` (macOS)

```json
{
  "mcpServers": {
    "element-plus-mcp": {
      "command": "npx",
      "args": ["-y", "element-plus-mcp"]
    }
  }
}
```

## ✨ 提供的功能

### 1. 工具（Tools）
- `generate-component` - 生成 Element Plus 组件

### 2. 资源（Resources）
- `element-plus-components` - Element Plus 组件库信息

### 3. 提示词（Prompts）
- `element-plus-component-generation` - 组件生成提示模板

## 🎯 使用示例

配置完成后，在 Cursor 或 Claude Desktop 中：

```
帮我创建一个 Element Plus 表格组件
```

MCP 客户端会：
1. 调用本服务器提供的工具和资源
2. 使用客户端自己的 LLM（如 Claude、GPT-4）处理请求
3. 返回生成的组件代码

## 📝 配置位置

### Cursor
- 全局：`~/.cursor/mcp.json`
- 项目：`.cursor/mcp.json`
- 或在 Cursor 设置界面中配置

### Claude Desktop
- macOS: `~/Library/Application Support/Claude/claude_desktop_config.json`
- Windows: `%APPDATA%\Claude\claude_desktop_config.json`

## 🔍 验证安装

启动 MCP 客户端后，查看日志中是否有：

```
✅ Element Plus MCP 服务器已启动 (Stdio 模式)
📦 支持的工具: generate-component
📚 支持的资源: element-plus-components
📝 支持的提示: element-plus-component-generation
```

## ❓ 常见问题

### Q: 为什么不需要 API Key？

**A:** 这是一个标准的 MCP 服务器，只提供工具和数据。实际的 AI 处理由 MCP 客户端（Cursor、Claude Desktop 等）的 LLM 完成。

### Q: 如果我想让服务器自己调用 LLM 呢？

**A:** 那需要在 `env` 中配置 API Key，但这不是标准 MCP 的使用方式。参考 `CURSOR_SETUP.md` 了解如何配置（如果需要）。

### Q: 支持哪些 MCP 客户端？

**A:** 支持所有标准 MCP 客户端：
- ✅ Cursor
- ✅ Claude Desktop
- ✅ 其他支持 MCP 协议的工具

## 🎉 就这么简单！

不需要任何 API Key，只需：
1. 构建项目：`npm run build`
2. 添加上面的配置
3. 重启 MCP 客户端
4. 开始使用！

---

更多信息：
- [README.md](./README.md) - 项目概览
- [QUICKSTART.md](./QUICKSTART.md) - 快速开始
