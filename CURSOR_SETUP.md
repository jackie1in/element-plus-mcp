# Cursor 中配置 Element Plus MCP Server

## 📍 Cursor MCP 配置说明

Cursor 支持 MCP (Model Context Protocol)，可以让你在 Cursor 中直接使用 Element Plus 组件生成功能。

## 🔧 配置步骤

### 方法 1: 使用 Cursor 的 MCP 设置界面（推荐）

1. **打开 Cursor 设置**
   - macOS: `Cmd + ,`
   - Windows/Linux: `Ctrl + ,`

2. **找到 MCP 设置**
   - 搜索 "MCP" 或 "Model Context Protocol"
   - 或者导航到 `Features` → `Model Context Protocol`

3. **添加服务器配置**
   
   点击 "Add Server" 或编辑配置，添加以下内容：

   **从 npm 使用（发布后）：**
   ```json
   {
     "element-plus-mcp": {
       "command": "npx",
       "args": ["-y", "element-plus-mcp"],
       "env": {
         "DEEPSEEK_API_KEY": "your_deepseek_api_key_here"
       }
     }
   }
   ```

   **本地开发模式：**
   ```json
   {
     "element-plus-mcp": {
       "command": "node",
       "args": [
         "/Users/linhai/.cursor/worktrees/element-plus-mcp/rxp/dist/start-mcp.js"
       ],
       "env": {
         "DEEPSEEK_API_KEY": "your_deepseek_api_key_here"
       }
     }
   }
   ```

   **从 GitHub 直接运行：**
   ```json
   {
     "element-plus-mcp": {
       "command": "npx",
       "args": ["-y", "github:yourusername/element-plus-mcp"],
       "env": {
         "DEEPSEEK_API_KEY": "your_deepseek_api_key_here"
       }
     }
   }
   ```

4. **保存配置**

5. **重启 Cursor**

### 方法 2: 直接编辑配置文件

Cursor 的 MCP 配置文件位置：

- **macOS/Linux**: `~/.cursor/mcp.json`
- **Windows**: `%APPDATA%\.cursor\mcp.json`

或者在项目根目录创建：`.cursor/mcp.json`

编辑文件内容：

```json
{
  "mcpServers": {
    "element-plus-mcp": {
      "command": "npx",
      "args": ["-y", "element-plus-mcp"],
      "env": {
        "DEEPSEEK_API_KEY": "sk-xxxxxxxxxxxxx"
      }
    }
  }
}
```

## 🔑 API Key 配置

### 支持的 LLM 提供商

你可以配置多个 LLM 提供商的 API Key：

#### 1. DeepSeek（默认，推荐）

```json
{
  "env": {
    "DEEPSEEK_API_KEY": "sk-xxxxx",
    "DEEPSEEK_API_URL": "https://api.deepseek.com/v1/chat/completions"
  }
}
```

**获取 API Key:**
1. 访问 https://www.deepseek.com/
2. 注册账号
3. 在控制台创建 API Key

#### 2. OpenAI

```json
{
  "env": {
    "OPENAI_API_KEY": "sk-xxxxx",
    "OPENAI_API_URL": "https://api.openai.com/v1/chat/completions"
  }
}
```

#### 3. Anthropic Claude

```json
{
  "env": {
    "ANTHROPIC_API_KEY": "sk-ant-xxxxx",
    "ANTHROPIC_API_URL": "https://api.anthropic.com/v1/messages"
  }
}
```

#### 4. Google Gemini

```json
{
  "env": {
    "GEMINI_API_KEY": "xxxxx",
    "GEMINI_API_URL": "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent"
  }
}
```

### 配置多个 API Key

你可以同时配置多个 API Key，MCP 服务器会优先使用 DeepSeek：

```json
{
  "env": {
    "DEEPSEEK_API_KEY": "sk-xxxxx",
    "OPENAI_API_KEY": "sk-xxxxx",
    "ANTHROPIC_API_KEY": "sk-ant-xxxxx"
  }
}
```

## 🚀 本地开发快速配置

如果你正在本地开发这个项目，使用绝对路径：

```json
{
  "mcpServers": {
    "element-plus-mcp-dev": {
      "command": "node",
      "args": [
        "/Users/linhai/.cursor/worktrees/element-plus-mcp/rxp/dist/start-mcp.js"
      ],
      "env": {
        "DEEPSEEK_API_KEY": "your_key_here"
      }
    }
  }
}
```

### 本地开发步骤

1. **构建项目**
   ```bash
   cd /Users/linhai/.cursor/worktrees/element-plus-mcp/rxp
   npm install
   npm run build
   ```

2. **配置 Cursor MCP**（使用上面的配置）

3. **重启 Cursor**

4. **验证**
   - 打开 Cursor 的开发者工具（`Cmd/Ctrl + Shift + I`）
   - 查看 Console 是否有 MCP 连接成功的消息

## ✅ 验证配置

### 1. 检查 MCP 连接状态

