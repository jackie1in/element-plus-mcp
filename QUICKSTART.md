# 快速开始

## 5 分钟上手 Element Plus MCP Server

### 步骤 1: 确保环境

确保已安装 Node.js 18 或更高版本：

```bash
node --version
```

### 步骤 2: 配置 MCP 客户端

根据你使用的客户端选择配置方式：

#### Cursor

1. 打开 Cursor 设置：`Cmd + ,` (macOS) 或 `Ctrl + ,` (Windows/Linux)
2. 搜索 "MCP" 或找到 "Model Context Protocol"
3. 添加以下配置：

**本地开发模式：**
```json
{
  "element-plus-mcp": {
    "command": "node",
    "args": ["/Users/linhai/element-plus-mcp/dist/start-mcp.js"]
  }
}
```

**从 npm 使用（发布后）：**
```json
{
  "element-plus-mcp": {
    "command": "npx",
    "args": ["-y", "element-plus-mcp"]
  }
}
```

#### Claude Desktop

1. 找到配置文件：
   - macOS: `~/Library/Application Support/Claude/claude_desktop_config.json`
   - Windows: `%APPDATA%\Claude\claude_desktop_config.json`

2. 添加以下配置：

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

### 步骤 3: 构建项目（本地开发）

如果你在本地开发：

```bash
cd /Users/linhai/element-plus-mcp
npm install
npm run build
```

### 步骤 4: 重启客户端

重启 Cursor 或 Claude Desktop。

### 步骤 5: 开始使用

在对话中尝试：

```
帮我创建一个带搜索功能的 Element Plus 表格组件
```

```
生成一个用户登录表单，使用 Element Plus 组件
```

```
创建一个响应式的数据卡片组件
```

## 💡 重要说明

**这是一个标准 MCP 服务器，无需配置 API Key！**

MCP 客户端（Cursor、Claude Desktop）会使用它们自己的 LLM 来调用本服务器提供的工具和资源。

## 从 GitHub 直接运行

如果还没发布到 npm，可以直接从 GitHub 运行：

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

## 验证安装

启动后，检查日志中是否出现：

```
✅ Element Plus MCP 服务器已启动 (Stdio 模式)
📦 支持的工具: generate-component
📚 支持的资源: element-plus-components
📝 支持的提示: element-plus-component-generation
```

## 遇到问题？

1. **命令未找到**：确保 Node.js 和 npm 已正确安装
2. **连接失败**：查看客户端日志文件
3. **构建失败**：运行 `npm run build` 确保项目已构建

详细文档：[SIMPLE_MCP_CONFIG.md](./SIMPLE_MCP_CONFIG.md)

## 下一步

- 查看 [完整文档](./README.md)
- 浏览 [配置示例](./mcp-configs/)
- 了解如何 [发布自己的版本](./PUBLISH.md)
