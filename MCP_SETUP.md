# Element Plus MCP Server Setup Guide

## 什么是 MCP?

Model Context Protocol (MCP) 是一个开放协议，让 AI 助手（如 Claude、Cursor 等）能够安全地连接到外部数据源和工具。

## 安装方式

### 方式 1: 从 npm 安装（推荐）

如果项目已发布到 npm，可以直接通过 npx 使用：

在你的 MCP 客户端配置文件中（如 Claude Desktop 的 `claude_desktop_config.json` 或 Cursor 的 MCP 配置）：

```json
{
  "mcpServers": {
    "element-plus-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "element-plus-mcp"
      ],
      "env": {
        "DEEPSEEK_API_KEY": "your_api_key_here"
      }
    }
  }
}
```

### 方式 2: 从 GitHub 直接运行

如果你想从 GitHub 仓库直接运行：

```json
{
  "mcpServers": {
    "element-plus-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "github:yourusername/element-plus-mcp"
      ],
      "env": {
        "DEEPSEEK_API_KEY": "your_api_key_here"
      }
    }
  }
}
```

### 方式 3: 本地开发模式

如果你正在本地开发或调试：

```json
{
  "mcpServers": {
    "element-plus-mcp": {
      "command": "node",
      "args": [
        "/absolute/path/to/element-plus-mcp/dist/start-mcp.js"
      ],
      "env": {
        "DEEPSEEK_API_KEY": "your_api_key_here"
      }
    }
  }
}
```

## 环境变量配置

支持以下 LLM 提供商的配置：

### DeepSeek（默认）
```json
"env": {
  "DEEPSEEK_API_KEY": "your_deepseek_api_key",
  "DEEPSEEK_API_URL": "https://api.deepseek.com/v1/chat/completions"
}
```

### OpenAI
```json
"env": {
  "OPENAI_API_KEY": "your_openai_api_key",
  "OPENAI_API_URL": "https://api.openai.com/v1/chat/completions"
}
```

### Anthropic
```json
"env": {
  "ANTHROPIC_API_KEY": "your_anthropic_api_key",
  "ANTHROPIC_API_URL": "https://api.anthropic.com/v1/messages"
}
```

### Google Gemini
```json
"env": {
  "GEMINI_API_KEY": "your_gemini_api_key",
  "GEMINI_API_URL": "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent"
}
```

## 配置文件位置

### Claude Desktop

**macOS**: `~/Library/Application Support/Claude/claude_desktop_config.json`

**Windows**: `%APPDATA%\Claude\claude_desktop_config.json`

### Cursor

在 Cursor 设置中的 MCP 配置部分，或者在项目的 `.cursor/mcp.json` 文件中。

## 使用方法

配置完成后，重启你的 MCP 客户端（如 Claude Desktop 或 Cursor），然后你就可以：

1. **生成 Element Plus 组件**：告诉 AI "帮我创建一个 Element Plus 表格组件"
2. **查询组件信息**：询问 "Element Plus 有哪些表单组件？"
3. **获取组件文档**：请求 "给我看 ElButton 的 API 文档"

## 验证安装

启动 MCP 客户端后，检查日志中是否有以下信息：

```
✅ Element Plus MCP 服务器已启动 (Stdio 模式)
📦 支持的工具: generate-component
📚 支持的资源: element-plus-components
📝 支持的提示: element-plus-component-generation
```

## 故障排除

### 问题 1: 命令未找到

确保已安装 Node.js 18 或更高版本：
```bash
node --version
```

### 问题 2: API Key 错误

检查环境变量中的 API Key 是否正确设置。

### 问题 3: 连接失败

查看 MCP 客户端的日志文件，通常在：
- Claude Desktop: `~/Library/Logs/Claude/mcp*.log`
- Cursor: 检查 Cursor 的开发者工具控制台

## 开发者本地运行

如果你想在本地开发和测试：

```bash
# 克隆仓库
git clone https://github.com/yourusername/element-plus-mcp.git
cd element-plus-mcp

# 安装依赖
npm install

# 构建项目
npm run build

# 运行 MCP 服务器
npm run mcp
```

## 发布到 npm

如果你想发布自己的版本：

1. 更新 `package.json` 中的 `repository` 和其他信息
2. 构建项目：`npm run build`
3. 发布：`npm publish`

## 支持

如果遇到问题，请访问 GitHub Issues 页面报告。