在 Cursor 中：
1. 打开命令面板：`Cmd/Ctrl + Shift + P`
2. 搜索 "MCP"
3. 查看 MCP 服务器状态

### 2. 测试功能

在 Cursor 的 AI 对话中尝试：

```
帮我创建一个 Element Plus 的表格组件，要有搜索和分页功能
```

```
生成一个用户登录表单，使用 Element Plus
```

如果配置成功，MCP 服务器会被调用来生成组件。

### 3. 查看日志

如果遇到问题，可以查看日志：

- **Cursor 控制台**：`Cmd/Ctrl + Shift + I` → Console 标签
- **MCP 日志**：Cursor 会在控制台显示 MCP 相关的日志

## 🔒 安全建议

### 不要在代码中硬编码 API Key

❌ **不推荐：** 在配置文件中直接写 API Key
```json
{
  "env": {
    "DEEPSEEK_API_KEY": "sk-12345678"
  }
}
```

✅ **推荐：** 使用环境变量
```json
{
  "env": {
    "DEEPSEEK_API_KEY": "${DEEPSEEK_API_KEY}"
  }
}
```

然后在系统环境变量中设置：

**macOS/Linux:**
```bash
# 添加到 ~/.zshrc 或 ~/.bashrc
export DEEPSEEK_API_KEY="sk-xxxxx"

# 重新加载
source ~/.zshrc
```

**Windows:**
```powershell
# 在 PowerShell 中
[System.Environment]::SetEnvironmentVariable('DEEPSEEK_API_KEY', 'sk-xxxxx', 'User')
```

### 使用 .env 文件（本地开发）

在项目根目录创建 `.env` 文件：

```bash
cp .env.example .env
```

编辑 `.env`：

```env
DEEPSEEK_API_KEY=sk-xxxxx
DEEPSEEK_API_URL=https://api.deepseek.com/v1/chat/completions
```

**注意：** 确保 `.env` 在 `.gitignore` 中，不要提交到 Git！

## 🐛 故障排除

### 问题 1: 找不到命令

**错误信息：**
```
command not found: npx
```

**解决方案：**
确保 Node.js 已安装：
```bash
node --version
npm --version
```

### 问题 2: API Key 无效

**错误信息：**
```
Invalid API key
```

**解决方案：**
1. 检查 API Key 是否正确
2. 确认 API Key 没有过期
3. 检查 API Key 的权限设置

### 问题 3: MCP 连接失败

**解决方案：**

1. **检查构建产物**
   ```bash
   ls -la /Users/linhai/.cursor/worktrees/element-plus-mcp/rxp/dist/start-mcp.js
   ```

2. **手动测试 MCP 服务器**
   ```bash
   node /Users/linhai/.cursor/worktrees/element-plus-mcp/rxp/dist/start-mcp.js
   ```

3. **查看详细错误**
   - 打开 Cursor 开发者工具
   - 查看 Console 中的错误信息

### 问题 4: 权限被拒绝

**错误信息：**
```
Permission denied
```

**解决方案：**
```bash
chmod +x /Users/linhai/.cursor/worktrees/element-plus-mcp/rxp/dist/start-mcp.js
```

或重新构建：
```bash
npm run build
```

## 📱 完整配置示例

### 场景 1: 本地开发（当前推荐）

```json
{
  "mcpServers": {
    "element-plus-mcp": {
      "command": "node",
      "args": [
        "/Users/linhai/.cursor/worktrees/element-plus-mcp/rxp/dist/start-mcp.js"
      ],
      "env": {
        "DEEPSEEK_API_KEY": "your_deepseek_key"
      }
    }
  }
}
```

### 场景 2: 发布后使用

```json
{
  "mcpServers": {
    "element-plus-mcp": {
      "command": "npx",
      "args": ["-y", "element-plus-mcp"],
      "env": {
        "DEEPSEEK_API_KEY": "your_deepseek_key"
      }
    }
  }
}
```

### 场景 3: 使用多个 LLM

```json
{
  "mcpServers": {
    "element-plus-mcp": {
      "command": "npx",
      "args": ["-y", "element-plus-mcp"],
      "env": {
        "DEEPSEEK_API_KEY": "your_deepseek_key",
        "OPENAI_API_KEY": "your_openai_key",
        "ANTHROPIC_API_KEY": "your_anthropic_key"
      }
    }
  }
}
```

## 🎯 使用建议

1. **开发阶段**：使用本地路径配置，方便调试
2. **测试阶段**：使用 GitHub 直接运行方式
3. **生产使用**：发布到 npm 后使用 npx 方式

## 📞 需要帮助？

- 查看 [MCP_SETUP.md](./MCP_SETUP.md) 了解通用配置
- 查看 [QUICKSTART.md](./QUICKSTART.md) 快速开始
- 访问 Cursor 官方文档了解 MCP 支持

## 🎉 完成！

配置完成后，你就可以在 Cursor 中使用 Element Plus MCP Server 了！

试试对 AI 说：
> "帮我创建一个 Element Plus 的数据表格组件"

享受智能组件生成的便利！ 🚀
