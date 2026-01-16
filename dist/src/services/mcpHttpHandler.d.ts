import { IncomingMessage, ServerResponse } from "http";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
/**
 * MCP HTTP处理器
 * 用于处理MCP协议的HTTP请求
 */
export declare class MCPHttpHandler {
    private server;
    private headers;
    constructor(server?: McpServer);
    /**
     * 处理HTTP请求
     * @param req HTTP请求
     * @param res HTTP响应
     * @param body 可选的已解析请求体
     */
    handleRequest(req: IncomingMessage, res: ServerResponse, body?: any): Promise<void>;
    /**
     * 处理MCP协议请求
     * 根据JSON-RPC标准处理MCP请求
     */
    private handleMCPRequest;
    /**
     * 处理单个MCP请求
     */
    private processSingleRequest;
    /**
     * 处理 initialize 请求（MCP 握手）
     */
    private handleInitialize;
    /**
     * 处理 tools/list 请求
     */
    private handleListTools;
    /**
     * 处理 prompts/list 请求
     */
    private handleListPrompts;
    /**
     * 处理listResources请求
     */
    private handleListResources;
    /**
     * 处理readResource请求
     */
    private handleReadResource;
    /**
     * 获取组件资源
     */
    private getComponentResource;
    /**
     * 处理callTool请求
     */
    private handleCallTool;
    /**
     * 调用生成组件工具
     */
    private callGenerateComponentTool;
    /**
     * 处理getPrompt请求
     */
    private handleGetPrompt;
    /**
     * 获取Element Plus组件生成提示
     */
    private getElementPlusComponentPrompt;
    /**
     * 设置响应头
     */
    private setHeaders;
}
export declare const mcpHttpHandler: MCPHttpHandler;
//# sourceMappingURL=mcpHttpHandler.d.ts.map