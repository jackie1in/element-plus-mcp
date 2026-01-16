# 🚀 Cursor 快速配置指南

## 3 步在 Cursor 中使用 Element Plus MCP

### 第 1 步：构建项目

```bash
cd /Users/linhai/.cursor/worktrees/element-plus-mcp/rxp
npm install
npm run build
```

### 第 2 步：配置 Cursor

在 Cursor 的 MCP 设置中添加以下配置：

**方式 A：使用 Cursor 设置界面**

1. 打开 Cursor 设置：`Cmd + ,` (macOS) 或 `Ctrl + ,` (Windows/Linux)
2. 搜索 "MCP" 或找到 "Model Context Protocol"
3. 添加新的服务器配置：

```json
{
  "element-plus-mcp": {
    "command": "node",
    "args": [
      "/Users/linhai/.cursor/worktrees/element-plus-mcp/rxp/dist/start-mcp.js"
    ],
    "env": {
      "DEEPSEEK_API_KEY": "your_deepseek_api_key"
    }
  }
}
```

**方式 B：直接编辑配置文件**

编辑 `~/.cursor/mcp.json`（如果不存在则创建）：

```json
{
  "mcpServers": {
    "element-plus-mcp": {
      "command": "node",
      "args": [
        "/Users/linhai/.cursor/worktrees/element-plus-mcp/rxp/dist/start-mcp.js"
      ],
      "env": {
        "DEEPSEEK_API_KEY": "your_deepseek_api_key"
      }
    }
  }
}
```

💡 **提示：** 项目中已经为你准备好了配置文件：`.cursor-mcp-config.json`，你可以直接复制使用！

### 第 3 步：获取 API Key 并重启

1. **获取 DeepSeek API Key**
   - 访问：https://www.deepseek.com/
   - 注册账号并创建 API Key
   - 复制你的 API Key

2. **填入 API Key**
   - 将上面配置中的 `your_deepseek_api_key` 替换为你的实际 API Key

3. **重启 Cursor**

## ✅ 验证配置

重启 Cursor 后，在 AI 对话中尝试：

```
帮我创建一个 Element Plus 的表格组件，要有搜索和分页功能
```

如果看到 MCP 服务器被调用并生成了组件代码，说明配置成功！

## 🔑 支持的 LLM

除了 DeepSeek，你还可以使用：

### OpenAI
```json
{
  "env": {
    "OPENAI_API_KEY": "sk-xxxxx"
  }
}
```

### Anthropic Claude
```json
{
  "env": {
    "ANTHROPIC_API_KEY": "sk-ant-xxxxx"
  }
}
```

### Google Gemini
```json
{
  "env": {
    "GEMINI_API_KEY": "xxxxx"
  }
}
```

### 同时配置多个
```json
{
  "env": {
    "DEEPSEEK_API_KEY": "sk-xxxxx",
    "OPENAI_API_KEY": "sk-xxxxx",
    "ANTHROPIC_API_KEY": "sk-ant-xxxxx"
  }
}
```

## 🐛 遇到问题？

### 问题：找不到命令
```bash
# 确保 Node.js 已安装
node --version  # 需要 >= 18.0.0
```

### 问题：权限被拒绝
```bash
# 重新构建项目
npm run build
```

### 问题：API Key 无效
- 检查 API Key 是否正确
- 确认 API Key 没有过期
- 检查 API Key 权限

### 问题：看不到 MCP 连接
- 打开 Cursor 开发者工具：`Cmd/Ctrl + Shift + I`
- 查看 Console 标签中的日志
- 确认构建产物存在：`ls dist/start-mcp.js`

## 📚 详细文档

需要更多信息？查看：

- [CURSOR_SETUP.md](./CURSOR_SETUP.md) - 完整的 Cursor 配置指南
- [MCP_SETUP.md](./MCP_SETUP.md) - 通用 MCP 配置
- [QUICKSTART.md](./QUICKSTART.md) - 5 分钟快速开始

## 🎉 开始使用！

配置完成后，你可以：

- ✅ 让 AI 帮你生成 Element Plus 组件
- ✅ 查询 Element Plus 组件文档
- ✅ 获取组件使用示例
- ✅ 自动生成响应式布局

享受智能开发的便利！🚀
