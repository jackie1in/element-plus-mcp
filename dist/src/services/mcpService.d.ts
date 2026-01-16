import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { SSEServerTransport } from "@modelcontextprotocol/sdk/server/sse.js";
import { ServerResponse } from "http";
/**
 * 初始化MCP服务器
 * 创建一个MCP服务器实例，用于处理模型上下文协议
 */
export declare function createMCPServer(): McpServer;
/**
 * 创建SSE传输层
 * 用于HTTP流式通信
 */
export declare function createSSETransport(endpoint: string, res: ServerResponse): SSEServerTransport;
//# sourceMappingURL=mcpService.d.ts.map